// src/pages/Gallery.jsx
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";

export default function Gallery() {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll button visibility
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionStyle = {
    minHeight: "100vh",
    backgroundImage: 'url("semi.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "3rem 2rem",
    position: "relative",
    color: "#000",
    fontFamily: "'Times New Roman', Times, serif",
  };

  const headerStyle = {
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




  const carouselWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    alignItems: "center",
    margin: "3rem 0",
    position: "relative",
    zIndex: 2,
  };

  const leftCarousel = {
    flex: "1 1 500px",
    maxWidth: "600px",
  };

  const rightText = {
    flex: "1 1 300px",
    maxWidth: "400px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#000",
    fontFamily: "'Times New Roman', Times, serif",
    borderRadius: "10px",
  };

  const masonryGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridAutoRows: "150px",
    gap: "1rem",
    marginTop: "3rem",
  };

  const masonryItem = (rowSpan = 1, colSpan = 1) => ({
    gridRow: `span ${rowSpan}`,
    gridColumn: `span ${colSpan}`,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  });

  return (
    <section style={sectionStyle}>
      {/* Header */}
      <div style={headerStyle}>GALLERY</div>
<div style={headerStyle}>Sensonics 2K24 Highlights</div>
      {/* Carousel + Text */}
      <div style={carouselWrapper}>
        <div style={leftCarousel}>
          <Carousel fade interval={3000}>
            {[
              { src: "sen1.JPG", caption: "Inauguration" },
              { src: "sen2.JPG", caption: "Golden Speech" },
              { src: "sen5.JPG", caption: "NewsLetter" },
              { src: "sen8.JPG", caption: "Winners" },
              { src: "sen12.JPG", caption: "Overall Champions" },
            ].map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100 rounded shadow"
                  src={item.src}
                  alt={item.caption}
                />
                <Carousel.Caption
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "10px",
                    padding: "0.2rem 0.5rem",
                  }}
                >
                  <h3 style={{ color: "#000" }}>{item.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        
      </div>

      {/* Masonry Grid */}
      <div style={masonryGrid}>
        {[
          { src: "sen4.JPG", row: 2, col: 2 },
          { src: "sen2.JPG", row: 1, col: 1 },
          { src: "sen3.JPG", row: 1, col: 1 },
          { src: "sen5.JPG", row: 2, col: 2 },
          { src: "sen6.JPG", row: 1, col: 2 },
          { src: "sen12.JPG", row: 1, col: 2 },
          { src: "sen9.JPG", row: 1, col: 1 },
          { src: "sen8.JPG", row: 2, col: 1 },
          { src: "sen11.JPG", row: 1, col: 1 },
          { src: "sen10.JPG", row: 1, col: 2 },
        ].map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`Gallery ${idx + 1}`}
            style={masonryItem(img.row, img.col)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>
<div className="text-center mt-3">
          <button className="btn-register" onClick={() => navigate("/department-video")}>🎥 Watch Department Video</button>
        </div>
      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#000",
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
            zIndex: 999,
          }}
        >
          <FaArrowUp />
        </button>
      )}

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
          
  @keyframes bounceFade {
    0% { transform: translateY(-50px); opacity: 0; }
    60% { transform: translateY(10px); opacity: 1; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes glowPulse {
    0% { text-shadow: 0 0 5px #0d6efd, 0 0 10px #0d6efd; }
    50% { text-shadow: 0 0 15px #fd510dff, 0 0 25px #fd650dff; }
    100% { text-shadow: 0 0 5px #0d6efd, 0 0 10px #0d6efd; }
  }

@keyframes gradientRotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
@keyframes floatShadow {
    0% { transform: translateY(0px); text-shadow: 2px 2px 4px rgba(0,0,0,0.4), 4px 4px 8px rgba(0,0,0,0.3), 6px 6px 12px rgba(0,0,0,0.2); }
    50% { transform: translateY(-10px); text-shadow: 3px 3px 6px rgba(0,0,0,0.5), 5px 5px 10px rgba(0,0,0,0.35), 7px 7px 14px rgba(0,0,0,0.25); }
    100% { transform: translateY(0px); text-shadow: 2px 2px 4px rgba(0,0,0,0.4), 4px 4px 8px rgba(0,0,0,0.3), 6px 6px 12px rgba(0,0,0,0.2); }
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }
  @keyframes floatText {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
    .btn-register{background:#ff6a00;color:white;font-size:1.8rem;padding:15px 40px;border-radius:12px;font-weight:bold;border:none;cursor:pointer;transition:transform 0.3s, box-shadow 0.3s;margin:5px;}
        .btn-register:hover{transform:scale(1.05);box-shadow:0 0 15px rgba(255,255,255,0.6);}

      `}</style>
    </section>
  );
}
