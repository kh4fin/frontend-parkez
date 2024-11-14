import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../utils/axiosConfig";

const Packet = () => {
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    const fetchPackets = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/api/paket/`
        );
        setPackets(response.data);
      } catch (error) {
        console.error("Error fetching packets:", error);
      }
    };
    fetchPackets();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus paket ini?"
    );
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`/api/paket/${id}/`);
        setPackets(packets.filter((packet) => packet.id !== id));
        alert("Paket berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting packet:", error);
        alert("Gagal menghapus paket. Silakan coba lagi.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">List Paket</h2>

      <NavLink
        to="/dashboard-admin/packet/add"
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Tambah Paket
      </NavLink>

      <table className="min-w-full bg-white border">
        <thead className="bg-gray-300">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nama Paket</th>
            <th className="border px-4 py-2">Deskripsi</th>
            <th className="border px-4 py-2">Harga</th>
            <th className="border px-4 py-2">Diskon</th>
            <th className="border px-4 py-2">Durasi (Hari)</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packets.length > 0 ? (
            packets.map((packet, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{(index += 1)}</td>
                <td className="border px-4 py-2 text-center">
                  {packet.nama_paket}
                </td>
                <td className="border px-4 py-2 text-center">
                  {packet.deskripsi}
                </td>
                <td className="border px-4 py-2 text-center">
                  Rp {packet.harga.toLocaleString()}
                </td>
                <td className="border px-4 py-2 text-center">
                  {packet.diskon}%
                </td>
                <td className="border px-4 py-2 text-center">
                  {packet.durasi_hari} hari
                </td>
                <td className="border px-4 py-2 text-center">
                  <NavLink
                    to={`/dashboard-admin/packet/${packet.id}/edit`}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </NavLink>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => handleDelete(packet.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="border px-4 py-2 text-center">
                Tidak ada data paket.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Packet;
