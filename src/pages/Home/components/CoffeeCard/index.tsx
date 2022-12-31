import { AmountInput } from '../../../../components/AmountInput'
import { CartButton } from '../../../../components/CartButton'
import { CoffeeCardContainer } from './styles'

import { coffee } from '../../../../constants/pictures'
import { useContext } from 'react'
import { BuyCoffeeContext } from '../../../../contexts/BuyCoffeeContext'

interface CoffeeCardProps {
  data : {
    id: number,
    img: string,
    tags: string[],
    name: string,
    description?: string,
    price: number,
  }
}

export function CoffeeCard({data}: CoffeeCardProps) {

  const { 
    handleAddCoffeeToCart, 
    handleRemoveCoffeeToCart, 
    coffeesState 
  } = useContext(BuyCoffeeContext)

  function handleAdd() {

    const coffee = {
      id: data.id,
      img: data.img,
      name: data.name,
      price: data.price,
      amount: 1,
    }

    handleAddCoffeeToCart(coffee)
  }

  function handleRemove() {

    const coffee = {
      id: data.id,
      img: data.img,
      name: data.name,
      price: data.price,
      amount: 1,
    }

    handleRemoveCoffeeToCart(coffee)
  }

  const currentCoffee = coffeesState.coffees
    .filter(coffee => coffee.id === data.id);

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
          <AmountInput 
            onClickAdd={handleAdd}
            onClickRemove={handleRemove}
            amount={currentCoffee[0] ? currentCoffee[0].amount : 0}
          />
          <CartButton color='purple-dark'/>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}