// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-content container text-center">
        <h3 className="footer-title glow-text">RISHIKESHWARAN M</h3>
        <p className="footer-email">rishikeshwaranmsr3106@gmail.com</p>
        <p className="footer-rights">© All rights reserved</p>

        <div className="footer-social mt-3">
          <p className="social-icon instagram"> Follow Us</p>
          <a
            href="https://www.instagram.com/sensonics_2k25?igsh=MTBmaXBidHUwaTBrdQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
