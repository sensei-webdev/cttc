import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import FeatureSection from "../sections/FeatureSection";
import WhyUs from "../sections/WhyUs";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <FeatureSection/>
      <WhyUs/>
    </div>
  );
};

export default Home;
