import React from "react";
import "../components-css/header.css";

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  return (
    <div className="header-main">
      <div className="child1">MAHIPAL KELUTH</div>
      <div className="child2">
        <label onClick={() => scrollToSection("home")}>HOME</label>
        <label onClick={() => scrollToSection("about")}>ABOUT</label>
        <label onClick={() => scrollToSection("skills")}>SKILLS</label>
        <label onClick={() => scrollToSection("projects")}>PROJECTS</label>
        <label onClick={() => scrollToSection("contact")}>CONTACT</label>
      </div>
    </div>
  );
}

export default Header;
