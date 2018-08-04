import React from 'react';

const Hero = () => (
  <div>
    <div className="hero">
      <img className="hero__centerlogo" src={require("../images/hero_updated.svg")}/>
      <div className="herogroup">
        <div className="herogroup-columns">
          <h2 className="herogroup-leftcolumn">
            <span className="herogroup--toptext">UI / UX</span>
            <br/>
            <span className="herogroup--bottomtext">Designer</span>
          </h2>
          <h2 className="herogroup-rightcolumn">
            <span className="herogroup--toptext">Full-Stack</span>
            <br/>
            <span className="herogroup--bottomtext">Developer</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;

{/*<svg width="100%" height="400" viewBox="0 0 100% 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="white">
<animate 
repeatCount="indefinite" 
fill="freeze" 
attributeName="d" 
dur="22s" 
values="M0 41.6576C265 124.158 311.5 178.196 649.5 121.287C987.5 64.378 1079.5 -66.8424 1365.5 41.6576C1868.33 232.417 2160.39 108.227 2560 143.658V375.326L0 375.326V41.6576Z;
            
M0 212.918C94 153.418 225.5 -44.0086 426 8.91833C626.5 61.8453 1034.41 327.208 1319.5 238.918C1665 131.918 1956.5 107.418 2560 386.918V596.363L0 596.363V212.918Z;

M0 131.777C291 269.777 540 274.777 803.5 131.777C1067 -11.2229 1309.4 -43.4289 1549 62.777C1831 187.777 2291 283.277 2560 190.777V470.777L0 470.777V131.777Z;
M0 212.918C94 153.418 225.5 -44.0086 426 8.91833C626.5 61.8453 1034.41 327.208 1319.5 238.918C1665 131.918 1956.5 107.418 2560 386.918V596.363L0 596.363V212.918Z;
M0 41.6576C265 124.158 311.5 178.196 649.5 121.287C987.5 64.378 1079.5 -66.8424 1365.5 41.6576C1868.33 232.417 2160.39 108.227 2560 143.658V375.326L0 375.326V41.6576Z"
/>
</path>
</svg>*/}

{/* <svg width="100%" height="359" viewBox="0 0 100% 359" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 48.5264C57.2672 22.8783 94 -4.1242 236 0.526356C378 5.17691 562 91.3092 778 200.526C832 227.831 983 299.736 1141 328.264C1207.46 340.264 1254.46 348.073 1322 353.481C1380.17 358.139 1483 363.309 1483 363.309H0V48.5264Z" fill="white"/>
</svg> */}                                                                        