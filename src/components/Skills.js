import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <header className="skills-header">
        <h1>Skills</h1>
        <hr />
      </header>
      <div className="skills-wrapper">
        <div className="data">
          <div className="data-item" id="item1">
            <h5>JavaScript</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item8">
            <h5>Java</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item2">
            <h5>AWS Cloud Server</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item9">
            <h5>Docker</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item3">
            <h5>Database</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item4">
            <h5>Python</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item5">
            <h5>Node</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item6">
            <h5>React & React Native</h5>
            <span>&nbsp;</span>
          </div>

          <div className="data-item" id="item7">
            <h5>HTML & CSS</h5>
            <span>&nbsp;</span>
          </div>
        </div>
        <hr />
        <ul className="skills-field">
          <li>DATA PROCESS</li>
          <li>WEB DEVELOPMENT</li>
          <li>MOBILE DEVELOPMENT</li>
          <li>CLOUD SERVERLESS</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
