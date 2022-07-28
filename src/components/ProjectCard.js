import { Col } from "react-bootstrap";
import React from "react";

// This is the template of individual project cards
function ProjectCard ({ title, description, imgUrl })  {
    return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    )
  }

export default ProjectCard;