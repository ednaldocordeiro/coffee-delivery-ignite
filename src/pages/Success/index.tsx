import { Timer, MapPin, CurrencyDollarSimple } from "phosphor-react";
import { useContext } from "react";
import delivery from '../../assets/delivery.svg'
import { BuyCoffeeContext } from "../../contexts/BuyCoffeeContext";
import { Icon, SuccessContainer } from "./styles";

export function Success() {

  const { currentAdress } = useContext(BuyCoffeeContext)

  return (
    <SuccessContainer>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <p className="subtitle">Agora é só aguardar que logo o café chegará até você</p>
        <div className="border">
          <div className="details">
            <div>
              <Icon color="purple">
                <MapPin size={22}/>
              </Icon>
              <div>
                <p>Entrega em <strong>{currentAdress.street}, {currentAdress.number}</strong></p>
                <p>{currentAdress.district} - {currentAdress.city}, {currentAdress.state}</p>
              </div>
            </div>
            <div>
              <Icon color="yellow">
                <Timer size={22}/>
              </Icon>
              <div>
                <p>Provisão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <Icon color="yellow-dark">
                <CurrencyDollarSimple size={22}/>
              </Icon>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{currentAdress.paymentType.toLocaleUpperCase()}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src={delivery} alt="" />
    </SuccessContainer>
  )
}