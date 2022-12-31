import { HomeContainer, Icon, MenuContainer, PresentationContainer } from "./styles";

import coffee from '../../assets/Coffee.svg'
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard";

import coffes from '../../mocks/menu.json'
import { useContext } from "react";
import { BuyCoffeeContext } from "../../contexts/BuyCoffeeContext";

interface CoffeeCardProps {
  data : {
    id: number,
    img: 'americano'|
    'arabe'|
    'cafeComLeite'|
    'cafeGelado'|
    'capuccino'|
    'chocolateQuente'|
    'cubano'|
    'expresso'|
    'expressoCremoso'|
    'havaiano'|
    'irlandes'|
    'latte'|
    'macchiato'|
    'mochaccino',
    tags: string[],
    name: string,
    description: string,
    price: number,
  }
}

export function Home(){

  const {coffeesState} = useContext(BuyCoffeeContext)

  return (
    <HomeContainer>
      <PresentationContainer>
        <div className="container">
          <div className="information">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div className="attributes">
              <div className="attribute">
                <Icon color={"yellow-dark"}>
                  <ShoppingCart weight='fill'/>
                </Icon>
                <span>Compra simples e segura</span>
              </div>
              <div className="attribute">
                <Icon color={"base-text"}>
                  <Package weight='fill'/>
                </Icon>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className="attribute">
                <Icon color={"yellow"}>
                  <Timer weight='fill'/>
                </Icon>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className="attribute">
                <Icon color={"purple"}>
                  <Coffee weight='fill'/>
                </Icon>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
          <img src={coffee} alt="Copo de café" />
        </div>
      </PresentationContainer>
      <MenuContainer>
        <h2>Nossos cafés</h2>
        <div className="container">
          {coffes.map((coffee) => (
            <CoffeeCard data={coffee} key={coffee.id}/>
          ))}
        </div>
      </MenuContainer>
    </HomeContainer>
  )
}