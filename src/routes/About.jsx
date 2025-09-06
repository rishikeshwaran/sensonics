// src/pages/About.jsx
import React from "react";

export default function About() {
  const sectionStyle = {
    minHeight: "100vh",
    position: "relative",
    backgroundImage: 'url("semi.jpg")', // your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "3rem 2rem",
    fontFamily: "'Times New Roman', Times, serif",
    color: "white",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    fontSize: "1.2rem", // slightly larger
    lineHeight: "1.8",
    textAlign: "justify",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  const subHeadingStyle = {
    fontSize: "2.3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  };

  const sectionHeadingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#0d6efd", // text-primary equivalent
    marginBottom: "1rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={{ position: "relative", zIndex: 1 }} className="container my-5">
        {/* Main Title */}
        <h1 style={headingStyle}>About Us</h1>
        <h2 style={subHeadingStyle}>KONGU ENGINEERING COLLEGE</h2>

        {/* About KEC */}
        <div className="mb-5" style={contentStyle}>
          <h2 style={sectionHeadingStyle}>About The KEC</h2>
          <p>
            Kongu Engineering College was established in the year 1984 (Ruby Jubilee
            Celebration). Approved by AICTE, New Delhi and affiliated to Anna University,
            Chennai. The Institution has completed 40 years of dedicated and excellent
            service in the field of technical education. It offers 14 UG programmes,
            6 PG programmes and 16 Research programmes in Engineering, Applied Sciences
            and Management imparting high quality value added education in India.
            The college has got NBA accreditation for UG programmes, Best Engineering
            College award and Best Principal award twice. The institution is ranked
            high among the Engineering Institutions in India by various surveys conducted
            by reputed magazines/journals/organization. The institution has established
            a Technology Business Incubator (TBI) supported by Department of Science and
            Technology, Government of India in its campus. TBI@KEC has won the National
            Award for the Best TBI in India, presented by President of India on
            Technology Day in New Delhi.
          </p>
        </div>

        {/* About Department */}
        <div className="mb-5" style={contentStyle}>
          <h2 style={sectionHeadingStyle}>About The Department</h2>
          <p>
            Department of Electronics and Instrumentation Engineering is established on
            1998 (Silver Jubilee Celebration) and offering a full time B.E programme in
            Electronics and Instrumentation Engineering. This field of engineering imparts
            technical knowledge in the areas of Electronics Engineering, Biomedical
            Instrumentation, Control Systems, Signal and Image Processing, Embedded
            Systems, VLSI, Industrial automation, Neural Network and Fuzzy Logic.
            Department has sound infrastructural facilities including separate laboratories
            like Biomedical Instrumentation lab, Sensor and Transducers lab, Measurements
            and Instrumentation lab, Microprocessor and Microcontroller lab, Advanced
            Instrumentation lab and DCS lab. Competent faculty and established library
            are the highlights of the department. The department was accredited by NBA.
            It is also the recipient of Best Department award from KEC in twice for the
            academic years 2004-05 and 2012-13. Established Center Of Excellence in
            industry IOT with the worth of 30 lakhs on October 2022 with the support
            of ALAI LABS PTE LTD (Singapore).
          </p>
        </div>

        {/* About Sensonics */}
        <div style={contentStyle}>
          <h2 style={sectionHeadingStyle}>About Sensonics</h2>
          <p>
            Sensonics 2024 is a national-level technical symposium organized by the
            Department of Electronics and Instrumentation Engineering at Kongu
            Engineering College. It serves as a platform for students from various
            institutions to enhance their knowledge and showcase their skills across
            diverse events. The symposium features competitions such as paper
            presentations, a project expo, and coding challenges, allowing participants
            to demonstrate their technical expertise and creativity. Additionally,
            various non-technical events foster collaboration, creativity, and teamwork.
            Sensonics aims to promote innovation, facilitate knowledge exchange, and
            provide students with hands-on experiences in both technical and
            non-technical areas.
          </p>
        </div>
      </div>
    </section>
  );
}
