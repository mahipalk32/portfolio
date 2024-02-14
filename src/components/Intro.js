import React from "react";
import Profile from "./Profile";
import "../components-css/intro.css";

function Intro() {
  return (
    <>
      <div className="sub-div1">
        <div style={{ padding: "50px 110px" }}>
          <h4>MERN Stack Developer</h4>
          <p>
            Aspiring MERN Stack Developer, eager to learn and contribute to
            innovative web projects with enthusiasm and a fresh perspective.
          </p>
        </div>
      </div>
      <div className="sub-div2">
        <Profile />
      </div>
    </>
  );
}

export default Intro;
