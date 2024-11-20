import React, { useState, useEffect } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { NavLink } from "react-router-dom";
import { FaParking } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./ChardParkez.scss";

const ChardParkez = () => {
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
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handlePurchase = async (planId) => {
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/api/beli-paket/`,
        {
          paketId: planId,
        }
      );

      const { snapToken, midtrans_url } = response.data;
      console.log(response.data);

      window.snap.pay(snapToken, {
        onSuccess: async function (result) {
          alert("Pembayaran berhasil!");

          try {
            await axiosInstance.post(
              `${import.meta.env.VITE_API_URL}/api/midtrans-notification/`,
              {
                transactionId: result.transaction_id,
                orderId: result.order_id,
                status: result.transaction_status,
              }
            );

            window.location.href = "/home";
          } catch (error) {
            console.error("Error saat mengirim data transaksi:", error);
          }

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
    <div>
      <nav className="chardlist-pricing-nav">
        <NavLink to="/home" className="chardlist-icon">
          {/* <i className="fas fa-arrow-left"></i> */}
          <IoMdArrowRoundBack className="chardlist-icon-left" />
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
            {pricingPlans
              .filter((plan) => plan.tipe_paket === "parkez")
              .slice(0, 4)
              .map((plan, index) => (
                <div key={index} className="chardlist-pricing-card">
                  <h3>{plan.nama_paket}</h3>
                  <p className="chardlist-pricing-card-desc">
                    {plan.deskripsi}
                  </p>
                  <div className="chardlist-pricing-discount">
                    <p>{plan.diskon}</p>
                    <p className="chardlist-pricing-btn-discount">Diskon</p>
                  </div>
                  <p className="chardlist-pricing-price">{plan.harga}</p>
                  <div className="chardlist-pricing-checkout">
                    <NavLink onClick={() => handlePurchase(plan.id)}>
                      Pilih Paket
                    </NavLink>
                  </div>
                  <div className="chardlist-pricing-r"></div>
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
    </div>
  );
};

export default ChardParkez;
