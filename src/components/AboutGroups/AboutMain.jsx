import React from "react";
import "./AboutGroups.scss";

const AboutMain = () => {
  return (
    <div className="about-main">
      <div className="about-main-content">
        <h2>Tentang Kami</h2>
        <p>
          parkEZ adalah solusi modern untuk kebutuhan parkir Anda. Kami
          menyediakan layanan parkir langganan yang aman, nyaman, dan mudah
          diakses. Dengan teknologi terbaru, parkEZ memudahkan pengguna dalam
          mencari dan memesan tempat parkir di berbagai lokasi strategis. Kami
          berkomitmen untuk memberikan pengalaman parkir terbaik dengan keamanan
          dan kemudahan sebagai prioritas utama.
        </p>
        <div className="about-main-stats">
          <div className="about-main-stat-item">
            <h3>10K+</h3>
            <p>Pelanggan Puas</p>
          </div>
          <div className="about-main-stat-item">
            <h3>500+</h3>
            <p>Lokasi Parkir</p>
          </div>
          <div className="about-main-stat-item">
            <h3>100+</h3>
            <p>Mitra Kami</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
