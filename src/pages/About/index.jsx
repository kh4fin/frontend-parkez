import React from "react";
import NavbarSecond from "../../components/NavbarSecond";
import AboutMain from "../../components/AboutGroups/AboutMain";
import AboutGarage from "../../components/AboutGroups/AboutGarage";
import Footer from "../../components/Footer";
import AboutEzgarage from "../../components/AboutGroups/AboutEzgarage";

const About = () => {
  return (
    <div>
      <NavbarSecond />
      <AboutMain />
      <AboutGarage />
      <AboutEzgarage />
      <Footer />
    </div>
  );
};

export default About;
