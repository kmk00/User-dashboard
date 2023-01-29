import Link from "next/link";
import React from "react";
import { GrDiamond } from "react-icons/gr";
import { HiRectangleGroup } from "react-icons/hi2";
import { BsBag, BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";

function Navigation() {
  return (
    <nav className="w-28 fixed bg-white flex flex-col justify-between items-center mt-4">
      <div className="flex flex-col gap-8">
        <div className="bg-purple-800 p-3 rounded-lg ">
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
          <Link href="/">
            <BsFillPersonFill size={25} />
          </Link>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <Link href="/">
            <BsBag size={25} />
          </Link>
        </div>
      </div>
      <div className="relative w-10 h-10 mb-4">
        <Image
          className="rounded-lg"
          alt="profile image"
          fill
          src={
            "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBwbGFjZWhvbGRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
    </nav>
  );
}

export default Navigation;
