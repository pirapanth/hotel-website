import React from 'react';
import './hotel.css';

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src="/src/assets/hotel6.jpg" alt="Image" />
  </div>
  <div className="details">
    <h2>Leo Wild Yala</h2>
    <p>Experience the thrill of living around a 
      forest while you sit by a bar overlooking 
      the pool that is also sometimes the 
      tusker’s choice of water-hole.
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;