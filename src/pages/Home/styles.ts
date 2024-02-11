import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  padding: 0 8rem 8rem;

  @media (max-width: 480px) {
    padding: 0 3rem 3rem;
  }
`

export const Banner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1114px) {
    flex-direction: column;
  }

  img {
    @media (min-width: 320px) and (max-width: 1114px) {
      display: none;
    }
  }
`

export const BannerContent = styled.div`
  .details {
    max-width: 58.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.8rem;
    margin-top: 6rem;

    .buy {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;

      p {
        font-size: 1.6rem;
        color: ${(props) => props.theme['base-text']};

        @media (max-width: 480px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`

export const Title = styled.h1`
  max-width: 58.8rem;
  font-size: 4.8rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
  line-height: 130%;

  @media (min-width: 768px) and (max-width: 1114px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 3.2rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
  line-height: 130%;
  margin-top: 14rem;

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`

export const BannerParagraph = styled.p`
  max-width: 52.5rem;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;
  margin-top: 2.8rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export const Alert = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: ${(props) => props.theme[props.color!]};
  color: ${(props) => props.theme.white};

  & > svg {
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`

export const ContainerCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.2rem;
  gap: 3.2rem;

  @media (max-width: 480px) {
    justify-content: center;
  }
`
