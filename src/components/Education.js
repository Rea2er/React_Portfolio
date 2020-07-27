import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education-container">
      <header className="education-header">
        <h1>Education</h1>
        <hr />
      </header>
      <div className="education-wrapper">
        <ul className="timeline">
          <li>
            <div className="timeline-info">
              <span>March 12, 2016</span>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-round"></div>

            <h3 className="timeline-title">Event Title</h3>
            <p>
              Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
              consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam
              ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero
              venenatis faucibus. ullam dictum felis eu pede mollis pretium.
              Pellentesque ut neque.
            </p>
          </li>
          <li className="timeline-item">
            <h3 className="timeline-title">Event Title</h3>
            <p>
              Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
              consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam
              ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero
              venenatis faucibus. ullam dictum felis eu pede mollis pretium.
              Pellentesque ut neque.
            </p>
          </li>
          <li>
            <div className="timeline-round"></div>
            <div className="timeline-info">
              <span>March 23, 2016</span>
            </div>
          </li>
          <li>
            <div className="timeline-info">
              <span>April 02, 2016</span>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-round"></div>
            <h3 className="timeline-title">Event Title</h3>
            <p>
              Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
              consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam
              ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero
              venenatis faucibus. ullam dictum felis eu pede mollis pretium.
              Pellentesque ut neque.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
