import { ActionTypes } from "./actions";
import { Coffee } from "../../contexts/BuyCoffeeContext";

interface CoffeeState {
  coffees: Coffee[],
}

interface AddCoffeeAction {
  type: string;
  payload: {
    coffee: Coffee
  };
}

export function coffeesReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {

      const filteredCoffe = state.coffees
        .filter(coffe => coffe.id === action.payload.coffee.id)

      if (filteredCoffe.length) {
        return {
          coffees: state.coffees.map(coffee => {
            if  (coffee.id === action.payload.coffee.id) {
              return {...coffee, amount: coffee.amount + 1}
            } else {
              return coffee
            }
          })
        }
      }

      return {
        coffees: [...state.coffees, action.payload.coffee]
      }
    }
    case ActionTypes.REMOVE_COFFEE_TO_CART: {
      const filteredCoffe = state.coffees
        .filter(coffe => coffe.id === action.payload.coffee.id)

      if (filteredCoffe.length) {
        return {
          coffees: state.coffees.map(coffee => {
            if  (coffee.id === action.payload.coffee.id) {
              return {...coffee, amount: coffee.amount - 1}
            } else {
              return coffee
            }
          })
        }
      }
    }
    case ActionTypes.REMOVE_COFFEE: {
      return {
        coffees: state.coffees.filter((coffee) => coffee.id !== action.payload.coffee.id)
      }
    }
    case ActionTypes.CLEAR_REDUCER: {
      return {
        coffees: []
      }
    }
    default: {
      return state
    }
  }
}