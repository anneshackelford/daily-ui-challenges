import { createContext, MouseEventHandler, useState, useReducer } from 'react';

const initialState = {
  page: 1
}

const actions = {
  NEXT_PAGE: "NEXT_PAGE",
  PREVIOUS_PAGE: "PREVIOUS_PAGE",
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.NEXT_PAGE: {
      if (state.page !== 3) {
        return ({...state, page: state.page + 1});
      }
      else return state;
    };
    case actions.PREVIOUS_PAGE: {
      if (state.page !== 1) {
        return ({...state, page: state.page - 1});
      }
      else return state;
    }
    default:
      return state;
  }
}

export const CreditCardCheckoutContext = createContext();

export const CreditCardCheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    page: state.page,
    clickNext: () => {
      dispatch({ type: actions.NEXT_PAGE })
    },
    clickBack: () => {
      dispatch({ type: actions.PREVIOUS_PAGE })
    }
  };

  return (
    <CreditCardCheckoutContext.Provider value={value}>
      {children}
    </CreditCardCheckoutContext.Provider>
  )
}



