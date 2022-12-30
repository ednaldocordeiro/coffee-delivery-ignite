import styled from "styled-components"

export const SuccessContainer = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1185px) {
    padding: 0 3rem;
  }

  @media (max-width: 1080px) {
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
    line-height: 1.3;
  }

  .subtitle {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .border {
    margin-top: 2rem;
    padding: 1px;
    border-radius: 6px 26px;
    background: linear-gradient(130deg, 
      ${(props) => props.theme["yellow"]}, 
      ${(props) => props.theme["purple"]}
    );

    
    .details {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.background};
      border-radius: 6px 26px;
      padding: 2.5rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      & > div {
        display: flex;
        gap: .75rem
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
