import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
const CarouselItem = ({ cover, title, year, contentRaiting, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src="../assets/play-icon.png"
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src="../assets/plus-icon.png"
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        2019 16+ 114 minutos
        {`${year} ${contentRaiting} ${duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
