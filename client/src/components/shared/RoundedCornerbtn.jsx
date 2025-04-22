import React from "react";

const RoundedCornerbtn = ({ btnText, className }) => {
  return (
    <div>
      <button className={`bg-[#a1d12aeb] ${className}`}>{btnText}</button>
    </div>
  );
};

export default RoundedCornerbtn;
