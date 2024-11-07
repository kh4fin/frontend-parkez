import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePricing.scss";

const HomePricing = () => {
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
    <div className="home-pricing">
      <div className="home-pricing-nav">
        <i className="fas fa-arrow-left"></i>
        <div className="home-pricing-logo">
          <i className="fas fa-parking"></i>
          park<span>EZ</span>
        </div>
      </div>

      <div className="home-pricing-parkez">
        <div className="home-pricing-header">
          <div className="home-pricing-left">
            <div className="home-pricing-logo">
              <i className="fas fa-parking"></i>
              park<span>EZ</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="home-pricing-right">
            <NavLink to="/parkez-lists" className="home-pricing-lihatSemua">
              lihat semua
            </NavLink>
          </div>
        </div>
        <div className="home-pricing-cards">
          {pricingPlans.slice(0, 4).map((plan, index) => (
            <div key={index} className="home-pricing-card">
              <h3>{plan.title}</h3>
              <p className="home-pricing-card-desc">{plan.desc}</p>
              <div className="home-pricing-discount">
                <p>{plan.originalPrice}</p>
                <p className="home-pricing-btn-discount">Diskon</p>
              </div>
              <p className="home-pricing-price">{plan.discountedPrice}</p>
              <div className="home-pricing-checkout">
                <a href="#">Pilih Paket</a>
              </div>
              <div className="home-pricing-r"></div>
              <ul>
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="home-pricing-cards-2">
          {/* Tampilkan 4 cards di sini dengan map */}
          {pricingPlans.slice(0, 2).map((plan, index) => (
            <div key={index} className="home-pricing-card">
              <h3>{plan.title}</h3>
              <p className="home-pricing-card-desc">{plan.desc}</p>
              <div className="home-pricing-discount">
                <p>{plan.originalPrice}</p>
                <p className="home-pricing-btn-discount">Diskon</p>
              </div>
              <p className="home-pricing-price">{plan.discountedPrice}</p>
              <div className="home-pricing-checkout">
                <a href="#">Pilih Paket</a>
              </div>
              <div className="home-pricing-r"></div>
              <ul>
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="home-pricing-ezgarage">
        <div className="home-pricing-header">
          <div className="home-pricing-left">
            <div className="home-pricing-logo">
              <i className="fas fa-parking"></i>
              EZ<span>Garage</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="home-pricing-right">
            <NavLink to="/ezgarage-lists" className="home-pricing-lihatSemua">
              lihat semua
            </NavLink>
          </div>
        </div>
        <div className="home-pricing-cards">
          {pricingPlans.slice(0, 4).map((plan, index) => (
            <div key={index} className="home-pricing-card">
              <h3>{plan.title}</h3>
              <p className="home-pricing-card-desc">{plan.desc}</p>
              <div className="home-pricing-discount">
                <p>{plan.originalPrice}</p>
                <p className="home-pricing-btn-discount">Diskon</p>
              </div>
              <p className="home-pricing-price">{plan.discountedPrice}</p>
              <div className="home-pricing-checkout">
                <a href="#">Pilih Paket</a>
              </div>
              <div className="home-pricing-r"></div>
              <ul>
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="home-pricing-cards-2">
          {pricingPlans.slice(0, 2).map((plan, index) => (
            <div key={index} className="home-pricing-card">
              <h3>{plan.title}</h3>
              <p className="home-pricing-card-desc">{plan.desc}</p>
              <div className="home-pricing-discount">
                <p>{plan.originalPrice}</p>
                <p className="home-pricing-btn-discount">Diskon</p>
              </div>
              <p className="home-pricing-price">{plan.discountedPrice}</p>
              <div className="home-pricing-checkout">
                <a href="#">Pilih Paket</a>
              </div>
              <div className="home-pricing-r"></div>
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
  );
};

export default HomePricing;
