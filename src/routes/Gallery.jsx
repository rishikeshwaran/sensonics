// src/pages/Gallery.jsx
import React from "react";
import { Carousel } from "react-bootstrap";

export default function Gallery() {
  const sectionStyle = {
    minHeight: "100vh",
    backgroundImage: 'url("semi.jpg")', // your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "3rem 2rem",
  };

  const headerStyle = {
    textAlign: "center",
    padding: "3rem 0",
    color: "white",
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: "bold",
  };

  const carouselWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    alignItems: "center",
    margin: "3rem 0",
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: "bold",
    color: "#000000ff",
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
    color: "#ffffffff",
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
  });

  return (
    <section style={sectionStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 className="display-4">GALLERY</h1>
      </div>

      {/* Carousel + Text */}
      <div style={carouselWrapper}>
        <div style={leftCarousel}>
          <Carousel fade interval={3000}>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="sen1.JPG" alt="Event 1" />
              <Carousel.Caption>
                <h3>Inauguration</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="sen2.JPG" alt="Event 2" />
              <Carousel.Caption>
                <h3>Golden Speech</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="sen5.JPG" alt="Event 3" />
              <Carousel.Caption>
                <h3>NewsLetter</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="sen8.JPG" alt="Event 4" />
              <Carousel.Caption>
                <h3>Winners</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="sen12.JPG" alt="Event 5" />
              <Carousel.Caption>
                <h3>Overall Champions</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div style={rightText}>
          Sensonics 2K24 Highlights
        </div>
      </div>

    <div style={masonryGrid}> <img src="sen4.JPG" alt="Gallery 1" style={masonryItem(2, 2)} /> <img src="sen2.JPG" alt="Gallery 2" style={masonryItem(1, 1)} /> <img src="sen3.JPG" alt="Gallery 3" style={masonryItem(1, 1)} /> <img src="sen5.JPG" alt="Gallery 4" style={masonryItem(2, 1)} /> <img src="sen6.JPG" alt="Gallery 5" style={masonryItem(1, 2)} /> <img src="sen12.JPG" alt="Gallery 6" style={masonryItem(1, 2)} /> <img src="sen9.JPG" alt="Gallery 8" style={masonryItem(1, 1)} /> <img src="sen8.JPG" alt="Gallery 7" style={masonryItem(2, 1)} /> <img src="sen7.JPG" alt="Gallery 11" style={masonryItem(2, 1)} /> <img src="sen10.JPG" alt="Gallery 9" style={masonryItem(1, 2)} /> <img src="sen11.JPG" alt="Gallery 10" style={masonryItem(1, 1)} /> </div>
    </section>
  );
}
