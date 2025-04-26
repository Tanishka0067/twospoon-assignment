import React from "react";
import Payment from "./Payment";
import Summary from "./Summary";

const Content = () => {
  return (
    <div className="flex flex-row justify-around mb-18">
      <Summary />
      <Payment />
    </div>
  );
};

export default Content;
