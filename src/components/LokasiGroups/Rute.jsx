import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import L from "leaflet";
import "./Rute.scss";
import Navbar from "../Navbar/Navbar";

const dummyLocations = [
  { id: 1, name: "Lokasi A", latitude: -7.797068, longitude: 110.370529 },
  { id: 2, name: "Lokasi B", latitude: -7.800824, longitude: 110.365477 },
  { id: 3, name: "Lokasi C", latitude: -7.801093, longitude: 110.368319 },
];

const Rute = () => {
  const { id } = useParams();
  const location = dummyLocations.find((loc) => loc.id === parseInt(id));
  const [currentLocation, setCurrentLocation] = useState([0, 0]);

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
    if (currentLocation[0] !== 0 && location) {
      const map = L.map("map").setView(currentLocation, 13);

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
    }
  }, [currentLocation, location]);

  if (!location) {
    return (
      <div className="text-center text-red-500 mt-10">
        Lokasi tidak ditemukan
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Rute ke {location.name}
        </h1>
        <div
          id="map"
          className="w-full h-96 rounded-lg shadow-md border border-gray-300"
        ></div>
      </div>
    </>
  );
};

export default Rute;
