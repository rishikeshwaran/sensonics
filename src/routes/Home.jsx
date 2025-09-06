// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "/SENSONICS1.png"; 
import eventPoster from "/SENSONICS.png"; 
import tech1 from "/PAPER.png"; 
import tech2 from "/PROJECT.png";
import tech3 from "/CODING.png";
import tech4 from "/CIRCUIT.png";
import workshopImg from "/WORKSHOP.png";
import nonTech1 from "/KEYS TO FORTUNE.png";
import nonTech2 from "/MISSION CAMPUS.png";
import nonTech3 from "/MELODIA.png";
import nonTech4 from "/RANPO'S OBSERVATORY.png";
import logo from "/logo.png"; // Add your EIE logo here

const Home = () => {
  const navigate = useNavigate();

  const techEvents = [
    { img: tech1, title: "INSIGHT SCRIBE", subtitle: "[PAPER PRESENTATION]", link: "/events" },
    { img: tech2, title: "TECH VENTURE", subtitle: "[PROJECT PRESENTATION]", link: "/events" },
    { img: tech3, title: "CODE WARS", subtitle: "[CODING CONTEST]", link: "/events" },
    { img: tech4, title: "INNOVATORS RALLY", subtitle: "[IDEATHON]", link: "/events" },
  ];

  const nonTechEvents = [
    { img: nonTech1, title: "IPL BRAWL", subtitle: "[FUN CRICKET QUIZ]", link: "/events" },
    { img: nonTech2, title: "EXPLORE-X", subtitle: "[GENERAL AWARENESS]", link: "/events" },
    { img: nonTech3, title: "TRUE DETECTIVE", subtitle: "[CRIME SCENE PUZZLE]", link: "/events" },
    { img: nonTech4, title: "LENSATION", subtitle: "[PHOTOGRAPHY & STORY]", link: "/events" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        color: "white",
        background: 'url("/semi.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Banner */}
      <section>
        <img src={bannerImg} alt="Banner" style={{ width: "100%", height: "auto" }} />
      </section>

      {/* College Info */}
      <section className="text-center py-5">
        <h2>KONGU ENGINEERING COLLEGE</h2>
        <h3>DEPARTMENT OF ELECTRONICS AND INSTRUMENTATION ENGINEERING</h3>
        <h3>EIE ASSOCIATION</h3>
        <p>PROUDLY PRESENTS</p>
        <h2>A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h2>
        <a 
          href="https://www.youtube.com/watch?v=XXXXXXXXXXX" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-warning mt-3"
        >
          🎥 Watch EIE Department Video
        </a>
      </section>

      {/* Registration Info */}
      <section className="text-center py-4">
        <h3>Join 3 exciting events for just ₹250! Win cash prizes and certificates!</h3>
        <h3>Highest participation from the same college will score an amazing award!</h3>
        <h2>REGISTRATION OPENED!</h2>
        <h3>NO ON SPOT REGISTRATION</h3>

        <button 
          className="btn btn-success btn-lg mt-3"
          onClick={() => navigate("/payment")}
        >
          🚀 Register Now
        </button>

        <div className="mt-4">
          <img src={eventPoster} alt="Sensonics Poster" className="img-fluid" />
        </div>
      </section>

      {/* Tech Events */}
      <section className="py-5">
        <h2 className="text-center mb-4">TECH EVENTS</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {techEvents.map((event, i) => (
            <div key={i} style={{ textAlign: "center", width: "220px" }}>
              <img 
                src={event.img} 
                alt={event.title} 
                className="img-fluid rounded shadow" 
                style={{ cursor: "pointer" }} 
                onClick={() => navigate(event.link)} 
              />
              <h3 style={{ cursor: "pointer" }} onClick={() => navigate(event.link)}>
                {event.title}
              </h3>
              <p>{event.subtitle}</p>
              <button 
                className="btn btn-primary w-100" 
                onClick={() => navigate(event.link)}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Tech Events */}
      <section className="py-5">
        <h2 className="text-center mb-4">NON-TECH EVENTS</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {nonTechEvents.map((event, i) => (
            <div key={i} style={{ textAlign: "center", width: "220px" }}>
              <img 
                src={event.img} 
                alt={event.title} 
                className="img-fluid rounded shadow" 
                style={{ cursor: "pointer" }} 
                onClick={() => navigate(event.link)} 
              />
              <h3 style={{ cursor: "pointer" }} onClick={() => navigate(event.link)}>
                {event.title}
              </h3>
              <p>{event.subtitle}</p>
              <button 
                className="btn btn-primary w-100" 
                onClick={() => navigate(event.link)}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop */}
      <section className="py-5 text-center">
        <h2>WORKSHOP</h2>
        <h3>
          Factory I/O is a simulation software for learning industrial automation and control systems.
        </h3>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <img src={workshopImg} alt="Workshop" style={{ width: "220px" }} />
          <div>
            <h3>FACTORY I/O</h3>
            <p>[WORKSHOP]</p>
          </div>
        </div>
      </section>

      {/* Payment Rules */}
      <section className="py-5 container">
        <h1 className="text-center mb-4">PAYMENT RULES</h1>
        <div style={{ fontSize: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
          <ul>
            <li>The payment must be proceeded only through the participant’s ID.</li>
            <li>
              Each person should pay <strong>₹250</strong> with maximum participation of any 3 events 
              (<strong>1 technical event compulsory</strong> with other 2 events of your choice).
            </li>
            <li>
              If it’s a team event you may proceed with common payment.  
              (Eg: Team of 2 = ₹500, 3 = ₹750, 4 = ₹1000).
            </li>
            <li>Pay <strong>₹300</strong> for workshop.</li>
            <li><strong>Workshop participants cannot participate</strong> in other technical and non-technical events.</li>
            <li>Refreshment and Lunch will be provided.</li>
          </ul>
        </div>

        <div className="text-center mt-4">
          <button 
            className="btn btn-info btn-lg"
            onClick={() => navigate("/gallery")}
          >
            📸 View Gallery
          </button>
        </div>
      </section>

      {/* EIE Association */}
      <section className="py-5 container">
        <h1 className="text-center mb-5">EIE ASSOCIATION</h1>
        <div className="row align-items-center">
          {/* Logo LHS */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src={logo} alt="EIE Association Logo" className="img-fluid" style={{ maxWidth: "280px" }} />
          </div>
          {/* Description RHS */}
          <div className="col-md-8">
            <p style={{ fontSize: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
              The Electronics and Instrumentation Association, established in 2002, plays a pivotal role in enhancing student skills and knowledge in the field. 
              Through various activities such as workshops, seminars, and technical competitions, it bridges the gap between classroom theory and industry practice. 
              The association fosters innovation by providing hands-on training in emerging technologies. Regular industrial visits, expert talks, and career guidance programs equip students with practical insights and professional connections. 
              By cultivating both technical expertise and leadership skills, the association ensures holistic development and prepares students for successful careers in the industry.
            </p>
            <h4 className="mt-4">HEAD OF THE DEPARTMENT</h4>
            <p>Dr.S.J.SUJIPRASAD</p>
            <h4 className="mt-3">FACULTY COORDINATORS</h4>
            <p>Ms.M.LIZZY NESA BAGYAM</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/location")}>📍 Location</button>
          <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/contact")}>📞 Contact</button>
          <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/faq")}>❓ FAQ</button>
        </div>
      </section>

      {/* Event Schedule Button */}
      <section className="text-center py-5">
        <button 
          className="btn btn-warning btn-lg" 
          onClick={() => navigate("/schedule")}
        >
          View Event Schedule
        </button>
      </section>
    </div>
  );
};

export default Home;
