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
          <Link to="/"><img src={require('../images/DLogo.png')} width="30" height="38.4"/></Link>
          <Link to="about-me">About Me</Link>
          <Link to="portfolio">Work</Link>
          <Link to="#">Blog</Link>
          <Link to="contact">Contact</Link>
        </div>
    </div>
    );
  }
}

export default Header
