import styled from "styled-components"

export const CartContainer = styled.main`
  .container {
    display: grid;
    gap: 2rem;

    max-width: 1120px;
    margin: 0 auto;

    grid-template-columns: 1.5fr 1fr;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`

const BaseContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  padding: 2.5rem;

  header {
    display: flex;
    gap: .5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    h4 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
    }

    p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: .9rem;
      font-weight: 400;
      line-height: 1.3;
    }
  }
`

export const AdressContainer = styled(BaseContainer)`
  header {
    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`

export const AdressFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 1rem;

    flex: 1;

    input#cidade {
      width: 17.25rem;
    } 

    input#uf {
      width: 3.75rem;
      flex: 1;
      text-transform: uppercase;
    }
  }

  .complemento {
    position: relative;

    span {
      position: absolute;
      top: calc(100%/2 - 10px);
      right: 16px;
      font-style: italic;
      color: ${(props) => props.theme["base-label"]};
    }
  }

  label {
    position: absolute;
    top: -100px;
    left: -100px;
    opacity: 0;
  }

  input {
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    border-radius: 6px;

    &#rua {
      width: 100%;
    } 

    &#complemento {
      flex: 1;
    } 

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`

export const PaymentContainer = styled(BaseContainer)`
  header {
    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`

export const PaymentFormContainer = styled.div`
  display: flex;
  gap: 1rem;

  .paymentType {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    gap: 1rem;

    background-color: ${(props) => props.theme["base-button"]};
    padding: 1rem;
    border-radius: 6px;

    transition: background-color .2s;

    border: 1px solid transparent;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }

    label {
      font-size: .75rem;
      text-transform: uppercase;
    }

    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }

  .selected {
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`

export const SelectedCoffesContainer = styled.div`
  width: 100%;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.4rem;

  .prices {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 1.5rem;

    & > div {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 1.25rem;
      }
    }
  }

  & > button {
    width: 100%;
    padding: 0.75rem;
    border: 0;
    background-color: ${(props) => props.theme.yellow};

    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`
