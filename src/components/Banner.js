import React from "react";
import SocialCard from "./SocialCard";
import "./Banner.scss";
import IntroText from "./IntroText";

const Banner = () => {
  return (
    <div className="main-container">
      <div className="greeting-wrapper">
        <h1 className="h1">Hey, I'm Ruize Nie</h1>
      </div>

      <div className="intro-wrapper">
        <div className="nav-wrapper">
          <a href="index.html">
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>
          </a>
        </div>

        <div className="left-column">
          <SocialCard />
        </div>

        <div className="right-column">
          <IntroText />
        </div>
      </div>
    </div>
  );
};

export default Banner;
