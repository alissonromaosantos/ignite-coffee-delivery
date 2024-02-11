import styled from 'styled-components'

export const OrderDetailsContainer = styled.div`
  width: 100%;
  padding: 0 8rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 1114px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 0 3rem 3rem;
  }
`

export const OrderInfosContainer = styled.div`
  max-width: 52.6rem;
  width: 100%;
`
export const TitleInfo = styled.h1`
  font-size: 3.2rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 800;

  @media (max-width: 393px) {
    font-size: 2rem;
  }
`

export const SubtitleInfo = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 400;

  @media (max-width: 393px) {
    font-size: 1.6rem;
  }
`

export const DeliveryContainer = styled.div`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 4px;
  padding: 1px;
  position: relative;
  margin-top: 3.2rem;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`

export const DeliveryInfoContainer = styled.div`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 4px;
  background-color: ${(props) => props.theme['white-secondary']};
  padding: 3.6rem;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  &:not(:first-child) {
    margin-top: 3.2rem;
  }
`

export const InfoDescription = styled.div`
  width: 100%;
`

export const InfoParagraph = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme['base-text']};
`

export const DeliveryManContainer = styled.div`
  max-width: 49.2rem;
  width: 100%;
  height: 35.9rem;
  display: flex;
  align-items: flex-end;
`

export const DeliveryManImg = styled.img`
  width: 100%;

  @media (min-width: 320px) and (max-width: 1114px) {
    display: none;
  }
`
