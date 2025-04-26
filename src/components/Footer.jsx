import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from "../assets/Logowhite.png";
const Footer = () => {
  return (
    <div className="bg-black text-white py-28 px-44 font-[inter] font-light text-sm tracking-wide">
      <div className=" flex flex-col ">
        <div className="flex sm:flex-row flex-col justify-around items-start">
          <div className="flex flex-col justify-center items-start gap-6">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="text leading-[171%] text-center sm:text-start">
              We are a residential interior design firm located in <br/>Portland. Our
              boutique-studio offers more than
            </div>
          </div>
          <div>
            <ul>
              <li className="font-bold">Service</li>
              <li className="py-2">Bonus program</li>
              <li className="py-2">Gift cards</li>
              <li className="py-2">Credit and payment</li>
              <li className="py-2">Service contracts</li>
              <li className="py-2">Non-cash account</li>
              <li className="py-2">Payment</li>
            </ul>
          </div>
          <div>
            <ul >
              <li className="font-bold">Assistance to the buyer</li>
              <li className="py-2">Find an order</li>
              <li className="py-2">Terms of delivery</li>
              <li className="py-2">Exchange and return of goods</li>
              <li className="py-2">Guarantee</li>
              <li className="py-2">Frequently asked questions</li>
              <li className="py-2">Terms of use of the site</li>
            </ul>
          </div>
        </div>

        <div className="w-min px-16">
          <ul className="flex flex-row justify-start gap-10 text-2xl ">
            <li>
              <FaTwitter />
            </li>

            <li>
              <FaFacebookF />
            </li>
            <li>
              <IoLogoTiktok />
            </li>
            <li>
              <PiInstagramLogoFill />
            </li>
          </ul>
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
