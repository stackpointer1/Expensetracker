import React, { useContext } from "react";
import "./IncomeExpense.css";
import { GlobalContext } from "./Context/GlobalState";
export default function IncomeExpense() {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2) * -1;
  return (
    <>
      <div className="exp-conatiner">
        <h4>Income</h4>
        <p className="MoneyPlus"> ₹{income}</p>
      </div>
      <div>
        <h4 className="expense"> expense</h4>
        <p className="money-minus">₹{expense}</p>
      </div>
    </>
  );
}
