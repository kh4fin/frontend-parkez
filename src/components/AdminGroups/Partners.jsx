import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";

const Partners = () => {
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const fetchParkings = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/api/parking/`
        );
        setParkings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching parking data:", error);
      }
    };
    fetchParkings();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus tempat parkir ini?"
    );
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`/api/parking/${id}/`);
        setParkings(parkings.filter((parking) => parking.id !== id));
        alert("Tempat parkir berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting parking:", error);
        alert("Gagal menghapus tempat parkir. Silakan coba lagi.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">List Mitra Parkir</h2>

      <NavLink
        to="/dashboard-admin/partners/add"
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Tambah Mitra Parkir
      </NavLink>

      <table className="min-w-full bg-white border">
        <thead className="bg-gray-300">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nama Tempat</th>
            <th className="border px-4 py-2">Lokasi</th>
            <th className="border px-4 py-2">Tipe Kendaraan</th>
            <th className="border px-4 py-2">Kapasitas</th>
            <th className="border px-4 py-2">Terpakai</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parkings.length > 0 ? (
            parkings.map((parking, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{parking.id}</td>
                <td className="border px-4 py-2 text-center">
                  {parking.nama_tempat}
                </td>
                <td className="border px-4 py-2 text-center">
                  {parking.lokasi}
                </td>
                <td className="border px-4 py-2 text-center">
                  {parking.tipe_kendaraan}
                </td>
                <td className="border px-4 py-2 text-center">
                  {parking.kapasitas}
                </td>
                <td className="border px-4 py-2 text-center">
                  {parking.terpakai}
                </td>
                <td className="border px-4 py-2 text-center">
                  <NavLink
                    to={`/dashboard-admin/partners/${parking.id}/edit`}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </NavLink>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => handleDelete(parking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="border px-4 py-2 text-center">
                Tidak ada data mitra parkir.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Partners;
