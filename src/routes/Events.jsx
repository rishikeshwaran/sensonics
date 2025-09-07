// src/pages/Events.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Events() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const events = [
    // ------------------- TECHNICAL EVENTS -------------------
    {
      category: "Technical",
      title: "PAPERLOGUE [ PAPER PRESENTATION ]",
      date: "25/10/2024",
      image: "/PAPER.png",
      registerLink: "https://forms.gle/2pTsFNExnD5UAVjj9",
      contactLink: "/contact",
      instructions: [
        "PPT format from any domain is permitted to present.",
        "For a team maximum of three members are allowed to participate.",
        "Anyone from a team (preferably team leader) is enough to register.",
        "Further information will be sent through the registered mail or WhatsApp.",
        "Free lunch and refreshment will be provided for all the participants."
      ],
      format: [
        "PPT should contain maximum of 6-7 slides.",
        "Time allotted for each team is 7 minutes (5 minutes presentation + 2 minutes Q/A).",
        "The team leader has to send the PPT, which will be collected later.",
        "Participants are requested to bring a hardcopy of their paper.",
        "Certificates will be given to all participants and winners."
      ]
    },
    {
      category: "Technical",
      title: "CREATION UNLEASHED [ PROJECT PRESENATION ]",
      date: "26/10/2024",
      image: "/PROJECT.png",
      registerLink: "https://forms.gle/tiPZZ6UnR7oKPkuT7",
      contactLink: "/contact",
      instructions: [
        "Open to students from all engineering domains.",
        "Team size: Maximum of 4 members.",
        "One member should register on behalf of the team.",
        "Prototype can be physical or digital.",
        "Refreshments will be provided."
      ],
      format: [
        "Presentation should contain max 10 slides.",
        "Each team gets 10 minutes (7 min presentation + 3 min Q/A).",
        "Working prototype/demo is mandatory.",
        "Judges will evaluate based on innovation & feasibility.",
        "Certificates for participants and winners."
      ]
    },
    {
      category: "Technical",
      title: "CODE DEBUG CONSOLE [ PROGRAMMING CHALLENGE ]",
      date: "27/10/2024",
      image: "/CODING.png",
      registerLink: "https://forms.gle/MqMoTejamaGRREdr8",
      contactLink: "/contact",
      instructions: [
        "Individual participation only.",
        "Participants must bring their own laptop.",
        "Internet access will be provided.",
        "Problems will cover algorithms & data structures.",
        "Refreshments included."
      ],
      format: [
        "Contest duration: 2 hours.",
        "Platform: HackerRank/Codeforces like environment.",
        "Languages allowed: C, C++, Java, Python.",
        "Top scorers will be selected as winners.",
        "Certificates for all participants."
      ]
    },
    {
      category: "Technical",
      title: "BUG2BOARD [ CIRCUIT DEBUGGING ]",
      date: "28/10/2024",
      image: "/CIRCUIT.png",
      registerLink: "https://forms.gle/xZ7a4kmXfQaVzJTg7",
      contactLink: "/contact",
      instructions: [
        "Team size: 3-5 members.",
        "Participants must brainstorm on the given problem statement.",
        "Only one registration per team.",
        "Materials for prototyping will be provided.",
        "Lunch and refreshments included."
      ],
      format: [
        "Round 1: Idea pitch (5 minutes per team).",
        "Round 2: Rapid prototyping (90 minutes).",
        "Round 3: Final presentation (7 minutes).",
        "Judging criteria: Creativity, impact & feasibility.",
        "Certificates for participants and winners."
      ]
    },

    // ------------------- NON-TECHNICAL EVENTS -------------------
    {
      category: "Non-Technical",
      title: "KEYS TO FORTUNE [ FUN CRICKET QUIZ & MINI GAMES ]",
      date: "26/10/2024",
      image: "/KEYS TO FORTUNE.png",
      registerLink: "https://forms.gle/3FcfBzdLLQij2fmSA",
      contactLink: "/contact",
      instructions: [
        "Team size: 2 members.",
        "Quiz will be based on IPL history and statistics.",
        "Mini-games will be app-based.",
        "One member should register on behalf of the team.",
        "Snacks will be provided."
      ],
      format: [
        "Round 1: Written cricket quiz.",
        "Round 2: App-based mini cricket challenges.",
        "Final round: Rapid-fire cricket trivia.",
        "Time limit: 30 seconds per question.",
        "Certificates for all participants."
      ]
    },
    {
      category: "Non-Technical",
      title: "MISSION : CAMPUS [ CAMPUS VOYAGE ]",
      date: "27/10/2024",
      image: "/MISSION CAMPUS.png",
      registerLink: "https://forms.gle/ZKKAZAqGr6XvkWQ17",
      contactLink: "/contact",
      instructions: [
        "Individual or team of 2 can participate.",
        "Quiz covers science, tech, and current affairs.",
        "Only one registration required per team.",
        "Further updates via email/WhatsApp.",
        "Snacks will be provided."
      ],
      format: [
        "Preliminary round: Written quiz.",
        "Final round: On-stage buzzer round.",
        "Time limit: 30 seconds per question.",
        "Negative marking applies in finals.",
        "Certificates for all participants."
      ]
    },
    {
      category: "Non-Technical",
      title: "RHYTHM RIDDLE [ MELODIA]",
      date: "28/10/2024",
      image: "/MELODIA.png",
      registerLink: "https://forms.gle/5g1jwNMRVXU53S6m7",
      contactLink: "/contact",
      instructions: [
        "Team size: 3 members.",
        "Crime scene puzzles will be given.",
        "Logical reasoning skills required.",
        "One member should register for the team.",
        "Snacks provided."
      ],
      format: [
        "Round 1: Logic quiz.",
        "Round 2: Crime scene investigation.",
        "Round 3: Mystery-solving challenge.",
        "Time bound problem solving.",
        "Certificates for all participants."
      ]
    },
    {
      category: "Non-Technical",
      title: "RANPO'S OBSERVATORY [ SHERLOCK SENSE ]",
      date: "29/10/2024",
      image: "/RANPO'S OBSERVATORY.png",
      registerLink: "https://forms.gle/eW66RVqS414QTvmF9",
      contactLink: "/contact",
      instructions: [
        "Individual participation.",
        "Theme will be given on the spot.",
        "Participants must bring their own camera/phone.",
        "Editing is allowed with restrictions.",
        "Snacks will be provided."
      ],
      format: [
        "Round 1: Best shot submission.",
        "Round 2: Short visual story presentation.",
        "Time allotted: 2 hours total.",
        "Judging: Creativity, composition, story.",
        "Certificates for all participants."
      ]
    },

    // ------------------- WORKSHOP -------------------
    {
      category: "Workshop",
      title: "FACTORY I/O WORKSHOP [ HANDS-ON SESSION ]",
      date: "30/10/2024",
      image: "/WORKSHOP.png",
      registerLink: "https://forms.gle/99a7LuVyAnUd8JZA6",
      contactLink: "/contact",
      instructions: [
        "Open for all departments.",
        "Individual registration required.",
        "Hands-on training will be provided.",
        "Workshop materials will be shared.",
        "Lunch and refreshments included."
      ],
      format: [
        "Session 1: Basics of AI & IoT.",
        "Session 2: Hands-on IoT device setup.",
        "Session 3: AI model integration.",
        "Q/A session with experts.",
        "Certificates for all participants."
      ]
    }
  ];

  const sectionStyle = {
    minHeight: "100vh",
    position: "relative",
    backgroundImage: 'url("semi.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "3rem 2rem",
    fontFamily: "'Times New Roman', Times, serif",
    color: "#000",
    
  };

  const contentWrapper = { position: "relative", zIndex: 1 };
  const eventCardStyle = {
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: "1.5rem",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    marginBottom: "3rem",
  };
  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
    
  };
  const dateStyle = { fontSize: "1.2rem", fontWeight: "bold" };
  const textStyle = { fontSize: "1.1rem" };

  const stickyStyle = {
    position: "sticky",
    top: "0",
   background: "linear-gradient(90deg, #b1ff8dff, #fffffeff)",
    padding: "0.8rem 1rem",
    fontWeight: "bold",
    fontSize: "2rem",
    zIndex: 10,
    marginBottom: "1rem",
    color: "#000",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  const scrollButtonStyle = {
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "1rem 1.2rem",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.5rem",
    boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
    opacity: showScroll ? 1 : 0,
    pointerEvents: showScroll ? "auto" : "none",
    transition: "all 0.3s ease",
    zIndex: 1000,
    animation: "pulse 2s infinite",
  };

  return (
    <section style={sectionStyle}>
      <div style={contentWrapper} className="container py-5">
        {["Technical", "Non-Technical", "Workshop"].map((cat) => (
          <div key={cat} data-aos="fade-up">
            <h2 style={stickyStyle}>{cat} Events</h2>

            {events
              .filter((e) => e.category === cat)
              .map((event, index) => (
                <div
                  key={index}
                  style={eventCardStyle}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <h3 style={titleStyle} className="text-center mb-2">
                    {event.title}
                  </h3>
                  <p style={dateStyle} className="text-center mb-4">
                    Date: {event.date}
                  </p>

                  <div className="row align-items-start">
                    <div className="col-md-4 text-center mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="img-fluid rounded shadow"
                        style={{ transition: "transform 0.4s ease" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.08)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5 style={{ fontSize: "1.2rem" }}>INSTRUCTIONS:</h5>
                          <ul style={textStyle}>
                            {event.instructions.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-md-6 mb-3">
                          <h5 style={{ fontSize: "1.2rem" }}>FORMAT:</h5>
                          <ul style={textStyle}>
                            {event.format.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-3">
  <a
    href={event.registerLink}
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
    style={{
      fontSize: "1.5rem",
      transition: "all 0.3s ease",
      backgroundColor: "#007bff", // Always blue
      color: "#fff",
      border: "none",
      padding: "0.7rem 1.5rem",
      borderRadius: "8px",
      marginRight: "1rem",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "orange"; // Hover color
      e.currentTarget.style.color = "black";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#007bff"; // Original blue
      e.currentTarget.style.color = "#fff";
    }}
  >
    Register Now
  </a>

  <a
    href={event.contactLink}
    className="btn"
    style={{
      fontSize: "1.5rem",
      transition: "all 0.3s ease",
      backgroundColor: "#28a745", // Always green
      color: "#fff",
      border: "none",
      padding: "0.7rem 1.5rem",
      borderRadius: "8px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "yellow"; // Hover color
      e.currentTarget.style.color = "black";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#28a745"; // Original green
      e.currentTarget.style.color = "#fff";
    }}
  >
    Contact Us
  </a>
</div>

                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Scroll-to-top button */}
      <button
        style={scrollButtonStyle}
        onClick={scrollToTop}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.2)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        ↑
      </button>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 6px 10px rgba(0,0,0,0.4); }
          50% { transform: scale(1.1); box-shadow: 0 8px 15px rgba(0,0,0,0.6); }
          100% { transform: scale(1); box-shadow: 0 6px 10px rgba(0,0,0,0.4); }
        }
      `}</style>
    </section>
  );
}
