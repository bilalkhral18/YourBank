import React from "react";
import { assets } from "../src/assets/assets";
import Navbar from "../src/components/common/Navbar";
import HomeHeroSection from "../src/components/homePageComponents/HomeHeroSection";
const HomeScreen = () => {
  return (
    <div className="container  mx-auto">
      <div
        style={{
          backgroundImage: `url(${assets.Abstractimg})`,
        }}
        className="abstract-bg"
      ></div>
      <Navbar />
      <HomeHeroSection />
    </div>
  );
};

export default HomeScreen;
