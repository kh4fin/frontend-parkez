import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";
import Partners from "./Partners";

const PartnersAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_tempat: "",
    lokasi: "",
    tipe_kendaraan: "",
    koordinat: "",
    kapasitas: "",
    terpakai: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    try {
      await axiosInstance.post("/api/parking/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/dashboard-admin/partners");
    } catch (err) {
      console.error("Error adding parking:", err);
      if (err.response && err.response.status === 401) {
        setError("Unauthorized: Invalid or expired token.");
      } else {
        setError("Failed to add parking.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Tambah Tempat Parkir</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Nama Tempat</label>
          <input
            type="text"
            name="nama_tempat"
            value={formData.nama_tempat}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Lokasi</label>
          <input
            type="text"
            name="lokasi"
            value={formData.lokasi}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Tipe Kendaraan
          </label>
          <input
            type="text"
            name="tipe_kendaraan"
            value={formData.tipe_kendaraan}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Koordinat Maps
          </label>
          <input
            type="text"
            name="koordinat"
            value={formData.koordinat}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Kapasitas</label>
          <input
            type="number"
            name="kapasitas"
            value={formData.kapasitas}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Terpakai</label>
          <input
            type="number"
            name="terpakai"
            value={formData.terpakai}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Tambah Tempat Parkir
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default PartnersAdd;
