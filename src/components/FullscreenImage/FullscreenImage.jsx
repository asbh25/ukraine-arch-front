import React from 'react';

export const FullscreenImage = ({ src, alt, onClose }) => {
  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <img src={src} alt={alt} className="fullscreen-image" />
    </div>
  );
};
