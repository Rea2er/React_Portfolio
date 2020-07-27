import React from "react";
import "./SocialCard.scss";

const SocialCard = () => {
  return (
    <div class="card">
      <div class="top">
        <div class="social-buttons">
          <button>
            <i class="material-icons">camera</i>
          </button>
          <button>
            <i class="material-icons">photo_camera</i>
          </button>
          <button>
            <i class="material-icons">music_note</i>
          </button>
        </div>
        <div class="text">
          <div class="name-wrapper">
            <div class="name">Morgan, 22</div>
            <i class="material-icons">check_circle</i>
          </div>
          <div class="title">Ant Collector</div>
        </div>
        <button class="like">
          <div class="hexagon">
            <i class="material-icons">favorite</i>
          </div>
        </button>
      </div>
      <div class="bottom">
        <div class="desc">
          Morgan has collected ants since they were six years old and now has
          many dozen ants but none in their pants.
        </div>
        <div class="buttons">
          <button class="like">
            <i class="material-icons">person</i>
            <div class="height">5'4"</div>
          </button>
          <button class="status">
            <i class="material-icons">search</i>
            <div class="height">Marriage</div>
          </button>
          <button class="horo">
            <i class="material-icons">share</i>
            <div class="height">Capricorn</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
