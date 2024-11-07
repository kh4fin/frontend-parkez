import React from "react";
import img79993 from "../../assets/images/79993.jpg";
import "./BerandaGroups.scss";

const BerandaTestimonials = () => {
  return (
    <section className="beranda-testimonials">
      <h2>Apa Kata Pelanggan Kami</h2>
      <div className="beranda-testimonial-list">
        <div className="beranda-testimonial-item">
          <p>
            "Layanan parkirnya sangat membantu, saya tidak perlu lagi khawatir
            mencari tempat parkir setiap hari. Sungguh memudahkan!"
          </p>
          <div className="beranda-customer-info">
            <img src={img79993} alt="customer" />
            <h3>John Doe</h3>
            <span>Pengguna Langganan</span>
          </div>
        </div>
        <div className="beranda-testimonial-item">
          <p>
            "Pembayaran digitalnya sangat cepat dan mudah. Saya bisa menggunakan
            e-wallet favorit saya tanpa masalah."
          </p>
          <div className="beranda-customer-info">
            <img src={img79993} alt="customer" />
            <h3>John Doe</h3>
            <span>Pelanggan Setia</span>
          </div>
        </div>
        <div className="beranda-testimonial-item">
          <p>
            "Berlangganan fleksibel sesuai kebutuhan saya, sangat memuaskan dan
            efisien!"
          </p>
          <div className="beranda-customer-info">
            <img src={img79993} alt="customer" />
            <h3>John Doe</h3>
            <span>Pelanggan Baru</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BerandaTestimonials;
