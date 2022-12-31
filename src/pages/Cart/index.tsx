import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ListCoffees } from "./ListCoffees";
import { CartContainer, AdressFormContainer, AdressContainer, PaymentContainer, SelectedCoffesContainer, PaymentFormContainer } from "./styles";

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'
import { useContext } from "react";
import { BuyCoffeeContext } from "../../contexts/BuyCoffeeContext";

const requestValidationSchema = zod.object({
  cep: zod.string().min(7, 'Informa um CEP válido'),
  street: zod.string().min(10),
  number: zod.string().min(1),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentType: zod.enum(['credit card', 'debit card','money']),
})

type RequestFormType = zod.infer<typeof requestValidationSchema>

export function Cart(){

  const navigate = useNavigate()
  const { saveAdress, coffeesState: {coffees} } = useContext(BuyCoffeeContext)

  const form = useForm<RequestFormType>({
    resolver: zodResolver(requestValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      complement: '',
      number: '',
      district: '',
      city: '',
      state: '',
      paymentType: "credit card",
    }
  });

  const { register, handleSubmit, watch, reset } = form

  const paymentType = watch('paymentType')

  function handleFinish(data: RequestFormType) {
    saveAdress(data)
    navigate('/success')
    reset()
  }

  const total = coffees.reduce((acc, prev) => {
    return acc + (prev.price * prev.amount)
  }, 0)

  return (
    <CartContainer>
      <form className="container" onSubmit={handleSubmit(handleFinish)}>
        <div>
          <h2>Complete seu pedido</h2>
          <AdressContainer>
            <header>
              <MapPinLine size={22}/>
              <div>
                <h4>Endereço de entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <AdressFormContainer>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" placeholder="CEP" {...register("cep")}/>

              <label htmlFor="rua">Rua</label>
              <input type="text" id="rua" placeholder="Rua" {...register("street")}/>

              <label htmlFor="numero">Número</label>
              <input type="text" id="numero" placeholder="Número" {...register("number")}/>

              <div className="complemento">
                <label htmlFor="complemento">Complemento</label>
                <input type="text" id="complemento" placeholder="Complemento" {...register("complement")}/>
                <span>Optional</span>
              </div>

              <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" placeholder="Bairro" {...register("district")}/>

                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" placeholder="Cidade" {...register("city")}/>

                <label htmlFor="uf">UF</label>
                <input type="text" id="uf" placeholder="UF" {...register("state")}/>
              </div>
            </AdressFormContainer>
          </AdressContainer>
          <PaymentContainer>
            <header>
              <CurrencyDollarSimple size={22}/>
              <div>
                <h4>Pagamento</h4>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>
            <PaymentFormContainer>
              <input type="radio" id="creditCard" value="credit card" defaultChecked {...register("paymentType")}/>
              <label htmlFor="creditCard" className={`paymentType ${paymentType === 'credit card' && 'selected'}`}>
                <CreditCard size={22}/>
                <p>Cartão de crédito</p>
              </label>

              <input type="radio" id="debitCard" value="debit card" {...register("paymentType")}/>
              <label htmlFor="debitCard" className={`paymentType ${paymentType === 'debit card' && 'selected'}`}>
                <Bank size={22}/>
                <p>Cartão de débito</p>
              </label>

              <input type="radio" id="money" value="money" {...register("paymentType")}/>
              <label htmlFor="money" className={`paymentType ${paymentType === 'money' && 'selected'}`}>
                <Money size={22}/>
                <p>Dinheiro</p>
              </label>
            </PaymentFormContainer>
          </PaymentContainer>
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffesContainer>
            <ListCoffees />
            <div className="prices">
              <div>
                <span>Total de itens</span>
                <span className="price">
                  {(total)
                    .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                    .replace('R$', '')}
                </span>
              </div>
              <div>
                <span>Entrega</span>
                <span className="price">R$ 3,50</span>
              </div>
              <div>
                <strong className="total">Total</strong>
                <strong className="totalPrice">
                  {(total + 3.5)
                   .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                   .replace('R$', '')}
                  </strong>
              </div>
            </div>
            <button type="submit">
              Confirmar pedido
            </button>
          </SelectedCoffesContainer>
        </div>
      </form>
    </CartContainer>
  )
}