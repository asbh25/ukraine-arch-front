import React, { useState, useEffect } from 'react';

export const ImageWithFallback = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return null; // Якщо є помилка, не відображаємо зображення
  }

  if (!loaded) {
    return null; // Не відображаємо нічого, поки зображення не завантажене
  }

  return <img src={src} alt={alt} onError={handleError} {...props} />;
};
