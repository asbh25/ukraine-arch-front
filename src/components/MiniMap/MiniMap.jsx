import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png", // Шлях до зображення значка
  iconSize: [25, 41], // Розмір значка
  iconAnchor: [12, 41], // Точка, в якій значок прив'язується до карти
  popupAnchor: [1, -34], // Точка, від якої буде відображатися спливаюче вікно
});

export const MiniMap = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "300px", width: "100%" }}
      className="mini-map"
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon} />
    </MapContainer>
  );
};
