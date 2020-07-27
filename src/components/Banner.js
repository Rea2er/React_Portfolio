import React from "react";
import "./Banner.scss";
import IntroText from "./IntroText";
import SocialCard from "./SocialCard";

const Banner = () => {
  return (
    <section className="s1">
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
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3 className="h3">What I Do</h3>
                <IntroText />
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
