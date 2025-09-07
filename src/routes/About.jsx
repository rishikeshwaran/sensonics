// src/pages/About.jsx
import React, { useState, useEffect } from "react";

export default function About() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Fade + zoom animations
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0) scale(1)";
            entry.target.style.transition = `all 0.8s ease`;
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const sectionStyle = {
    minHeight: "100vh",
    position: "relative",
    backgroundImage: 'url("semi.jpg")',
    padding: "3rem 2rem",
    fontFamily: "'Times New Roman', Times, serif",
    color: "black",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    fontSize: "1.2rem",
    lineHeight: "1.8",
    textAlign: "justify",
    marginBottom: "3rem",
    opacity: 0,
    transform: "translateY(50px) scale(0.95)",
    transition: "all 0.5s ease",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    color: "black",
  };

  const headingStyle = {
    textAlign: "center",
  padding: "3rem 0",
  fontFamily: "'Times New Roman', Times, serif",
  fontWeight: "bold",
  fontSize: "4rem",
  color: "#111111", // dark text
  textShadow: `
    2px 2px 4px rgba(0,0,0,0.4),
    4px 4px 8px rgba(0,0,0,0.3),
    6px 6px 12px rgba(0,0,0,0.2)
  `, // layered shadows for depth
  zIndex: 2,
  position: "relative",
  transform: "translateY(0px)",
  animation: "floatShadow 3s ease-in-out infinite alternate, fadeIn 1s ease forwards",
  opacity: 0,
  };

  const subHeadingStyle = {
    fontSize: "2.3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
    opacity: 0,
    transform: "translateY(50px) scale(0.95)",
    transition: "all 0.5s ease",
    cursor: "default",
    color: "black",
  };

  const sectionHeadingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#0d6efd",
    marginBottom: "1rem",
    position: "sticky",
    top: "60px",
    background: "#fff",
    padding: "0.5rem 0",
    zIndex: 10,
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderBottom: "2px solid #ccc",
  };

  const scrollButtonStyle = {
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
    backgroundColor: "#000000ff",
    color: "#fff",
    border: "none",
    padding: "0.8rem 1rem",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.5rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    opacity: showScroll ? 1 : 0,
    pointerEvents: showScroll ? "auto" : "none",
    animation: "pulse 2s infinite",
  };

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "linear-gradient(90deg, #aef3ffff, #fffffeff)",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "1rem 2rem",
    fontWeight: "bold",
    borderBottom: "2px solid #ccc",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "all 0.4s ease",
  };

  const navLinkStyle = {
    color: "#000000ff",
    cursor: "pointer",
    textDecoration: "none",
    position: "relative",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    padding: "0.2rem 0.5rem",
    borderRadius: "5px",
  };

  return (
    <section style={sectionStyle}>
      {/* Navbar */}
      <div style={navStyle}>
        <span
          style={navLinkStyle}
          onClick={() => scrollToSection("kec")}
          onMouseEnter={(e) => {
            e.target.style.color = "#ff9800";
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
            e.target.style.backgroundColor = "rgba(255, 193, 7, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#0d6efd";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          KEC
        </span>
        <span
          style={navLinkStyle}
          onClick={() => scrollToSection("department")}
          onMouseEnter={(e) => {
            e.target.style.color = "#ff9800";
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
            e.target.style.backgroundColor = "rgba(255, 193, 7, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#0d6efd";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          DEPARTMENT
        </span>
        <span
          style={navLinkStyle}
          onClick={() => scrollToSection("sensonics")}
          onMouseEnter={(e) => {
            e.target.style.color = "#ff9800";
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
            e.target.style.backgroundColor = "rgba(255, 193, 7, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#0d6efd";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          SENSONICS
        </span>
      </div>

      <div style={{ position: "relative", zIndex: 1 }} className="container my-5">
        <h1 className="animate-section" style={headingStyle}>
          ABOUT US
        </h1>
        <h2 className="animate-section" style={headingStyle}>
          KONGU ENGINEERING COLLEGE
        </h2>

        {/* KEC */}
        <div id="kec" className="animate-section" style={contentStyle}>
          <h2 style={sectionHeadingStyle}>About The KEC</h2>
          <p>
    Kongu Engineering College was established in the year 1984 (Ruby Jubilee Celebration). 
    Approved by AICTE, New Delhi and affiliated to Anna University, Chennai. 
    The Institution has completed 41 years of dedicated and excellent service in the field of technical education. 
    It offers 14 UG programmes, 6 PG programmes and 16 Research programmes in Engineering, Applied Sciences and Management imparting high quality value added education in India. 
    The college has got NBA accreditation for UG programmes, Best Engineering College award and Best Principal award twice. 
    The institution is ranked high among the Engineering Institutions in India by various surveys conducted by reputed magazines/journals/organization. 
    The institution has established a Technology Business Incubator (TBI) supported by Department of Science and Technology, Government of India in its campus. 
    TBI@KEC has won the National Award for the Best TBI in India, presented by President of India on Technology Day in New Delhi.
  </p>
        </div>

        {/* Department */}
        <div id="department" className="animate-section" style={contentStyle}>
          <h2 style={sectionHeadingStyle}>About The Department</h2>
          <p>
    Department of Electronics and Instrumentation Engineering is established on 1998 (Silver Jubilee Celebration) and offering a full time B.E programme in Electronics and Instrumentation Engineering. 
    This field of engineering imparts technical knowledge in the areas of Electronics Engineering, Biomedical Instrumentation, Control Systems, Signal and Image Processing, Embedded Systems, VLSI, Industrial automation, Neural Network and Fuzzy Logic. 
    Department has sound infrastructural facilities including separate laboratories like Biomedical Instrumentation lab, Sensor and Transducers lab, Measurements and Instrumentation lab, Microprocessor and Microcontroller lab, Advanced Instrumentation lab and DCS lab. 
    Competent faculty and established library are the highlights of the department. 
    The department was accredited by NBA. 
    It is also the recipient of Best Department award from KEC in twice for the academic years 2004-05 and 2012-13. 
    Established Center Of Excellence in industry IOT with the worth of 30 lakhs on October 2022 with the support of ALAI LABS PTE LTD (Singapore).
  </p>
        </div>

        {/* Sensonics */}
        <div id="sensonics" className="animate-section" style={contentStyle}>
          <h2 style={sectionHeadingStyle}>About Sensonics</h2>
          <p>
    Sensonics 2025 is a national-level technical symposium organized by the Department of Electronics and Instrumentation Engineering at Kongu Engineering College. 
    It serves as a platform for students from various institutions to enhance their knowledge and showcase their skills across diverse events. 
    The symposium features competitions such as paper presentations, a project expo, and coding challenges, allowing participants to demonstrate their technical expertise and creativity. 
    Additionally, various non-technical events foster collaboration, creativity, and teamwork. 
    Sensonics aims to promote innovation, facilitate knowledge exchange, and provide students with hands-on experiences in both technical and non-technical areas.
  </p>
        </div>
      </div>

      {/* Scroll to top */}
      {showScroll && (
        <button style={scrollButtonStyle} onClick={scrollToTop}>
          ↑
        </button>
      )}

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
