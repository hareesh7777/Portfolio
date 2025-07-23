import React from "react";
import { scrollToSection } from "../constants/scrollToSection";

const Intro = () => {
  const handleContactClick = () => {
    scrollToSection("contact");
  };

  return (
    <section id="intro" className="intro container">
      <div className="intro__left">
        <h1 className="intro__title">Hello, I'm Alex Johnson</h1>
        <h2 className="intro__subtitle">
          Full-Stack Developer & UI/UX Designer
        </h2>
        <p className="intro__description">
          I create beautiful, responsive web applications and user experiences
          that solve real-world problems. With over 5 years of experience in
          modern web technologies, I bring ideas to life through clean code and
          thoughtful design.
        </p>
        <button className="btn btn--primary" onClick={handleContactClick}>
          Get In Touch
        </button>
      </div>
      <div className="intro__right">
        <div className="intro__image">AJ</div>
      </div>
    </section>
  );
};

export default Intro;
