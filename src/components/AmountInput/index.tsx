import { Minus, Plus } from "phosphor-react";
import { AmountInputContainer } from "./styles";

export function AmountInput() {
  return (
    <AmountInputContainer>
      <button>
        <Plus />
      </button>
      <input type="number" defaultValue='0' />
      <button>
        <Minus />
      </button>
    </AmountInputContainer>
  )
}