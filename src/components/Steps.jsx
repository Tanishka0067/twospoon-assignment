import React from "react";
import location from "../assets/location.png";
import shipping from "../assets/Shipping.png";
import payment from "../assets/Payment.png";
const Steps = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center gap-10 p-14 font-[inter] tracking-wide font-medium">
        <div className="step flex flex-row items-center justify-center gap-2">
          <div className="icon">
            <img src={location} alt="address" className="w-6.5" />
          </div>
          <div className="text text-[#B2B2B2] ">
            <div className="num text-sm leading-[1]">Step 1</div>
            <div className="name text-lg">Address</div>
          </div>
        </div>
        <div className="step flex flex-row items-center justify-center gap-2">
          <div className="icon">
            <img src={shipping} alt="shipping" className="w-6.5" />
          </div>
          <div className="text text-[#B2B2B2]">
            <div className="num text-sm leading-[1]">Step 2</div>
            <div className="name text-lg">Shipping</div>
          </div>
        </div>
        <div className="step flex flex-row items-center justify-center gap-2">
          <div className="icon">
            <img src={payment} alt="payment" className="w-6.5" />
          </div>
          <div className="text ">
            <div className="num text-sm leading-[1]">Step 3</div>
            <div className="name text-lg ">Payment</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
