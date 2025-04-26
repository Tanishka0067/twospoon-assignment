import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from "../assets/Logowhite.png";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-32 px-4 sm:px-8 lg:px-20 font-[inter] font-light text-sm tracking-wide">
      {" "}
      <div className=" flex flex-col gap-16 ">
        <div className="flex lg:flex-row flex-col justify-around items-center lg:items-start gap-10">
          <div className="flex flex-col justify-center lg:items-start items-center gap-6">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="text leading-[171%] text-center sm:text-start text-nowrap">
              We are a residential interior design firm located in <br />
              Portland. Our boutique-studio offers more than
            </div>
          </div>
          <div>
            <ul className="flex flex-col items-center lg:items-start">
              <li className="font-bold mb-4">Service</li>
              {[
                "Bonus program",
                "Gift cards",
                "Credit and payment",
                "Service contracts",
                "Non-cash account",
                "Payment",
              ].map((item, index) => (
                <li key={index} className="py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col items-center lg:items-start">
              <li className="font-bold mb-4">Assistance to the buyer</li>
              {[
                "Find an order",
                "Terms of delivery",
                "Exchange and return of goods",
                "Guarantee",
                "Frequently asked questions",
                "Terms of use of the site",
              ].map((item, index) => (
                <li key={index} className="py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start lg:pl-20 gap-10 text-2xl">
          <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
          <IoLogoTiktok className="hover:text-gray-400 cursor-pointer" />
          <PiInstagramLogoFill className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
// <FaTwitter />
//<IoLogoTiktok />
//<FaFacebookF />
//<PiInstagramLogoFill />
