import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./HomePricing.scss";
import axiosInstance from "../../utils/axiosConfig";

const HomePricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/api/paket/`
        );
        setPricingPlans(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
        setLoading(false);
      }
    };

    fetchPricingPlans();
  }, []);

  useEffect(() => {
    const loadMidtransScript = () => {
      let scriptTag = document.createElement("script");
      scriptTag.src = "https://app.midtrans.com/snap/snap.js";
      scriptTag.setAttribute(
        "data-client-key",
        import.meta.env.VITE_MIDTRANS_CLIENT_KEY
      );
      document.body.appendChild(scriptTag);
    };

    loadMidtransScript();
  }, []);

  const handlePurchase = async (planId) => {
    try {
      // Meminta Snap token dari backend
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/api/beli-paket/`,
        { paketId: planId }
      );

      const { snapToken } = response.data;
      console.log(response.data);

      // Memunculkan Midtrans Snap Popup
      window.snap.pay(snapToken, {
        onSuccess: function (result) {
          alert("Pembayaran berhasil!");
          console.log(result);
        },
        onPending: function (result) {
          alert("Pembayaran pending, menunggu konfirmasi.");
          console.log(result);
        },
        onError: function (result) {
          alert("Pembayaran gagal!");
          console.log(result);
        },
        onClose: function () {
          alert("Anda menutup pop-up tanpa menyelesaikan pembayaran.");
        },
      });
    } catch (error) {
      console.error("Error during purchase:", error);
      alert("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
          {pricingPlans
            .filter((plan) => plan.tipe_paket === "parkez")
            .slice(0, 4)
            .map((plan, index) => (
              <div key={index} className="home-pricing-card">
                <h3>{plan.nama_paket}</h3>
                <p className="home-pricing-card-desc">{plan.deskripsi}</p>
                <div className="home-pricing-discount">
                  <p>{plan.diskon}</p>
                  <p className="home-pricing-btn-discount">Diskon</p>
                </div>
                <p className="home-pricing-price">{plan.harga}</p>
                <div className="home-pricing-checkout">
                  <NavLink onClick={() => handlePurchase(plan.id)}>
                    Pilih Paket
                  </NavLink>
                </div>
                <ul>
                  {plan.benefits.split(",").map((benefit, i) => (
                    <li key={i}>{benefit.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="home-pricing-cards-2">
          {pricingPlans
            .filter((plan) => plan.tipe_paket === "parkez")
            .slice(0, 2)
            .map((plan, index) => (
              <div key={index} className="home-pricing-card">
                <h3>{plan.nama_paket}</h3>
                <p className="home-pricing-card-desc">{plan.deskripsi}</p>
                <div className="home-pricing-discount">
                  <p>{plan.diskon}</p>
                  <p className="home-pricing-btn-discount">Diskon</p>
                </div>
                <p className="home-pricing-price">{plan.harga}</p>
                <div className="home-pricing-checkout">
                  <NavLink onClick={() => handlePurchase(plan.id)}>
                    Pilih Paket
                  </NavLink>
                </div>
                <ul>
                  {plan.benefits.split(",").map((benefit, i) => (
                    <li key={i}>{benefit.trim()}</li>
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
          {pricingPlans
            .filter((plan) => plan.tipe_paket === "ezgarage")
            .slice(0, 4)
            .map((plan, index) => (
              <div key={index} className="home-pricing-card">
                <h3>{plan.nama_paket}</h3>
                <p className="home-pricing-card-desc">{plan.deskripsi}</p>
                <div className="home-pricing-discount">
                  <p>{plan.diskon}</p>
                  <p className="home-pricing-btn-discount">Diskon</p>
                </div>
                <p className="home-pricing-price">{plan.harga}</p>
                <div className="home-pricing-checkout">
                  <a href="#" onClick={() => handlePurchase(plan.id)}>
                    Pilih Paket
                  </a>
                </div>
                <ul>
                  {plan.benefits.split(",").map((benefit, i) => (
                    <li key={i}>{benefit.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="home-pricing-cards-2">
          {pricingPlans
            .filter((plan) => plan.tipe_paket === "ezgarage")
            .slice(0, 2)
            .map((plan, index) => (
              <div key={index} className="home-pricing-card">
                <h3>{plan.nama_paket}</h3>
                <p className="home-pricing-card-desc">{plan.deskripsi}</p>
                <div className="home-pricing-discount">
                  <p>{plan.diskon}</p>
                  <p className="home-pricing-btn-discount">Diskon</p>
                </div>
                <p className="home-pricing-price">{plan.harga}</p>
                <div className="home-pricing-checkout">
                  <a href="#" onClick={() => handlePurchase(plan.id)}>
                    Pilih Paket
                  </a>
                </div>
                <ul>
                  {plan.benefits.split(",").map((benefit, i) => (
                    <li key={i}>{benefit.trim()}</li>
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
