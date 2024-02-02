import React from 'react';
import './experience.css';

const images = [
  '/src/assets/ex1.jpg',
  '/src/assets/ex2.jpg',
  '/src/assets/ex3.jpg',
  '/src/assets/ex4.jpg',
  '/src/assets/ex5.jpg',
  '/src/assets/ex6.jpeg',
];

const imageDetails = [
  {
    title: 'MULTIPLY YOUR POINTS',
  },
  {
    title: 'GET AWAY & SAVE MORE',
  },
  {
    title: 'EARN UP TO 130K POINTS',
  },
  {
    title: 'A NIGHT ON US',
  },
  {
    title: '3 NIGHTS UNDER $250',
  },
  {
    title: 'EARN UP TO 3X POINTS ON EVERY STAY',
  },
];

const experience = () => {
  return (
    <div className='exp'>
      <br />
      <h1>Experience Something New</h1>
      <p>Close to home or across the world,Leo is there for you with memorable offers and experiences.Check out what is new.</p>
    <div className="card-slider">
      {images.map((imageUrl, index) => (
        <div key={index} className="card">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
          <div className="image-details">
            <h2>{imageDetails[index].title}</h2>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default experience;
