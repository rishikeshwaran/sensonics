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
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
