import React from "react";
import { NavLink } from "react-router-dom";
import "./BerandaGroups.scss";

const BerandaCTA = () => {
  return (
    <section className="beranda-cta">
      <div className="beranda-cta-content">
        <h2>Siap Berlangganan Parkir</h2>
        <p>
          Daftar sekarang dan nikmati kemudahan parkir di lokasi favorit Anda
          tanpa repot!
        </p>
        <NavLink to="/register" className="beranda-btn-cta">
          Mulai Sekarang
        </NavLink>
      </div>
    </section>
  );
};

export default BerandaCTA;
