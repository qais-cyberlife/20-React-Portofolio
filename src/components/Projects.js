import { Col, Container, Tab, Row } from "react-bootstrap"
import React from "react";
import ProjectCard from "../components/ProjectCard";

// for the Hover animation
import TrackVisibility from 'react-on-screen';
import 'animate.css';


// This function creates an array of projects with attributes title,des, and imag url to be the background image of the card. 
// When the user hovers over the card they can read the description and access the links to github and the deployed app.
function Projects() {

  const projects = [
    {
      title: "Password Generator",
      description: "Generates a password according to the attributes specified by the user. GitHub:   https://github.com/qais-cyberlife/3-Pass-Generator ; Deployed App:   https://qais-cyberlife.github.io/3-Pass-Generator/",
      imgUrl: "/images/1-password-generator.jpg"
    },
    {
      title: "Github Profiles",
      description: "Prompts the manager of a company using inquirer and then Generates a webpage that display's his team's basic info. GitHub: https://github.com/qais-cyberlife/10-GitHub-Profiles; Deployed App:   https://qais-cyberlife.github.io/10-GitHub-Profiles/",
      imgUrl: "/images/2-github-profiles.jpg"
    },
    {
      title: "FIFA World Cup 2022 Fan Blog",
      description: "This blog has the latest news about the upcoming FIFA 2022 World Cup. Fans can create an account, login, comment on their favorite team, interact with other fans, and make their ideal team. GitHub: https://github.com/stephenfudge/vigilant-octo-lamp; Deployed App:   https://vigilant-octo-lamp.herokuapp.com/",
      imgUrl: "/images/3-world-cup.jpg"
    },
    {
      title: "Zelda Travel App",
      description: "Zelda is a Travel App Designed to help users find Hotels, Events, Airports, and Attractions in their host city. GitHub: https://github.com/Ydennekrf/Zelda-Travel-App; Deployed App: https://ydennekrf.github.io/Zelda-Travel-App/",
      imgUrl: "/images/4-travel-app.jpg"
    },
    {
      title: "Employeed Manager",
      description: "This Employeed Manager utlises inquirer and mySQL to create a database for employees. GitHub:https://github.com/qais-cyberlife/ass-12.git; Video Demonstration:https://2u-20.wistia.com/medias/2lnle7xnpk ",
      imgUrl: "/images/5-employee-manager.jpg"
    },
    {
      title: "JATE PWA Text Editor",
      description: "Jate is a PWA (Progressive Web App) that allows the user to create notes or code snippets with or without internet connection so they can retrieve them for later use. GitHub: https://github.com/qais-cyberlife/19-Text-Editor; Video Demo: https://github.com/qais-cyberlife/19-Text-Editor/blob/main/Assets/00-demo.gif (and the GIFs on the ReadMe file in the repo.)",
      imgUrl: "/images/6-text-editor.jpg"
    },
  ]

  // this return function will map the projects array amd create a cell from each project.
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are my best 6 projects. Hover over the Card to learn more about each project. Copy and Paste the links to the Github Repo and Deployed App in the Brower to see the projects.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                        {/* Deleted the two additional tabs as I only need one in theis project */}
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
    </section>
  );
};

export default Projects;