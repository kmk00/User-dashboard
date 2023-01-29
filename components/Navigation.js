import Link from "next/link";
import React from "react";
import { GrDiamond, GrSettingsOption } from "react-icons/gr";
import { HiRectangleGroup } from "react-icons/hi2";
import { BsBag, BsFillPersonFill } from "react-icons/bs";

function Navigation({ children }) {
  return (
    <>
      <nav className="p-4 w-20 fixed h-screen bg-white flex flex-col justify-between items-center border-r-4 border-gray-300">
        <div className="flex flex-col gap-8">
          <div className="bg-purple-700 p-3 rounded-lg hover:animate-pulse cursor-pointer">
            <Link href="/">
              <GrDiamond size={25} />
            </Link>
          </div>
          <hr />
          <div className="bg-gray-200 p-3 rounded-lg hover:animate-pulse cursor-pointer">
            <Link href="/">
              <HiRectangleGroup size={25} />
            </Link>
          </div>
          <div className="bg-gray-200 p-3 rounded-lg hover:animate-pulse cursor-pointer">
            <Link href="/customers">
              <BsFillPersonFill size={25} />
            </Link>
          </div>
          <div className="bg-gray-200 p-3 rounded-lg hover:animate-pulse cursor-pointer">
            <Link href="/orders">
              <BsBag size={25} />
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg hover:animate-pulse cursor-pointer">
          <GrSettingsOption size={30} />
        </div>
      </nav>
      <main className="ml-20 bg-gray-200">{children}</main>
    </>
  );
}

export default Navigation;
