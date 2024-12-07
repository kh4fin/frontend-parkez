import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axiosInstance from "../../utils/axiosConfig";
import {
  FaMapMarkerAlt,
  FaCar,
  FaParking,
  FaUsers,
  FaMapSigns,
} from "react-icons/fa";

const LokasiDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/api/parking/${id}`
        );
        setLocation(response.data);
        setLoading(false);
      } catch (err) {
        setError("Lokasi tidak ditemukan");
        setLoading(false);
      }
    };

    fetchLocation();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!location) {
    return (
      <div className="text-center text-red-500">Lokasi tidak ditemukan</div>
    );
  }

  const handleRouteClick = () => {
    navigate(`/rute/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          {location.nama_tempat}
        </h1>

        <div className="flex items-center justify-center text-gray-600 mb-4">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          <p className="text-lg">
            <span className="font-semibold">Lokasi:</span> {location.lokasi}
          </p>
        </div>

        <div className="flex items-center justify-center text-gray-600 mb-6">
          <FaCar className="text-blue-500 mr-2" />
          <p className="text-lg">
            <span className="font-semibold">Tipe Kendaraan:</span>{" "}
            {location.tipe_kendaraan}
          </p>
        </div>

        <div className="flex items-center justify-center text-gray-600 mb-6">
          <FaParking className="text-green-500 mr-2" />
          <p className="text-lg">
            <span className="font-semibold">Kapasitas:</span>{" "}
            {location.kapasitas}
          </p>
        </div>

        <div className="flex items-center justify-center text-gray-600 mb-6">
          <FaUsers className="text-yellow-500 mr-2" />
          <p className="text-lg">
            <span className="font-semibold">Terpakai:</span> {location.terpakai}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleRouteClick}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300 ease-in-out"
          >
            <FaMapSigns className="inline mr-2" />
            Lihat Rute
          </button>
        </div>
      </div>
    </>
  );
};

export default LokasiDetail;
