import React from "react";
import Payment from "./Payment";
import Summary from "./Summary";

const Content = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-[96px] mx-auto px-[160px] mt-4 mb-18">
      <Summary />
      <Payment />
    </div>
  );
};

export default Content;
