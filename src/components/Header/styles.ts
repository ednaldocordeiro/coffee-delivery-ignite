import styled from "styled-components"

export const HeaderContainer = styled.header`

  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.background};
  z-index: 1;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;


    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 0;

    @media (max-width: 1185px) {
      padding: 2rem 2rem;
    }
  }

  nav {
    display: flex;
    gap: .75rem;

    .location {
      height: 38px;
      background-color: ${(props) => props.theme["purple-light"]};
      padding: 0 .5rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      gap: .3rem;
      color: ${(props) => props.theme["purple-dark"]};
    }

    .cart {
      position: relative;
    }
  }
`

export const Bullet = styled.div`
  background: ${(props) => props.theme["yellow-dark"]};
  height: 20px;
  width: 20px;
  padding: .3rem;
  border-radius: 50%;

  color: ${(props) => props.theme.white};
  text-align: center;
  font-size: 10px;
  font-weight: bold;

  position: absolute;
  right: -8px;
  top: -8.5px;
`