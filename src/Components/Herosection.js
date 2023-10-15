import React from "react";
import "./css/hero.css";

const Herosection = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-column">
          <h2>Hello,</h2>
          <h2>I am Rowan,</h2>
          <h2>A Fullstack Developer.</h2>
          <p>Located in the Netherlands. I love building interactive applications for the web.</p>
        </div>
        <div id="down-button" onClick={scrollPageDown}>
          down button
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </>
  );

  function scrollPageDown() {
    window.scrollTo({
      top: window.innerHeight - 50,
      left: 0,
      behavior: "smooth",
    });
  }
};

export default Herosection;
