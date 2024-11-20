import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";

const ParkirGroups = () => {
  const [paketList, setPaketList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaketList = async () => {
      try {
        const response = await axiosInstance.get("/api/list-paket-user/");
        setPaketList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching paket list:", error);
      }
    };

    fetchPaketList();
  }, []);

  const handleViewQRCode = (paketId) => {
    navigate(`/qrcode/${paketId}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Daftar Paket Anda</h2>
      {paketList.length > 0 ? (
        <ul className="space-y-4">
          {paketList.map((paket) => (
            <li key={paket.id} className="border p-4 rounded shadow">
              <p className="text-lg font-semibold">
                Paket: {paket.paket.nama_paket}
              </p>
              <p>Harga: Rp {paket.paket.harga}</p>
              <p>Masa Aktif: {new Date(paket.durasi_aktif).toLocaleString()}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleViewQRCode(paket.id)}
              >
                View QR Code
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Anda belum memiliki paket.</p>
      )}
    </div>
  );
};

export default ParkirGroups;
