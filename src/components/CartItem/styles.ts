import styled from 'styled-components'

export const CartItemContainer = styled.div`
  max-width: 36.8rem;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 2.8rem;

  @media (max-width: 480px) {
    max-width: 100%;
    gap: 1.2rem;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }

  &:not(:first-child) {
    padding-top: 2.8rem;
  }

  strong {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.6rem;
  }
`

export const CoffeeDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-start;
  }

  img {
    width: 6.4rem;

    @media (max-width: 480px) {
      width: 4.4rem;
    }
  }

  .infos {
    h5 {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    .controls {
      display: flex;
      margin-top: 1.2rem;
      gap: 0.8rem;
    }
  }
`

export const RemoveButton = styled.button`
  width: 9.1rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 1.2rem;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
