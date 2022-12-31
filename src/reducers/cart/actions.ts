export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_TO_CART = 'REMOVE_COFFEE_TO_CART',
  CLEAR_REDUCER = 'CLEAR_REDUCER',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

interface Coffee {
  id: number;
  img: string;
  name: string;
  price: number;
  amount: number;
}

interface Adress {
  cep: string,
  street: string,
  complement: string,
  number: string,
  district: string,
  city: string,
  state: string,
  paymentType: 'credit car' | 'debit card' | 'money',
}

export function addCoffeeToCart(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee
    }
  }
}

export function removeCoffeeToCart(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE_TO_CART,
    payload: {
      coffee
    }
  }
}

export function removeCoffee(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffee
    }
  }
}

export function clearReducer(){
  return {
    type: ActionTypes.CLEAR_REDUCER,
    payload: null
  }
}