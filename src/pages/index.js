import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    Test
    <div className="hero"></div>
      <div className="hero--centerlogo"></div>
      <div className="herogroup">
        <h2>
          <span className="herogroup--toptext">UI / UX</span>
          <br/>
          <span className="herogroup--bottomtext">Designer</span>
        </h2>
        
        <h2>
          <span className="herogroup--toptext">Full-Stack</span>
          <br/>
          <span className="herogroup--bottomtext">Developer</span>
        </h2>
      </div>
      <Link classname="hero--learnmore" to="/page-2/">Learn More</Link>
  </div>
)

export default IndexPage
