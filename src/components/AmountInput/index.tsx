import { Minus, Plus } from "phosphor-react";
import { AmountInputContainer } from "./styles";

interface AmountinputProps {
  amount: number;
  onClickAdd: () => void;
  onClickRemove: () => void;
}

export function AmountInput({onClickAdd, amount, onClickRemove}: AmountinputProps) {

  return (
    <AmountInputContainer>
      <button onClick={onClickRemove} disabled={amount === 0}>
        <Minus />
      </button>
      <p>{amount}</p>
      <button onClick={onClickAdd}>
        <Plus />
      </button>
    </AmountInputContainer>
  )
}