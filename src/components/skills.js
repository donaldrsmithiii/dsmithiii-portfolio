import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Skills = () => (
  <div className="skill-set container">
    <div className="text">
      <div className="text__wrap">
        <h2 className="heading--right">Skills</h2>
      </div>
    </div>
    <ScrollAnimation
    animateIn = "fadeIn"
    >

      <div className="content content--mlarge skill-set__flex">
        <ul className="skill-set__list">
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/HTML-CSS.svg")} width="68"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">HTML/CSS</h4>
                  <p className="skill-set__year">3YEARS</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  90
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p90 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p90" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/Sass.svg")} width="72" height="54"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">Sass/SCSS</h4>
                  <p className="skill-set__year">2YEARS</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  90
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p90 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p90" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/Javascript.svg")} width="68" height="68"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">Javascript</h4>
                  <p className="skill-set__year">1.5YEARS</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  70
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p70 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p70" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/react.svg")} width="72" height="64.4"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">React</h4>
                  <p className="skill-set__year">1YEAR</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  70
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p70 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p70" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/Redux.svg")} width="68" height="68"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">Redux</h4>
                  <p className="skill-set__year">1YEAR</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  80
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p80 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p80" />
              </ScrollAnimation>
            </div>
          </li>
        </ul>
        <ul className="skill-set__list">
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/Node.svg")} width="72"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">Node</h4>
                  <p className="skill-set__year">8MONTHS</p>
                </div>
                <p className="small-title small-title--skill skill-set__med">
                  60
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p60 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p60" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/GraphQL.svg")} width="64"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">GraphQL</h4>
                  <p className="skill-set__year">3MONTHS</p>
                </div>
                <p className="small-title small-title--skill skill-set__low">
                  40
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p40 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p40" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/Sketch.svg")} width="68"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">Sketch</h4>
                  <p className="skill-set__year">4YEARS</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  90
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p90 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p90" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/figma.svg")} width="68" height="62"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">Figma</h4>
                  <p className="skill-set__year">3MONTHS</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  80
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p80 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p80" />
              </ScrollAnimation>
            </div>
          </li>
          <li className="skill-set__item">
            <div className="skill-set__icon">
              <img src={require("../images/invision-studio.svg")} width="68" height="62"/>
            </div>
            <div className="skill-set__detail">
              <div className="skill-set__meta">
                <div className="skill-set__name">
                  <h4 className="small-title small-title--skill">Invision Studio</h4>
                  <p className="skill-set__year">5MONTHS</p>
                </div>
                <p className="small-title small-title--skill skill-set__high">
                  70
                  <span className="skill-set__ratio">%</span>
                </p>
              </div>
              <ScrollAnimation
                animateIn="skill-set__bar p70 in"
                initiallyVisible={true}
              >
                <div className="skill-set__bar p70" />
              </ScrollAnimation>
            </div>
          </li>
        </ul>
      </div>
    </ScrollAnimation>
  </div>
);

export default Skills;
