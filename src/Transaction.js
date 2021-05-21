import React, { useContext } from "react";
import Item from "./Items"

import { GlobalContext } from "./Context/GlobalState";
import "./Transaction.css";

export default function Transaction() {
  const { transaction } = useContext(GlobalContext);

  return (
    <div className="transaction_conatiner">
      <h3>History</h3>

      <ul className="list">
        {transaction.map(items=> (<Item key={items.id} items={items}/>))}
      </ul>
    </div>
  );
}
