import React, { Fragment } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Modal from "./Modal";
import "./ManageSystem.scss";

class ManageSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      visible: false, // 弹框显示和隐藏
      left: 0,
      sliderValue: 0
    };
    this.isScroll = false;
  }

  onWheel = e => {
    const { index } = this.state;
    if (!this.isScroll) {
      if (e.nativeEvent.deltaY <= -30) {
        this.isScroll = true;
        if (index > 1) {
          this.setState({
            index: index - 1
          });
        } else {
          this.props.slickPrev();
          this.setState({
            index: 1
          });
        }
        setTimeout(() => {
          this.isScroll = false;
        }, 500);
      } else if (e.nativeEvent.deltaY > 30) {
        this.isScroll = true;
        if (index < 5) {
          this.setState({
            index: index + 1
          });
        } else {
          this.props.slickNext();
          this.setState({
            index: 1
          });
        }
        setTimeout(() => {
          this.isScroll = false;
        }, 500);
      }
    }
  };

  onCancel = () => {
    this.setState({
      visible: false
    });
  };

  hanleSliderChange = v => {
    console.log(v);
    this.setState({
      left: -20 - (v * 850) / 100,
      sliderValue: v
    });
  };

  render() {
    const { index, left } = this.state;
    return (
      <div className="page-manage-system" onWheel={this.onWheel}>
        {this.props.cIndex === 5 && (
          <Fragment>
            <div className={`wave ${index === 1 && "anim-fadein"}`} />
            <div className="left">
              {index === 1 && (
                <div className={`left-wrap ${index === 1 && "anim-fadein"}`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>四大端口</h3>
                  <div className="txt">
                    <div className="t1">
                      Blue独立研发业內首套集会员管理、约课扣课、评分升阶、统计筛选等多功能于一体的集成化
                    </div>
                    <div className="t2">管理系统。</div>
                    <div className="t1">
                      Blue集成化管理系统分为四大部分,分别是会员端、顾问端、教练端、后台管理端,四大端口各
                    </div>
                    <div className="t2">
                      司其职、相辅相成,保持整个系统正常运作。
                    </div>
                    <div className="t1">
                      Blue集成化管理系统兼具实用性、便捷性、高效性和灵活性,为商家提供日常运营、有序管理
                    </div>
                    <div className="t2">
                      的保障,为会员带来更方便快捷的约课操作和更优质舒心的服务体验。
                    </div>
                    <div
                      className="btn"
                      onClick={() => {
                        this.setState({
                          visible: true
                        });
                      }}
                    />
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className={`left-wrap ${index === 2 && "anim-fadein"}`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue集成化管理系统</h2>
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
                      具体操作请查看《Blue集成化管理系统—一会员端使用说明书》
                    </div>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div className={`left-wrap anim-fadein`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>教练端</h3>
                  <div className="txt">
                    <div className="t1">
                      教练端主要用于教学进度的把控、教学成果的评分考核、教学阶段的升级等,方便教练记录并
                    </div>
                    <div className="t2">
                      了解每一位学员的上课情况与进度,更好地做到因材施教、循序渐进。
                    </div>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div className={`left-wrap ${index === 4 && "anim-fadein"}`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>顾问端</h3>
                  <div className="txt">
                    <div className="t1">
                      顾问端主要用于会员与非会员的关系维护等，方便顾问及时跟进动态，更好的服务于客户
                    </div>
                  </div>
                </div>
              )}
              {index === 5 && (
                <div className={`left-wrap ${index === 5 && "anim-fadein"}`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>后台管理端</h3>
                  <div className="txt">
                    <div className="t1">
                      后台管理端起总体统筹作用，为整个系统的正常循环运行做好基础的筹备工作
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="right">
              <div className={`${index === 1 && "anim-fadein-delay-10"}`}>
                <img
                  className="pool"
                  src={require("../assert/manage/pool.png")}
                />
                <img
                  className="people"
                  src={require("../assert/manage/people.png")}
                />
                <img
                  className="duck"
                  src={require("../assert/manage/duck.png")}
                />
                <img
                  className="ball"
                  src={require("../assert/manage/ball.png")}
                />
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
                className={`cloud-1 ${index === 1 && "anim-fadein-delay"}`}
                src={require("../assert/about/cloud1.png")}
              />
              <img
                className={`sun ${index === 1 && "anim-fadein-delay-05"}`}
                src={require("../assert/manage/sun.png")}
              />
              {index === 2 && (
                <img
                  className={`phone anim-fadein`}
                  src={require("../assert/manage/phone1.png")}
                />
              )}
              {index === 3 && (
                <img
                  className={`phone anim-fadein`}
                  src={require("../assert/manage/phone2.png")}
                />
              )}
              {index === 4 && (
                <img
                  className={`phone anim-fadein`}
                  src={require("../assert/manage/phone3.png")}
                />
              )}
              {index === 5 && (
                <img
                  className={`phone anim-fadein`}
                  src={require("../assert/manage/phone4.png")}
                />
              )}
            </div>
            <Modal
              visible={this.state.visible}
              showMask={true}
              onCancel={this.onCancel}
            >
              <div className="manage-modal">
                <div className="btn-close" onClick={this.onCancel} />
                <div className="paopao1" />
                <div className="paopao2" />
                <div className="paopao3" />
                <img
                  className="title-img"
                  src={require("../assert/manage/modal-title.png")}
                />
                <div className="title">系统研发大事件</div>
                <img
                  className="divider"
                  src={require("../assert/manage/divider.png")}
                />
                <div className="line-wrap">
                  <div className="line" style={{ left: `${left}px` }} />
                  <div className="des" style={{ left: `${left}px` }}>
                    <div className="it" style={{ marginLeft: "40px" }}>
                      <img
                        className="date"
                        src={require("../assert/manage/date2.png")}
                      />
                      <div className="txt1">沟通合作</div>
                      <div className="txt2">沟通合作</div>
                    </div>
                    <div className="it" style={{ width: "200px" }}>
                      <img
                        className="date"
                        src={require("../assert/manage/date3.png")}
                      />
                      <div className="txt1">逐步构架</div>
                      <div className="txt2">
                        开发人员正式投入架构，开始逐步构建系统
                      </div>
                    </div>
                    <div className="it" style={{ width: "200px" }}>
                      <img
                        className="date"
                        src={require("../assert/manage/date4.png")}
                      />
                      <div className="txt1">初步完成</div>
                      <div className="txt2">沟通合作</div>
                    </div>
                    <div className="it" style={{ width: "200px" }}>
                      <img
                        className="date"
                        src={require("../assert/manage/date5.png")}
                      />
                      <div className="txt1">反复内测</div>
                      <div className="txt2">沟通合作</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <Slider
                    onChange={this.hanleSliderChange}
                    value={this.state.sliderValue}
                  />
                </div>
              </div>
            </Modal>
          </Fragment>
        )}
      </div>
    );
  }
}

export default ManageSystem;
