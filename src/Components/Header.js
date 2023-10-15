import logo from "../logo.svg";
import React from "react";
import "./css/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="React Logo" />
        <h1>My Portfolio</h1>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
