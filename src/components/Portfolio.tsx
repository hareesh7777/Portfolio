import React from "react";
import { projectsData } from "../constants/projectsData";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__title">My Portfolio</h2>
      <div className="portfolio__grid container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card__image">{project.image}</div>
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
