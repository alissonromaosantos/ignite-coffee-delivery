import { CartItemContainer, CoffeeDetails, RemoveButton } from './styles'
import { Trash } from '@phosphor-icons/react'
import { CartQuantity } from '../CartQuantity'
import { Cart, OrderContext } from '../../contexts/OrderContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

interface CartItemProps {
  item: Cart
}

export function CartItem({ item }: CartItemProps) {
  const { removeItemToCart, cart } = useContext(OrderContext)

  const { reset } = useFormContext()

  function handleRemoveItemToCart(id: string) {
    removeItemToCart(id)
  }
  return (
    <CartItemContainer>
      <CoffeeDetails>
        <img src={item.img} alt={item.name} />
        <div className="infos">
          <h5>{item.name}</h5>
          <div className="controls">
            <CartQuantity
              coffeeId={item.id}
              quantity={item.quantity}
              reset={reset}
            />
            <RemoveButton
              onClick={() => {
                handleRemoveItemToCart(item.id)
                if (cart.length <= 1) {
                  reset()
                }
              }}
            >
              <Trash size={24} color="#8047F8" />
              Remover
            </RemoveButton>
          </div>
        </div>
      </CoffeeDetails>
      <strong>
        {(item.price * item.quantity).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}
      </strong>
    </CartItemContainer>
  )
}
