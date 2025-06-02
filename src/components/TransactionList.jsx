import React from "react";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="max-h-[200px] overflow-y-auto text-slate-900 font-medium">
      {transactions.map((item) => (
        <div
          key={item.id}
          className="group relative bg-gray-200 p-2 mb-2 shadow-md rounded"
        >
          <div className="flex justify-between items-center gap-4 pr-18 w-full">
            <p className="w-0 flex-1 break-words">{item.description}</p>
            <p className="whitespace-nowrap">${item.amount}</p>
          </div>
          {/* Btns */}
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => {
                deleteTransaction(item.id);
              }}
            >
              🗑️
            </button>
            <button>✏️</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
