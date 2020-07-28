import React from "react";
import "./IntroText.scss";

const IntroText = () => {
  return (
    <div class="wrapper">
      <div id="preview-shadow">
        <div id="preview">
          <div id="corner-tl" class="corner"></div>
          <div id="corner-tr" class="corner"></div>
          <h2>Who I am</h2>
          <p>
            Here is some text which will contain some links for you to hover and
            see how nice a <a href="/">cubic-bezier</a>. If you wanna find out
            more about this transition effect then just click its link above.
          </p>
          <div id="corner-br" class="corner"></div>
          <div id="corner-bl" class="corner"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
