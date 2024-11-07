import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeHero from "../../components/HomeGroups/HomeHero";
import HomePricing from "../../components/HomeGroups/HomePricing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomePricing />
    </div>
  );
};

export default Home;
