import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import github from "../github.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <h2>About Me</h2>
        <p>This section is about me.</p>
      </div>
      <div className="footer-column">
        <h2>Projects</h2>
        <p>This section is about my projects.</p>
      </div>
      <img src={github} alt="github" fill="white" class="icon-img" type="image/svg+xml" />
    </div>
  );
};

export default Footer;
