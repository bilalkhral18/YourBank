import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [color, setColor] = useState(false);
  return (
    <header className="py-1 px-1 fixed top-7 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center h-[65px] w-[85%] rounded-[45px] bg-white/8 backdrop-blur-md shadow-md">
      <div className="h-4/5 w-[8%] mx-5 my-1">
        <img
          src={assets.logo}
          alt="logo"
          className="h-[45px] w-[100%] object-contain"
        />
      </div>

      <div className="w-[63%] flex justify-between items-center text-sm">
        <div className="w-[45%] h-4/5 flex justify-between items-center gap-4 text-[14px] font-[500]">
          <a
            href="#home"
            className=" hover:bg-white/5 active:bg-white/5 px-4 py-2 rounded-full transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#careers"
            className=" hover:bg-white/5 active:bg-white/5 px-4 py-2 rounded-full transition-all duration-300"
          >
            Careers
          </a>
          <a
            href="#about"
            className=" hover:bg-white/5 active:bg-white/5 px-4 py-2 rounded-full transition-all duration-300"
          >
            About
          </a>
          <a
            href="#security"
            className=" hover:bg-white/5 active:bg-white/5 px-4 py-2 rounded-full transition-all duration-300"
          >
            Security
          </a>
        </div>

        <div>
          <button
            onClick={() => setColor(!color)}
            className={`border-none mr-5 px-4 py-2   rounded-[45px] cursor-pointer transition-transform duration-300 ease-in-out  ${
              color ? "bg-[#a1d12aeb]" : ""
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setColor(!color)}
            className={`border-none mr-5 px-4 py-2   rounded-[45px] cursor-pointer transition-transform duration-300 ease-in-out ${
              color ? "" : "bg-[#a1d12aeb]"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
