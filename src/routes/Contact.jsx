// src/pages/Contact.jsx
import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll reveal effect for text
  const revealRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Reusable function to attach refs
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const containerStyle = {
    fontFamily: "'Times New Roman', Times, serif",
    position: "relative",
    minHeight: "100vh",
    backgroundImage: 'url("semi.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  const contentWrapper = {
    position: "relative",
    zIndex: 1,
  };

  const headingStyle = {
    textAlign: "center",
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: "bold",
    fontSize: "4rem",
    color: "#111111",
    textShadow: `
      2px 2px 4px rgba(0,0,0,0.4),
      4px 4px 8px rgba(0,0,0,0.3),
      6px 6px 12px rgba(0,0,0,0.2)
    `,
    zIndex: 2,
    position: "relative",
  };

  const subHeadingStyle = {
    ...headingStyle,
    fontSize: "2rem",
    textDecoration: "underline",
    textDecorationColor: "#fd450dff",
    textUnderlineOffset: "8px",
  };

  const eventTitle = {
    fontSize: "2.2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000ff",
    margin: "1rem 0",
  };

  const contactText = {
    fontSize: "1.5rem",
    textAlign: "center",
    color: "#000000ff",
    marginBottom: "0.5rem",
  };

  const headerBox = {
    padding: "1.5rem",
    borderRadius: "10px",
    marginBottom: "2rem",
    top: "60px",
    zIndex: 10,
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapper}>
        {/* Contact Header */}
        <div style={headerBox}>
          <h1 style={headingStyle} ref={addToRefs} className="reveal">
            CONTACT US
          </h1>
        </div>
        <div>
          <h3 style={headingStyle} ref={addToRefs} className="reveal">
            EVENT COORDINATORS
          </h3>
        </div>
        <br />

        {/* Technical Section */}
        <div>
          <h3 style={subHeadingStyle} ref={addToRefs} className="reveal">
            TECHNICAL
          </h3>

          <div style={eventTitle} ref={addToRefs} className="reveal">
            PAPERLOGUE
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Lakshith S - +91 73738 98383
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Shafeek A - +91 93423 93529
          </div>

          <div style={eventTitle} ref={addToRefs} className="reveal">
            CREATION UNLEASHED
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Felix Antony - +91 63799 55636
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Tharunkumar - +91 90473 23169
          </div>

          <div style={eventTitle} ref={addToRefs} className="reveal">
            CODE DEBUG CONSOLE
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Arulventhan GM - +91 81228 15659
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Rishikeshwaran - +91 97157 08810
          </div>

          <div style={eventTitle} ref={addToRefs} className="reveal">
            BOT BLITZ
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Madhavan - +91 90428 46606
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Thamarai Selvan - +91 90254 76154
          </div>
        </div>
        <br />

        {/* Non-Tech Section */}
        <div>
          <h3 style={subHeadingStyle} ref={addToRefs} className="reveal">
            NON-TECHNICAL
          </h3>
          <div style={eventTitle} ref={addToRefs} className="reveal">
            MISSION : CAMPUS
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Dhinesh R V - +91 97917 96867
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Dharani Dharan - +91 99431 90765
          </div>

          <div style={eventTitle} ref={addToRefs} className="reveal">
            RANPO'S OBSERVATORY
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Dharaneesh - +91 88257 02566
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Dravid - +91 93422 75992
          </div>

          <div style={eventTitle} ref={addToRefs} className="reveal">
            KEYS TO FORTUNE
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Sivasuriya - +91 98947 52411
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Pradeep - +91 70946 16885
          </div>

          <div style={eventTitle} ref={addToRefs} className="reveal">
            RHYTHM RIDDLE
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Rishikeshwaran - +91 97157 08810
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            2. Prathish - +91 98651 93481
          </div>


        </div>
        <br />

        {/* Workshop Section */}
        <div>
          <h3 style={subHeadingStyle} ref={addToRefs} className="reveal">
            WORKSHOP
          </h3>
          <div style={eventTitle} ref={addToRefs} className="reveal">
            Workshop Coordinator
          </div>
          <div style={contactText} ref={addToRefs} className="reveal">
            1. Iniyan C M - +91 70109 08944
          </div>
        </div>
        <br />

        {/* Overall Coordinators */}
        <div style={headerBox}>
          <h3 style={subHeadingStyle} ref={addToRefs} className="reveal">
            OVERALL COORDINATORS
          </h3>
        </div>
        <div style={contactText} ref={addToRefs} className="reveal">
          1. Ramganesh S - ramganeshs.22eie@kongu.edu  - +91 9791760308
        </div>
        <div style={contactText} ref={addToRefs} className="reveal">
          2. Dharaneesh V - dharaneeshv.22eie@kongu.edu - +91 8825702566
        </div>
        <br />

        {/* Faculty Coordinators */}
        <div style={headerBox}>
          <h3 style={subHeadingStyle} ref={addToRefs} className="reveal">
            FACULTY COORDINATORS
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <div
            style={{ textAlign: "center", width: "250px" }}
            ref={addToRefs}
            className="reveal"
          >
            <img
              src="balu.jpg"
              alt="BALU"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <div style={contactText}>
              Dr. K.N. Baluprithiviraj
              <br />
              Associate Professor
              <br />
              +91 93630 67473
            </div>
          </div>
          <div
            style={{ textAlign: "center", width: "250px" }}
            ref={addToRefs}
            className="reveal"
          >
            <img
              src="indhu.jpg"
              alt="INDHU"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <div style={contactText}>
              Ms. N. Indhu
              <br />
              Assistant Professor
              <br />
              +91 94894 65312
            </div>
          </div>
        </div>

        {/* Location */}
        <div style={headerBox}>
          <h3 style={subHeadingStyle} ref={addToRefs} className="reveal">
            LOCATION
          </h3>
        </div>
        <div style={contactText} ref={addToRefs} className="reveal">
          <strong>Address:</strong> Kongu Engineering College, Perundurai, Erode
          638060
        </div>
        <div style={contactText} ref={addToRefs} className="reveal">
          <strong>Transport:</strong> College bus arranged from Perundurai to
          KEC campus.
          <br />
          Timing: 7:00 am - 8:25 am
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
          ref={addToRefs}
          className="reveal"
        >
          <iframe
            title="KEC Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15651.408191987279!2d77.59957564999999!3d11.27228425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1757140235137!5m2!1sen!2sin"
            width="80%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
          >
            ↑
          </button>
        )}

        {/* Animation Styles */}
        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
          }
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Contact;
