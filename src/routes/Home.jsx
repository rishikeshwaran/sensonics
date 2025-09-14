// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "/SENSONICS1.png";
import eventPoster from "/SENSONICS POSTER.png";
import tech1 from "/PAPER.png";
import tech2 from "/PROJECT.png";
import tech3 from "/CODING.png";
import tech4 from "/CIRCUIT.png";
import workshopImg from "/WORKSHOP.png";
import nonTech1 from "/KEYS TO FORTUNE.png";
import nonTech2 from "/MISSION CAMPUS.png";
import nonTech3 from "/MELODIA.png";
import nonTech4 from "/RANPO'S OBSERVATORY.png";
import deptLogo from "/logo.png"; // Department logo

const Home = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "0", hours: "0", minutes: "0", seconds: "0"
  });
  const [zoom, setZoom] = useState({
    days: false, hours: false, minutes: false, seconds: false
  });

  const eventDate = new Date("2025-10-09T09:00:00");

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({days: "0", hours: "0", minutes: "0", seconds: "0"});
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setZoom({
          days: days !== parseInt(timeLeft.days),
          hours: hours !== parseInt(timeLeft.hours),
          minutes: minutes !== parseInt(timeLeft.minutes),
          seconds: seconds !== parseInt(timeLeft.seconds),
        });

        setTimeLeft({ days, hours, minutes, seconds });
        setTimeout(() => setZoom({ days: false, hours: false, minutes: false, seconds: false }), 300);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          setTimeout(() => el.classList.add("active"), index * 150);
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const techEvents = [
    { img: tech1, title: "PAPERLOGUE", subtitle: "[PAPER PRESENTATION]", link: "/events" },
    { img: tech2, title: "CREATION UNLEASHED", subtitle: "[PROJECT PRESENTATION]", link: "/events" },
    { img: tech3, title: "CODE DEBUG CONSOLE", subtitle: "[PROGRAMMING CHALLENGE]", link: "/events" },
    { img: tech4, title: "BUG2BOARD", subtitle: "[CIRCUIT DEBUGGING]", link: "/events" },
  ];

  const nonTechEvents = [
    { img: nonTech1, title: "KEYS TO FORTUNE", subtitle: "[FUN CRICKET QUIZ]", link: "/events" },
    { img: nonTech2, title: "MISSION : CAMPUS", subtitle: "[CAMPUS VOYAGE]", link: "/events" },
    { img: nonTech3, title: "RHYTHM RIDDLE", subtitle: "[MELODIA]", link: "/events" },
    { img: nonTech4, title: "RANPO'S OBSERVATORY", subtitle: "[SHERLOCK SENSE]", link: "/events" },
  ];

  return (
    <div style={{ fontFamily: "'Times New Roman', Times, serif", color: "black", background: 'url("/semi.jpg")', backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
      
      <nav className="sticky-nav">
        <h3 className="text-title">EIE Symposium - Sensonics 2K25</h3>
      </nav>

      <section className="reveal fade-up">
        <img src={bannerImg} alt="Banner" style={{ width: "100%", height: "auto" }} />
      </section>

      <section className="text-center py-5 reveal fade-up">
        <h2 className="text-title">KONGU ENGINEERING COLLEGE</h2>
        <h3 className="text-title">DEPARTMENT OF ELECTRONICS AND INSTRUMENTATION ENGINEERING</h3>
        <h3 className="text-title">EIE ASSOCIATION</h3>
        <h3 className="text-title">PROUDLY PRESENTS</h3>
        <h2 className="text-title">A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h2>

        {/* Countdown Timer */}
        <div className="countdown-container mt-3">
          {["days","hours","minutes","seconds"].map((unit, idx) => (
            <div key={idx} className={`countdown-btn gradient${idx+1} ${zoom[unit] ? "zoom" : ""}`}>
              <span className="digit">{timeLeft[unit]}</span><br/>{unit.charAt(0).toUpperCase()+unit.slice(1)}
            </div>
          ))}
        </div>
      </section>

      {/* Registration & Poster */}
      <section className="text-center py-4 reveal fade-up">
        <h3 className="text-title">
          Join 3 exciting events for just ₹250! Win cash prizes and certificates!
          <br />
          Highest participation from the same college will score an amazing award!
        </h3>
        <h2 className="text-title">REGISTRATION OPENED!</h2>
        <h3 className="text-title">NO ON SPOT REGISTRATION</h3>
        <button className="btn-register mt-3" onClick={() => navigate("/events")}>🚀 Register Now</button>
        <div className="mt-4">
          <img src={eventPoster} alt="Sensonics Poster" className="img-fluid" />
        </div>
      </section>

      {/* Payment Rules */}
      <div className="text-center mt-3">
          <button className="btn-register" onClick={() => navigate("/schedule")}>📅 View Event Schedule</button>
        </div>
      <section className="py-4 reveal fade-up" style={{ textAlign: "center" }}>
        <h2 className="text-title">PAYMENT RULES</h2>
        <ol style={{ display: "inline-block", textAlign: "left", marginTop: "1rem", lineHeight: "1.8", fontSize: "1.8rem" }}>
          <li>The payment must be proceeded only through the participant’s ID.</li>
          <li>Each person should pay ₹250 with maximum participation of any 3 events (1 technical event compulsory with other 2 events of your choice).</li>
          <li>If it’s a team event you may proceed with individual payment only.</li>
          <li>Pay ₹300 for workshop.</li>
          <li>Workshop participants cannot participate in other technical and non-technical events.</li>
          <li>Refreshment and Lunch will be provided.</li>
        </ol>
        <button className="btn-register mt-3" onClick={() => navigate("/gallery")}>
          📷 View Gallery
        </button>
      </section>

      {/* Tech & Non-Tech Events */}
      {["TECH EVENTS", "NON-TECH EVENTS"].map((title, idx) => {
        const events = idx === 0 ? techEvents : nonTechEvents;
        return (
          <section key={idx} className="py-5 reveal fade-up">
            <h2 className="text-title text-center mb-4">{title}</h2>
            <div className="cards">
              {events.map((event, i) => (
                <div key={i} className="flip-card reveal zoom-rotate">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={event.img} alt={event.title} />
                      <h3 className="text-title">{event.title}</h3>
                      
                    </div>
                    <div className="flip-card-back">
                      
                      <p className="text-body1">{event.subtitle}</p>
                      <button className="btn-know" onClick={() => navigate(event.link)}>Know More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Workshop */}
      <section className="py-5 reveal fade-up">
        <h2 className="text-title text-center mb-4">WORKSHOP</h2>
        <div className="cards" style={{ justifyContent: "center" }}>
          <div className="flip-card reveal zoom-rotate">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={workshopImg} alt="Workshop" />
                <h3 className="text-title">FACTORY I/O</h3>

              </div>
              <div className="flip-card-back">
                <p className="text-body1"><strong>Fee:</strong> ₹300</p>
                <p className="text-body1"><strong>Note:</strong> Cannot join other events</p>
                <button className="btn-know" onClick={() => navigate("/events")}>Know More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn-register" onClick={() => navigate("/department-video")}>🎥 Watch Department Video</button>
        </div>
      </section>

      {/* Department Info */}
      <section className="py-5 reveal fade-up" style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "3rem", flexWrap:"wrap" }}>
        <div style={{ flex: "1", minWidth: "250px" }}>
          <img src={deptLogo} alt="EIE Association Logo" style={{ width: "100%", borderRadius:"12px" }} />
        </div>
        <div style={{ flex: "2", minWidth: "300px" }}>
          <h2 className="text-title">EIE ASSOCIATION</h2>
          <p className="text-body">
            The Electronics and Instrumentation Association, established in 2002, plays a pivotal role in enhancing student skills and knowledge in the field. Through various activities such as workshops, seminars, and technical competitions, it bridges the gap between classroom theory and industry practice. The association fosters innovation by providing hands-on training in emerging technologies. Regular industrial visits, expert talks, and career guidance programs equip students with practical insights and professional connections. By cultivating both technical expertise and leadership skills, the association ensures holistic development and prepares students for successful careers in the industry.
          </p>

          <h3 className="text-title mt-3">HEAD OF THE DEPARTMENT</h3>
          <p className="text-body">Dr. S.J. SUJIPRASAD</p>

          <h3 className="text-title">FACULTY COORDINATORS</h3>
          <p className="text-body">Dr. K.N. BALUPRITHIVIRAJ</p>
          <p className="text-body">Ms. N. INDHU</p>

          <div className="mt-4">
            <button className="btn-register mr-2" onClick={() => navigate("/contact")}>📞 Contact Us</button>
            <button className="btn-register mr-2" onClick={() => navigate("/contact")}>📍 Location</button>
            <button className="btn-register" onClick={() => navigate("/faq")}>❓ FAQ</button>
          </div>
        </div>
      </section>

      {showScroll && <button className="scroll-top" onClick={scrollToTop}>↑</button>}

      {/* CSS */}
      <style>{`
        .sticky-nav{position:sticky;top:0;z-index:1000;background:white;text-align:center;padding:1rem;font-weight:bold;box-shadow:0 2px 8px rgba(0,0,0,0.1);}
        .cards{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem;}
        .btn-register{background:#ff6a00;color:white;font-size:1.8rem;padding:15px 40px;border-radius:12px;font-weight:bold;border:none;cursor:pointer;transition:transform 0.3s, box-shadow 0.3s;margin:5px;}
        .btn-register:hover{transform:scale(1.05);box-shadow:0 0 15px rgba(255,255,255,0.6);}

        .countdown-container{display:flex;flex-wrap:wrap;justify-content:center;gap:15px;margin-top:20px;}
        .countdown-btn{padding:12px 22px;font-size:1.8rem;border-radius:12px;border:none;font-weight:bold;transition:all 0.3s;text-align:center;color:white;box-shadow:0 4px 8px rgba(0,0,0,0.2);flex:1;min-width:80px;}
        .countdown-btn.zoom{animation:heartbeat 0.6s;}
        .countdown-btn .digit{display:block;font-size:2.2rem;font-weight:bold;margin-bottom:5px;}
        .countdown-btn:hover{box-shadow:0 0 20px rgba(255,255,255,0.6);animation:glow 1.5s infinite alternate;}

        @keyframes heartbeat{0%{transform:scale(1);}25%{transform:scale(1.2);}50%{transform:scale(1);}75%{transform:scale(1.2);}100%{transform:scale(1);}}
        @keyframes glow{0%{box-shadow:0 0 10px rgba(255,255,255,0.4);}100%{box-shadow:0 0 25px rgba(255,255,255,0.7);}}

        .gradient1{background:linear-gradient(135deg, #ff416c, #ff4b2b);}
        .gradient2{background:linear-gradient(135deg, #1fa2ff, #12d8fa);}
        .gradient3{background:linear-gradient(135deg, #f7971e, #ffd200);}
        .gradient4{background:linear-gradient(135deg, #76b852, #8DC26F);}

        .btn-know{background:orange;border:none;padding:10px 20px;border-radius:8px;font-weight:bold;cursor:pointer;transition:all 0.3s;animation:float 2s infinite alternate;}
        .btn-know:hover{transform:translateY(-5px) scale(1.05);background:darkorange;}
        @keyframes float{0%{transform:translateY(0);}100%{transform:translateY(-5px);}}

        .scroll-top{position:fixed;bottom:30px;right:30px;background:black;color:white;border:none;border-radius:50%;width:50px;height:50px;font-size:22px;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,0.3);transition:all 0.3s;}
        .scroll-top:hover{transform:scale(1.1);box-shadow:0 0 15px rgba(0,0,0,0.4);}

        .reveal{opacity:0;transform:translateY(40px);transition:all 0.8s ease-out;}
        .reveal.active{opacity:1;transform:translateY(0);}

        .zoom-rotate{transition:transform 0.5s ease;cursor:pointer;}
        .zoom-rotate:hover{transform:scale(1.05) rotateY(10deg) rotateX(5deg);}

        .flip-card{background:transparent;width:240px;height:300px;perspective:1000px;}
        .flip-card-inner{position:relative;width:100%;height:100%;text-align:center;transition:transform 0.8s;transform-style:preserve-3d;}
        .flip-card:hover .flip-card-inner{transform:rotateY(180deg);}
        .flip-card-front,.flip-card-back{position:absolute;width:100%;height:100%;border-radius:12px;backface-visibility:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem;box-shadow:0 4px 8px rgba(0,0,0,0.1);}
        .flip-card-front{background:white;}
        .flip-card-back{background:black;color:white;transform:rotateY(180deg);}

        /* Keyframe animations */
@keyframes floatShadow {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Title style */
.text-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  color: #111111; /* dark text */
  text-shadow:
    1px 1px 2px rgba(0,0,0,0.3),
    2px 2px 4px rgba(0,0,0,0.2);
  animation: floatShadow 3s ease-in-out infinite alternate, fadeIn 1s ease forwards;
  opacity: 0;
  position: relative;
  z-index: 2;
}

/* Body text style (dark) */
.text-body {
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  margin: 8px 0;
  line-height: 1.5;
  color: #111111; /* dark text */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  animation: floatShadow 3s ease-in-out infinite alternate, fadeIn 1s ease forwards;
  opacity: 0;
  position: relative;
  z-index: 2;
}

/* Body text style (white) */
.text-body1 {
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  margin: 8px 0;
  line-height: 1.5;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  animation: floatShadow 3s ease-in-out infinite alternate, fadeIn 1s ease forwards;
  opacity: 0;
  position: relative;
  z-index: 2;
}

        @media(max-width:768px){
          .countdown-container{flex-direction:column;gap:15px;}
          .countdown-btn{width:100%;font-size:1.5rem;padding:10px 15px;}
          .countdown-btn .digit{font-size:2rem;}
          section[style*="display: flex"]{flex-direction:column;}
        }
      `}</style>
    </div>
  );
};

export default Home;
