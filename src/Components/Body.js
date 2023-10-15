import React from "react";
import Herosection from "./Herosection";
import Skillsection from "./Skillsection";
import Projectsection from "./Projectsection";
import "./css/body.css";

const Body = () => {
  return (
    <div className="body">
      {/* return the herosection */}
      <Herosection />
      <Skillsection />

      <Projectsection />
    </div>
  );

  // when user clicks on the down button, scroll to the next section
};

export default Body;
