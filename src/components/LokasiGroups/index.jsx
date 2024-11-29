import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

  const dummyLocations = [
    { id: 1, name: "Lokasi A", latitude: -7.797068, longitude: 110.370529 },
    { id: 2, name: "Lokasi B", latitude: -7.800824, longitude: 110.365477 },
    { id: 3, name: "Lokasi C", latitude: -7.801093, longitude: 110.368319 },
  ];

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

        {dummyLocations.map((loc) => (
          <Marker key={loc.id} position={[loc.latitude, loc.longitude]}>
            <Popup>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{loc.name}</h3>
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
          <Marker position={currentLocation}>
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
