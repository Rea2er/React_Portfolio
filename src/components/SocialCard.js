import React from "react";
import "./SocialCard.scss";
import SocialLink from "./SocialLink";
import avatar from "../images/avatar.jpg";

const SocialCard = () => {
  return (
    <div className="intro-container">
      <img className="avatar" src={avatar} alt="avatar missing" />
      <SocialLink />
    </div>
  );
};

export default SocialCard;
