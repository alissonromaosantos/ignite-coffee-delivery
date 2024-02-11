import styled from 'styled-components'

export const QuantityInput = styled.div`
  width: 7rem;
  height: 3.2rem;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;

  span {
    font-size: 2rem;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  strong {
    font-weight: 400;
  }
`
