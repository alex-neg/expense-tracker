import React from "react";

const BalanceDisplay = () => {
  return (
    <div className="">
      {/* Balance */}
      <div>
        <h3>Your Balance</h3>
        <h2>$500.00</h2>
      </div>
      {/* Expense & budget */}
      <div className="flex justify-center border-2">
        <div className="w-1/2 flex flex-col items-center border-r-2">
          <h3>Expense</h3>
          <h2>$500.00</h2>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <h3>Budget</h3>
          <h2>$1000.00</h2>
        </div>
      </div>
    </div>
  );
};

export default BalanceDisplay;
