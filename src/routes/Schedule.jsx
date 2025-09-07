// src/pages/Schedule.jsx
import React, { useState, useEffect } from "react";

export default function Schedule() {
  const [showScroll, setShowScroll] = useState(false);

  // Show button after 300px scroll
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerStyle = {
    fontFamily: "'Times New Roman', Times, serif",
    padding: "3rem 1rem",
    textAlign: "center",
    minHeight: "100vh",
    backgroundImage: 'url("semi.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
  };

  const contentWrapper = {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: "2rem",
    borderRadius: "15px",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "2.5rem",
    letterSpacing: "2px",
    borderBottom: "3px solid #FFD700",
    display: "inline-block",
    paddingBottom: "0.5rem",
    animation: "fadeInDown 1s ease",
  };

  const timeStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "1.5rem",
    marginBottom: "0.3rem",
    color: "#FFD700",
  };

  const eventStyle = {
    fontSize: "1.3rem",
    marginBottom: "1rem",
    letterSpacing: "0.5px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapper}>
        <h2 style={headingStyle}>EVENT SCHEDULE</h2>

        <div>
          <div style={timeStyle}>09:00 AM</div>
          <div style={eventStyle}>INAUGURATION</div>

          <div style={timeStyle}>09:30 AM</div>
          <div style={eventStyle}>
            FELICITATION: PRINCIPAL ADDRESS, HOD ADDRESS
          </div>

          <div style={timeStyle}>10:30 AM</div>
          <div style={eventStyle}>
            INSIGHT SCRIBE & FACTORY I/O: Paper Presentation, Workshop
          </div>

          <div style={timeStyle}>10:30 AM</div>
          <div style={eventStyle}>TECH VENTURE: Project Presentation</div>

          <div style={timeStyle}>10:45 AM</div>
          <div style={eventStyle}>CODE WARS: Coding Contest</div>

          <div style={timeStyle}>10:45 AM</div>
          <div style={eventStyle}>INNOVATORS RALLY: Ideathon</div>

          <div style={timeStyle}>12:15 PM - 01:15 PM</div>
          <div style={eventStyle}>LUNCH BREAK</div>

          <div style={timeStyle}>01:15 PM</div>
          <div style={eventStyle}>IPL BRAWL: IPL Auction</div>

          <div style={timeStyle}>01:15 PM</div>
          <div style={eventStyle}>EXPLORE - X: Campus Voyage</div>

          <div style={timeStyle}>02:00 PM</div>
          <div style={eventStyle}>TRUE DETECTIVE: Sherlock Sense</div>

          <div style={timeStyle}>02:45 PM</div>
          <div style={eventStyle}>LENSATION: Photography</div>

          <div style={timeStyle}>03:45 PM</div>
          <div style={eventStyle}>VALEDICTORY FUNCTION</div>

          <div style={timeStyle}>04:30 PM</div>
          <div style={eventStyle}>EVENT ENDS</div>
        </div>
      </div>

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#000000ff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "22px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
          }}
        >
          ↑
        </button>
      )}

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
