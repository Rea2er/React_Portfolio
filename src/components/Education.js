import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div id="education" className="education-container">
      <header className="education-header">
        <h1>Education</h1>
        <hr />
      </header>
      <div className="education-wrapper">
        <ul className="timeline">
          <li>
            <div className="timeline-info">
              <span>Anticipate Dec 2020 | Halifax, NS, CA</span>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-round"></div>

            <h3 className="timeline-title">DALHOUSIE UNIVERSITY</h3>
            <p>
              Faulty of Computer Science <br /> Master Degree in Applied
              Computer Science
              <br />
              Average grade of A in all courses
            </p>
          </li>

          <li className="timeline-item">
            <h3 className="timeline-title">DALHOUSIE UNIVERSITY</h3>
            <p>
              Agricultural Campus
              <br />
              Bachelar Degree in Plant Science
              <br />
              Two times in Dean’s List
            </p>
          </li>
          <li>
            <div className="timeline-round"></div>
            <div className="timeline-info">
              <span>Dec 2018 | Truro, NS, CA</span>
            </div>
          </li>
          <li>
            <div className="timeline-info">
              <span>Sept 2016 | Fuzhou, FJ, CN</span>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-round"></div>
            <h3 className="timeline-title">
              FUJIAN AGRICULTURE AND FORESTRY UNIVERSITY
            </h3>
            <p>
              Faulty of Horticulture <br />
              Bechelar Degree in Horticulture
              <br />
              China Scholarship Council (CSC) scholarships
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
