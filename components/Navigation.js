import Link from "next/link";
import React from "react";
import { GrDiamond } from "react-icons/gr";
import { HiRectangleGroup } from "react-icons/hi2";
import { BsBag, BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";

function Navigation({ children }) {
  return (
    <div>
      <nav className="p-4 w-20 fixed h-screen bg-white flex flex-col justify-between items-center">
        <div className="flex flex-col gap-8">
          <div className="bg-purple-700 p-3 rounded-lg ">
            <Link href="/">
              <GrDiamond size={25} />
            </Link>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg ">
            <Link href="/">
              <HiRectangleGroup size={25} />
            </Link>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg ">
            <Link href="/customers">
              <BsFillPersonFill size={25} />
            </Link>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <Link href="/orders">
              <BsBag size={25} />
            </Link>
          </div>
        </div>
        <div className="relative w-10 h-10 mb-4 cursor-pointer">
          <Image
            className="rounded-lg"
            alt="Profile image"
            fill
            src={
              "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBwbGFjZWhvbGRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
        </div>
      </nav>
      <main className="ml-20 bg-gray-100">{children}</main>
    </div>
  );
}

export default Navigation;
