import React from "react";
import "./SocialLink.scss";

const SocialLink = () => {
  return (
    <div className="social-share">
      <div className="social-container facebook">
        <a href="localhost:5000">
          <div className="social-block">
            <img
              src="https://theofficeplace.com/wp-content/uploads/share-icons/share-facebook.png"
              alt="facebook"
            />
          </div>
        </a>
      </div>

      <div className="social-container linkedin">
        <a href="localhost:5000">
          <div className="social-block">
            <img
              src="https://theofficeplace.com/wp-content/uploads/share-icons/share-linked-in.png"
              alt="linkedin"
            />
          </div>
        </a>
      </div>

      <div className="social-container github">
        <a href="localhost:5000">
          <div className="social-block">
            <img
              src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png"
              alt="github"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
