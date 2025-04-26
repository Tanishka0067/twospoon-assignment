import React from "react";
import card from "../assets/card.png";
const Payment = () => {
  return (
    <div>
      <div className="w-full">
        <h2 className="text-lg font-medium mb-4">Payment</h2>

        <div className="flex border-b mb-6">
          <button className={`pb-2 px-2 'border-b-2 border-black font-medium`}>
            Credit Card
          </button>
          <button
            className={`pb-2 px-2 ml-4 'border-b-2 border-black font-mediumtext-gray-500'}`}
          >
            PayPal
          </button>
          <button
            className={`pb-2 px-2 ml-4 border-b-2 border-black font-medium text-gray-500'}`}
          >
            PayPal Credit
          </button>
        </div>

        <div className="mb-6">
          <img src={card} alt="" />

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 border rounded text-gray-400"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border rounded text-gray-400"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Exp Date"
                className="w-1/2 p-3 border rounded text-gray-400"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-3 border rounded text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input type="checkbox" checked="true" className="h-4 w-4 black" />
          <label htmlFor="sameAddress" className="ml-2">
            Same as billing address
          </label>
        </div>

        <div className="flex space-x-4">
          <button className="w-1/2 py-3 border border-gray-300 rounded font-medium">
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
