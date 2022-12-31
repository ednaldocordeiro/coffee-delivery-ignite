import styled from "styled-components"

export const AmountInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 4.5rem;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme["base-button"]};

  button {
    background: transparent;
    border: 0;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple}
    }

    &:disabled {
      filter: opacity(.5);
    }

  }

  p {
    border: 0;
    width: 20px;
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;
  }
`
