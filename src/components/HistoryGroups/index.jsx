import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosConfig";
import Slider from "react-slick";
import "./HistoryGroups.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HistoryGroups = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("en-US", { month: "short" })
  );
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const months = [
    { label: "Januari", value: "Jan" },
    { label: "Februari", value: "Feb" },
    { label: "Maret", value: "Mar" },
    { label: "April", value: "Apr" },
    { label: "Mei", value: "Mei" },
    { label: "Juni", value: "Jun" },
    { label: "Juli", value: "Jul" },
    { label: "Agustus", value: "Aug" },
    { label: "September", value: "Sep" },
    { label: "Oktober", value: "Oct" },
    { label: "November", value: "Nov" },
    { label: "Desember", value: "Dec" },
  ];

  const getDisplayedMonths = () => {
    const currentIndex = months.findIndex(
      (month) => month.value === selectedMonth
    );
    const displayedMonths = [];

    for (let i = -1; i <= 1; i++) {
      const newIndex = (currentIndex + i + months.length) % months.length;
      displayedMonths.push(months[newIndex]);
    }

    return displayedMonths;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/transaksi-paket-user/");
        setPurchaseHistory(response.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const changeYear = (direction) => {
    setSelectedYear((prevYear) => prevYear + direction);
  };

  const changeMonth = (month) => {
    setSelectedMonth(month);
  };

  const filteredHistory = purchaseHistory.filter((item) => {
    const dateObj = new Date(item.durasi_aktif);
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString("en-US", { month: "short" });

    return selectedYear === year && selectedMonth === month;
  });

  return (
    <div className="min-h-screen bg-white mb-16">
      <header className="bg-red-500 text-white text-center py-4 relative">
        <i className="fas fa-arrow-left absolute left-4 top-4"></i>
        <h1 className="text-lg font-bold">Riwayat Pembelian</h1>
      </header>
      <main className="p-4">
        <div className="flex justify-center items-center my-4">
          <button className="text-2xl mx-2" onClick={() => changeYear(-1)}>
            &lt;
          </button>
          <h2 className="text-2xl font-bold">{selectedYear}</h2>
          <button className="text-2xl mx-2" onClick={() => changeYear(1)}>
            &gt;
          </button>
        </div>

        <div className="flex justify-center items-center mb-4">
          {getDisplayedMonths().map((month) => (
            <button
              key={month.value}
              className={`py-2 px-4 rounded-full mx-2 ${
                selectedMonth === month.value
                  ? "bg-red-500 text-white"
                  : "text-red-500"
              }`}
              onClick={() => changeMonth(month.value)}
            >
              {month.label}
            </button>
          ))}
        </div>

        <section>
          <h3 className="text-xl font-bold mb-4">Detail</h3>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : filteredHistory.length > 0 ? (
            filteredHistory.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">
                    {new Date(item.durasi_aktif).toLocaleDateString()}
                  </span>
                  <span className="text-gray-600">
                    Rp {parseFloat(item.paket.harga).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-ticket-alt text-gray-600 mr-2"></i>
                  <div>
                    <p className="font-bold">{item.paket.nama_paket}</p>
                    <p className="text-gray-600 text-sm">
                      melakukan pembelian {item.paket.nama_paket.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              Tidak ada riwayat pembelian di bulan ini.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default HistoryGroups;
