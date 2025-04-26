import React from "react";
import phone from "../assets/Phone.png";
import headphones from "../assets/headphones.png";
import watch from "../assets/watch.png";
const Summary = () => {
  return (
    <div className="sm:flex hidden flex-col px-6 p-6 border-2 border-gray-200  bg-white rounded-xl font-[inter] tracking-wide">
      <h2 className="text-2xl font-medium mb-4 ">Summary</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-100 p-4 px-4 rounded-xl">
          <div className="flex items-center gap-6">
            <img src={phone} alt="phone" />
            <span className="font-medium">Apple iPhone 14 Pro Max 128Gb</span>
          </div>
          <span className="font-extrabold pl-16 ">$1399</span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-4  px-4 rounded-xl">
          <div className="flex items-center gap-6">
            <img src={headphones} alt="" />
            <span className="font-medium">AirPods Max Silver</span>
          </div>
          <span className="font-extrabold  pl-16">$549</span>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-4 px-4 rounded-xl">
          <div className="flex items-center gap-6">
            <img src={watch} alt="" />
            <span className="font-medium">Apple Watch Series 9 GPS 41mm</span>
          </div>
          <span className=" pl-16 font-extrabold">$399</span>
        </div>
      </div>

      {/* Address */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-600">Address</h3>
        <p className="mt-1">1131 Dusty Townline, Jacksonville, TX 40322</p>
      </div>

      {/* Shipment Method */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-600">Shipment method</h3>
        <p className="mt-1 ">Free</p>
      </div>

      {/* Pricing Summary */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span className="font-bold">Subtotal</span>
          <span className="font-bold">$2347</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Estimated Tax</span>
          <span className="text-black font-semibold">$50</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Estimated shipping & Handling</span>
          <span className="text-black font-semibold">$29</span>
        </div>

        <div className="flex justify-between  pt-3 ">
          <span className="font-bold">Total</span>
          <span className="font-extrabold">$2426</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
