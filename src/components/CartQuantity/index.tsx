import { useContext } from 'react'
import { QuantityInput } from './styles'
import { OrderContext } from '../../contexts/OrderContext'
import { Minus, Plus } from '@phosphor-icons/react'
import { FieldValues, UseFormReset } from 'react-hook-form'

interface CartQuantityProps {
  coffeeId: string
  quantity: number
  reset: UseFormReset<FieldValues>
}

export function CartQuantity({ coffeeId, quantity, reset }: CartQuantityProps) {
  const { addCoffeeToCart, pullOutCoffeeToCart } = useContext(OrderContext)

  function handlePullOutCoffeeToCart(coffeeId: string) {
    pullOutCoffeeToCart(coffeeId, reset)
  }

  function handleAddCoffeeToCart(coffeeId: string) {
    addCoffeeToCart(coffeeId)
  }

  return (
    <QuantityInput>
      <span onClick={() => handlePullOutCoffeeToCart(coffeeId)}>
        <Minus size={14} />
      </span>
      <strong>{quantity}</strong>
      <span onClick={() => handleAddCoffeeToCart(coffeeId)}>
        <Plus size={14} />
      </span>
    </QuantityInput>
  )
}
