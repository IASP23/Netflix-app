import React from "react";
import Logo from "./logo";

import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="px-12 py-5">
      <div className="container flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
          <Logo />
          <ul className="hidden space-x-4 md:flex">
            <li className="cursor-pointer font-semibold text-white hover:text-white hover:scale-125 transition duration-75">
              Home
            </li>

            <li className="font-semibold cursor-pointer text-gray-200 transition-duration-400 hover:text-gray-500 hover:scale-125 transition duration-75">
              TV Shows
            </li>
            <li className="font-semibold cursor-pointer text-gray-200 transition-duration-400 hover:text-gray-500 hover:scale-125 transition duration-75">
              Movies
            </li>
            <li className="font-semibold cursor-pointer text-gray-200 transition-duration-400 hover:text-gray-500 hover:scale-125 transition duration-75">
              New & Popular
            </li>
            <li className="font-semibold cursor-pointer text-gray-200 transition-duration-400 hover:text-gray-500 hover:scale-125 transition duration-75">
              My List
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light text-gray-50">
          <BiSearch className="sm hidden h-6 w-6 sm:inline" />
          <p className="hidden  font-semibold lg:inline">Kids</p>
          <BsBellFill className="h-6 w-6" />

          <Image
            src="/dp.png"
            alt="dp"
            width={60}
            height={60}
            className="cursor-pointer rounded w-auto h-auto hover:scale-150 transition duration-150"
            onClick={() => signOut()}
          />
        </div>
      </div>
    </nav>
  );
}
