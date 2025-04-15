import React from "react";
import { assets } from "../src/assets/assets";
import Navbar from "../src/components/common/Navbar";
const HomeScreen = () => {
  return (
    <div className="container ml-auto mr-auto">
      <div
        style={{
          backgroundImage: `url(${assets.Abstractimg})`,
        }}
        className="abstract-bg"
      ></div>
      <Navbar />
    </div>
  );
};

export default HomeScreen;
