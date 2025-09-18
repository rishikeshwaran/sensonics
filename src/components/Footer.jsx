// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-content container text-center">
        {/* Title + Contact */}
        <h3 className="footer-title glow-text">RISHIKESHWARAN M</h3>
        <p className="footer-email">rishikeshwaranmsr3106@gmail.com</p>
        <p className="footer-rights">© {new Date().getFullYear()} All rights reserved</p>

        {/* Social Links */}
        <div className="footer-social">
          <span className="follow-text">Follow Us</span>
          <div className="social-links">
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
      </div>
    </footer>
  );
};

export default Footer;
