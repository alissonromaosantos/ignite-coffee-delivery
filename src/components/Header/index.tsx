import { CartOption, ContainerHeader, LocationOption } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { cart } = useContext(OrderContext)

  return (
    <ContainerHeader>
      <NavLink to="/">
        <img src={logo} alt="Coffee Delivery Logo" />
      </NavLink>
      <nav>
        <ul>
          <LocationOption>
            <MapPin size={22} weight="fill" />
            <p>Salvador, BA</p>
          </LocationOption>
          <NavLink to="/checkout">
            <CartOption>
              <ShoppingCartSimple size={22} weight="fill" />
              {cart.length >= 1 && <p>{cart.length}</p>}
            </CartOption>
          </NavLink>
        </ul>
      </nav>
    </ContainerHeader>
  )
}
