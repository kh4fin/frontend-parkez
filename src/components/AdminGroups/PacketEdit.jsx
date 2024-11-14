// PacketEdit.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";

const PacketEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_paket: "",
    deskripsi: "",
    harga: "",
    diskon: "",
    durasi_hari: "",
    tipe_paket: "",
    kendaraan: "",
    benefits: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPacket = async () => {
      try {
        const response = await axiosInstance.get(`/api/paket/${id}/`);
        setFormData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching packet data:", err);
        setError("Failed to load packet data.");
        setLoading(false);
      }
    };

    fetchPacket();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/api/paket/${id}/`, formData);

      navigate("/dashboard-admin/packet");
    } catch (err) {
      console.error("Error updating packet:", err);
      if (err.response && err.response.status === 401) {
        setError("Unauthorized: Invalid or expired token.");
      } else {
        setError("Failed to update packet.");
      }
    }
  };

  if (loading) {
    return <p>Loading packet data...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Paket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Nama Paket</label>
          <input
            type="text"
            name="nama_paket"
            value={formData.nama_paket}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Deskripsi</label>
          <input
            type="text"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Harga</label>
          <input
            type="number"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Diskon (%)</label>
          <input
            type="number"
            name="diskon"
            value={formData.diskon}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Durasi (Hari)
          </label>
          <input
            type="number"
            name="durasi_hari"
            value={formData.durasi_hari}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Tipe Paket</label>
          <input
            type="text"
            name="tipe_paket"
            value={formData.tipe_paket}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Kendaraan</label>
          <input
            type="text"
            name="kendaraan"
            value={formData.kendaraan}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Benefits</label>
          <input
            type="text"
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Contoh: aaaa,bbbb,ccccc"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Paket
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default PacketEdit;
