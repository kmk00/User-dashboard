import React from "react";
import { data } from "@/data/orders";
import Sale from "./Sale";

function Sales() {
  return (
    <div className="md:col-span-2 flex flex-col relative bg-white lg:h-[70vh] h-[50vh] mt-4 px-4 overflow-y-scroll max-h-screen">
      <div className="flex justify-between sticky top-0 bg-white p-4">
        <p>Name</p>
        <p>Email</p>
      </div>
      <div>
        {data.map((item) => (
          <Sale key={item.id} person={item} />
        ))}
      </div>
    </div>
  );
}

export default Sales;
