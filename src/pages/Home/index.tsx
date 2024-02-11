import {
  Alert,
  Banner,
  BannerContent,
  BannerParagraph,
  ContainerCatalog,
  ContainerMain,
  Subtitle,
  Title,
} from './styles'
import banner from '../../assets/coffee-banner.svg'

import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'
import { Catalog } from '../../components/Catalog'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Home() {
  const { coffees } = useContext(OrderContext)

  return (
    <ContainerMain>
      <Banner>
        <BannerContent>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <BannerParagraph>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </BannerParagraph>
          <div className="details">
            <div className="buy">
              <Alert color={'yellow-dark'}>
                <ShoppingCartSimple size={20} weight="fill" />
              </Alert>
              <p>Compra simples e segura</p>
            </div>
            <div className="buy">
              <Alert color={'base-subtitle'}>
                <Package size={20} weight="fill" />
              </Alert>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="buy">
              <Alert color={'yellow'}>
                <Timer size={20} weight="fill" />
              </Alert>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="buy">
              <Alert color={'purple'}>
                <Coffee size={20} weight="fill" />
              </Alert>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </BannerContent>
        <img
          src={banner}
          alt="Imagem de um copo de café preto e branco cercado de grãos de café torrados e moídos"
        />
      </Banner>
      <Subtitle>Nossos cafés</Subtitle>
      <ContainerCatalog>
        {coffees.map((coffee) => {
          return <Catalog key={coffee.id} coffee={coffee} />
        })}
      </ContainerCatalog>
    </ContainerMain>
  )
}
