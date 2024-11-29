import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const dummyLocations = [
  { id: 1, name: "Lokasi A", latitude: -7.797068, longitude: 110.370529 },
  { id: 2, name: "Lokasi B", latitude: -7.800824, longitude: 110.365477 },
  { id: 3, name: "Lokasi C", latitude: -7.801093, longitude: 110.368319 },
];

const LokasiDetail = () => {
  const { id } = useParams();
  const location = dummyLocations.find((loc) => loc.id === parseInt(id));
  const navigate = useNavigate();

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
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">{location.name}</h1>
        <p className="text-lg mb-2">
          <span className="font-semibold">Latitude:</span> {location.latitude}
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Longitude:</span> {location.longitude}
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleRouteClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Lihat Rute
          </button>
        </div>
      </div>
    </>
  );
};

export default LokasiDetail;
