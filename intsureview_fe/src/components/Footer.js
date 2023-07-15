import React from "react";
import "../styles/main.css";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        <a
          href="https://www.linkedin.com/in/rachelbarkanic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet the Creator
        </a>
        <br></br>
        <br></br>
        &copy; {currentYear} Bike Rides R Us
      </p>
    </footer>
  );
};

export default Footer;
