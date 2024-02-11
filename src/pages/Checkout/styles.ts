import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 0 8rem 8rem;

  @media (min-width: 320px) and (max-width: 1114px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 0 3rem 3rem;
  }
`

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const AddressContainer = styled.div`
  max-width: 64rem;
  width: 100%;
  padding: 3.6rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 4px;
  margin-top: 1.8rem;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 2rem;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const InputFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr 6rem;
  grid-template-rows: repeat(4, 4.4rem);
  grid-template-areas:
    'zipcode - -'
    'street street street'
    'number complement complement'
    'neighborhood city state';
  gap: 1.6rem;
  margin: 3.2rem 0;

  @media (max-width: 480px) {
    margin: 3.2rem 0 0;
    grid-template-columns: 100%;
    grid-template-rows: repeat(7, 4.4rem);
    grid-template-areas:
      'zipcode'
      'street'
      'number'
      'complement'
      'neighborhood'
      'city'
      'state';
  }

  input {
    padding: 1.6rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    color: ${(props) => props.theme['base-text']};
    outline-color: ${(props) => props.theme['yellow-dark']};
    position: relative;
    color: ${(props) => props.theme['base-subtitle']};

    &::placeholder {
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-label']};
    }
  }

  .error {
    outline-color: red;
  }

  .zipcode {
    grid-area: zipcode;
  }

  .street {
    grid-area: street;
  }

  .number {
    grid-area: number;
  }

  .complement {
    grid-area: complement;
  }
  .neighborhood {
    grid-area: neighborhood;
  }

  .city {
    grid-area: city;
  }

  .state {
    grid-area: state;
  }
`

export const PaymentContainer = styled.div`
  max-width: 64rem;
  width: 100%;
  padding: 3.6rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 4px;
  position: relative;

  @media (max-width: 480px) {
    padding: 2rem;
  }

  p.payment-error {
    font-size: 1.4rem;
    color: red;
    text-align: center;
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 3.2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  .payment-border {
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const PaymentButton = styled.button`
  max-width: 18rem;
  width: 100%;
  height: 5.1rem;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 480px) {
    max-width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin-left: 1.2rem;
  }

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CartContainer = styled.div`
  max-width: 44.8rem;
  width: 100%;
`

export const Cart = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 3rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 4px;
  padding: 4rem;

  @media (max-width: 480px) {
    padding: 4rem 2rem;
  }

  .summary {
    margin: 2.8rem 0;

    .total-items,
    .shipping,
    .total-order {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .total-items,
    .shipping {
      margin-bottom: 1.2rem;
    }
  }

  .pointer {
    cursor: pointer;
  }

  .not-allowed {
    cursor: not-allowed;
  }
`

export const ParagraphCart = styled.h5`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`

export const SummaryTitle = styled.small`
  font-size: 1.4rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const SummaryPrice = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const SummaryTotal = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 4.6rem;
  background-color: ${(props) => props.theme.yellow};
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-size: 1.4rem;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  transition: all 0.2s;

  @media (max-width: 480px) {
    height: 3.6rem;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const OrderData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const TitleOrder = styled.h4`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`
