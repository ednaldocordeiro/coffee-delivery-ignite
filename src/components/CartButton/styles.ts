import styled from "styled-components"

import { NavLink } from "react-router-dom"

interface CartButtonProps {
  color:  'yellow-light' | 'purple-dark'
}

export const CartButtonContainer = styled(NavLink)<CartButtonProps>`
  height: 38px;
  background-color: ${(props) => props.theme[props.color]};
  padding: 0 .5rem;
  display: flex;
  align-items: center;
  border-radius: 6px;

  svg {
    color: ${(props) => props.color === 'yellow-light' ? props.theme["yellow-dark"] : props.theme.white};
  }
`
