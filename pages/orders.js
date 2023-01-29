import Order from "@/components/Order";
import { data } from "@/data/orders";
import React from "react";

function orders() {
  return (
    <div className="h-screen p-4">
      <div className="bg-white p-4 rounded-md border">
        <div className="w-full grid grid-cols-3 md:grid-cols-4">
          <span>Order</span>
          <span className="text-center sm:text-left">Status</span>
          <span className="md:text-left text-right">Method</span>
          <span className="hidden sm:grid">Last Order</span>
        </div>
        <ul>
          {data.map((item) => (
            <Order key={item.id} person={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default orders;
