import styled from "styled-components"

export const CoffeeCardContainer = styled.div`
  height: auto;
  max-width: 256px;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  img {
    margin-top: -2.5rem;
  }

  .tags {
    display: flex;
    gap: .5rem;

    margin: 1rem 0;

    .tag {
      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
      border-radius: 10px;
      padding: .25rem .5rem;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    text-align: center;
  }

  & > .container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-top: 2rem;

    & > span {
      font-size: 14px;
      display: flex;
      align-items: baseline;

      .price {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: bold;

        margin-left: .5rem;
      }
    }

    .buttons {
      display: flex;
      gap: .5rem;
    }
  }
`
