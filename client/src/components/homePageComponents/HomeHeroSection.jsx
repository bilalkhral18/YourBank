import React from "react";
import { assets } from "../../assets/assets";
import RoundedCornerbtn from "../shared/RoundedCornerbtn";
import TransectionDetails from "./TransectionDetails";
import CurrencyConverter from "./CurrenctConverter";
const HomeHeroSection = () => {
  return (
    <div className="border-[2px] flex border-green-500 min-h-28 w-full mt-40 pl-[162px] pr-[297px] py-[140px]">
      <div className="w-1/2 border-[1px] border-black">
        <div className="flex items-center gap-x-2 p-2 bg-white/8 rounded-2xl w-fit h-fit">
          <div>
            <img src={assets.subtract} alt="Subtract" />
          </div>
          <p className="text-xs text-[#b7b7b7] pr-1">
            No LLC Required, No Credit Check.
          </p>
        </div>
        <h1 className="text-xl font-medium">
          Welcome to YourBank Empowering Your{" "}
          <span className="text-[#a1d12aeb]">Financial Journey</span>
        </h1>
        <p>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers' needs.
        </p>
        <RoundedCornerbtn
          btnText={"Open Account"}
          className={"px-2 py-2 rounded-3xl text-sm text-black"}
        />
      </div>
      <div className="w-1/3  border-[1px] border-black">
        <div>
          <h3>Your Transactions</h3>
          <TransectionDetails />
        </div>
        <div>
          <h3>Money Exchange</h3>
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
