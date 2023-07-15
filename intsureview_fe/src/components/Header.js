import React, { useState } from "react";
import '../styles/main.css'
import Content from "./Content";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="logo">
          <p className="title">Bike Rides R Us</p>
        </div>
 
      </div>
      </div>
  );
};

export default Header;
