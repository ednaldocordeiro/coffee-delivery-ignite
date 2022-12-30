import styled from "styled-components"

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .informations {

    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 64px;
    }

    h4 {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.3;
    }

    .buttons {
      display: flex;
      gap: 1rem;
      margin-top: .5rem;
    }

  }

  & > span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: bold;

    display: flex;
    align-items: baseline;
  }

`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: .5rem;
  gap: .5rem;

  background-color: ${(props) => props.theme["base-button"]};
  border: 0;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  span {
    font-size: .75rem;
    text-transform: uppercase;
  }
`
