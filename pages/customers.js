import Customer from "@/components/Customer";
import React from "react";
import { data } from "@/data/orders";

function customers() {
  return (
    <div className="h-screen p-4">
      <div className="bg-white p-4 rounded-md border">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <span>Name</span>
          <span className="sm:text-left text-right">Email</span>
          <span className="hidden md:grid">Last Order</span>
          <span className="hidden sm:grid">Method</span>
        </div>
        <ul>
          {data.map((item) => (
            <Customer key={item.id} person={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default customers;