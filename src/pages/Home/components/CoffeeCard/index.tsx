import { AmountInput } from '../../../../components/AmountInput'
import { CartButton } from '../../../../components/CartButton'
import { CoffeeCardContainer } from './styles'

import { coffee } from '../../../../constants/pictures'

interface CoffeeCardProps {
  data : {
    id: number,
    img: string,
    tags: string[],
    name: string,
    description: string,
    price: number,
  }
}

export function CoffeeCard({data}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffee[data.img]} alt="" />
      <div className="tags">
        {data.tags.map((tag) => <span className='tag' key={tag}>{tag}</span>)}
      </div>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div className='container'>
        <span>
          R$ 
          <span className='price'>{data.price
            .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            .replace('R$', '')}
          </span>
        </span>
        <div className='buttons'>
          <AmountInput />
          <CartButton color='purple-dark'/>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}