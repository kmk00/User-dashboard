import React from "react";
import { BsBagFill } from "react-icons/bs";

function Order({ person }) {
  return (
    <li
      className="w-full items-center py-2 grid grid-cols-3 md:grid-cols-4 "
      key={person.id}
    >
      <div className="flex items-center gap-2">
        <div className="flex p-4 rounded-md bg-purple-100 w-fit">
          <BsBagFill className="text-purple-700" size={20} />
        </div>
        <div>
          <p className="font-bold">{`$${person.total}`}</p>
          <p>{`${person.name.first}`}</p>
        </div>
      </div>
      <p className={`text-center sm:text-left `}>{`${person.status}`}</p>
      <p className="md:text-left text-right">{`${person.method}`}</p>
      <p className="hidden md:grid">{`${person.date}`}</p>
    </li>
  );
}

export default Order;
