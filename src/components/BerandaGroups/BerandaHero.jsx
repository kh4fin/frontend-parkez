import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../../assets/images/heroImage1.jpg";
import "./BerandaGroups.scss";

const BerandaHero = () => {
  return (
    <div className="beranda-hero">
      <div className="beranda-content">
        <h1>Parkir Mudah Dimanapun Anda Berada</h1>
        <p>Langganan parkir bulanan di lokasi favorit Anda tanpa repot.</p>
        <NavLink to="/subscribe" className="bernda-btn-cta">
          Mulai Berlangganan
        </NavLink>
      </div>
      <div className="beranda-hero-image">
        <img src={heroImage} alt="Isometric car parking" />
      </div>
    </div>
  );
};

export default BerandaHero;
