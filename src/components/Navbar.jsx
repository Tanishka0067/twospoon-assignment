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
    <nav className="flex justify-around sticky top-0 z-50 items-center pt-4 pb-4 pl-8 bg-white font-[inter] font-medium border-b-2 border-[#E5E5E5]">
      <div className="logo flex-shrink-0">
        <img src={logo} alt="logo" className="h-6" />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <RxHamburgerMenu className="text-black cursor-pointer" size={30} />
        </button>
      </div>

      <div className="hidden lg:flex flex-1 gap-4 justify-around items-center max-w-[1200px] mx-8">
        <div className="searchbar relative w-full max-w-[400px]">
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#656565] cursor-pointer"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 pr-4 bg-[#F5F5F5] rounded-lg text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-black-500"
          />
        </div>

        <div className="navelements">
          <ul className="flex gap-8 text-base text-[#B2B2B2]">
            <li className="cursor-pointer text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About</li>
            <li className="cursor-pointer hover:text-black whitespace-nowrap">
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-black">Blog</li>
          </ul>
        </div>
        <div className="icons">
          <ul className="flex gap-6 text-2xl">
            <li className="cursor-pointer hover:text-black">
              <IoMdHeartEmpty />
            </li>
            <li className="cursor-pointer hover:text-black">
              <IoCartOutline />
            </li>
            <li className="cursor-pointer hover:text-black">
              <FiUser />
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 p-4">
          <ul className="space-y-3 text-center">
            <li className="block py-2">Home</li>
            <li className="block py-2">About</li>
            <li className="block py-2">Contact Us</li>
            <li className="block py-2">Blog</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
