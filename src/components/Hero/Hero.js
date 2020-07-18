import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Top">
        <div className="BgColor">
          <div className="BgImg"></div>
        </div>
        <div className="Logo">
          <img src={require("./hero-logo.png")} alt="logo" />
        </div>
      </div>
      <div class="Caption">
        <div className="BgColor">
          <div className="BgImg"></div>
        </div>
        We are proud to have many satisfied clients. Here's what some of them
        have to say:
      </div>
    </div>
  );
};

export default Hero;
