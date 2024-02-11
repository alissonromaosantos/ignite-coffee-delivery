import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  height: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  margin-bottom: 9.5rem;

  nav ul {
    list-style: none;
    display: flex;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2rem 0;
    gap: 1.2rem;
  }
`

export const LocationOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  padding: 0.8rem;
  border-radius: 4px;

  @media (max-width: 480px) {
    width: 15rem;
  }
`

export const CartOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.8rem;
  border-radius: 4px;
  position: relative;

  p {
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    font-size: 1.4rem;
    font-weight: 700;
    top: -1.6rem;
    right: -0.8rem;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
