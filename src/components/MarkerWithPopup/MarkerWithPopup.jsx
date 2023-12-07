import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl: "/marker-icon.png", // Шлях до зображення значка
  iconSize: [25, 41], // Розмір значка
  iconAnchor: [12, 41], // Точка, в якій значок прив'язується до карти
  popupAnchor: [1, -34], // Точка, від якої буде відображатися спливаюче вікно
});

const clickedIcon = new L.Icon({
  iconUrl: "/marker-focused.png", // Шлях до вашої іконки після кліку
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34], // Точка, від якої буде відображатися спливаюче вікно
});

export const MarkerWithPopup = ({ museum }) => {
  const [clickedMarkerId, setClickedMarkerId] = useState(null);
  // const [streetName, setStreetName] = useState("");
  // const [osmData, setOsmData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await reverseGeocode(museum.latitude, museum.longitude);
  //     console.log(data)
  //     setOsmData(data);
  //   };
  //   fetchData();
  // }, [museum]);

  const handleMarkerClick = (museumId) => {
    setClickedMarkerId(clickedMarkerId === museumId ? null : museumId);
  };

  // const fetchStreetName = async () => {
  //   if (!streetName) {
  //     // Запобігаємо повторним запитам, якщо назва вулиці вже завантажена
  //     const fetchedStreetName = await lookupAddress(
  //       'N',
  //       osmData.osmId
  //     );
  //     setStreetName(fetchedStreetName);
  //   }
  // };

  // const lookupAddress = async (osmType, osmId) => {
  //   const url = `https://nominatim.openstreetmap.org/lookup?osm_ids=${osmType}${osmId}&format=json`;
  //   console.log('here', osmId);
  
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     // Припускаємо, що ви хочете використовувати перший елемент відповіді
  //     return data[0] ? data[0].display_name : null;
  //   } catch (error) {
  //     console.error("Error fetching address:", error);
  //     return null;
  //   }
  // };
  

  // const reverseGeocode = async (latitude, longitude) => {
  //   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&extratags=1`;
  
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data.osm_id ? { osmId: data.osm_id, osmType: data.osm_type } : null;
  //   } catch (error) {
  //     console.error("Error fetching OSM ID:", error);
  //     return null;
  //   }
  // };

  return (
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
        <a href={`/museum/${museum.id}`}>Дізнатися більше</a>
      </Popup>
    </Marker>
  );
};
