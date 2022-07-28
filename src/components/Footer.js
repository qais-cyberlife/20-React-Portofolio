import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Imports the SVG icons of LinkedIn, GitHub, and Twitter. They will be colored in the Footer CSS Section.
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import '../css/styles.css';

// Returns a footer and feedsin the icons
function Footer() {
  return (
    <div className="social-container">
      <a
        href="https://www.linkedin.com/in/kais-al-balkhi-481597235/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/qais-cyberlife"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/QaisAlbalkhi2" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}

export default Footer;