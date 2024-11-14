import React from "react";
import iklan from "../../assets/images/Rectangle 42.png";
import "./HomeHero.scss";

const HomeHero = ({ user }) => {
  return (
    <div className="home-hero">
      <div className="home-container">
        <div className="home-hero-info">
          <div className="home-welcome">
            <h1>Selamat Datang {user ? user.first_name : "User"}</h1>
          </div>
          <div className="r"></div>
          <div className="home-info">
            <div className="home-parkez">
              <div className="home-logo">parkEZ</div>
              <p>Status : Belum Berlangganan</p>
              <p>Hingga : 18/09/2024</p>
            </div>
            <div className="home-ezgarage">
              <div className="home-logo">EZ Garage</div>
              <p>Status : Belum Berlangganan</p>
              <p>Hingga : 18/09/2024</p>
            </div>
          </div>
        </div>
        <div className="home-iklan">
          <img src={iklan} alt="iklan" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
