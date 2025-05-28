import React from "react";

const ExpenseControls = () => {
  return (
    <div className="mt-20 border-2">
      <form>
        <h1>Add new transaction</h1>
        <div className="p-4 gap-4 flex flex-col items-center justify-center">
          <input className="w-46" type="text" placeholder="Enter description" />
          <input className="w-46" type="text" placeholder="Enter amount" />
          <button className="border-2 w-46" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseControls;
