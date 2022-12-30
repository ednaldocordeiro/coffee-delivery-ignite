import { HeaderContainer, Bullet } from './styles'

import logo from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to='/' >
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <span className='location'>
            <MapPin size={22} weight='fill' />
            Porto Alegre, RS
          </span>
          <div className='cart'>
            <Bullet>3</Bullet>
            <CartButton color='yellow-light'/>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  )
}