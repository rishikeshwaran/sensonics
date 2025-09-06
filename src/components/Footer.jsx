// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      className="position-relative text-white"
      style={{
        backgroundImage: 'url("semi.jpg")', // your footer background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: '"Times New Roman", serif',
        fontWeight: 'bold',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)', // dark overlay
          zIndex: 0,
        }}
      ></div>

      <div className="container text-center position-relative py-4" style={{ zIndex: 1 }}>
        <p className="mb-1">© RISHIKESHWARAN M</p>
        <p className="mb-1">rishikeshwaranmsr3106@gmail.com</p>
        <p className="mb-0">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
