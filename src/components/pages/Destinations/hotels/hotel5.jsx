import React from 'react';
import './hotel.css';

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src="/src/assets/hotel5.jpg" alt="Image" />
  </div>
  <div className="details">
    <h2>Leo Bentota Beach</h2>
    <p>Choose Cinnamon Bentota Beach for an opulent stay on 
      Sri Lanka's gold coast. Nestled in the groves of coconut 
      trees is a tastefully designed piece of architecture, 
      an ultimate destination for art and culture enthusiasts!
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;