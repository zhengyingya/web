import React, { Fragment } from "react";
import Swiper from "react-id-swiper";
import classnames from "classnames";
import { createPortal } from "react-dom";
import "react-id-swiper/lib/styles/scss/swiper.scss";
import Modal from "./Modal";
import "./Course.scss";

const TXT = [
  {},
  {
    txt1: "小海星班",
    txt2: "STARFISH CLASS",
    txt3: "0-6个月",
    txt4: "安静 | 柔和 | 视觉刺激 | 触觉感知"
  },
  {
    txt1: "小章鱼班",
    txt2: "OCTOPUS CLASS",
    txt3: "6-15个月",
    txt4: "安抚 | 温和 | 肢体沟通"
  },
  {
    txt1: "海马班",
    txt2: "HIPPOCAMPUS CLASS",
    txt3: "15-30个月",
    txt4: "多样化 | 趣味性 | 循循善诱"
  },
  {
    txt1: "海龟班",
    txt2: "TURTLES CLASS",
    txt3: "30-42个月",
    txt4: "逻辑性 | 协调性 | 专注力训练"
  },
  {
    txt1: "海豚班",
    txt2: "DOLPHINS CLASS",
    txt3: "3.5-5周岁",
    txt4: "活跃 | 自主 | 激励"
  },
  {
    txt1: "鲨鱼班",
    txt2: "SHARK CLASS",
    txt3: "5-7周岁",
    txt4: "融洽 | 正规 | 标准化 | 重复性"
  }
];
const Item = ({ icon, word, enWord }) => {
  return (
    <div className="coursera">
      <div className={icon} />
      <div className="word-wrap">
        <div className="word">{word}</div>
        <div className="enWord">{enWord}</div>
      </div>
    </div>
  );
};

