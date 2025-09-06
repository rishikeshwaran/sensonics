// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  const containerStyle = {
    fontFamily: "'Times New Roman', Times, serif",
    position: "relative",
    minHeight: "100vh",
    backgroundImage: 'url("semi.jpg")', // background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 0,
  };

  const contentWrapper = {
    position: "relative",
    zIndex: 1,
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "4rem",
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "1rem",
    color: "#fff",
  };

  const subHeadingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#fff",
  };

  const eventTitle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    margin: "1rem 0",
  };

  const contactText = {
    fontSize: "2rem",
    textAlign: "center",
    color: "#fff",
    marginBottom: "0.5rem",
  };

  const headerBox = {
    backgroundColor: "rgba(30,60,114,0.8)",
    padding: "2rem",
    borderRadius: "10px",
    marginBottom: "2rem",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentWrapper}>
        {/* Contact Header */}
        <div style={headerBox}>
          <h1 style={headingStyle}>CONTACT US</h1>
          <h3 style={subHeadingStyle}>EVENT COORDINATORS</h3>
        </div>

        {/* Example: Event + Coordinators Split */}
        <div>
          <div style={eventTitle}>Insight Scribe</div>
          <div style={contactText}>1. P Gnaneshwaran - 8825711173</div>
          <div style={contactText}>2. S Agilan - 8870245720</div>
        </div>

        <div>
          <div style={eventTitle}>Tech Venture</div>
          <div style={contactText}>3. E Kavin - 6374401110</div>
        </div>

        <div>
          <div style={eventTitle}>Code Wars</div>
          <div style={contactText}>4. S Nathin - 8946063420</div>
          <div style={contactText}>5. N Naveen - 9361434969</div>
        </div>

        <div>
          <div style={eventTitle}>Innovators Rally</div>
          <div style={contactText}>6. S Jayyent - 9842748887</div>
        </div>

        <div>
          <div style={eventTitle}>IPL Brawl</div>
          <div style={contactText}>7. J S Mukilesh - 9043680939</div>
          <div style={contactText}>8. S Malligeshwaran - 9087298342</div>
        </div>

        <div>
          <div style={eventTitle}>Explore - X</div>
          <div style={contactText}>9. A N Sasivarman - 9698429990</div>
          <div style={contactText}>10. R Karthikeyan - 9597535014</div>
        </div>

        <div>
          <div style={eventTitle}>True Detective</div>
          <div style={contactText}>11. S Merun Hrithik - 9626320112</div>
        </div>

        <div>
          <div style={eventTitle}>Lensation</div>
          <div style={contactText}>12. B Akshaya Prashath - 6381909301</div>
        </div>

        <div>
          <div style={eventTitle}>FACTORY I/O</div>
          <div style={contactText}>13. G Karun - 7904006648</div>
          <div style={contactText}>14. U J Sarnish - 8778160096</div>
        </div>

        {/* Overall Coordinators Header */}
        <div style={headerBox}>
          <h3 style={subHeadingStyle}>OVERALL COORDINATORS</h3>
        </div>
        <div style={contactText}>15. VIKASH A - vikasha.21eie@kongu.edu - 8525804965</div>
        <div style={contactText}>16. PRIYA R - priyar.21eie@kongu.edu - 9344263234</div>

        {/* Faculty Coordinators Header */}
        <div style={headerBox}>
          <h3 style={subHeadingStyle}>FACULTY COORDINATORS</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          <div style={{ textAlign: "center", width: "250px" }}>
            <img
              src="PAPER.png"
              alt="Ms. M. LIZZY NESA BAGYUM"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <div style={contactText}>
              Ms. M. LIZZY NESA BAGYUM
              <br />
              Assistant Professor (Sr.G)
              <br />
              9943960655
            </div>
          </div>
          <div style={{ textAlign: "center", width: "250px" }}>
            <img
              src="PROJECT.png"
              alt="Mr. S. JEGAN"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <div style={contactText}>
              Mr. S. JEGAN
              <br />
              Assistant Professor (Sr.G)
              <br />
              7598279706
            </div>
          </div>
        </div>

        {/* Location Header */}
        <div style={headerBox}>
          <h3 style={subHeadingStyle}>LOCATION</h3>
        </div>
        <div style={contactText}>
          <strong>Address:</strong> Kongu Engineering College, Perundurai, Erode 638060
        </div>
        <div style={contactText}>
          <strong>Transport:</strong> College bus arranged from Perundurai to KEC campus. Timing: 7:00 am - 8:45 am
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
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
      </div>
    </div>
  );
};

export default Contact;
