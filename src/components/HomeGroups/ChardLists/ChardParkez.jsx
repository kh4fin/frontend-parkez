import React from "react";
import { NavLink } from "react-router-dom";
import { FaParking } from "react-icons/fa";
import "./ChardParkez.scss";

const ChardParkez = () => {
  const pricingPlans = [
    {
      title: "EZ Ride Daily",
      desc: "Cocok untuk anda yang mengunjungi banyak tempat dalam sehari.",
      originalPrice: "Rp 20.000",
      discountedPrice: "Rp 10.000/hari",
      benefits: ["Parkir 24 jam", "Akses ke semua lokasi", "Keamanan terjamin"],
    },
    {
      title: "EZ Ride Weekly",
      desc: "Kunjungan seminggu yang terbaik bagi anda.",
      originalPrice: "Rp 75.000",
      discountedPrice: "Rp 60.000/minggu",
      benefits: [
        "Parkir 24 jam",
        "Akses ke semua lokasi",
        "Keamanan terjamin",
        "Diskon 10% untuk perpanjangan",
      ],
    },
    {
      title: "EZ Ride Monthly",
      desc: "Sering mengunjungi tempat yang sama? Paket bulanan adalah pilihan terbaik.",
      originalPrice: "Rp 300.000",
      discountedPrice: "Rp 200.000/bulan",
      benefits: [
        "Parkir 24 jam",
        "Akses ke semua lokasi",
        "Keamanan terjamin",
        "Diskon 10% untuk perpanjangan",
      ],
    },
    {
      title: "EZ Ride Yearly",
      desc: "Pilihan hemat dengan berbagai keuntungan untuk pengguna setia.",
      originalPrice: "Rp 2.700.000",
      discountedPrice: "Rp 2.000.000/tahun",
      benefits: [
        "Parkir 24 jam",
        "Akses ke semua lokasi",
        "Keamanan terjamin",
        "Support prioritas",
        "Diskon 15% untuk perpanjangan",
      ],
    },
  ];

  return (
    <div>
      <nav className="chardlist-pricing-nav">
        <NavLink to="/home" className="chardlist-icon">
          {/* <i className="fas fa-arrow-left"></i> */}
          <FaParking className="chardlist-icon-left" />
        </NavLink>
        <div className="chardlist-logo">
          <FaParking className="chardlist-icon-parking" />
          {/* <i className="fas fa-parking"></i> */}
          park<span>EZ</span>
        </div>
      </nav>

      <div className="chardlist-pricing">
        <div className="chardlist-parkez-pricing">
          <div className="chardlist-cards">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="chardlist-pricing-card">
                <h3>{plan.title}</h3>
                <p className="chardlist-pricing-card-desc">{plan.desc}</p>
                <div className="chardlist-pricing-discount">
                  <p>{plan.originalPrice}</p>
                  <p className="chardlist-pricing-btn-discount">Diskon</p>
                </div>
                <p className="chardlist-pricing-price">
                  {plan.discountedPrice}
                </p>
                <div className="chardlist-pricing-checkout">
                  <a href="#">Pilih Paket</a>
                </div>
                <div className="chardlist-pricing-r"></div>
                <ul>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChardParkez;
