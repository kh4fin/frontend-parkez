import React from "react";
import "./LokasiGroups.scss";
import imgLokasi from "../../assets/images/Rectangle 42.png";

const LokasiTwo = () => {
  return (
    <div id="row2" className="lokasi-row">
      <div className="lokasi-subtitle">
        <h2>Terdekat dari lokasi kamu...</h2>
      </div>
      <div className="lokasi-cards">
        <div className="lokasi-card">
          <img src={imgLokasi} alt="location" />
          <div className="lokasi-info">
            <h3>Nama Lokasi</h3>
            <p>Tersedia</p>
            <p>28/30</p>
            <div className="lokasi-btns">
              <div className="lokasi-btn">Booking Tempat</div>
              <div className="lokasi-btn">Navigasi</div>
            </div>
          </div>
        </div>
        <div className="lokasi-card">
          <img src={imgLokasi} alt="location" />
          <div className="lokasi-info">
            <h3>Nama Lokasi</h3>
            <p>Tersedia</p>
            <p>28/30</p>
            <div className="lokasi-btns">
              <div className="lokasi-btn">Booking Tempat</div>
              <div className="lokasi-btn">Navigasi</div>
            </div>
          </div>
        </div>
        <div className="lokasi-card">
          <img src={imgLokasi} alt="location" />
          <div className="lokasi-info">
            <h3>Nama Lokasi</h3>
            <p>Tersedia</p>
            <p>28/30</p>
            <div className="lokasi-btns">
              <div className="lokasi-btn">Booking Tempat</div>
              <div className="lokasi-btn">Navigasi</div>
            </div>
          </div>
        </div>
        <div className="lokasi-card">
          <img src={imgLokasi} alt="location" />
          <div className="lokasi-info">
            <h3>Nama Lokasi</h3>
            <p>Tersedia</p>
            <p>28/30</p>
            <div className="lokasi-btns">
              <div className="lokasi-btn">Booking Tempat</div>
              <div className="lokasi-btn">Navigasi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokasiTwo;
