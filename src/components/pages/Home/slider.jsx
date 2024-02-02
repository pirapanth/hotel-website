import React, { useState, useEffect } from 'react';
import './slider.css';

const images = [
"/src/assets/image1.jpg", 
"/src/assets/image2.jpg", 
"/src/assets/image3.jpg", 
"/src/assets/image4.jpg",  
];

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-slideshow">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="slide-content">
            <h1>LEO</h1><p>Hotels & Resorts</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
