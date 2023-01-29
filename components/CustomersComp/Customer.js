import React from "react";
import { BsPersonFill } from "react-icons/bs";

function Customer({ person }) {
  return (
    <li
      className="w-full items-center py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      key={person.id}
    >
      <div className="flex items-center gap-2">
        <div className="flex p-4 rounded-md bg-purple-100 w-fit">
          <BsPersonFill className="text-purple-700" size={20} />
        </div>
        <p>{`${person.name.last} ${person.name.first}`}</p>
      </div>
      <p className="sm:text-left text-right">{`${person.name.last}@gmail.com`}</p>
      <p className="hidden md:grid">{`${person.date}`}</p>
      <p className="hidden sm:grid">{`${person.method}`}</p>
    </li>
  );
}

export default Customer;
