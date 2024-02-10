import React from "react";
import "../components-css/header.css";

function Header() {
  return (
    <div className="header-main">
      <div className="child1">MAHIPAL KELUTH</div>
      <div className="child2">
        <label>HOME</label>
        <label>SKILLS</label>
        <label>PROJECTS</label>
        <label>CONTACT</label>
      </div>
    </div>
  );
}

export default Header;
