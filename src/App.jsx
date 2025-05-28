import { useState } from "react";
import "./index.css";
import BalanceDisplay from "./components/BalanceDisplay";
import ExpenseControls from "./components/ExpenseControls";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700">
      <div className="border-4 border-slate-900 bg-gray-300 w-11/12 max-w-md min-h-[600px] p-8 m-8 rounded-xl">
        <h1 className="text-2xl font-bold my-4">Expense Tracker</h1>
        <BalanceDisplay />
        <ExpenseControls />
      </div>
    </div>
  );
}

export default App;
