import React from "react";
import "./Hero.css";
import Herologo from "./Herologo";

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-section">
          <h1>Hello!</h1>
          <p>
            My name is Sriharsh <br />
            and I'm a web developer
          </p>
        </div>
        <div className="hero-section">
          <Herologo />
        </div>
      </div>
    </div>
  );
}

export default Hero;
