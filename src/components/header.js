import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headergroup">
      <Link to="/"><img src={require('../images/DLogo.png')} width="30" height="38.4"/></Link>
      <Link to="about-me">About Me</Link>
      <Link to="portfolio">Work</Link>
      <Link to="#">Blog</Link>
      <Link to="contact">Contact</Link>
    </div>
  </div>
);

export default Header
