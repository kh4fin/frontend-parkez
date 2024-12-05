import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";
import * as XLSX from "xlsx";

const History = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [filteredTransaksi, setFilteredTransaksi] = useState([]);

  useEffect(() => {
    const fetchTransaksi = async () => {
      try {
        const response = await axiosInstance.get("/api/transaksi-paket/");
        setTransaksi(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransaksi();
  }, []);

  useEffect(() => {
    filterTransaksi();
  }, [selectedStatus, selectedYear, transaksi]);

  const filterTransaksi = () => {
    let filtered = transaksi;

    if (selectedStatus !== "All") {
      filtered = filtered.filter(
        (transaksi) => transaksi.status === selectedStatus
      );
    }

    if (selectedYear !== "All") {
      filtered = filtered.filter(
        (transaksi) =>
          new Date(transaksi.created_at).getFullYear() ===
          parseInt(selectedYear)
      );
    }

    setFilteredTransaksi(filtered);
  };

  const exportToExcel = () => {
    const dataToExport = filteredTransaksi.map((item) => ({
      ID: item.id,
      NamaPaket: item.paket.nama_paket,
      Harga: item.paket.harga,
      Status: item.status,
      CreatedAt: new Date(item.created_at).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transaksi Paket");
    XLSX.writeFile(workbook, "TransaksiPaket.xlsx");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">List Transaksi Paket</h2>

      <div className="mb-4 flex items-center space-x-4">
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Status</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="pending">Pending</option>
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Years</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>

        <button
          onClick={exportToExcel}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Export to Excel
        </button>
      </div>

      <table className="min-w-full bg-white">
        <thead className="bg-gray-300">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Paket</th>
            <th className="border px-4 py-2">Harga</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransaksi.length > 0 ? (
            filteredTransaksi.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">
                  {item.paket.nama_paket}
                </td>
                <td className="border px-4 py-2 text-center">
                  {item.paket.harga}
                </td>
                <td className="border px-4 py-2 text-center">{item.status}</td>
                <td className="border px-4 py-2 text-center">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
