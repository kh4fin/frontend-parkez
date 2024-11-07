import React from "react";
import { FaShieldAlt, FaWallet, FaCalendarAlt } from "react-icons/fa";
import "./BerandaGroups.scss";

const BerandaFeatures = () => {
  return (
    <section className="beranda-features">
      <h2>Fitur Utama Kami</h2>
      <div className="beranda-feature-list">
        <div className="beranda-feature-item">
          <FaShieldAlt className="beranda-feature-icon" size={40} />
          <h3>Parkir Aman dan Terjamin</h3>
          <p>
            Layanan parkir yang terhubung dengan lokasi yang terjamin
            keamanannya.
          </p>
        </div>
        <div className="beranda-feature-item">
          <FaWallet className="beranda-feature-icon" size={40} />
          <h3>Pembayaran Digital Mudah</h3>
          <p>
            Bayar parkir dengan satu klik menggunakan e-wallet favorit Anda.
          </p>
        </div>
        <div className="beranda-feature-item">
          <FaCalendarAlt className="beranda-feature-icon" size={40} />
          <h3>Berlangganan Fleksibel</h3>
          <p>
            Pilih paket harian, bulanan, atau tahunan sesuai kebutuhan Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BerandaFeatures;
