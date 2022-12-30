import styled from "styled-components"

import Background from '../../assets/Background.svg'

export const HomeContainer = styled.main`
  padding-bottom: 3rem;
`

export const PresentationContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 56px;

  padding: 5rem 0;

  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1185px) {
    padding: 0 3rem;
  }

  .container {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media (max-width: 835px) {
      flex-direction: column-reverse;
    }
  }

  .information {
    
    h1 {
      font-size: 3rem;
      font-weight: bold;
      line-height: 1.3;
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem
    }

    .attributes {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;

      margin-top: 66px;
    }

    .attribute {
      display: flex;
      align-items: center;
    }

    img {
      @media (max-width: 560px) {
        width: 100%;
      }
    }
  }
`

interface IconProps {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple';
}

export const Icon = styled.span<IconProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.color]};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 12px;

  color: ${(props) => props.theme.white}
`

export const MenuContainer = styled.section`
  max-width: 1120px;
  margin: 2rem auto 0;

  @media (max-width: 1185px) {
    padding: 0 3rem;
  }

  & > .container {
    margin-top: 3.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 1185px) {
      justify-content: space-between;
    }

    @media (max-width: 665px) {
      justify-content: center;
    }
  }
`
