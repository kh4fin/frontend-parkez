import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";

const PartnersEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nama_tempat: "",
    lokasi: "",
    tipe_kendaraan: "",
    koordinat: "",
    latitude: "",
    longitude: "",
    kapasitas: "",
    terpakai: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchParking = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const response = await axiosInstance.get(`/api/parking/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFormData({
          nama_tempat: response.data.nama_tempat,
          lokasi: response.data.lokasi,
          tipe_kendaraan: response.data.tipe_kendaraan,
          koordinat: response.data.koordinat,
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          kapasitas: response.data.kapasitas,
          terpakai: response.data.terpakai,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching parking data:", err);
        setError("Failed to fetch parking data.");
        setLoading(false);
      }
    };

    fetchParking();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    try {
      await axiosInstance.put(`/api/parking/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/dashboard-admin/partners");
    } catch (err) {
      console.error("Error updating parking:", err);
      if (err.response && err.response.status === 401) {
        setError("Unauthorized: Invalid or expired token.");
      } else {
        setError("Failed to update parking.");
      }
    }
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Tempat Parkir</h2>
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
          <label className="block mb-2 text-sm font-medium">Latitude</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Longitude</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* <div>
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
        </div> */}

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
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Tempat Parkir
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default PartnersEdit;
