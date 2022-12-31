import { Trash } from "phosphor-react";
import { useContext } from "react";
import { AmountInput } from "../../../components/AmountInput";
import { coffee } from "../../../constants/pictures";
import { BuyCoffeeContext } from "../../../contexts/BuyCoffeeContext";
import { CoffeeCardContainer, RemoveButton } from "./styles";

export function ListCoffees() {

  const { 
    coffeesState: {coffees},
    handleAddCoffeeToCart,
    handleRemoveCoffeeToCart,
    removeCoffeeFromCart
  } = useContext(BuyCoffeeContext)

  return (
    <>
      {coffees.map(c => (
        <CoffeeCardContainer>
          <div>
            <div className="informations">
              <img src={coffee[`${c.img}`]} alt="" />
              <div>
                <h4>{c.name}</h4>
                <div className="buttons">
                  <AmountInput
                    amount={c.amount}
                    onClickAdd={() => handleAddCoffeeToCart(c)}
                    onClickRemove={() => handleRemoveCoffeeToCart(c)}
                  />
                  <RemoveButton onClick={() => removeCoffeeFromCart(c)}>
                    <Trash size={16}/>
                    <span>Remover</span>
                  </RemoveButton>
                </div>
              </div>
            </div>
            <span>R$
              <span className="price">{(c.price * c.amount)
              .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
              .replace('R$', '')}</span>
            </span>
          </div>
          <div className="divider"></div>
        </CoffeeCardContainer>
      ))}
    </>
  )
}