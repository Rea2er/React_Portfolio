import React from "react";
import "./IntroText.scss";

const IntroText = () => {
  return (
    <div class="wrapper">
      <div id="preview-shadow">
        <div id="preview">
          <div id="corner-tl" class="corner"></div>
          <div id="corner-tr" class="corner"></div>
          <h2>What I am looking for</h2>
          <p>
            I am looking for a <a href="/">challenging role</a> in an
            organization to utilize my technical, database, and management
            skills for the growth of the organization as well as to enhance my
            knowledge about new and emerging trends in the IT sector.
          </p>
          <div id="corner-br" class="corner"></div>
          <div id="corner-bl" class="corner"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
