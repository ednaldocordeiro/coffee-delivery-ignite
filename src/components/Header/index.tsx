import { HeaderContainer, Bullet } from './styles'

import logo from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logo} alt="" />
        <nav>
          <a href='#'>
            <span className='location'>
              <MapPin size={22} weight='fill' />
              Porto Alegre, RS
            </span>
          </a>
          <div className='cart'>
            <Bullet>3</Bullet>
            <CartButton color='yellow-light'/>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  )
}