import { HeaderContainer, Bullet } from './styles'

import logo from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { BuyCoffeeContext } from '../../contexts/BuyCoffeeContext'

export function Header() {

  const { coffeesState } = useContext(BuyCoffeeContext)

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
            <Bullet>{coffeesState.coffees.length}</Bullet>
            <CartButton color='yellow-light'/>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  )
}