import React from "react";
import location from "../assets/location.png";
import shipping from "../assets/Shipping.png";
import payment from "../assets/Payment.png";
const Steps = () => {
  return (
    <>
      <div>
        <div className="step">
          <div className="icon">
            <img src={location} alt="address" />
          </div>
          <div className="text">
            <div className="num">Step 1</div>
            <div className="name">Address</div>
          </div>
        </div>
        <div className="step">
          <div className="icon">
            <img src={shipping} alt="shipping" />
          </div>
          <div className="text">
            <div className="num">Step 2</div>
            <div className="name">Shipping</div>
          </div>
        </div>
        <div className="step">
          <div className="icon">
            <img src={payment} alt="payment" />
          </div>
          <div className="text">
            <div className="num">Step 3</div>
            <div className="name">Payment</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
