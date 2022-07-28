import { Nav, Col, Container, Tab, Row} from "react-bootstrap"
import React from "react";
import {ProjectCard}  from "../components/ProjectCard";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


function Projects() {

    const projects = [
        {
            title: "title1",
            description: "description1",
            imgUrl: "/images/badass-pic.jpg"
        },
        {
            title: "title2",
            description: "description2",
            imgUrl: "/images/cyberlife-logo.jpg"
        },
        {
            title: "title3",
            description: "description3",
            imgUrl: "/images/github-icon.jpg"
        },
        {
            title: "title4",
            description: "description4",
            imgUrl: "/images/linkedin-icon.png"
        },
        {
            title: "title5",
            description: "description5",
            imgUrl: "/images/sodsnow.jpg"
        },
        {
            title: "title6",
            description: "description6",
            imgUrl: "/images/stackoverflow-icon.jpg"
        },
    ]
    return (
        <section className="project" id="project">
              <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* Does not apply here */}
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    );
};

export default Projects;