import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import FeatureSection from "../sections/FeatureSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <FeatureSection/>
    </div>
  );
};

export default Home;
