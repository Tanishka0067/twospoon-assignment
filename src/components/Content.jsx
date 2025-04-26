import React from "react";
import Payment from "./Payment";
import Summary from "./Summary";

const Content = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center gap-[96px] mx-auto sm:px-[160px] px-10 mt-4 mb-18">
      <Summary />
      <Payment />
    </div>
  );
};

export default Content;
