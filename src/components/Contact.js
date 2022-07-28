import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


// This the contact page. Due to the lack of time I did not find a way to integrate mailchimp or zapier to send an email. I might consider doing that ina  resubmission.
// function Contact() {
//     const formInitialDetails = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: ''
//     }
//     const [formDetails, setFormDetails] = useState(formInitialDetails);
//     const [buttonText, setButtonText] = useState('Send');
//     const [status, setStatus] = useState({});

//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//           ...formDetails,
//           [category]: value
//         })
//     }

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setButtonText("Sending...");
//       let response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//       });
//       setButtonText("Send");
//       let result = await response.json();
//       setFormDetails(formInitialDetails);
//       if (result.code == 200) {
//         setStatus({ succes: true, message: 'Message sent successfully'});
//       } else {
//         setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//       }
//     };


function Contact () {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src="./images/robot-thinking.png" alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text"  placeholder="Last Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address"  />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel"  placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6"  placeholder="Message" ></textarea>
                        <button type="submit"><span>Send</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;