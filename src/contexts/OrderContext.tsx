import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { coffeesData } from '../coffees'
import { FieldValues, UseFormReset } from 'react-hook-form'

export interface Coffee {
  id: string
  img: string
  categories: string[]
  name: string
  description: string
  quantity: number
  price: number
}

export interface Cart {
  id: string
  img: string
  name: string
  quantity: number
  price: number
}

interface Address {
  zipcode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

type PaymentType = 'Credit Card' | 'Debit Card' | 'Cash'

export interface Order {
  cart: Cart[]
  address: Address
  paymentType: PaymentType | null
  subTotal: number
  shipping: number
  total: number
}

interface OrderContextType {
  coffees: Coffee[]
  setCoffees: Dispatch<SetStateAction<Coffee[]>>
  addCoffeeToCart: (id: string) => void
  pullOutCoffeeToCart: (id: string, reset: UseFormReset<FieldValues>) => void
  cart: Cart[]
  setCart: Dispatch<SetStateAction<Cart[]>>
  total: number
  shipping: number
  removeItemToCart: (id: string) => void
  paymentType: PaymentType | null
  setPaymentType: Dispatch<SetStateAction<PaymentType | null>>
  order: Order | null
  setOrder: Dispatch<SetStateAction<Order | null>>
  nothingPaymentType: boolean
  setNothingPaymentType: Dispatch<SetStateAction<boolean>>
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  const [cart, setCart] = useState<Cart[]>([])

  const [paymentType, setPaymentType] = useState<PaymentType | null>(null)

  const [order, setOrder] = useState<Order | null>(null)

  const [nothingPaymentType, setNothingPaymentType] = useState(false)

  useEffect(() => {
    const coffeesDataStorage = JSON.parse(
      localStorage.getItem('@coffee-delivery:coffees-state-1.0.0') ?? '[]',
    )

    if (coffeesDataStorage.length < 1) {
      setCoffees(coffeesData)
    } else {
      setCoffees(coffeesDataStorage)
    }
  }, [])

  useEffect(() => {
    const cartStorage = JSON.parse(
      localStorage.getItem('@coffee-delivery:cart-state-1.0.0') ?? '[]',
    )

    setCart(cartStorage)
  }, [])

  useEffect(() => {
    const orderStorage = JSON.parse(
      localStorage.getItem('@coffee-delivery:coffee-order-1.0.0') ?? '{}',
    )

    setOrder(orderStorage)
  }, [])

  const total: number = cart.reduce((acc, curr) => {
    const itemTotal = curr.price * curr.quantity
    return acc + itemTotal
  }, 0)

  const shipping = 3.5

  function pullOutCoffeeToCart(
    coffeeId: string,
    reset: UseFormReset<FieldValues>,
  ) {
    const localCoffees = [...coffees]

    const coffeesModified = localCoffees.map((coffee) => {
      if (coffee.id === coffeeId && coffee.quantity >= 1) {
        coffee.quantity--
      }

      return coffee
    })

    setCoffees(coffeesModified)
    localStorage.setItem(
      '@coffee-delivery:coffees-state-1.0.0',
      JSON.stringify(coffeesModified),
    )

    const localCart = [...cart]

    const cartModified = localCart.map((item) => {
      if (item.id === coffeeId && item.quantity >= 1) {
        item.quantity--
      }

      return item
    })

    const itemsDifferentThanZero = cartModified.filter(
      (item) => item.quantity !== 0,
    )

    setCart(itemsDifferentThanZero)

    if (itemsDifferentThanZero.length < 1) {
      setPaymentType(null)
      reset()
      setNothingPaymentType(false)
    }

    localStorage.setItem(
      '@coffee-delivery:cart-state-1.0.0',
      JSON.stringify(itemsDifferentThanZero),
    )
  }

  function addCoffeeToCart(coffeeId: string) {
    const localCoffees = [...coffees]

    const coffeesModified = localCoffees.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.quantity++
      }

      return coffee
    })

    setCoffees(coffeesModified)
    localStorage.setItem(
      '@coffee-delivery:coffees-state-1.0.0',
      JSON.stringify(coffeesModified),
    )

    const localCart = [...cart]

    const itemFound = localCart.find((item) => item.id === coffeeId)

    if (!itemFound) {
      const coffeeFound = localCoffees.find((coffee) => coffee.id === coffeeId)

      const { id, img, name, price } = coffeeFound!

      setCart([...cart, { id, img, name, price, quantity: 1 }])
      localStorage.setItem(
        '@coffee-delivery:cart-state-1.0.0',
        JSON.stringify([...cart, { id, img, name, price, quantity: 1 }]),
      )
    } else {
      const cartModified = localCart.map((item) => {
        if (item.id === coffeeId) {
          item.quantity++
        }

        return item
      })

      setCart(cartModified)
      localStorage.setItem(
        '@coffee-delivery:cart-state-1.0.0',
        JSON.stringify(cartModified),
      )
    }
  }

  function removeItemToCart(itemId: string) {
    const localCart = [...cart]

    const itemsUpdated = localCart.filter((item) => item.id !== itemId)

    setCart(itemsUpdated)

    if (itemsUpdated.length < 1) {
      setPaymentType(null)
      setNothingPaymentType(false)
    }

    localStorage.setItem(
      '@coffee-delivery:cart-state-1.0.0',
      JSON.stringify(itemsUpdated),
    )

    const localCoffees = [...coffees]

    const coffeesUpdated = localCoffees.map((coffee) => {
      if (coffee.id === itemId) {
        coffee.quantity = 0
      }

      return coffee
    })

    setCoffees(coffeesUpdated)
    localStorage.setItem(
      '@coffee-delivery:coffees-state-1.0.0',
      JSON.stringify(coffeesUpdated),
    )
  }

  return (
    <OrderContext.Provider
      value={{
        coffees,
        setCoffees,
        addCoffeeToCart,
        pullOutCoffeeToCart,
        cart,
        setCart,
        total,
        shipping,
        removeItemToCart,
        paymentType,
        setPaymentType,
        order,
        setOrder,
        nothingPaymentType,
        setNothingPaymentType,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
