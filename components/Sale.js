import React from "react";
import { BsCartCheck } from "react-icons/bs";

function Sale({ person }) {
  return (
    <div className="p-3 flex justify-between items-center bg-gray-100 rounded-md my-2">
      <div>
        <div className="flex gap-3 items-center">
          <div className="bg-purple-300 rounded-md p-3">
            <BsCartCheck></BsCartCheck>
          </div>
          <div className="flex-col flex">
            <p className="font-bold">{`$${person.total}`}</p>
            <p>{person.name.last}</p>
          </div>
        </div>
      </div>
      <p>{`${person.name.last}@gmail.com`}</p>
    </div>
  );
}

export default Sale;
