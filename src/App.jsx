import { useState } from "react";
import "./index.css";
import BalanceDisplay from "./components/BalanceDisplay";
import ExpenseControls from "./components/ExpenseControls";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700">
      <div className=" bg-gray-300 w-11/12 max-w-md min-h-[500px] p-8 m-8 rounded-xl">
        <h1 className="text-center text-2xl text-slate-900 font-bold m-4">
          Expense Tracker
        </h1>
        <ExpenseControls />
      </div>
    </div>
  );
}

export default App;
