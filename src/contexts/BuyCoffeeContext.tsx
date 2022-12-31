import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { ActionTypes, addCoffeeToCart, clearReducer, removeCoffee, removeCoffeeToCart } from "../reducers/cart/actions";
import { coffeesReducer } from "../reducers/cart/reducer"


interface ContextProps {
  children: ReactNode
}

export interface Coffee {
  id: number;
  name: string;
  img: string;
  price: number;
  amount: number;
}

export type Address = {
  cep: string,
  street: string,
  complement: string,
  number: string,
  district: string,
  city: string,
  state: string,
  paymentType: 'credit card' | 'debit card' | 'money',
}

interface BuyCoffeeContextType {
  coffeesState: {
    coffees: Coffee[]
  },
  currentAdress: Address
  handleAddCoffeeToCart: (coffee: Coffee) => void
  handleRemoveCoffeeToCart: (coffee: Coffee) => void
  saveAdress: (address: Address) => void
  removeCoffeeFromCart: (coffee: Coffee) => void
}

export const BuyCoffeeContext = createContext({} as BuyCoffeeContextType)

export function BuyCoffeeProvider({children}: ContextProps) {

  const [currentAdress, setCurrentAdress] = useState({} as Address)

  const [coffeesState, dispatch] = useReducer(
    coffeesReducer, 
    {
      coffees: [],
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem('@coffee-delivery:coffee-state-1.0.0')

      if (storageStateAsJSON !== null) {
        return JSON.parse(storageStateAsJSON)
      } else {
        return initialState
      }
    }
  )


  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJSON)
  }, [coffeesState])


  function handleAddCoffeeToCart(coffee: Coffee) {
    dispatch(addCoffeeToCart({...coffee, amount: 1}))
  }

  function handleRemoveCoffeeToCart(coffee: Coffee) {
    dispatch(removeCoffeeToCart({...coffee, amount: 1}))
  }

  function removeCoffeeFromCart(coffee: Coffee) {
    dispatch(removeCoffee(coffee))
  }

  function saveAdress(address: Address) {
    setCurrentAdress(address)
    dispatch(clearReducer())
  }

  return (
    <BuyCoffeeContext.Provider value={{ 
        coffeesState,
        handleAddCoffeeToCart,
        handleRemoveCoffeeToCart,
        currentAdress,
        saveAdress,
        removeCoffeeFromCart
      }} >
      {children}
    </BuyCoffeeContext.Provider>
  )
}
