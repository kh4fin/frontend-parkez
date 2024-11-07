import React from "react";
import img1 from "../../assets/images/png-clipart-car.png";
import "./AboutGroups.scss";

const AboutGarage = () => {
  return (
    <div className="about-garage">
      <div className="about-garage-content">
        <h1>Bayar Sekali, Parkir Dimana Saja Dengan Gratis</h1>
      </div>
      <div className="about-garage-image">
        <div className="about-img">
          <img src={img1} alt="about-garage-parking" />
        </div>
        <div className="about-garage-desc">
          <p>
            Cukup membeli salah satu paket, kamu dapat parkir dimanapun secara
            gratis di berbagai mitra yang telah bekerja sama dengan kami
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutGarage;
