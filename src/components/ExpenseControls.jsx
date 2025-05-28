import { React, useState, useRef } from "react";
import TransactionList from "./TransactionList";

const ExpenseControls = () => {
  const [transactions, setTransactions] = useState([]);

  // will need to refactor later and use useState for accesing the inputs
  const descriptionRef = useRef();
  const amountRef = useRef();

  const addTransaction = (e) => {
    e.preventDefault();

    const description = descriptionRef.current.value;
    const amount = amountRef.current.value;
    if (!description.trim() || !amount.trim()) return;
    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: Number(amount),
    };
    setTransactions((prev) => {
      return [...prev, newTransaction];
    });
    descriptionRef.current.value = "";
    amountRef.current.value = "";
    console.log(newTransaction);
  };

  return (
    <div className="mt-20 border-2">
      <form onSubmit={addTransaction}>
        <h1>Add new transaction</h1>
        <div className="p-4 gap-4 flex flex-col items-center justify-center">
          <input
            ref={descriptionRef}
            className="w-46"
            type="text"
            placeholder="Enter description"
          />
          <input
            ref={amountRef}
            className="w-46"
            type="text"
            placeholder="Enter amount"
          />
          <button className="border-2 w-46" type="submit">
            Add
          </button>
        </div>
      </form>
      <TransactionList items={transactions} />
    </div>
  );
};

export default ExpenseControls;
