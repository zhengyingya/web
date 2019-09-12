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
      left: -20 - (v * 1000) / 100,
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
                  <h2>Blue&nbsp;Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>四大端口</h3>
                  <div className="txt">
                    <div className="t1-">
                      Blue&nbsp;Blue独立研发业内首套集会员管理、约课扣课、评分升阶、统计筛选等多功能于一体的集成化管理系统。
                    </div>
                    <div className="t2"></div>
                    <div className="t1-">
                      Blue&nbsp;Blue根据课程设定需要和个性化管理需求，将集成化管理系统分为四大部分，分别是会员端、顾问端、教练端、后台管理端，每块对应着不同的功能，四大端口各司其职、相辅相成，保持整个系统的正常流程运作。
                    </div>
                    <div className="t2"></div>
                    <div className="t1-">
                      Blue&nbsp;Blue集成化管理系统兼具实用性、便捷性、高效性和灵活性，为商家提供日常运营、有序管理的保障，为会员带来更方便快捷的约课操作和更优质舒心的服务体验。
                    </div>
                    <div className="t2"></div>
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
                  <h2>Blue&nbsp;Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>会员端</h3>
                  <div className="txt">
                    <div className="t1">
                      会员端分为OS&nbsp;APP、Android&nbsp;APP、微信链接登录口，每位会员都有专属的账号与密码，可
                    </div>
                    <div className="t2">
                      自主选择校区、教练、课程，随时随地可查看会员档案，掌握学习进度等。
                    </div>
                    <div className="t1" />
                    <div className="t2">
                      具体操作请查看《Blue&nbsp;Blue集成化管理系统—一会员端使用说明书》
                    </div>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div className={`left-wrap anim-fadein`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue&nbsp;Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>教练端</h3>
                  <div className="txt">
                    <div className="t1">
                      教练端主要用于教学进度的把控、教学成果的评分考核、教学阶段的升级等，方便教练记录并
                    </div>
                    <div className="t2">
                      了解每一位学员的上课情况与进度，更好地做到因材施教、循序渐进。
                    </div>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div className={`left-wrap ${index === 4 && "anim-fadein"}`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue&nbsp;Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>顾问端</h3>
                  <div className="txt">
                    <div className="t1">
                      顾问端主要用于会员与非会员的关系维护等，方便顾问及时跟进动态，更好的服务于客户。
                    </div>
                  </div>
                </div>
              )}
              {index === 5 && (
                <div className={`left-wrap ${index === 5 && "anim-fadein"}`}>
                  <h1>MANAGEMENT SYSTEM</h1>
                  <h2>Blue&nbsp;Blue集成化管理系统</h2>
                  <div className="divider" />
                  <h3>后台管理端</h3>
                  <div className="txt">
                    <div className="t2">
                      后台管理端起总体统筹作用，为整个系统的正常循环运行做好基础的筹备工作。
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
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date1.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">9</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2017</span>
                        </div>
                      </div>
                      <div className="txt1">初步设想</div>
                      <div className="txt2">
                        秉着“直观、便捷、自主”的初衷，提出创新开发一款约课系统的设想。
                      </div>
                    </div>
                    <div className="it">
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date2.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">10</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2017</span>
                        </div>
                      </div>
                      <div className="txt1">沟通合作</div>
                      <div className="txt2">
                        与合作方洽谈签约，对理念、功能、约课机制、人性化需求等多方沟通。
                      </div>
                    </div>
                    <div className="it" style={{ marginLeft: "10px" }}>
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date3.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">11</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2017</span>
                        </div>
                      </div>
                      <div className="txt1">框架搭建</div>
                      <div className="txt2">
                        开发人员正式投入构架，开始逐步构建系统。
                      </div>
                    </div>
                    <div className="it">
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date4.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">12</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2017</span>
                        </div>
                      </div>
                      <div className="txt1">系统开发</div>
                      <div className="txt2">
                        在2017年12至2018年2月的近3个月中，约课系统初步构架完成，期间多次反复探讨各方可行性，把灵活的人为控制与科学客观的系统逻辑相结合，对系统整体作多次调整，系统初步建设完成。
                      </div>
                    </div>
                    <div className="it" style={{ marginLeft: "10px" }}>
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date5.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">3</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2018</span>
                        </div>
                      </div>
                      <div className="txt1">系统测试</div>
                      <div className="txt2">
                        在2018年3月至2018年5月期间，全体工作人员进行反复内部测试，通过每天全员多次测试提出需要改进之处，边由开发人员根据实际需求进行调整修改，并重新加入多项个性化需求。
                      </div>
                    </div>
                    <div className="it">
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date6.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">6</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2018</span>
                        </div>
                      </div>
                      <div className="txt1">试运行</div>
                      <div className="txt2">
                        选取部分家长试用，听取各方建议，由开发人员根据合理性与可行性原则进行功能增设与调整。
                      </div>
                    </div>
                    <div className="it">
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date7.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">7</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2018</span>
                        </div>
                      </div>
                      <div className="txt1">正式上线</div>
                      <div className="txt2">
                        筹备系统上线前期工作，正式上线系统。
                      </div>
                    </div>
                    <div className="it" style={{ marginLeft: "10px" }}>
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date8.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">8</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2018</span>
                        </div>
                      </div>
                      <div className="txt1">过渡更新</div>
                      <div className="txt2">
                        在2018年8月至10月期间，现有系统与新约课系统两套并行，会员端、顾问端、教练端、后台端同时并用，进行反复测试和修正。
                      </div>
                    </div>
                    <div className="it">
                      {/* <img
                        className="date"
                        src={require("../assert/manage/date8.png")}
                      /> */}
                      <div className="date">
                        <div className="date-in">
                          <span className="month">11</span>
                          <img
                            className="s-divider"
                            src={require("../assert/manage/divider.png")}
                          ></img>
                          <span className="year">2018</span>
                        </div>
                      </div>
                      <div className="txt1">完善维护</div>
                      <div className="txt2">
                        在使用过程中不断收集各方建议，进行分析修正测试，更加完善系统。
                      </div>
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
