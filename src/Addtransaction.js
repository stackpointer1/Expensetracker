import React, { useState, useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

export default function AddTransaction() {
  const { AddTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [Amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      Amount: parseInt(Amount, 10)
    };
    AddTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form">
          <label>Text</label>
          <br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
          <br />
          <br />
          <label>Amount</label>
          <br />
          <input
            type="number"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount.."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
