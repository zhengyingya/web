import React, { Fragment } from "react";
import "./About.scss";

class About extends React.Component {
  render() {
    return (
      <div className="page-about">
        {this.props.cIndex === 2 && (
          <Fragment>
            <div
              className={`wave ${this.props.cIndex === 2 && "anim-fadein"}`}
            />
            <div className="left">
              <div
                className={`left-wrap ${this.props.cIndex === 2 &&
                  "anim-fadein"}`}
              >
                <h1>ABOUT US</h1>
                <h2>关于Blue</h2>
                <h3>
                  国际水育品牌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水安全教育倡导者
                </h3>
                <div className="divider" />
                <div className="txt">
                  <div className="t1">
                    Blue亲子游泳(Cheering Swimming
                    )源自澳洲的国际水育品牌，是澳大利亚知名游泳学校
                  </div>
                  <div className="t1">
                    Waterwise perth swim school
                    首次入驻中国的独立品牌，获得经SO认证的水中安全教育
                  </div>
                  <div className="t1">
                    机构AUSTSWIM (澳大利亚国家游泳和水上安全协会)的专业认证,
                    由澳洲婴幼儿游泳教练
                  </div>
                  <div className="t2">
                    专业认证机构Pediaswim
                    资深水育专家提供安全、有效、乐趣、独立的教学支持。
                  </div>
                  <div className="t1">
                    Blue始终践行水安全文化的使命,
                    致力于婴幼儿自救防溺与水上教育事业, 基于澳洲四十余
                  </div>
                  <div className="t1">
                    年的高标准水中教育体系,
                    专注为中国婴幼儿研发定制“六个阶段、八大体系”的游泳早教课
                  </div>
                  <div className="t1">
                    程,
                    竭诚为0-7周岁儿童提供专业规范、科学安全、趣味有效的亲子互动游泳课、独立救生技
                  </div>
                  <div>能课、专业泳姿训练课等国际水育课程</div>
                </div>
              </div>
            </div>
            <div className="right">
              <div
                className={`${this.props.cIndex === 2 &&
                  "anim-fadein-delay-15"}`}
              >
                <img
                  className="pool"
                  src={require("../assert/about/pool.png")}
                />
                <img
                  className="people"
                  src={require("../assert/about/people.png")}
                />
                <img
                  className="duck"
                  src={require("../assert/about/duck.png")}
                />
                <img
                  className="ball"
                  src={require("../assert/about/ball.png")}
                />
                <img
                  className="grass"
                  src={require("../assert/about/grass.png")}
                />
              </div>
              <img
                className={`cloud-1 ${this.props.cIndex === 2 &&
                  "anim-fadein-delay"}`}
                src={require("../assert/about/cloud1.png")}
              />
              <img
                className={`cloud-2 ${this.props.cIndex === 2 &&
                  "anim-fadein-delay"}`}
                src={require("../assert/about/cloud2.png")}
              />
              <img
                className={`cloud-3 ${this.props.cIndex === 2 &&
                  "anim-fadein-delay"}`}
                src={require("../assert/about/cloud3.png")}
              />
              <img
                className={`cloud-4 ${this.props.cIndex === 2 &&
                  "anim-fadein-delay"}`}
                src={require("../assert/about/cloud4.png")}
              />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default About;
