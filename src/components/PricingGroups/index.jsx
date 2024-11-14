import React, { useState } from "react";
import "./PricingGroups.scss";
import { FaMotorcycle, FaCar } from "react-icons/fa";

const PricingGroups = () => {
  const [isParkEz, setIsParkEz] = useState(true);

  const toggleService = () => {
    setIsParkEz(!isParkEz);
  };

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
    <section className="pricing-groups">
      <div
        className="pricing-groups-thumb-parkez"
        style={{ display: isParkEz ? "block" : "none" }}
      >
        <h2>Paket Berlangganan parkEZ</h2>
        <p className="pricing-groups-section-description">
          Pilih paket yang sesuai dengan kebutuhan parkir Anda. Kami menawarkan
          fleksibilitas dengan harga yang terjangkau.
        </p>
      </div>
      <div
        className="pricing-groups-thumb-ezgarage"
        style={{ display: !isParkEz ? "block" : "none" }}
      >
        <h2>Paket Berlangganan EZ Garage</h2>
        <p className="pricing-groups-section-description">
          EZ Garage adalah layanan berbasis aplikasi yang menghubungkan pemilik
          kendaraan dengan pemilik garasi yang tersedia.
        </p>
      </div>
      <div
        className={`pricing-groups-btn-slider ${!isParkEz ? "active" : ""}`}
        onClick={toggleService}
      >
        <span className="pricing-groups-slider-circle"></span>
        <p className="pricing-groups-parkez">parkEZ</p>
        <p className="pricing-groups-ezgarage">EZGARAGE</p>
      </div>

      {isParkEz ? (
        <>
          <div id="pricing-groups-parkez">
            <div className="pricing-groups-parkez-motor-title">
              <FaMotorcycle className="pricing-groups-icon" />
              <p className="pricing-groups-title">Motor</p>
            </div>
            <div className="pricing-groups-pricing-cards">
              {pricingPlans.slice(0, 4).map((plan, index) => (
                <div key={index} className="pricing-groups-pricing-card">
                  <h3>{plan.title}</h3>
                  <p className="pricing-groups-pricing-card-desc">
                    {plan.desc}
                  </p>
                  <div className="pricing-groups-pricing-discount">
                    <p>{plan.originalPrice}</p>
                    <p className="pricing-groups-pricing-btn-discount">
                      Diskon
                    </p>
                  </div>
                  <p className="pricing-groups-pricing-price">
                    {plan.discountedPrice}
                  </p>
                  <div className="pricing-groups-pricing-checkout">
                    <a href="#">Pilih Paket</a>
                  </div>
                  <div className="pricing-groups-pricing-r"></div>
                  <ul>
                    {plan.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="pricing-groups-parkez-motor-title">
              <FaCar className="pricing-groups-icon" />
              <p className="pricing-groups-title">Mobil</p>
            </div>
            <div className="pricing-groups-pricing-cards">
              {pricingPlans.slice(0, 4).map((plan, index) => (
                <div key={index} className="pricing-groups-pricing-card">
                  <h3>{plan.title}</h3>
                  <p className="pricing-groups-pricing-card-desc">
                    {plan.desc}
                  </p>
                  <div className="pricing-groups-pricing-discount">
                    <p>{plan.originalPrice}</p>
                    <p className="pricing-groups-pricing-btn-discount">
                      Diskon
                    </p>
                  </div>
                  <p className="pricing-groups-pricing-price">
                    {plan.discountedPrice}
                  </p>
                  <div className="pricing-groups-pricing-checkout">
                    <a href="#">Pilih Paket</a>
                  </div>
                  <div className="pricing-groups-pricing-r"></div>
                  <ul>
                    {plan.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="pricing-groups-parkez-motor-title">
            <FaCar className="pricing-groups-icon" />
            <p className="pricing-groups-title">Mobil</p>
          </div>
          <div className="pricing-groups-pricing-cards">
            {pricingPlans.slice(0, 4).map((plan, index) => (
              <div key={index} className="pricing-groups-pricing-card">
                <h3>{plan.title}</h3>
                <p className="pricing-groups-pricing-card-desc">{plan.desc}</p>
                <div className="pricing-groups-pricing-discount">
                  <p>{plan.originalPrice}</p>
                  <p className="pricing-groups-pricing-btn-discount">Diskon</p>
                </div>
                <p className="pricing-groups-pricing-price">
                  {plan.discountedPrice}
                </p>
                <div className="pricing-groups-pricing-checkout">
                  <a href="#">Pilih Paket</a>
                </div>
                <div className="pricing-groups-pricing-r"></div>
                <ul>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingGroups;
