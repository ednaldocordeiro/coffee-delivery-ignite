import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: #fff;
    --webkit-font-smoothing: antialiased;
  }
  
  body, input, button, text-area {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-text"]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
  }

  input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

  @media (max-width: 550px) {
    html {
      font-size: 85.7%
    }
  }
`