import styled from 'styled-components'

export const Card = styled.div`
  max-width: 25.6rem;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 4px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -3.6rem;
  }
`

export const CardCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  p {
    text-align: center;
    text-transform: uppercase;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 1rem;
    font-weight: 700;
    border-radius: 999px;
    padding: 0.4rem 0.8rem;
    line-height: 130%;
  }
`

export const CardContent = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 3.6rem;

  h4 {
    text-align: center;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    line-height: 130%;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-top: 0.8rem;
  }
`

export const CardAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    margin-right: 1.6rem;

    strong {
      font-size: 2.4rem;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

export const CartButton = styled.button`
  width: 4rem;
  height: 3.2rem;
  background-color: ${(props) => props.theme['purple-dark']};
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.white};
  padding-top: 0.4rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
