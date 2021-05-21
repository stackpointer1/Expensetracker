import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initailState = {
  transaction: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "book", amount: 420 },
    { id: 3, text: "Salary", amount: -20 },
    { id: 4, text: "food", amount: 200 },
    { id: 5, text: "drinks", amount: -20 }
  ]
};
//create Context
export const GlobalContext = createContext(initailState);
//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initailState);
  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }
  function AddTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        AddTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
