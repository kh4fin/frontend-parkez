import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import L from "leaflet";
import axiosInstance from "../../utils/axiosConfig";
import Navbar from "../Navbar/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "./Rute.scss";

const Rute = () => {
  const { id } = useParams();
  const [currentLocation, setCurrentLocation] = useState([0, 0]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      });
    }
  }, []);

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

  useEffect(() => {
    if (currentLocation[0] !== 0 && location) {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        try {
          const map = L.map(mapElement).setView(currentLocation, 13);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: false,
          }).addTo(map);
          L.Routing.control({
            waypoints: [
              L.latLng(currentLocation[0], currentLocation[1]),
              L.latLng(location.latitude, location.longitude),
            ],
            routeWhileDragging: true,
          }).addTo(map);
        } catch (error) {
          console.error("Routing error:", error);
        }
      }
    }
  }, [currentLocation, location]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        <FaMapMarkerAlt className="inline mr-2 text-red-500" />
        {error}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Rute ke {location.nama_tempat}
        </h1>

        <div className="flex items-center justify-center text-gray-600 mb-6">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          <p className="text-lg">
            <span className="font-semibold">Lokasi Tujuan:</span>{" "}
            {location.nama_tempat}
          </p>
        </div>

        <div
          id="map"
          className="w-full h-96 rounded-lg shadow-lg border border-gray-300"
        ></div>
      </div>
    </>
  );
};

export default Rute;
