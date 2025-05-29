import React from "react";

const BalanceDisplay = ({ transactions }) => {
  console.log("Transactions in BalanceDisplay: ", transactions);

  const calcBalance = (t) => {
    const total = t.reduce((acc, curr) => acc + curr.amount, 0);
    return total.toFixed(2);
  };

  const calcIncome = (t) => {
    const positive = t.filter((i) => i.amount > 0);
    return positive.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);
  };

  const calcExpense = (t) => {
    const negative = t.filter((i) => i.amount < 0);
    return negative.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);
  };

  return (
    <div className="p-4 text-slate-900">
      {/* Balance */}
      <div className="flex items-center justify-between font-bold text-xl mb-4">
        <h3>Your Balance</h3>
        <h2 className="">${calcBalance(transactions)}</h2>
      </div>
      {/* Expense & budget */}
      <div className="flex justify-center shadow-sm rounded">
        <div className="w-1/2 flex flex-col items-center border-r border-gray-400">
          <h3 className="font-medium">Expense</h3>
          <h2 className="text-red-600">${calcExpense(transactions)}</h2>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <h3 className="font-medium">Income</h3>
          <h2 className="text-green-600">${calcIncome(transactions)}</h2>
        </div>
      </div>
    </div>
  );
};

export default BalanceDisplay;
