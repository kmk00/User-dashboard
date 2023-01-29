import React from "react";

function TopCards() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      <div className="flex justify-between items-center lg:col-span-2 bg-white px-6 py-4 rounded-lg border border-gray-300">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">$7,231</p>
          <p>Daily Revenue</p>
        </div>
        <div className="bg-green-200 p-2 text-green-700 rounded-lg">+18%</div>
      </div>
      <div className="flex justify-between items-center lg:col-span-2 bg-white px-6 py-4 rounded-lg border border-gray-300">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">$1,237,231</p>
          <p>YTD Revenue</p>
        </div>
        <div className="bg-green-200 p-2 text-green-700 rounded-lg">+11%</div>
      </div>
      <div className="flex justify-between items-center lg:col-span-1 bg-white px-6 py-4 rounded-lg border border-gray-300">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">12,324</p>
          <p>Customers</p>
        </div>
        <div className="bg-green-200 p-2 text-green-700  rounded-lg">+13%</div>
      </div>
    </div>
  );
}

export default TopCards;
