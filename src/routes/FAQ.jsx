// src/pages/FAQ.jsx
import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  const questionStyle = { fontWeight: "bold", fontSize: "1.8rem", marginBottom: "1rem", color: "black" };
  const answerStyle = { fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem", color: "black" };
  const headingStyle = {
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: "bold",
    fontSize: "4rem",
    color: "#111111",
    textAlign: "center",
    textShadow: `
      2px 2px 4px rgba(0,0,0,0.4),
      4px 4px 8px rgba(0,0,0,0.3),
      6px 6px 12px rgba(0,0,0,0.2)
    `,
    zIndex: 2,
    position: "relative",
  };
const headStyle = {
  fontFamily: "'Times New Roman', Times, serif",
  fontWeight: "bold",
  fontSize: "2rem",           // smaller than main title
  color: "#000000ff",           // link-like accent color
  textAlign: "center",
  textShadow: `
    2px 2px 4px rgba(0,0,0,0.4),
    4px 4px 8px rgba(0,0,0,0.3),
    6px 6px 12px rgba(0,0,0,0.2)
  `,
  backgroundColor: "rgba(255,255,255,0.95)", // slightly transparent for readability
  padding: "10px 0",
  position: "sticky",
  top: 0,
  zIndex: 10,
  borderBottom: "2px solid #ccc",
  transition: "all 0.3s ease",
  cursor: "pointer",
  // for hover + animation
  transform: "scale(1)",
};

  const stickyHeadingStyle = {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#111111",
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: "10px 0",
    position: "sticky",
    top: 0,
    zIndex: 10,
    borderBottom: "2px solid #ccc",
  };

  // Scroll button state
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: 'url("semi.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        paddingTop: "60px",
        paddingBottom: "60px",
        color: "black",
      }}
    >
      <div className="container" style={{ zIndex: 1 }}>
        <h2 className="text-center mb-4" style={headingStyle}>FAQ</h2>

        {/* General & Payments */}
        <h2 style={headStyle}>General & Payments</h2>
        <Accordion defaultActiveKey="0" >
          <Accordion.Item eventKey="0">
            <Accordion.Header><span style={questionStyle}>Q1. How can I make my payment for the events?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>Payment can be done through the website.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><span style={questionStyle}>Q2. Is there any refund if I am not attending the event due to any unavoidable situation?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>Refunds will not be provided.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><span style={questionStyle}>Q3. If my payment fails, what am I supposed to do?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Do not panic! If the payment fails:
              <ul>
                <li>Retry after a few minutes.</li>
                <li>Clear the browsing cache and try again.</li>
                <li>If the above steps do not work, contact us for assistance or approach the helpdesk at the campus.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><span style={questionStyle}>Q4. How will I receive the event information?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>You will receive it through your registered WhatsApp number or Mail.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header><span style={questionStyle}>Q5. If I pay Rs 250, can I participate only in 3 events?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Yes, you can attend only 3 events with one technical event compulsory and other two events of your choice may be technical or non-technical after paying the general fee Rs 250.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header><span style={questionStyle}>Q6. Whom should I contact for registration related queries or problems?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              A help desk will be set up in the college campus for any queries. <br />
              Students can also contact us through mail or phone call. Contact details are available in the "Contact Us" page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header><span style={questionStyle}>Q7. Should I compulsory register for 3 events with the general payment?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              No, it’s not compulsory to register for 3 events with the general payment of Rs 250. You can participate in up to 3 events maximum, with one technical event compulsory.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header><span style={questionStyle}>Q8. What is the general fee for SENSONICS 2025?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Other college students are expected to pay a general fee of Rs. 250 in order to take part in 3 events (with one technical event compulsory).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header><span style={questionStyle}>Q9. Do I need to pay the fee if I am interested to attend a workshop?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>Yes, you need to pay Rs 300 if you are interested in attending the workshop.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header><span style={questionStyle}>Q10. Should all the participants in the team need to pay the general fee?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>Yes, each and every participant is required to register and pay the general fee.</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Accommodation and Food */}
        <h2 style={headStyle}>Accommodation and Food</h2>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="10">
            <Accordion.Header><span style={questionStyle}>Q11. Will other college participants be provided with accommodation?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              No, hostel accommodation will not be provided for participants from other colleges. Please contact us if you are in need.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header><span style={questionStyle}>Q12. Is the food free?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>Yes, you will be provided with food inclusive of the registration fee.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header><span style={questionStyle}>Q13. Will there be any transport facility provided for outside college students?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Yes, transport facilities are available for the participants:
              <ul>
                <li>Perundurai Bus Stand → College (7.15 am - 8.25 am)</li>
                <li>College → Perundurai Bus Stand (4.30 pm - 6.30 pm)</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header><span style={questionStyle}>Q14. Will we be provided with refreshments?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Participants attending the workshops and events will be provided with refreshments.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Event Related Queries */}
        <h2 style={headStyle}>Event Related Queries</h2>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="14">
            <Accordion.Header><span style={questionStyle}>Q15. What will be the duration of the event?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>It will vary based upon the events, ranging from 45 mins to an hour.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header><span style={questionStyle}>Q16. If my teammate is absent on the day of the event, can I participate alone?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>Do not worry! You can attend the event.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header><span style={questionStyle}>Q17. If my team is finalized for more than one event at the same time, what happens?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              In this case, you (or your team) can attend only one event at that time, which will be scheduled by us beforehand.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header><span style={questionStyle}>Q18. Can I submit abstracts for multiple paper presentations with one fee?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              No, by paying the registration fee for paper presentation once, you cannot submit multiple abstracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header><span style={questionStyle}>Q19. Will there be any cash prizes for winners?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              YES! Winners will be provided with cash prizes along with physical certificates.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="19">
            <Accordion.Header><span style={questionStyle}>Q20. Will certificates be provided for all participants or only winners?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Physical certificates will be provided for event winners, participants, and workshop attendees.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="20">
            <Accordion.Header><span style={questionStyle}>Q21. When will the prizes for the winners be distributed?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              A valedictory ceremony will be held at the end of the symposium during which all the winners will be awarded. The time and venue will be announced later.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="21">
            <Accordion.Header><span style={questionStyle}>Q22. Whom should I contact for event-related queries or doubts?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              You can contact the event coordinators and volunteers. Contact details are provided with the event description.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="22">
            <Accordion.Header><span style={questionStyle}>Q23. Where can I get to know more about the event?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Check out the event page which contains different categories of events (technical, non-technical, paper presentation, etc). Click on the respective event name to know more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="23">
            <Accordion.Header><span style={questionStyle}>Q24. Who can participate in SENSONICS 2025?</span></Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Any student currently pursuing their undergraduate degree is welcome to participate in SENSONICS 2025. (e.g., B.Sc, B.E, and other programs).
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollTop}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          height: "50px",
          width: "50px",
          fontSize: "22px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          opacity: showScroll ? 1 : 0,
          transition: "opacity 0.5s, transform 0.3s",
          transform: showScroll ? "scale(1)" : "scale(0)",
          zIndex: 1000,
        }}
        title="Scroll to Top"
      >
        ↑
      </button>
    </div>
  );
};

export default FAQ;
