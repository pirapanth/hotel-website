import React from 'react';
import './hotel.css';

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src="/src/assets/hotel7.jpg" alt="Image" />
  </div>
  <div className="details">
    <h2>Trinco Blu By Leo</h2>
    <p>How about waking up to a 
      deep blue sea whose crashing waves invite 
      you for a cup of tea or to watch the beautiful dolphins dive for breakfast?
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;