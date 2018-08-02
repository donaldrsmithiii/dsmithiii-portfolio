import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Skills = () => (
  <div className="skill-set container">
    <div className="text">
      <div className="text__wrap content">
        <h2 className="heading--right">Skills</h2>
      </div>
    </div>
    <div className="content content--mlarge skill-set__flex">
      <ul className="skill-set__list">
        <li className="skill-set__item">
          <div className="skill-set__icon">
            <img src={require("../images/HTML-CSS.svg")}/>
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
            <img src={require("../images/Javascript.svg")}/>
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
            <img src={require("../images/React.svg")}/>
          </div>
          <div className="skill-set__detail">
            <div className="skill-set__meta">
              <div className="skill-set__name">
                <h4 className="small-title small-title--skill">React</h4>
                <p className="skill-set__year">1YEAR</p>
              </div>
              <p className="small-title small-title--skill skill-set__high">
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
            <img src={require("../images/Redux.svg")}/>
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
              <p className="small-title small-title--skill skill-set__high">
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
      </ul>
      <ul className="skill-set__list">
        <li className="skill-set__item">
          <div className="skill-set__icon">
            <img src={require("../images/GraphQL.svg")}/>
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
            <img src={require("../images/Golang.svg")} width="72"/>
          </div>
          <div className="skill-set__detail">
            <div className="skill-set__meta">
              <div className="skill-set__name">
                <h4 className="small-title small-title--skill">Golang</h4>
                <p className="skill-set__year">2MONTH</p>
              </div>
              <p className="small-title small-title--skill skill-set__low">
                30
                <span className="skill-set__ratio">%</span>
              </p>
            </div>
            <ScrollAnimation
              animateIn="skill-set__bar p30 in"
              initiallyVisible={true}
            >
              <div className="skill-set__bar p30" />
            </ScrollAnimation>
          </div>
        </li>
        <li className="skill-set__item">
          <div className="skill-set__icon">
            <img src={require("../images/Sketch.svg")} width="72"/>
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
            <img src={require("../images/Figma.svg")}/>
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
            <img src={require("../images/InvisionStudio.svg")} width="72"/>
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
  </div>
);

export default Skills;