const CourseContent = ({ mIndex, index, onClick }) => {
  return (
    <div className="wrap">
      <img
        className="img"
        src={require(`../assert/course/modal-img${index}.jpg`)}
      />
      <div className="mid">
        <div className="txt1">{TXT[mIndex].txt1}</div>
        <div className="txt2">{TXT[mIndex].txt2}</div>
        <div className="txt3">{TXT[mIndex].txt3a}</div>
        <div className="txt3">{TXT[mIndex].txt3}</div>
        <div className="txt4">{TXT[mIndex].txt4}</div>
      </div>
      <div className="modal-bg">
        <div
          className={`it ${mIndex === 1 && "active"}`}
          onClick={() => onClick(1)}
        >
          <div className="act">
            <div>小海星班</div>
            <div>STARFISH CLASS</div>
          </div>
        </div>
        <div
          className={`it ${mIndex === 2 && "active"}`}
          onClick={() => onClick(2)}
        >
          <div className="act">
            <div className="txt1">小章鱼班</div>
            <div className="txt2">OCTOPUS CLASS</div>
          </div>
        </div>
        <div
          className={`it ${mIndex === 3 && "active"}`}
          onClick={() => onClick(3)}
        >
          <div className="act">
            <div className="txt1">海马班</div>
            <div className="txt2">HIPPOCAMPUS CLASS</div>
          </div>
        </div>
        <div
          className={`it ${mIndex === 4 && "active"}`}
          onClick={() => onClick(4)}
        >
          <div className="act">
            <div className="txt1">海龟班</div>
            <div className="txt2">TURTLES CLASS</div>
          </div>
        </div>
        <div
          className={`it ${mIndex === 5 && "active"}`}
          onClick={() => onClick(5)}
        >
          <div className="act">
            <div className="txt1">海豚班</div>
            <div className="txt2">DOLPHINS CLASS</div>
          </div>
        </div>
        <div
          className={`it ${mIndex === 6 && "active"}`}
          onClick={() => onClick(6)}
        >
          <div className="act">
            <div className="txt1">鲨鱼班</div>
            <div className="txt2">SHARK CLASS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cIndex: 0,
      cMenu: 1,
      mIndex: 0, // 弹框索引
      isLeft: false,
      isRight: false
    };
  }

  handleRight = () => {
    if (this.state.mIndex < 6) {
      this.setState({
        mIndex: this.state.mIndex + 1,
        isLeft: true,
        isRight: false
      });
    }
  };

  handleLeft = () => {
    if (this.state.mIndex > 1) {
      this.setState({
        mIndex: this.state.mIndex - 1,
        isRight: true,
        isLeft: false
      });
    }
  };

  onCancel = () => {
    this.setState({
      mIndex: 0,
      isRight: false,
      isLeft: false
    });
  };

  renderContent() {
    if (this.state.cMenu === 0) {
      return (
        <div className="system">
          <Swiper
            direction="vertical"
            height={500}
            getSwiper={node => {
              this.systemSwiper = node;
            }}
            key="menu0"
          >
            <div
              className="system-wrap"
              // onClick={() => {
              //   this.systemSwiper.slideNext();
              // }}
              onMouseEnter={() => this.systemSwiper.slideNext()}
            >
              <img
                className="img"
                src={require("../assert/course/system.png")}
              />
              <div className="txt1">
                Blue&nbsp;Blue以科学规范为原则,以相辅相成为内核,构建递进式八大课程体系。
              </div>
              <div className="txt2">
                Based on scientifc norms, Blue Blue Baby Swimming has
                constructed eight major
              </div>
              <div className="txt2">
                courses system, which supplement each other.
              </div>
              {/* <div
                className="down-btn"
                onClick={() => {
                  this.systemSwiper.slideNext();
                }}
              /> */}
            </div>
            <div
              className="system-wrap wrap2"
              // onClick={() => {
              //   this.systemSwiper.slidePrev();
              // }}
              onMouseLeave={() => this.systemSwiper.slidePrev()}
            >
              <div className="cnt">
                <Item
                  icon="icon1"
                  word="亲子亲密课"
                  enWord="Intimate Parent-Child Course"
                />
                <Item
                  icon="icon7"
                  word="抚触舒展课"
                  enWord="Touching and Stretch Course"
                />
                <Item
                  icon="icon4"
                  word="水感培养课"
                  enWord="Water-Sense Training Course"
                />
                <Item
                  icon="icon5"
                  word="亲子益智课"
                  enWord="Parent-Child Education Course"
                />
              </div>
              <img
                className="divider"
                src={require("../assert/course/divider.png")}
              />
              <div className="cnt">
                <Item
                  icon="icon2"
                  word="成长进阶课"
                  enWord="Growth Advanced Course"
                />
                <Item
                  icon="icon3"
                  word="水中技能课"
                  enWord="Under Water Skill Course"
                />
                <Item
                  icon="icon6"
                  word="水中自救课"
                  enWord="Self-save in Water Course"
                />
                <Item
                  icon="icon8"
                  word="专业训练课"
                  enWord="Professional Training Course"
                />
              </div>
            </div>
          </Swiper>
        </div>
      );
    }
    if (this.state.cMenu === 1) {
      const { cIndex } = this.state;
      return (
        <Fragment>
          <div className="swiper">
            <Swiper
              slidesPerView={2}
              spaceBetween={50}
              getSwiper={node => {
                this.swiper = node;
              }}
            >
              <div
                className={classnames({
                  wrap: true,
                  "rl-left": cIndex === 0
                })}
                onClick={() =>
                  this.setState({
                    mIndex: 1
                  })
                }
              >
                <img
                  className="course-item"
                  src={require("../assert/course/a1.jpg")}
                />
                {cIndex !== 0 && <div className="gray-bg" />}
                <div className="txt1">小海星班</div>
                <div className="txt2">STARFISH CLASS</div>
              </div>
              <div
                className={classnames({
                  wrap: true,
                  "rl-right": cIndex === 0,
                  "rl-left": cIndex === 1
                })}
                onClick={() =>
                  this.setState({
                    mIndex: 2
                  })
                }
              >
                <img
                  className="course-item"
                  src={require("../assert/course/a2.jpg")}
                />
                {cIndex !== 1 && <div className="gray-bg" />}
                <div className="txt1">小章鱼班</div>
                <div className="txt2">OCTOPUS CLASS</div>
              </div>
              <div
                className={classnames({
                  wrap: true,
                  "rl-right": cIndex === 1,
                  "rl-left": cIndex === 2
                })}
                onClick={() =>
                  this.setState({
                    mIndex: 3
                  })
                }
              >
                <img
                  className="course-item"
                  src={require("../assert/course/a3.jpg")}
                />
                {cIndex !== 2 && <div className="gray-bg" />}
                <div className="txt1">海马班</div>
                <div className="txt2">HIPPOCAMPUS CLASS</div>
              </div>
              <div
                className={classnames({
                  wrap: true,
                  "rl-right": cIndex === 2,
                  "rl-left": cIndex === 3
                })}
                onClick={() =>
                  this.setState({
                    mIndex: 4
                  })
                }
              >
                <img
                  className="course-item"
                  src={require("../assert/course/a4.jpg")}
                />
                {cIndex !== 3 && <div className="gray-bg" />}
                <div className="txt1">海龟班</div>
                <div className="txt2">TURTLES CLASS</div>
              </div>
              <div
                className={classnames({
                  wrap: true,
                  "rl-right": cIndex === 3,
                  "rl-left": cIndex === 4 || cIndex === 5
                })}
                onClick={() =>
                  this.setState({
                    mIndex: 5
                  })
                }
              >
                <img
                  className="course-item"
                  src={require("../assert/course/a5.jpg")}
                />
                {cIndex !== 4 && <div className="gray-bg" />}
                <div className="txt1">海豚班</div>
                <div className="txt2">DOLPHINS CLASS</div>
              </div>
              <div
                className={classnames({
                  wrap: true,
                  "rl-right": cIndex === 4 || cIndex === 5
                })}
                onClick={() =>
                  this.setState({
                    mIndex: 6
                  })
                }
              >
                <img
                  className="course-item"
                  src={require("../assert/course/a6.jpg")}
                />
                {cIndex !== 5 && <div className="gray-bg" />}
                <div className="txt1">鲨鱼班</div>
                <div className="txt2">SHARK CLASS</div>
              </div>
            </Swiper>
            {this.state.cIndex === 0 ? (
              <div className="left-btn-dis" />
            ) : (
              <div
                className="left-btn"
                onClick={() => {
                  if (this.state.cIndex < 5) {
                    this.swiper.slidePrev();
                  }
                  this.setState({
                    cIndex: this.state.cIndex - 1
                  });
                }}
              />
            )}
            {this.state.cIndex === 5 ? (
              <div className="right-btn-dis" />
            ) : (
              <div
                className="right-btn"
                onClick={() => {
                  this.swiper.slideNext();
                  this.setState({
                    cIndex: this.state.cIndex + 1
                  });
                }}
              />
            )}
          </div>
          <img
            className="bottom-dot"
            src={require(`../assert/course/b${this.state.cIndex + 1}.png`)}
          />
        </Fragment>
      );
    }
    if (this.state.cMenu === 2) {
      return (
        <div className="system">
          <Swiper
            direction="vertical"
            height={500}
            getSwiper={node => {
              this.scoreSwiper = node;
            }}
            key="menu2"
          >
            <div
              className="system-wrap"
              // onClick={() => {
              //   this.scoreSwiper.slideNext();
              // }}
              onMouseEnter={() => this.scoreSwiper.slideNext()}
            >
              <img
                className="img"
                src={require("../assert/course/score.png")}
              />
              <div className="txt1">
                Blue&nbsp;Blue全方位教学评分体系，提升教学质量，动态跟踪教学成效。
              </div>
              <div className="txt2">All-round Teaching Scoring System</div>
              {/* <div
                className="down-btn"
                onClick={() => {
                  this.scoreSwiper.slideNext();
                }}
              /> */}
            </div>
            <div
              className="system-wrap wrap2"
              // onClick={() => {
              //   this.scoreSwiper.slidePrev();
              // }}
              onMouseLeave={() => this.scoreSwiper.slidePrev()}
            >
              <div className="cnt-2">
                <Item icon="c4" word="基础评分" enWord="Bisic Scores" />
                <Item
                  icon="c6"
                  word="闭气反射评分"
                  enWord="Close Air Reflex Scores"
                />
                <Item
                  icon="c2"
                  word="划水与蹬腿评分"
                  enWord="Draw and Kick Scores"
                />
              </div>
              <img
                className="divider"
                src={require("../assert/course/divider.png")}
              />
              <div className="cnt-2">
                <Item
                  icon="c5"
                  word="潜水评分"
                  enWord="Underwater Diving Scores"
                />
                <Item icon="c1" word="跳水评分" enWord="Diving Scores" />
                <Item
                  icon="icon6"
                  word="社交和环境适应评分"
                  enWord="Social and Environmental Scores"
                />
              </div>
            </div>
          </Swiper>
        </div>
      );
    }
  }

  render() {
    const { mIndex, isLeft, isRight, cMenu } = this.state;
    return (
      <div className="page-course">
        {" "}
        {cMenu === 0 && (
          <div
            className="cour-menu-overlayer"
            onClick={() => {
              if (this.systemSwiper) {
                this.systemSwiper.slidePrev();
              }
            }}
          />
        )}
        {cMenu === 2 && (
          <div
            className="cour-menu-overlayer"
            onClick={() => {
              if (this.scoreSwiper) {
                this.scoreSwiper.slidePrev();
              }
            }}
          />
        )}
        <div className="menu">
          <div
            className={`menu-item ${this.state.cMenu === 0 && "menu-active"}`}
            onClick={() => {
              this.setState({ cMenu: 0, cIndex: 0 });
            }}
          >
            八大课程体系
          </div>
          <div
            className={`menu-item ${this.state.cMenu === 1 && "menu-active"}`}
            onClick={() => {
              this.setState({ cMenu: 1, cIndex: 0 });
            }}
          >
            六大技能阶段
          </div>
          <div
            className={`menu-item ${this.state.cMenu === 2 && "menu-active"}`}
            onClick={() => {
              this.setState({ cMenu: 2, cIndex: 0 });
            }}
          >
            全方位教学评分系统
          </div>
        </div>
        {this.renderContent()}
        {mIndex > 0 &&
          createPortal(
            <div className="cour-overlayer" onClick={this.onCancel} />,
            document.getElementById("root")
          )}
        {[1, 2, 3, 4, 5, 6].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 1,
              "fade-in-right": mIndex === 1 && isRight,
              "fade-out-left": mIndex === 2 && isLeft
            })}
            height={700}
          >
            <div className="cour-modal">
              <CourseContent
                mIndex={mIndex}
                index={1}
                onClick={mIndex => {
                  this.setState({ mIndex, isLeft: false, isRight: false });
                }}
              />
              <div className="btn-close" onClick={this.onCancel} />
              <div className="card">
                <div className="txt1">课程优势</div>
                <div className="txt2">
                  通过潜水练习，促进宝宝心肺功能发育，以柔和抚触使婴儿进行主动和被动的运动，促进血液循环，加快胃肠蠕动，改善消化系统，有利于生长发育。
                </div>
                <div className="txt1">课程主题：《你好，妈咪》</div>
                <div>
                  新生儿非常享受在水里的时光，虽然不会言语，但通过四肢的划动表达自己遇见水的兴奋，怀念回到母胎的感觉，找到归属的安全感。这个阶段的课程重心会以触碰和抚摸为主，抚触时成人与婴儿目光相对，以微笑呵护,给其一种愉悦而享受的满足感。温柔的抚触，不仅给新生儿以愉快的刺激，还可以增加亲子亲密度，是父母与婴儿之间最好的情感交流方式之一。
                </div>
              </div>
            </div>
          </Modal>
        )}
        {[1, 2, 3, 4, 5, 6].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 2,
              "fade-in-left": mIndex === 2 && isLeft,
              "fade-in-right": mIndex === 2 && isRight,
              "fade-out-left": mIndex === 3 && isLeft,
              "fade-out-right": mIndex === 1 && isRight
            })}
            height={700}
          >
            <div className="cour-modal">
              <CourseContent
                mIndex={mIndex}
                index={2}
                onClick={mIndex => {
                  this.setState({ mIndex, isLeft: false, isRight: false });
                }}
              />
              <div className="btn-close" onClick={this.onCancel} />
              <div className="card">
                <div className="txt1">课程优势</div>
                <div className="txt2">
                  针对不同宝宝自身的实际情况，配合宝宝适当放慢课程进度，通过有次序、有部位、有技巧地抚触，用肢体互动引导宝宝爱上玩水，解放宝宝的四肢，强化身体，改善睡眠质量，增强免疫功能。
                </div>
                <div className="txt1">课程主题：《握手吧，世界》</div>
                <div>
                  6-15个月属于过渡期，家长要格外耐心，及时解读宝宝通过哭闹所表达的含义，通过不断的磨合达成良好的默契。而在水中，宝宝能够解开四肢的束缚，回归自由自在的状态，释放自己的情绪，是与家长沟通的良好时机。家长多与宝宝进行肢体抚触，让宝宝通过肢体语言来观察和学习外界的新鲜事物，发现生活中的美好，与这个熟悉又陌生的世界握手言和。
                </div>
              </div>
            </div>
          </Modal>
        )}
        {[1, 2, 3, 4, 5, 6].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 3,
              "fade-in-left": mIndex === 3 && isLeft,
              "fade-in-right": mIndex === 3 && isRight,
              "fade-out-left": mIndex === 4 && isLeft,
              "fade-out-right": mIndex === 2 && isRight
            })}
            height={700}
          >
            <div className="cour-modal">
              <CourseContent
                mIndex={mIndex}
                index={3}
                onClick={mIndex => {
                  this.setState({ mIndex, isLeft: false, isRight: false });
                }}
              />
              <div className="btn-close" onClick={this.onCancel} />
              <div className="card">
                <div className="txt1">课程优势</div>
                <div className="txt2">
                  通过多元趣味性游戏，激发宝宝对游泳运动的兴趣，消除宝宝后期对水的害怕心理，指导宝宝练习基础游泳动作，促进肌肉骨骼发展，增强肌肉控制能力，建立较好的平衡感。
                </div>
                <div className="txt1">课程主题：《 Hi Five 》</div>
                <div>
                  情绪需要有效的方式去舒缓和释放，而非强行的单方面压制，否则只会适得其反。家长要对宝宝持有耐心的沟通与引导，经常用“Give
                  me a
                  five”这种积极鼓励式的有趣方法来化解宝宝出现的多种反弹情绪。家长要学会尽量去聆听宝宝、了解宝宝、尊重宝宝，这有益于增长宝宝的EQ与IQ，有利于培养宝宝日后良好的社交能力。
                </div>
              </div>
            </div>
          </Modal>
        )}
        {[1, 2, 3, 4, 5, 6].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 4,
              "fade-in-left": mIndex === 4 && isLeft,
              "fade-in-right": mIndex === 4 && isRight,
              "fade-out-left": mIndex === 5 && isLeft,
              "fade-out-right": mIndex === 3 && isRight
            })}
            height={700}
          >
            <div className="cour-modal">
              <CourseContent
                mIndex={mIndex}
                index={4}
                onClick={mIndex => {
                  this.setState({ mIndex, isLeft: false, isRight: false });
                }}
              />
              <div className="btn-close" onClick={this.onCancel} />
              <div className="card">
                <div className="txt1">课程优势</div>
                <div className="txt2">
                  强化精细动作，加强协调性训练，有助于刺激脑部与神经系统的发展，不断重复逻辑性信号词，增强宝宝的智力和理解能力，及时应答宝宝并带入逻辑性言语，可促进宝宝的语言和社会性应答能力的发展。
                </div>
                <div className="txt1">课程主题：《 What’s up》</div>
                <div>
                  针对怎么分辨宝宝下水是否适合进行打腿练习？首先，看宝宝下水时的整体状态，是否放松自在；其次，教练和家长要去摸宝宝的肌肉（适合一周五以上的宝宝），如果宝宝肌肉紧绷，则说明紧张，这时可用玩具或以游戏的方式转移宝宝的注意力，让他们达到放松的状态；最后，教宝宝重复划手和踢腿的动作，及时纠正错误姿势，为以后规范游泳奠定基础。
                </div>
              </div>
            </div>
          </Modal>
        )}
        {[1, 2, 3, 4, 5, 6].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 5,
              "fade-in-left": mIndex === 5 && isLeft,
              "fade-in-right": mIndex === 5 && isRight,
              "fade-out-left": mIndex === 6 && isLeft,
              "fade-out-right": mIndex === 4 && isRight
            })}
            height={700}
          >
            <div className="cour-modal">
              <CourseContent
                mIndex={mIndex}
                index={5}
                onClick={mIndex => {
                  this.setState({ mIndex, isLeft: false, isRight: false });
                }}
              />
              <div className="btn-close" onClick={this.onCancel} />
              <div className="card">
                <div className="txt1">课程优势</div>
                <div className="txt2">
                  以重复性游泳动作教学为主，力求规范化每一个动作，锻炼宝宝的臂部腿部力量，掌握水中良好的协调和平衡能力。以激励式教学，提高宝宝的自信和胆量，增强家长照顾宝宝的信心，一同释放压力，体验亲子游泳的乐趣。
                </div>
                <div className="txt1">课程主题：《 You are best 》</div>
                <div>
                  处于“反抗期”的幼儿，带着稚嫩的小机智，与成人对着干属于正常现象，家长可以在合理范围里满足宝宝的诉求，多给他们一些自主选择的权利和自由成长的空间。时常采用鼓励式教育，比如当宝宝练习游泳的动作到位时，夸奖宝宝“你是最棒的，宝贝真棒”，有益于让孩子的自尊心、自信心和独立性受到保护和发展。对于宝宝的不合理要求，避免直接冲突，而是用巧妙的方式去引导，鼓励孩子发展有益的兴趣和探索精神，帮助他们平稳顺利地度过“叛逆期”。
                </div>
              </div>
            </div>
          </Modal>
        )}
        {[1, 2, 3, 4, 5, 6].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 6,
              "fade-in-left": mIndex === 6 && isLeft,
              "fade-out-right": mIndex === 5 && isRight
            })}
            height={700}
          >
            <div className="cour-modal">
              <CourseContent
                mIndex={mIndex}
                index={6}
                onClick={mIndex => {
                  this.setState({ mIndex, isLeft: false, isRight: false });
                }}
              />
              <div className="btn-close" onClick={this.onCancel} />
              <div className="card">
                <div className="txt1">课程优势</div>
                <div className="txt2">
                  为儿童提供一个丰富且具刺激性的环境，在自主探索中变得勇敢，在课程中学会互帮互助，以团队互动的形式让儿童在课程中学会分享与帮助，增强团队意识和自救意识，找到责任感和归属感。
                </div>
                <div className="txt1">课程主题：《 我是小大人 》</div>
                <div>
                  5-7岁的儿童独立性强，需要一个平等对话的平台，让他们像小大人一样去学习如何为人处世，学习承担与帮助、学习享受成功也接受失败。在反复进行标准化动作训练的过程中，家长和教练充分尊重儿童的意愿，在儿童学习规范动作的基础上，让儿童能够自己设定目标，并努力去完成，鼓励他们自己摸索并自主选择适合自己游泳的方式。
                </div>
              </div>
            </div>
          </Modal>
        )}
        {mIndex > 0 &&
          createPortal(
            <div className="cour-btn-modal">
              <div
                className={`${mIndex === 1 ? "left-btn-dis" : "left-btn"}`}
                onClick={this.handleLeft}
              />
            </div>,
            document.getElementById("root")
          )}
        {mIndex > 0 &&
          createPortal(
            <div className="cour-btn-modal">
              <div
                className={`${mIndex === 4 ? "right-btn-dis" : "right-btn"}`}
                onClick={this.handleRight}
              />
            </div>,
            document.getElementById("root")
          )}
      </div>
    );
  }
}

export default Course;
