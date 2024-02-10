import React from "react";
import Profile from "./Profile";
import "../components-css/intro.css"

function Intro() {
  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{padding:"50px 110px"}}>
        <h4 >MERN Stack Developer</h4> 
        <p>
          Aspiring MERN Stack Developer, eager to learn and contribute to
          innovative web projects with enthusiasm and a fresh perspective.
        </p>
        </div>

        {/* <p style={{margin:"20%", padding:"7px 15px"}}>
          MERN Stack Developer
        </p>
        <p style={{margin:"20%", padding:"7px 15px"}}>
          MERN Stack Developer
        </p> */}
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "500px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Profile />
      </div>
    </>
  );
}

export default Intro;
