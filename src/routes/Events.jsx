// src/pages/Events.jsx
import React from "react";

export default function Events() {
  const events = [
    // ------------------- TECHNICAL EVENTS -------------------
    {
      category: "Technical",
      title: "INSIGHT SCRIBE [ PAPER PRESENTATION ]",
      date: "25/10/2024",
      image: "/PAPER.png",
      registerLink: "https://forms.gle/your-google-form-link-1",
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
      title: "TECH VENTURE [ PRODUCT DESIGN & PROTOTYPE SHOWCASE ]",
      date: "26/10/2024",
      image: "/PROJECT.png",
      registerLink: "https://forms.gle/your-google-form-link-2",
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
      title: "CODE WARS [ COMPETITIVE PROGRAMMING CHALLENGE ]",
      date: "27/10/2024",
      image: "/CODING.png",
      registerLink: "https://forms.gle/your-google-form-link-3",
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
      title: "INNOVATORS RALLY [ RAPID PROTOTYPING & ENTREPRENEURSHIP ]",
      date: "28/10/2024",
      image: "/CIRCUIT.png",
      registerLink: "https://forms.gle/your-google-form-link-4",
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
      title: "IPL BRAWL [ FUN CRICKET QUIZ & MINI GAMES ]",
      date: "26/10/2024",
      image: "/KEYS TO FORTUNE.png",
      registerLink: "https://forms.gle/your-google-form-link-5",
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
      title: "EXPLORE-X [ GENERAL AWARENESS & SCIENCE EXPLORATION ]",
      date: "27/10/2024",
      image: "/MISSION CAMPUS.png",
      registerLink: "https://forms.gle/your-google-form-link-6",
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
      title: "TRUE DETECTIVE [ CRIME SCENE & LOGIC PUZZLE ]",
      date: "28/10/2024",
      image: "/RANPO'S OBSERVATORY.png",
      registerLink: "https://forms.gle/your-google-form-link-7",
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
      title: "LENSATION [ PHOTOGRAPHY & VISUAL STORY ]",
      date: "29/10/2024",
      image: "/MELODIA.png",
      registerLink: "https://forms.gle/your-google-form-link-8",
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
      title: "AI & IoT WORKSHOP [ HANDS-ON SESSION ]",
      date: "30/10/2024",
      image: "/WORKSHOP.png",
      registerLink: "https://forms.gle/your-google-form-link-9",
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
    backgroundImage: 'url("semi.jpg")', // background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "3rem 2rem",
    color: "white",
     fontFamily: "'Times New Roman', Times, serif",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent
    zIndex: 0,
  };

  const contentWrapper = {
    position: "relative",
    zIndex: 1,
  };

  const eventCardStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "1.5rem",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "1.8rem", // slightly larger
    fontWeight: "bold",
    fontFamily: "'Times New Roman', Times, serif",
  };

  const dateStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "'Times New Roman', Times, serif",
  };

  const textStyle = {
    fontSize: "1.1rem", // slightly larger
    fontFamily: "'Times New Roman', Times, serif",
    color: "#ffffff",
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentWrapper} className="container py-5">
        {["Technical", "Non-Technical", "Workshop"].map((cat) => (
          <div key={cat} className="mb-5">
            <h2
              className="text-center mb-4"
              style={{ fontSize: "2rem", fontFamily: "'Times New Roman', Times, serif" }}
            >
              {cat} Events
            </h2>

            {events
              .filter((e) => e.category === cat)
              .map((event, index) => (
                <div key={index} className="mb-5" style={eventCardStyle}>
                  <h3 className="text-center mb-2" style={titleStyle}>
                    {event.title}
                  </h3>
                  <p className="text-center mb-4" style={dateStyle}>
                    Date: {event.date}
                  </p>

                  <div className="row align-items-start">
                    <div className="col-md-4 text-center mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="img-fluid rounded shadow"
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5 style={{ fontSize: "1.2rem", fontFamily: "'Times New Roman', Times, serif" }}>
                            INSTRUCTIONS:
                          </h5>
                          <ul style={textStyle}>
                            {event.instructions.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="col-md-6 mb-3">
                          <h5 style={{ fontSize: "1.2rem", fontFamily: "'Times New Roman', Times, serif" }}>
                            FORMAT:
                          </h5>
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
                      className="btn btn-primary me-3"
                      style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "1rem" }}
                    >
                      Register Now
                    </a>
                    <a
                      href={event.contactLink}
                      className="btn btn-outline-light"
                      style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "1rem" }}
                    >
                      Contact Us
                    </a>
                  </div>

                  <hr
                    className="my-5"
                    style={{ borderColor: "rgba(255,255,255,0.3)" }}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}