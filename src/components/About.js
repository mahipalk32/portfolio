import React from "react";
import "../components-css/about.css";
import backgroundImage from "../images/web-img.webp";

function About() {
  return (
    <div className="container" >
      <div className="aboutDiv-child1">
        <div
          className="child1-subChild"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
      <div className="aboutDiv-child2">
        <h3>MAHIPAL KELUTH</h3>
        <p>
          Hello! I'm a student who is learning <strong>MERN</strong> stack development. Currently
          studying <strong>B.Tech</strong> at <strong>RGUKT Basar</strong>, I'm passionate about learning
          <strong> JavaScript, React, Node.js, Express.js, and MongoDB</strong>.
        </p>
        <p>
          I enjoy creating dynamic web applications and by doing this I improve
          my skills. Whether it's building user interfaces with React or
          handling data with Node.js and MongoDB, I'm always eager to learn and
          grow.
        </p>
        <p>
          My goal is to use my knowledge to solve real-world problems. I'm excited
          about the possibilities ahead and look forward to exploring new
          challenges and opportunities in MERN stack development.
        </p>
      </div>
    </div>
  );
}

export default About;
