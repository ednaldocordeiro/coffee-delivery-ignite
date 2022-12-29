import coffee from '../../../../assets/coffees/expresso.svg'
import { AmountInput } from '../../../../components/AmountInput'
import { CartButton } from '../../../../components/CartButton'
import { CoffeeCardContainer } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffee} alt="" />
      <span className='tag'>Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className='container'>
        <span>
          R$ <span className='price'>9,90</span>
        </span>
        <AmountInput />
        <CartButton color='purple-dark'/>
      </div>
    </CoffeeCardContainer>
  )
}