import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "phosphor-react";
import { CoffeeCard } from "./CoffeeCard";
import { CartContainer, AdressFormContainer, AdressContainer, PaymentContainer, SelectedCoffesContainer, PaymentFormContainer } from "./styles";

export function Cart(){
  return (
    <CartContainer>
      <form className="container">
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
              <input type="text" id="cep" name="cep" placeholder="CEP"/>

              <label htmlFor="rua">Rua</label>
              <input type="text" id="rua" name="rua" placeholder="Rua"/>

              <label htmlFor="numero">Número</label>
              <input type="text" id="numero" name="numero" placeholder="Número"/>

              <label htmlFor="complemento">Complemento</label>
              <input type="text" id="complemento" name="complemento" placeholder="Complemento"/>

              <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" placeholder="Bairro"/>

                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" placeholder="Cidade"/>

                <label htmlFor="uf">UF</label>
                <input type="text" id="uf" name="uf" placeholder="UF"/>
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
              <div className="paymentType">
                <CreditCard size={22}/>
                <label htmlFor="creditCard">Cartão de crédito</label>
                <input type="radio" id="creditCard" name="creditCard" value="credit card" checked/>
              </div>

              <div className="paymentType">
                <Bank size={22}/>
                <label htmlFor="debitCard">Cartão de débito</label>
                <input type="radio" id="debitCard" name="debitCard" value="debit card"/>
              </div>

              <div className="paymentType">
                <Money size={22}/>
                <label htmlFor="money">Dinheiro</label>
                <input type="radio" id="money" name="money" value="money"/>
              </div>
            </PaymentFormContainer>
          </PaymentContainer>
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffesContainer>
            <CoffeeCard />
            <div className="divider" />
            <div className="prices">
              <div>
                <span>Total de itens</span>
                <span className="price">R$ 29,70</span>
              </div>
              <div>
                <span>Total de itens</span>
                <span className="price">R$ 3,50</span>
              </div>
              <div>
                <strong className="total">Total</strong>
                <strong className="totalPrice">R$ 33,20</strong>
              </div>
            </div>
            <button type="submit">Confirmar pedido</button>
          </SelectedCoffesContainer>
        </div>
      </form>
    </CartContainer>
  )
}