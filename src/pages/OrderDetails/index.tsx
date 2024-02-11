import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Alert } from '../Home/styles'
import {
  DeliveryContainer,
  DeliveryInfoContainer,
  DeliveryManContainer,
  DeliveryManImg,
  InfoContainer,
  InfoDescription,
  InfoParagraph,
  OrderDetailsContainer,
  OrderInfosContainer,
  SubtitleInfo,
  TitleInfo,
} from './styles'
import deliveryman from '../../assets/deliveryman.svg'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function OrderDetails() {
  const { order } = useContext(OrderContext)

  return (
    <OrderDetailsContainer>
      <OrderInfosContainer>
        <TitleInfo>Uhu! Pedido confirmado</TitleInfo>
        <SubtitleInfo>
          Agora é só aguardar que logo o café chegará até você
        </SubtitleInfo>
        <DeliveryContainer>
          <DeliveryInfoContainer>
            <InfoContainer>
              <Alert color={'purple'}>
                <MapPin size={20} weight="fill" />
              </Alert>
              <InfoDescription>
                <InfoParagraph>
                  Entrega em{' '}
                  <strong>
                    {order?.address.street}, {order?.address.number}
                  </strong>
                </InfoParagraph>
                <InfoParagraph>
                  {order?.address.neighborhood} - {order?.address.city},{' '}
                  {order?.address.state?.toLocaleUpperCase()}
                </InfoParagraph>
              </InfoDescription>
            </InfoContainer>
            <InfoContainer>
              <Alert color={'yellow'}>
                <Timer size={20} weight="fill" />
              </Alert>
              <InfoDescription>
                <InfoParagraph>Previsão de entrega</InfoParagraph>
                <InfoParagraph>
                  <strong>20 min - 30 min</strong>
                </InfoParagraph>
              </InfoDescription>
            </InfoContainer>
            <InfoContainer>
              <Alert color={'yellow-dark'}>
                <CurrencyDollar size={20} />
              </Alert>
              <InfoDescription>
                <InfoParagraph>Pagamento na entrega</InfoParagraph>
                <InfoParagraph>
                  <strong>
                    {order?.paymentType === 'Credit Card'
                      ? 'Cartão de Crédito'
                      : order?.paymentType === 'Debit Card'
                        ? 'Cartão de Débito'
                        : 'Dinheiro'}
                  </strong>
                </InfoParagraph>
              </InfoDescription>
            </InfoContainer>
          </DeliveryInfoContainer>
        </DeliveryContainer>
      </OrderInfosContainer>
      <DeliveryManContainer>
        <DeliveryManImg
          src={deliveryman}
          alt="Imagem de um entregador indo entregar café numa moto para um cliente"
        />
      </DeliveryManContainer>
    </OrderDetailsContainer>
  )
}
