import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/Logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="flex flex-row justify-around items-center p-2
     bg-white font-[inter] font-medium px-18 mt-2 border-b-2 border-[#E5E5E5] "
    >
      <div className="logo ">
        <img src={logo} alt="logo" className="h-6" />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <RxHamburgerMenu className="text-black cursor-pointer" size={30} />
        </button>
      </div>
      <div className="lg:flex hidden flex-row gap-14 pr-6 items-center justify-around">
        <div className="searchbar relative w-sm">
          <FiSearch
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#656565] cursor-pointer"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-4 pl-10 pr-4 bg-[#F5F5F5] rounded-lg text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-black-500"
          />
        </div>

        <div className="navelements">
          <ul className="flex flex-row gap-14 text-base text-[#B2B2B2]">
            <li className="cursor-pointer text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About</li>
            <li className="cursor-pointer hover:text-black text-nowrap">
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-black">Blog</li>
          </ul>
        </div>
        <div className="icons">
          <ul className="flex flex-row gap-6 font-extralight text-3xl">
            <li className="cursor-pointer font-extralight hover:text-black">
              <IoMdHeartEmpty />
            </li>
            <li className="cursor-pointer font-extralight hover:text-black">
              <IoCartOutline />
            </li>
            <li className="cursor-pointer font-extralight hover:text-black">
              <FiUser />
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="lg:hidden p-4 ">
          <li className="block py-2">
            Home{" "}
          </li>
          <li className="block py-2">
            About
          </li>
          <li className="block py-2 text-nowrap">
            Contact Us
          </li>
          <li className="block py-2">
            Blog
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
// <RxHamburgerMenu />
//<IoMdHeartEmpty />
// <IoCartOutline />
// <FiUser />
