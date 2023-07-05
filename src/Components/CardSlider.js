import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  // Sample data for the cards
  const cards = [
    { id: 1, title: 'Card 1', imageUrl: './images/Otakuru.png' },
    { id: 2, title: 'Card 2', imageUrl: './images/Otakuru.png' },
    { id: 3, title: 'Card 3', imageUrl: './images/Otakuru.png' },
    // Add more cards as needed
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-lg mx-auto">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={card.imageUrl} alt={card.title} className="w-full h-auto rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600">Card content goes here...</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;