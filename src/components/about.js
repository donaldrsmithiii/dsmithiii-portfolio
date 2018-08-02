import React from 'react';

const About = () => (
  <div className="about">
    <div className="about__leftcolumn">
      <h2 className="about__title">Who Am I <span>?</span></h2>
      <p>
        Let me tell you a little about 
        <br/>
        myself...
      </p>
    </div>
    <div className="about__rightcolumn">
      <div className="about_rightcolumn-topbar"></div>
        <p>
          I’m a full-stack developer and designer, currently residing in Maryland, USA.
          <br/><br/>
          I first dabbled in the industry as a designer. However, shortly after I started to learn technologies required for web development. 
          <br/><br/>
          I realized I had a passion for software development when I found myself programming during every free moment. If I’m not coding, I’m designing something to code. Solving new problems and coming up with creative ways to express my ideas really make this the ideal career and I always look forward to the new challenges ahead...
        </p>
      <div className="about_rightcolumn-bottombar"></div>
    </div>
  </div>
);

export default About;