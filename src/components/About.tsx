import React from "react";
import { skillsData } from "../constants/skillsData";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__content container">
        <div className="about__image">👨‍💻</div>
        <div className="about__text">
          <p className="about__description">
            I'm a passionate full-stack developer with a strong background in
            creating scalable web applications and intuitive user interfaces. My
            journey in tech started 5 years ago, and I've had the privilege of
            working with startups and Fortune 500 companies alike.
          </p>
          <p className="about__description">
            I believe in writing clean, maintainable code and creating user
            experiences that are both beautiful and functional. When I'm not
            coding, you'll find me exploring new technologies, contributing to
            open-source projects, or mentoring aspiring developers.
          </p>
          <div className="about__skills">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-card__icon">{skill.icon}</div>
                <h3 className="skill-card__title">{skill.title}</h3>
                <p className="skill-card__description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
