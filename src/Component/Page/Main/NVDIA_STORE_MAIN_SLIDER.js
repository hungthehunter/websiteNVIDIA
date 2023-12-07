import React, { useEffect, useState } from 'react';

const SLIDER = ({ images, activeSlide, onChangeSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(activeSlide);
  }, [activeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide((currentIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const showSlide = (index) => {
    setCurrentIndex(index);
    onChangeSlide(index);
  };

  return (
    <div id="slider">
      {images.map((image, index) => (
        <div key={index} className={`slider-item ${index === currentIndex ? 'active' : ''}`}>
          <img
            className="slider-img"
            src={image.src}
            alt={image.alt}
          />
          <div className="slider text-content">
            <div className="slider text-brand">
              <span>
                <b className="text-brand-ad">{image.brand}</b>
              </span>
            </div>
            <div className="slider text-heading">
              <span>
                <b>{image.heading}</b>
              </span>
            </div>
            <div className="slider text-choose">
              <a href={image.link} className="btn brand-green-btn green-success">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="slider text-btn">
        <ul className="btn-cadidator">
          {images.map((_, index) => (
            <li
              key={index}
              onClick={() => showSlide(index)}
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SLIDER;


