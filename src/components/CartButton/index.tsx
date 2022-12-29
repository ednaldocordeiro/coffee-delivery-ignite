import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartButtonContainer } from "./styles";

interface CartButtonProps {
  color: 'yellow-light' | 'purple-dark'
}

export function CartButton({color}: CartButtonProps) {
  return (
    <CartButtonContainer to='/cart' color={color}>
      <span className='cart'>
        <ShoppingCart size={22} weight='fill' />
      </span>
    </CartButtonContainer>
  )
}