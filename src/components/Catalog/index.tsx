import { ShoppingCartSimple } from '@phosphor-icons/react'
import {
  BuyContainer,
  Card,
  CardAmount,
  CardCategories,
  CardContent,
  CardHeader,
  CartButton,
} from './styles'
import { Coffee } from '../../contexts/OrderContext'
import { NavLink } from 'react-router-dom'
import { CartQuantity } from '../CartQuantity'

interface CatalogProps {
  coffee: Coffee
}

export function Catalog({ coffee }: CatalogProps) {
  return (
    <Card>
      <CardHeader>
        <img src={coffee.img} alt={coffee.name} />
        <CardCategories>
          {coffee.categories.map((category, index) => {
            return <p key={index}>{category}</p>
          })}
        </CardCategories>
      </CardHeader>
      <CardContent>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
      </CardContent>
      <CardAmount>
        <p>
          {coffee.price
            .toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })
            .slice(0, 2)}
          <strong>
            {coffee.price
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })
              .slice(2)}
          </strong>
        </p>
        <BuyContainer>
          <CartQuantity coffeeId={coffee.id} quantity={coffee.quantity} />
          <NavLink to="/checkout">
            <CartButton>
              <ShoppingCartSimple size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </BuyContainer>
      </CardAmount>
    </Card>
  )
}
