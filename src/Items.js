import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";
import "./Transaction.css";
export default function Items({ items }) {
  const {  deleteTransaction } = useContext(GlobalContext);
  const sign = items.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={items.amount < 0 ? "minus" : "plus"}>
        {items.text}
        <span>
          {sign}₹{Math.abs(items.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(items.id)}
        >
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
}
