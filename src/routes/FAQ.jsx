// src/pages/FAQ.jsx
import React from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  const headingStyle = { fontWeight: "bold", fontSize: "2rem", marginBottom: "1.5rem", color: "white" };
  const questionStyle = { fontWeight: "bold", fontSize: "1.8rem", marginBottom: "1rem", color: "black" };
  const answerStyle = { fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem", color: "black" };

  return (
    <div
      className="position-relative"
      style={{
        minHeight: "100vh",
        backgroundImage: 'url("semi.jpg")',
        backgroundSize: "cover",   // ✅ fixed: full screen background
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        paddingTop: "60px",
        paddingBottom: "60px",
        color: "black",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Page Title */}
        <h2 className="text-center mb-4" style={headingStyle}>FAQ</h2>

        {/* General & Payments */}
        <h2 className="text-center mb-4" style={headingStyle}>General & Payments</h2>
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={questionStyle}>Q1. How can I make my payment for the events?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>Payment can be done through the website.</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span style={questionStyle}>Q2. Is there any refund if I am not attending the event due to any unavoidable situation?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>Refunds will not be provided.</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span style={questionStyle}>Q3. If my payment fails, what am I supposed to do?</span>
            </Accordion.Header>
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
            <Accordion.Header>
              <span style={questionStyle}>Q4. How will I receive the event information?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>You will receive it through your registered WhatsApp number or Mail.</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <span style={questionStyle}>Q5. If I pay Rs 250, can I participate only in 3 events?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Yes, you can attend only 3 events with one technical event compulsory and other two events of your choice may be technical or non-technical after paying the general fee Rs 250.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <span style={questionStyle}>Q6. Whom should I contact for registration related queries or problems?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              A help desk will be set up in the college campus for any queries. <br />
              Students can also contact us through mail or phone call. Contact details are available in the "Contact Us" page.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <span style={questionStyle}>Q7. Should I compulsory register for 3 events with the general payment?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              No, it’s not compulsory to register for 3 events with the general payment of Rs 250. You can participate in up to 3 events maximum, with one technical event compulsory.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <span style={questionStyle}>Q8. What is the general fee for SENSONICS 2025?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Other college students are expected to pay a general fee of Rs. 250 in order to take part in 3 events (with one technical event compulsory).
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <span style={questionStyle}>Q9. Do I need to pay the fee if I am interested to attend a workshop?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>Yes, you need to pay Rs 300 if you are interested in attending the workshop.</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <span style={questionStyle}>Q10. Should all the participants in the team need to pay the general fee?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>Yes, each and every participant is required to register and pay the general fee.</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Accommodation and Food */}
        <h2 className="text-center mb-4" style={headingStyle}>Accommodation and Food</h2>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <span style={questionStyle}>Q11. Will other college participants be provided with accommodation?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              No, hostel accommodation will not be provided for participants from other colleges. Please contact us if you are in need.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <span style={questionStyle}>Q12. Is the food free?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>Yes, you will be provided with food inclusive of the registration fee.</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="12">
            <Accordion.Header>
              <span style={questionStyle}>Q13. Will there be any transport facility provided for outside college students?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Yes, transport facilities are available for the participants:
              <ul>
                <li>Perundurai Bus Stand → College (7.15 am - 8.25 am)</li>
                <li>College → Perundurai Bus Stand (4.30 pm - 6.30 pm)</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="13">
            <Accordion.Header>
              <span style={questionStyle}>Q14. Will we be provided with refreshments?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Participants attending the workshops and events will be provided with refreshments.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Event Related Queries */}
        <h2 className="text-center mb-4" style={headingStyle}>Event Related Queries</h2>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="14">
            <Accordion.Header>
              <span style={questionStyle}>Q15. What will be the duration of the event?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>It will vary based upon the events, ranging from 45 mins to an hour.</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="15">
            <Accordion.Header>
              <span style={questionStyle}>Q16. If my teammate is absent on the day of the event, can I participate alone?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>Do not worry! You can attend the event.</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="16">
            <Accordion.Header>
              <span style={questionStyle}>Q17. If my team is finalized for more than one event at the same time, what happens?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              In this case, you (or your team) can attend only one event at that time, which will be scheduled by us beforehand.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="17">
            <Accordion.Header>
              <span style={questionStyle}>Q18. Can I submit abstracts for multiple paper presentations with one fee?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              No, by paying the registration fee for paper presentation once, you cannot submit multiple abstracts.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="18">
            <Accordion.Header>
              <span style={questionStyle}>Q19. Will there be any cash prizes for winners?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              YES! Winners will be provided with cash prizes along with physical certificates.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="19">
            <Accordion.Header>
              <span style={questionStyle}>Q20. Will certificates be provided for all participants or only winners?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Physical certificates will be provided for event winners, participants, and workshop attendees.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="20">
            <Accordion.Header>
              <span style={questionStyle}>Q21. When will the prizes for the winners be distributed?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              A valedictory ceremony will be held at the end of the symposium during which all the winners will be awarded. The time and venue will be announced later.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="21">
            <Accordion.Header>
              <span style={questionStyle}>Q22. Whom should I contact for event-related queries or doubts?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              You can contact the event coordinators and volunteers. Contact details are provided with the event description.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="22">
            <Accordion.Header>
              <span style={questionStyle}>Q23. Where can I get to know more about the event?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Check out the event page which contains different categories of events (technical, non-technical, paper presentation, etc). Click on the respective event name to know more.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="23">
            <Accordion.Header>
              <span style={questionStyle}>Q24. Who can participate in SENSONICS 2025?</span>
            </Accordion.Header>
            <Accordion.Body style={answerStyle}>
              Any student currently pursuing their undergraduate degree is welcome to participate in SENSONICS 2025. (e.g., B.Sc, B.E, and other programs).
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
