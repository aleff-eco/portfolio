import React, { useState, useEffect } from 'react';
import './rotatingText.css';

const RotatingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Oculta el texto actual
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true); // Muestra el siguiente texto
      }, 100); // Tiempo para la animación de salida
    }, 4000); // Cambiar cada 6 segundos

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <span className={`rotating-text ${isVisible ? 'visible' : 'hidden'}`}>
     {texts[currentIndex]}
    </span>
  );
};


export {RotatingText};
//<RotatingText texts={[" Desarrollador fullstack", " Ingeniero de software", " Desarrollador web"]} />