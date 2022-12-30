import { Trash } from "phosphor-react";
import { AmountInput } from "../../../components/AmountInput";
import { coffee } from "../../../constants/pictures";
import { CoffeeCardContainer, RemoveButton } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <div className="informations">
        <img src={coffee.arabe} alt="" />
        <div>
          <h4>Expresso Tradicional</h4>
          <div className="buttons">
            <AmountInput />
            <RemoveButton>
              <Trash size={16}/>
              <span>Remover</span>
            </RemoveButton>
          </div>
        </div>
      </div>
      <span>R$
        <span className="price">9,90</span>
      </span>
    </CoffeeCardContainer>
  )
}