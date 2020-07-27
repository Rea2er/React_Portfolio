import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills-container">
      <header className="skills-header">
        <h1>Skills</h1>
        <hr />
      </header>
      <div className="skills-wrapper">
        <div class="qual full-qual">
          <div class="data">
            <div class="up-arrow data-item" id="item1">
              <h5>Awesome Place</h5>
              <span>&nbsp;</span>
            </div>

            <div class="data-item" id="item2">
              <h5>Awesome Creation</h5>
              <span>&nbsp;</span>
            </div>

            <div class="data-item" id="item3">
              <h5>Cool Place</h5>
              <span>&nbsp;</span>
            </div>

            <div class="data-item" id="item4">
              <h5>Cool Place</h5>
              <span>&nbsp;</span>
            </div>

            <div class="data-item" id="item5">
              <h5>Cool Place</h5>
              <span>&nbsp;</span>
            </div>

            <div class="data-item" id="item6">
              <h5>Cool Place</h5>
              <span>&nbsp;</span>
            </div>

            <div class="data-item" id="item7">
              <h5>
                Major Cool
                <br />
                Place
              </h5>
              <span>&nbsp;</span>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Skills;
