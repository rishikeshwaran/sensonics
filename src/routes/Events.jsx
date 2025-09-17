// src/pages/Events.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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
      date: "09/10/2025",
      image: "/PAPER.png",
      registerLink: "https://forms.gle/2pTsFNExnD5UAVjj9",
      contactLink: "/contact",
      instructions: [
        "PPT format from any domain is permitted to present.",
        "For a team maximum of three members are allowed to participate.",
        "Everyone from a team want to register.",
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
      date: "09/10/2025",
      image: "/PROJECT.png",
      registerLink: "https://forms.gle/tiPZZ6UnR7oKPkuT7",
      contactLink: "/contact",
      instructions: [
  "Team size: Minimum 2 and Maximum 3 members.",
  "Projects can be presented from any domain.",
  "Abstract must be submitted in the G-Form itself.",
  "Attach proof of concept (photo or video) in the PPT.",
  "After registration, team leaders must join the WhatsApp group (link in G-Form).",
  "Free lunch and refreshments will be provided for all participants."
],
format: [
  "Each team gets 7 minutes (5 min presentation + 2 min Q/A).",
  "Proof of concept can be shown in photo or video mode.",
  "Prototype is mandatory for selection.",
  "Certificates will be given to all participants.",
  "Exciting cash prizes for the winners."
]
    },
    {
      category: "Technical",
      title: "CODE DEBUG CONSOLE [ PROGRAMMING CHALLENGE ]",
      date: "09/10/2025",
      image: "/CODING.png",
      registerLink: "https://forms.gle/MqMoTejamaGRREdr8",
      contactLink: "/contact",
      instructions: [
  "Each team must have 3 members: Coder, Debugger, Algorithm Designer.",
  "No discussion allowed until a member finishes their task.",
  "Finished members may assist teammates still working.",
  "Use only laptops, IDEs, pen & paper (no phones/internet).",
  "Teams must bring at least one laptop with charger."
],
format: [
  "Coder: Implement full program for given problem.",
  "Debugger: Identify and fix errors in faulty code.",
  "Algorithm Designer: Write pseudo-code/algorithm on paper.",
  "Evaluation based on correctness, efficiency, clarity, teamwork.",
  "Final submission includes outputs from all three roles."
]

    },
    {
      category: "Technical",
      title: "LINE FOLLOWER [ ROBO RACE ]",
      date: "09/10/2025",
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
      title: "MISSION : CAMPUS [ CAMPUS VOYAGE ]",
      date: "09/10/2025",
      image: "/MISSION CAMPUS.png",
      registerLink: "https://forms.gle/ZKKAZAqGr6XvkWQ17",
      contactLink: "/contact",
      instructions: [
  "Teams of 2–3 members can participate.",
  "A video will be shown; questions will follow based on its content.",
  "Answers must be given within the time limit.",
  "Each correct answer earns points; highest score wins (tie → rapid fire).",
  "No mobiles or books allowed; follow organizer instructions."
],
      format: [
  "Event consists of a single video-based quiz round.",
  "Questions will be asked immediately after the video.",
  "Time limit will be strictly followed for each question.",
  "Scoring based on number of correct answers.",
  "Rapid fire round will decide the winner in case of a tie."
]
    },
    
    {
      category: "Non-Technical",
      title: "RANPO'S OBSERVATORY [ SHERLOCK SENSE ]",
      date: "09/10/2025",
      image: "/RANPO'S OBSERVATORY.png",
      registerLink: "https://forms.gle/eW66RVqS414QTvmF9",
      contactLink: "/contact",
      
      instructions: [
  "Round 1: Observe the image carefully within the time limit and answer the related questions.",
  "Round 2: Analyze the given crime case file and identify the culprit.",
  "Extra Task: Complete a fun task to unlock additional clues if required.",
  "Round 3 (if needed): Play a quick logic game in case of multiple qualifiers.",
  "Team with the highest overall score will be declared as the winner."
],
      format: [
  "Complete tasks within the time limit.",
  "No external help allowed.",
  "Certificates for all participants.",
  "Scoring based on accuracy and speed.",
  "Judge’s decision will be final."
]

    },
{
      category: "Non-Technical",
      title: "KEYS TO FORTUNE [ TRESURE TIME ]",
      date: "09/10/2025",
      image: "/KEYS TO FORTUNE.png",
      registerLink: "https://forms.gle/3FcfBzdLLQij2fmSA",
      contactLink: "/contact",
      instructions: [
  "Each team must have 2–3 members.",
  "Event consists of 2 rounds: preliminary and main round.",
  "Participants must bring their college ID card.",
  "Total duration of the event is around 45 minutes.",
  "Individual payment is mandatory for each participant."
],
format: [
  "Preliminary round will be conducted in pen & paper mode.",
  "Preliminary round includes easy to moderate MCQ questions.",
  "Only shortlisted teams will qualify for the main round.",
  "Main round will be an interactive challenge with details revealed on the spot.",
  "Jury’s decision will be final; winners announced at the end and certificates given to all participants."
]

    },
    {
      category: "Non-Technical",
      title: "RHYTHM RIDDLE [ MELODIA]",
      date: "09/10/2025",
      image: "/MELODIA.png",
      registerLink: "https://forms.gle/5g1jwNMRVXU53S6m7",
      contactLink: "/contact",
      instructions: [
  "Each team must have 3 participants.",
  "Teams must register with a unique team name before the event.",
  "Event consists of 2 rounds: Picture to Movie & Missing Lyrics.",
  "Scoring will be cumulative across both rounds.",
  "Judge’s decision will be final and binding."
],
format: [
  "Round 1: Identify the movie details from movie scenes.",
  "Round 2: Fill in the missing lyrics when displayed/played.",
  "Top teams from Round 1 qualify for Round 2.",
  "Points awarded for each correct answer.",
  "Team with highest score will be the winner."
]

    },
    // ------------------- WORKSHOP -------------------
    {
      category: "Workshop",
      title: "FACTORY I/O WORKSHOP [ HANDS-ON SESSION ]",
      date: "09/10/2025",
      image: "/WORKSHOP.png",
      registerLink: "https://forms.gle/99a7LuVyAnUd8JZA6",
      contactLink: "/contact",
     instructions: [
  "All participants must be present by 9:00 AM sharp.",
  "Registered participants must attend the workshop for the full duration.",
  "Participants should not take part in any other events during the workshop.",
  "Full-day attendance is mandatory to receive the participation certificate.",
  "Participants leaving midway will not be eligible for the certificate."
],
format: [
  "Workshop timing: 9:00 AM to 3:30 PM.",
  "Attendance will be monitored throughout the session.",
  "Certificates only for participants with full attendance.",
  "Lunch and refreshments will be provided during the workshop.",
  "Sessions will include interactive discussions and activities."
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
                          <h5 style={{ fontSize: "1.2rem" }}>RULES:</h5>
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

  <Link
  to={event.contactLink}
  className="btn"
  style={{
    fontSize: "1.5rem",
    transition: "all 0.3s ease",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.5rem",
    borderRadius: "8px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "yellow";
    e.currentTarget.style.color = "black";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#28a745";
    e.currentTarget.style.color = "#fff";
  }}
>
  Contact Us
</Link>

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
