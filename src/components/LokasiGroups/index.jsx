import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axiosInstance from "../../utils/axiosConfig";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const blueIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
};

const LokasiGroups = () => {
  const [currentLocation, setCurrentLocation] = useState([0, 0]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      });
    }

    const fetchPackets = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/api/parking/`
        );
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching packets:", error);
      }
    };
    fetchPackets();
  }, []);

  const handleClick = (locationId) => {
    window.location.href = `/lokasi/${locationId}`;
  };

  return (
    <div className="relative mt-14">
      <MapContainer
        center={currentLocation}
        zoom={13}
        className="h-[90vh] w-full"
        attributionControl={false}
      >
        <ChangeView center={currentLocation} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.latitude, loc.longitude]}
            icon={redIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{loc.nama_tempat}</h3>
                <button
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() => handleClick(loc.id)}
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {currentLocation && (
          <Marker position={currentLocation} icon={blueIcon}>
            <Popup>
              <div className="text-center">
                <p>Your current location</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default LokasiGroups;
