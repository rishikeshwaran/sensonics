// src/pages/Schedule.jsx
import React from "react";

export default function Schedule() {
  const containerStyle = {
    fontFamily: "'Times New Roman', Times, serif",
    padding: "2rem",
    textAlign: "center",
    position: "relative", // for overlay
    minHeight: "100vh",
    backgroundImage: 'url("semi.jpg")', // your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent dark overlay
    zIndex: 0,
  };

  const contentWrapper = {
    position: "relative",
    zIndex: 1, // ensures content is above overlay
    color: "white",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  };

  const timeStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    color: "#FFD700", // bright color for visibility
  };

  const eventStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
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
    </div>
  );
}
