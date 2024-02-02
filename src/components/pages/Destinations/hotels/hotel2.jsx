import React from 'react';
import './hotel.css';

const Hotel2 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src="/src/assets/hotel2.jpg" alt="Image" />
  </div>
  <div className="details">
    <h2>LEO Lakeside Colombo</h2>
    <p>Spend time with those who matter by a calm, 
      rippling lake at Cinnamon Lakeside, the plush 
      oasis of peace and warmth, right in the middle of Colombo.
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel2;