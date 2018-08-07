import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => (
  <div className="hero">
    <img className="hero__centerlogo" src={require("../images/hero_updated.svg")} />
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
    >
      <p className="scrolldown">SCROLLDOWN</p>
    </ScrollAnimation>
    <div className="herogroup">
      <div className="herogroup-columns">
        <h2 className="herogroup-leftcolumn">
          <span className="herogroup--toptext">UI / UX</span>
          <br />
          <span className="herogroup--bottomtext">Designer</span>
        </h2>
        <h2 className="herogroup-rightcolumn">
          <span className="herogroup--toptext">Full-Stack</span>
          <br />
          <span className="herogroup--bottomtext">Developer</span>
        </h2>
      </div>
    </div>
  </div>
);

export default Hero;