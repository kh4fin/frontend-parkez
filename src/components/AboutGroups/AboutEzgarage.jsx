import React from "react";
import imgEz from "../../assets/images/1020 1.png";
import "./AboutGroups.scss";

const AboutEzgarage = () => {
  return (
    <section className="about-ezgarage">
      <div className="about-image">
        <img src={imgEz} alt="EZ Garage" />
      </div>
      <h1>EZ Garage</h1>
      <div className="about-ezgarage-content">
        <p>
          Perkenalkan EZ Garage: Solusi Parkir Pintar untuk Era Digital Tidak
          punya tempat parkir? Jangan khawatir! EZ Garage hadir sebagai jawaban
          inovatif untuk kebutuhan parkir Anda.
        </p>
        <ul>
          <li>
            Menemukan garasi terdekat yang tersedia untuk parkir jangka pendek
            atau panjang
          </li>
          <li>Memesan spot parkir dengan mudah, kapan saja dan di mana saja</li>
          <li>Membayar secara digital tanpa ribet uang tunai</li>
          <li>Memantau keamanan kendaraan Anda melalui sistem terintegrasi</li>
          <li>Mengakses kendaraan Anda 24/7 dengan sistem masuk yang aman</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutEzgarage;
