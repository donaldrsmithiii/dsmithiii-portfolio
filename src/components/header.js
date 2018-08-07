import React from 'react';
import Link from 'gatsby-link';



class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      this.handleScroll
    )
  };

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  };

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header header__scrolled' : 'header'}>
        <div className="headergroup">
          <a href="/"><img src={require("../images/d3-header.png")} width="30" height="38"/></a>
          <a href="about">About Me</a>
          <a href="portfolio">Work</a>
          <a href="#">Blog</a>
          <a href="contact">Contact</a>
        </div>
    </div>
    );
  }
}

export default Header
