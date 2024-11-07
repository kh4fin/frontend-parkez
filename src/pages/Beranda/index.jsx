import React from "react";
import BerandaHero from "../../components/BerandaGroups/BerandaHero";
import NavbarSecond from "../../components/NavbarSecond";
import BerandaFeatures from "../../components/BerandaGroups/BerandaFeatures";
import BerandaTestimonials from "../../components/BerandaGroups/BerandaTestimonials";
import BerandaCTA from "../../components/BerandaGroups/BerandaCTA";
import Footer from "../../components/Footer";

const Beranda = () => {
  return (
    <div>
      <NavbarSecond />
      <BerandaHero />
      <BerandaFeatures />
      <BerandaTestimonials />
      <BerandaCTA />
      <Footer />
    </div>
  );
};

export default Beranda;
