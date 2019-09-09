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
                  家庭式亲子游泳倡导者&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专注亲子
                  精致服务
                </h3>
                <div className="divider" />
                <div className="txt">
                  <div className="t1-">
                    Blue
                    Blue亲子游泳中心成立于2012年，源自英国的国际水育品牌，获得世界上最大的游泳教学及救生组织STA（Swimming
                    Teachers’
                    Association）的专业认证，是浙江省内首家恒温亲子游泳中心，也是联合国儿童基金会母爱10平方的首批会员。
                  </div>
                  <div className="t1"></div>
                  <div className="t2"></div>
                  <div className="t1-">
                    Blue
                    Blue亲子游泳始终以“家庭式亲子游泳倡导者”为宗旨，以“专注亲子，精致服务”为准则，以“社区型便捷模式”为发展要领，以“科学安全、教学实效”至上，个性化定制研发“六个阶段、八大体系”的游泳早教课程，竭诚为0-7周岁儿童提供专业规范、科学安全、趣味有效的亲子互动游泳课、独立救生技能课、专业泳姿训练课等专业水育课程。
                  </div>
                  <div className="t1"></div>
                  <div className="t1"></div>
                  <div></div>
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
