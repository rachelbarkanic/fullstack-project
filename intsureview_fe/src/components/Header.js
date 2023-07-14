import React from "react";
import '../styles/main.css'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <p className="title">Bike Rides R Us</p>
        </div>
        <div className="add-section">
          <a className="add-btn" href='#'>Add a Ride</a>
        </div>
      </div>
      </div>
  );
};

export default Header;
