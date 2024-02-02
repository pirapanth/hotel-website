import React from 'react';
import './hotel.css';

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src="/src/assets/hotel7.jpg" alt="Image" />
  </div>
  <div className="details">
    <h2>Maldives Dhonveli By Leo</h2>
    <p>Feel an irrepressible wave of 
      excitement as you have the best 
      surfing experience, set to the 
      backdrop of serenity, and pristine blue waters.
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;