import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  FormContainer,
  FormData,
  AddressContainer,
  PaymentContainer,
  CartContainer,
  InputFieldsContainer,
  ContainerTitle,
  Texts,
  ContainerButtons,
  PaymentButton,
  TitleOrder,
  Cart,
  ParagraphCart,
  SummaryTitle,
  SummaryPrice,
  SummaryTotal,
  ConfirmOrderButton,
} from './styles'
import { CartItem } from '../../components/CartItem'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { coffeesData } from '../../coffees'
import { useNavigate } from 'react-router-dom'

const addressFormValidationSchema = zod.object({
  zipcode: zod
    .string({
      required_error: 'O campo CEP é obrigatório',
      invalid_type_error: 'Os caracteres inseridos são inválidos',
    })
    .length(8, { message: 'O campo CEP deve ter 8 caracteres' }),
  street: zod
    .string({
      required_error: 'O campo Rua é obrigatório',
      invalid_type_error: 'Os caracteres inseridos são inválidos',
    })
    .min(5, { message: 'O campo Rua deve ter no mínimo 5 caracteres.' })
    .max(100, { message: 'O campo Rua deve ter no máximo 100 caracteres.' }),
  number: zod
    .string({
      required_error: 'O campo Número é obrigatório',
      invalid_type_error: 'Os caracteres inseridos são inválidos',
    })
    .min(1, { message: 'O campo Número deve ter no mínimo 1 carácter' })
    .max(7, { message: 'O campo Número deve ter no máximo 7 caracteres' }),
  complement: zod.string({
    invalid_type_error: 'Os caracteres inseridos são inválidos',
  }),
  neighborhood: zod
    .string({
      required_error: 'O campo Bairro é obrigatório',
      invalid_type_error: 'Os caracteres inseridos são inválidos',
    })
    .min(5, { message: 'O campo Bairro deve ter no mínimo 5 caracteres' })
    .max(100, { message: 'O campo Bairro deve ter no máximo 100 caracteres' }),
  city: zod
    .string({
      required_error: 'O campo Cidade é obrigatório',
      invalid_type_error: 'Os caracteres inseridos são inválidos',
    })
    .min(5, { message: 'O campo Cidade deve ter no mínimo 5 caracteres' })
    .max(100, { message: 'O campo Cidade deve ter no máximo 100 caracteres' }),
  state: zod
    .string({
      required_error: 'O campo UF é obrigatório',
      invalid_type_error: 'Os caracteres inseridos são inválidos',
    })
    .length(2, { message: 'O campo UF deve ter no máximo 2 caracteres' }),
})

type addressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const {
    setCoffees,
    cart,
    setCart,
    total,
    shipping,
    paymentType,
    setPaymentType,
    setOrder,
    nothingPaymentType,
    setNothingPaymentType,
  } = useContext(OrderContext)

  const redirect = useNavigate()

  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zipcode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = addressForm

  function handleConfirmOrder(data: addressFormData) {
    setNothingPaymentType(false)

    if (!paymentType) {
      setNothingPaymentType(true)
      return
    }

    const newOrder = {
      cart,
      address: {
        zipcode: data.zipcode,
        street: data.street,
        number: data.number,
        complement: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
      },
      paymentType,
      subTotal: total,
      shipping,
      total: total + shipping,
    }

    setOrder(newOrder)
    localStorage.setItem(
      '@coffee-delivery:coffee-order-1.0.0',
      JSON.stringify(newOrder),
    )

    setCoffees(coffeesData)
    localStorage.setItem(
      '@coffee-delivery:coffees-state-1.0.0',
      JSON.stringify(coffeesData),
    )
    setCart([])
    localStorage.removeItem('@coffee-delivery:cart-state-1.0.0')
    reset()
    setPaymentType(null)

    redirect('/order-details')
  }

  return (
    <FormProvider {...addressForm}>
      <FormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <FormData>
          <TitleOrder>Complete seu pedido</TitleOrder>
          <AddressContainer>
            <ContainerTitle>
              <MapPinLine size={24} color="#c47f17" />
              <Texts>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </Texts>
            </ContainerTitle>
            <InputFieldsContainer>
              <input
                className={
                  errors.zipcode?.message ? 'zipcode error' : 'zipcode'
                }
                type="text"
                placeholder="CEP"
                {...register('zipcode')}
                disabled={cart.length < 1}
              />
              <input
                className={errors.street?.message ? 'street error' : 'street'}
                type="text"
                placeholder="Rua"
                {...register('street')}
                disabled={cart.length < 1}
                minLength={5}
                maxLength={250}
              />
              <input
                className={errors.number?.message ? 'number error' : 'number'}
                type="text"
                placeholder="Número"
                {...register('number')}
                disabled={cart.length < 1}
              />
              <input
                className={
                  errors.complement?.message ? 'complement error' : 'complement'
                }
                type="text"
                placeholder="Complemento"
                {...register('complement')}
                disabled={cart.length < 1}
              />
              <input
                className={
                  errors.neighborhood?.message
                    ? 'neighborhood error'
                    : 'neighborhood'
                }
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
                disabled={cart.length < 1}
              />
              <input
                className={errors.city?.message ? 'city error' : 'city'}
                type="text"
                placeholder="Cidade"
                {...register('city')}
                disabled={cart.length < 1}
              />
              <input
                className={errors.state?.message ? 'state error' : 'state'}
                type="text"
                placeholder="UF"
                {...register('state')}
                disabled={cart.length < 1}
              />
            </InputFieldsContainer>
          </AddressContainer>
          <PaymentContainer>
            <ContainerTitle>
              <CurrencyDollar size={24} color="#8047F8" />
              <Texts>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </Texts>
            </ContainerTitle>
            <ContainerButtons>
              <PaymentButton
                type="button"
                className={
                  paymentType === 'Credit Card' ? 'payment-border' : ''
                }
                onClick={() => setPaymentType('Credit Card')}
                disabled={cart.length < 1}
              >
                <CreditCard size={16} color="#8047F8" />
                <p>Cartão de Crédito</p>
              </PaymentButton>
              <PaymentButton
                type="button"
                className={paymentType === 'Debit Card' ? 'payment-border' : ''}
                onClick={() => setPaymentType('Debit Card')}
                disabled={cart.length < 1}
              >
                <Bank size={16} color="#8047F8" />
                <p>Cartão de Débito</p>
              </PaymentButton>
              <PaymentButton
                type="button"
                className={paymentType === 'Cash' ? 'payment-border' : ''}
                onClick={() => setPaymentType('Cash')}
                disabled={cart.length < 1}
              >
                <Money size={16} color="#8047F8" />
                <p>Dinheiro</p>
              </PaymentButton>
            </ContainerButtons>
            {nothingPaymentType && (
              <p className="payment-error">
                Você precisa escolher uma forma de pagamento
              </p>
            )}
          </PaymentContainer>
        </FormData>
        <CartContainer>
          <TitleOrder>Cafés selecionados</TitleOrder>
          <Cart>
            {cart.length >= 1 ? (
              cart.map((item) => {
                return <CartItem key={item.id} item={item} />
              })
            ) : (
              <ParagraphCart>Não há itens no carrinho</ParagraphCart>
            )}
            <div className="summary">
              <div className="total-items">
                <SummaryTitle>Total de itens</SummaryTitle>
                <SummaryPrice>
                  {total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </SummaryPrice>
              </div>
              <div className="shipping">
                <SummaryTitle>Entrega</SummaryTitle>
                <SummaryPrice>
                  {total > 0
                    ? shipping.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                      })
                    : (0).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                      })}
                </SummaryPrice>
              </div>
              <div className="total-order">
                <SummaryTotal>Total</SummaryTotal>
                <SummaryTotal>
                  {total > 0
                    ? (total + shipping).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                    : total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                </SummaryTotal>
              </div>
            </div>
            <ConfirmOrderButton
              className={cart.length >= 1 ? 'pointer' : 'not-allowed'}
              disabled={cart.length < 1}
            >
              Confirmar Pedido
            </ConfirmOrderButton>
          </Cart>
        </CartContainer>
      </FormContainer>
    </FormProvider>
  )
}
