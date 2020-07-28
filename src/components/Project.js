import React from "react";
import "./Project.scss";
import projects from "../api/project.json";

const primaryProject = () => {
  return projects.primary.map((item, index) => (
    <div key={index} className="project-primary">
      <a href="localhost:3000" className="project-card">
        <div
          className="thumb"
          style={{
            backgroundImage: item.image,
          }}
        ></div>
        <article>
          <h1>{item.title}</h1>
          <div className="project-skills">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                style={{ backgroundColor: skill.bgColor, color: skill.color }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </article>
      </a>
    </div>
  ));
};

const secondaryProject = () => {
  return projects.secondary.map((item, index) => (
    <div key={index}>
      <a href="localhost:3000" className="project-card">
        <div
          className="thumb"
          style={{
            backgroundImage: item.image,
          }}
        ></div>
        <article>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className="project-skills">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                style={{ backgroundColor: skill.bgColor, color: skill.color }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </article>
      </a>
    </div>
  ));
};

const thirdProject = () => {
  return projects.third.map((item, index) => (
    <div key={index}>
      <a href="localhost:3000" className="project-card">
        <div
          className="thumb"
          style={{
            backgroundImage: item.image,
          }}
        ></div>
        <article>
          <h1>{item.title}</h1>
          <div className="project-skills">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                style={{ backgroundColor: skill.bgColor, color: skill.color }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </article>
      </a>
    </div>
  ));
};

const Project = () => {
  return (
    <div id="projects" className="project-container">
      <header className="project-header">
        <h1>Projects</h1>
        <hr />
      </header>
      <div className="project-wrapper">
        {primaryProject()}
        {secondaryProject()}
        {thirdProject()}
      </div>
    </div>
  );
};

export default Project;
