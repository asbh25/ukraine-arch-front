import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ImageWithFallback } from "../ImageWithFallback";
import { FullscreenImage } from "../FullscreenImage";
import { MiniMap } from "../MiniMap";

export const Museum = () => {
  const [museum, setMuseum] = useState(null);
  const [fullscreenSrc, setFullscreenSrc] = useState(null);
  const { id } = useParams();

  const openFullscreen = (src) => {
    setFullscreenSrc(src);
  };

  const closeFullscreen = () => {
    setFullscreenSrc(null);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/museums/${id}`)
      .then((response) => {
        setMuseum(response.data);
      })
      .catch((error) => {
        console.error("Error fetching museum data:", error);
      });
  }, [id]);

  return (
    <div className='museum-container'>
      {!museum ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='museum'>
          {fullscreenSrc && (
            <FullscreenImage
              src={fullscreenSrc}
              alt='Fullscreen image'
              onClose={closeFullscreen}
            />
          )}
          <h2>{museum.name}</h2>
          <p>{museum.description}</p>
          {museum.established && (
            <p>
              <strong>Date of establishment:</strong> {museum.established}
            </p>
          )}
          {museum.date && (
            <p>
              <strong>Date of establishment:</strong> {museum.date}
            </p>
          )}
          {museum.latitude && museum.longitude && (
            <MiniMap latitude={museum.latitude} longitude={museum.longitude} />
          )}
          <div className='thumbnails-container'>
            {museum.thumbnails.map((url, index) => (
              <ImageWithFallback
                key={index}
                src={url}
                alt={`${museum.name} thumbnail ${index + 1}`}
                onClick={() => openFullscreen(url)}
              />
            ))}
          </div>
          {museum.website && (
            <a href={museum.website} target='_blank' rel='noopener noreferrer'>
              Visit Website
            </a>
          )}
        </div>
      )}
    </div>
  );
};
