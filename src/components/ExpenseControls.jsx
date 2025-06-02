import { React, useState, useRef } from "react";
import TransactionList from "./TransactionList";
import BalanceDisplay from "./BalanceDisplay";

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
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => {
      return prev.filter((i) => i.id !== id);
    });
    console.log("Deleted: ", id);
  };

  return (
    <>
      <BalanceDisplay transactions={transactions} />
      <div className="min-h-64 mt-4">
        <form onSubmit={addTransaction}>
          {/* <h1>Add new transaction</h1> */}
          <div className="p-4 gap-4 flex flex-col items-center justify-center">
            <input
              ref={descriptionRef}
              className="w-46 bg-gray-200 outline-0 rounded px-2"
              type="text"
              placeholder="Description"
            />
            <input
              ref={amountRef}
              className="w-46 bg-gray-200 outline-0 rounded px-2"
              type="text"
              placeholder="Amount"
            />
            <button
              className="bg-[#7077A1] text-slate-900 font-semibold w-46 h-8 rounded shadow-md"
              type="submit"
            >
              Add transaction
            </button>
          </div>
        </form>
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </>
  );
};

export default ExpenseControls;
