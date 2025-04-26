import React from "react";
import card from "../assets/card.png";
const Payment = () => {
  return (
    <div className="">
      <div className="w-full ">
        <h2 className="text-lg font-medium mb-4">Payment</h2>

        <div className="flex flex-row justify-between mb-12 lg:w-3/4 text-nowrap">
          <button className="pb-2  border-b-2 border-black font-medium">
            Credit Card
          </button>
          <button className="pb-2  sm:ml-4  border-black font-medium text-gray-500">
            PayPal
          </button>
          <button className="pb-2 sm: ml-4  border-black font-medium text-gray-500">
            PayPal Credit
          </button>
        </div>

        <div className="mb-6 flex  flex-col sm:justify-start justify-center items-center sm:items-start gap-6">
          <img src={card} alt="card" className="sm:w-3/4" />

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 pr-12 border-2 border-gray-200 rounded-md text-gray-500"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 pr-12 border-2 border-gray-200 rounded-md text-gray-500"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Exp Date"
                className="w-1/2 p-3 pr-12 border-2 border-gray-200 rounded-md text-gray-500"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-3 pr-12 border-2 border-gray-200 rounded-md text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input type="checkbox" className="h-4 w-4 accent-black" />
          <label htmlFor="sameAddress" className="ml-2 text-md font-semibold">
            Same as billing address
          </label>
        </div>

        <div className="flex space-x-4">
          <button className="w-1/2 py-3 border border-black rounded font-medium">
            Back
          </button>
          <button className="w-1/2 py-3 bg-black text-white rounded font-medium">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
