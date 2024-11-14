import React from "react";
import "./KontakGroups.scss";

const KontakGroups = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
  };

  return (
    <div className="kontak-groups">
      <h2 className="kontak-groups-title">Hubungi Kami</h2>
      <p className="kontak-groups-section-description">
        Jika Anda memiliki pertanyaan atau memerlukan bantuan, jangan ragu untuk
        menghubungi kami. Kami siap membantu Anda!
      </p>
      <div className="kontak-groups-container">
        <form className="kontak-groups-contact-form">
          <h1 className="kontak-groups-form-title">Ada pertanyaan?</h1>
          <div className="kontak-groups-form-group">
            <label className="kontak-groups-label" htmlFor="name">
              Nama
            </label>
            <input
              className="kontak-groups-input"
              type="text"
              id="name"
              name="name"
              placeholder="Nama Anda"
              required
            />
          </div>
          <div className="kontak-groups-form-group">
            <label className="kontak-groups-label" htmlFor="email">
              Email
            </label>
            <input
              className="kontak-groups-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email Anda"
              required
            />
          </div>
          <div className="kontak-groups-form-group">
            <label className="kontak-groups-label" htmlFor="message">
              Pesan
            </label>
            <textarea
              className="kontak-groups-textarea"
              id="message"
              name="message"
              rows="5"
              placeholder="Pesan Anda"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="kontak-groups-btn-cta"
            onClick={handleSubmit}
          >
            Kirim Pesan
          </button>
        </form>

        <div className="kontak-groups-contact-info">
          <h3 className="kontak-groups-info-title">Info Kontak</h3>
          <a className="kontak-groups-link" href="https://wa.me/6281234567890">
            <i className="fas fa-phone"></i> +62 812 3456 7890
          </a>
          <a className="kontak-groups-link" href="mailto:info@parkEZ.com">
            <i className="fas fa-envelope"></i> info@parkEZ.com
          </a>
          <a
            className="kontak-groups-link"
            href="https://maps.app.goo.gl/SNJfy9rgxuh4mTPh8"
          >
            <i className="fas fa-map-marker-alt"></i>
            Jl. Bersama No. 1, Jakarta
          </a>
        </div>
      </div>
    </div>
  );
};

export default KontakGroups;
