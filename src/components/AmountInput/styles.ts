import styled from "styled-components"

export const AmountInputContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 4.5rem;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme["base-button"]};

  button {
    background: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme.purple}
    }
  }

  input {
    background-color: transparent;
    border: 0;
    width: 20px;
    text-align: center;
    font-size: 16px;
    ${(props) => props.theme["base-title"]}
  }
`
