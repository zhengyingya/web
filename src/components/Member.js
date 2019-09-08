import React, { Fragment } from "react";
import "./ManageSystem.scss";

class Member extends React.Component {
  render() {
    return (
      <div className="page-manage-system">
        <div className={`wave ${this.props.cIndex === 5 && "anim-fadein"}`} />
        <div className="left">
          <div
            className={`left-wrap ${this.props.cIndex === 5 && "anim-fadein"}`}
          >
            <h1>MANAGEMENT SYSTEM</h1>
            <h2>Blue Blue 集成化管理系统</h2>
            <div className="divider" />
            <h3>会员端</h3>
            <div className="txt">
              <div className="t1">
                会员端分为 OS APP、 Android
                APP、微信链接登录口,每位会员都有专属的账号与密码,可
              </div>
              <div className="t2">
                自主选择校区、教练、课程,随时随地可查看会员档案,掌握学习进度等。
              </div>
              <div className="t1" />
              <div className="t2">
                具体操作请查看《Blue Blue集成化管理系统—一会员端使用说明书》
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div
            className={`${this.props.cIndex === 5 && "anim-fadein-delay-10"}`}
          >
            <img className="pool" src={require("../assert/manage/pool.png")} />
            <img
              className="people"
              src={require("../assert/manage/people.png")}
            />
            <img className="duck" src={require("../assert/manage/duck.png")} />
            <img className="ball" src={require("../assert/manage/ball.png")} />
            <img
              className="chair"
              src={require("../assert/manage/chair.png")}
            />
            <img
              className="shuttlecock"
              src={require("../assert/manage/shuttlecock.png")}
            />
          </div>
          <img
            className={`cloud-1 ${this.props.cIndex === 5 &&
              "anim-fadein-delay"}`}
            src={require("../assert/about/cloud1.png")}
          />
          <img
            className={`sun ${this.props.cIndex === 5 &&
              "anim-fadein-delay-05"}`}
            src={require("../assert/manage/sun.png")}
          />
        </div>
      </div>
    );
  }
}

export default Member;
