import React from 'react';
import './hotel.css';

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src="/src/assets/hotel4.jpg" alt="Image" />
  </div>
  <div className="details">
    <h2>LEO Life Intergeted Resort</h2>
    <p>Take a peak at the first-ever Integrated Resort in Sri Lanka. 
      Envisoned to be the epicentre of modern South Asia, 
      it is an urban sanctuary which includes a 5-Star hotel.
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;