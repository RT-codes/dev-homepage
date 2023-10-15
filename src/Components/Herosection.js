import React from "react";
import "./css/hero.css";
import Vector_Chevron from "../Vector_Chevron.svg";

const Herosection = () => {
  // set the fill for the vector chevron to white
  document.documentElement.style.setProperty("--vector-chevron-fill", "#fff");
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-column">
          <h2>Hello,</h2>
          <h2>I am Rowan,</h2>
          <h2>A Fullstack Developer.</h2>
          <p>Located in the Netherlands. I love building interactive applications for the web.</p>
        </div>
        <div class="down-button-wrapper">
          <div id="down-button" onClick={scrollPageDown}>
            <img src={Vector_Chevron} alt="down arrow" type="image/svg+xml" />
          </div>
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
