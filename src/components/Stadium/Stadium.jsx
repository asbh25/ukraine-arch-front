import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MiniMap } from "../MiniMap";

export const Stadium = () => {
  const [stadium, setStadium] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/stadiums/${id}`)
      .then((response) => {
        setStadium(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stadium data:", error);
      });
  }, [id]);

  return (
    <div className='museum-container'>
      {!stadium ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='museum'>
          <h2>{stadium.name}</h2>
          <p>{stadium.description}</p>
          {stadium.established && (
            <p>
              <strong>Date of establishment:</strong> {stadium.established}
            </p>
          )}
          {stadium.date && (
            <p>
              <strong>Date of establishment:</strong> {stadium.date}
            </p>
          )}
          {stadium.latitude && stadium.longitude && (
            <MiniMap latitude={stadium.latitude} longitude={stadium.longitude} />
          )}
          {stadium.website && (
            <a href={stadium.website} target='_blank' rel='noopener noreferrer'>
              Visit Website
            </a>
          )}
        </div>
      )}
    </div>
  );
};
