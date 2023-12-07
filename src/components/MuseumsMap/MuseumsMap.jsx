import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl: "/marker-icon.png", // Шлях до зображення значка
  iconSize: [25, 41], // Розмір значка
  iconAnchor: [12, 41], // Точка, в якій значок прив'язується до карти
  popupAnchor: [1, -34], // Точка, від якої буде відображатися спливаюче вікно
});

const clickedIcon = new L.Icon({
  iconUrl: '/marker-focused.png', // Шлях до вашої іконки після кліку
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34], // Точка, від якої буде відображатися спливаюче вікно
});

export const MuseumsMap = ({ museums, indicator = 'museum' }) => {
  const [clickedMarkerId, setClickedMarkerId] = useState(null);

  const center = [50.4501, 30.5234]; // Центр карти, Київ

  const handleMarkerClick = (museumId) => {
    setClickedMarkerId(clickedMarkerId === museumId ? null : museumId);
  };

  return (
    <MapContainer
      center={center}
      zoom={6}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        className="show-map"
      />
      {museums.map((museum) => (
        <Marker
          key={museum.id}
          position={[museum.latitude, museum.longitude]}
          icon={clickedMarkerId === museum.id ? clickedIcon : icon}
          eventHandlers={{
            click: () => handleMarkerClick(museum.id),
          }}
        >
          <Popup>
            {museum.name}
            <br />
            <a href={`/${indicator}/${museum.id}`}>Дізнатися більше</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
