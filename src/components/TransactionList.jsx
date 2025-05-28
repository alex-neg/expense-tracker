import React from "react";

const TransactionList = ({ items }) => {
  console.log("Items received: ", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="border-2 group relative flex  s p-2 mb-2 shadow-md"
        >
          <button className="absolute left-2 opacity-0 group-hover:opacity-100 transition">
            🗑️
          </button>
          <div className="flex flex-1 justify-around gap-4">
            <p>{item.description}</p>
            <p>${item.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
