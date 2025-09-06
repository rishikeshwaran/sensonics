import React from "react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: "url('/SENSONICS.png')", // ✅ full background
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh", // adjust banner height
        color: "#fff", // text contrast
      }}
    >
      {/* Overlay (optional for better readability) */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent overlay
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <h1 className="display-4 fw-bold">Sensonics — 2025</h1>
        <p className="lead mb-4">
          A National Level Technical Symposium — EIE Association
        </p>
        <Link to="/events" className="btn btn-light btn-lg">
          Explore Events
        </Link>
      </div>
    </section>
  );
}
