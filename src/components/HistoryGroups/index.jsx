import React, { useState } from "react";
import "./HistoryGroups.scss";

const HistoryGroups = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState("Aug");

  const months = [
    { label: "Agustus", value: "Aug" },
    { label: "September", value: "Sep" },
    { label: "Oktober", value: "Oct" },
  ];

  const purchaseHistory = [
    { date: "01 Aug 2024", amount: 200000, description: "EZ Ride Monthly" },
    { date: "15 Sep 2024", amount: 150000, description: "EZ Park Daily" },
    { date: "20 Oct 2024", amount: 100000, description: "EZ Car Rental" },
  ];

  const changeYear = (direction) => {
    setSelectedYear((prevYear) => prevYear + direction);
  };

  const changeMonth = (month) => {
    setSelectedMonth(month);
  };

  const filteredHistory = purchaseHistory.filter((item) => {
    const [day, month, year] = item.date.split(" ");
    return selectedYear === parseInt(year) && selectedMonth === month;
  });

  return (
    <div className="min-h-screen bg-white">
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
          {months.map((month) => (
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
          {filteredHistory.length > 0 ? (
            filteredHistory.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{item.date}</span>
                  <span className="text-gray-600">
                    Rp {item.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-ticket-alt text-gray-600 mr-2"></i>
                  <div>
                    <p className="font-bold">{item.description}</p>
                    <p className="text-gray-600 text-sm">
                      melakukan pembelian {item.description.toLowerCase()}
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
