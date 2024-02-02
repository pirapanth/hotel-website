import React from 'react';
import './offers.css';

const offers = [
  {
    id: 1,
    title: 'Rooms & Suites',
    date:'01 Feb 2021-31 Dec 2021',
    description: 'Book Earlty and Save with Flexibility',
    details:'Book in advance and sace up to 20% with complimentary',
    imageUrl: '/src/assets/offer1.jpg',
    price:'From LKR 25,000.00 Average Per Night',
    btn:'View Details',
  },
  {
    id: 2,
    title: 'Rooms & Suites',
    date:'.',
    description: 'Adventure Zone Family Package',
    details:'Enjoy a memorable family getaway in Colombo',
    imageUrl: '/src/assets/offer2.jpg',
    price:'From LKR 31,756.80 Average Per Night',
    btn:'View Details',
  },
  {
    id: 3,
    title: 'Rooms & Suites',
    date:'.',
    description: 'Bed & Breakfast',
    details:'Start your day with stunning view of Colombo and daily breakfast',
    imageUrl: '/src/assets/offer3.jpg',
    price:'.',
    btn:'View Details',
  },
];

const Offers = () => {
  return (
    <div className='offer-head'>
        <br />
        <h1>Offers</h1>
    <div className="offer-section">
      <div className="offer-cards">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.imageUrl} alt={offer.title} />
            <div className="offer-details">
              <h2>{offer.title}</h2>
              <p>{offer.date}</p>
              <h2>{offer.description}</h2>
              <p>{offer.details}</p>
              <h2>{offer.price}</h2>
            </div>
            <div className="more-button">
                <button>{offer.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="view-a">
            <a href="http://">View All</a>
        </div>
    </div>
  );
};

export default Offers;
