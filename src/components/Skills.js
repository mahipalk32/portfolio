import React from "react";
import react from "../images/react.png";
import node from "../images/node1.png";
import mongo from "../images/mongo1.png";
import html from "../images/html.webp";
import css from "../images/css.webp";
import "../components-css/skills.css"

function Skills() {
  return (
    <div
      style={{ height: "400px", display: "flex", backgroundColor: "#F0F7FC" }}
    >
      <div style={{ margin: "0 auto", width: "50%" }}>
        <h4 style={{ color: "black", margin: "5% 10%", paddingLeft: "12%" }}>
          DEVELOPMENT
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "5% 10%",
          }}

          className="skills-sub-child1"
        >
          {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
              src={html}
              alt="HTML"
            />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
              src={css}
              alt="CSS"
            />
          </a>
          <a href="https://react.dev/learn">
            <img
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
              src={react}
              alt="React"
            />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "auto 10%",
          }}
          className="skills-sub-child1"
        >
          {" "}
          <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">
            <img
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
              src={node}
              alt="Node.js"
            />
          </a>
          <a href="https://learn.mongodb.com/learning-paths/introduction-to-mongodb">
            <img
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
              src={mongo}
              alt="MongoDB"
            />
          </a>
        </div>
      </div>
      <div style={{ margin: "0 auto", width: "50%" }}>Languages</div>
    </div>
  );
}

export default Skills;
