import React from "react";
import Swiper from "react-id-swiper";
import { createPortal } from "react-dom";
import classnames from "classnames";
import "react-id-swiper/lib/styles/scss/swiper.scss";
import Modal from "./Modal";
import "./Advantage.scss";

class Advantage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeft: false,
      mIndex: 0
    };
  }

  handleRight = () => {
    if (this.state.mIndex < 4) {
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

  render() {
    const { mIndex, isLeft, isRight } = this.state;
    return (
      <div className="page-advantage">
        <div className="top">
          <div
            className="left"
            onClick={() => {
              this.setState({ mIndex: 1 });
            }}
          >
            <img className="ad1" src={require("../assert/advantage/ad1.png")} />
            <div className="txt">
              <div>雄厚师资</div>
              <div>专业教学</div>
            </div>
          </div>
          <div
            className="left"
            onClick={() => {
              this.setState({ mIndex: 2 });
            }}
          >
            <img className="ad2" src={require("../assert/advantage/ad2.png")} />
            <div className="txt">
              <div>八大课程体系</div>
              <div>六大技能阶段</div>
              <div>全方位平方体系</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div
            className="left"
            onClick={() => {
              this.setState({ mIndex: 3 });
            }}
          >
            <img className="ad1" src={require("../assert/advantage/ad3.png")} />
            <div className="txt noopacity">
              <div>先进设备</div>
              <div>舒适环境</div>
            </div>
          </div>
          <div
            className="left"
            onClick={() => {
              this.setState({ mIndex: 4 });
            }}
          >
            <img className="ad2" src={require("../assert/advantage/ad4.png")} />
            <div className="txt">
              <div>Blue集成化</div>
              <div>管理系统</div>
            </div>
          </div>
        </div>
        {mIndex > 0 &&
          createPortal(
            <div className="adv-overlayer" onClick={this.onCancel} />,
            document.getElementById("root")
          )}
        {[1, 2].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 1,
              "fade-in-right": mIndex === 1 && isRight,
              "fade-out-left": mIndex === 2 && isLeft
            })}
          >
            <div className="adv-modal">
              <div className="wrap">
                <img
                  className="img"
                  src={require("../assert/advantage/i1.png")}
                />
                <div className="border">
                  <h2>STRONG TEACHERS</h2>
                  <h2>TEACHING</h2>
                  <h2 className="bt30">PROFESSTION</h2>
                  <div className="txt1">雄厚师资</div>
                  <div className="txt1 bt">专业教学</div>

                  <div className="txt2">
                    Blue亲子游泳由 Waterwise Perth Swim
                    School创始人、澳大利亚婴幼儿水中安全教育专家 Stacy
                    Gower担任总导师，由
                    ASCTA(澳大利亚游泳教练和教师最高机构)认证、
                    AUSTSWIM游泳技能专业评审员
                    WendyMcfarlane担任技术培训指导，带领拥有二十余年教学实战经验的专业团队，根据
                    AUSTSWIM游泳与水安全教育的行业标准，培养符合国际标准的水中安全教育教学与婴幼儿游泳的教练员,结合中国婴幼儿生理与心理特征,优化中国水中安全教育教学体系，提升教练员专业技能,掌握不同年齡阶段的水中教学模式,不断提升水中培
                  </div>
                  <div className="txt3">训技能，完善教学体系。</div>
                </div>
                <div className="btn-close" onClick={this.onCancel} />
              </div>
            </div>
          </Modal>
        )}
        {[1, 2, 3].indexOf(mIndex) > -1 && (
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
          >
            <div className="adv-modal">
              <div className="wrap">
                <img
                  className="img"
                  src={require("../assert/advantage/i2.png")}
                />
                <div className="border">
                  <h2>TEACHING</h2>
                  <h2 className="bt30">SYSTEM</h2>
                  <div className="txt1 bt">教学体系</div>
                  <div className="txt2">
                    Blue( Cheering
                    Swimming)以澳洲高标准水中教育体系为向导,以专业自救与水中教育为准则,根据中国婴幼儿的生理发育、心理特征与行为模式,构建科学专业的八大递进式课程体系,精细划分六个技能阶段,配以安全创新的多样化教具,辅以基础、社交、环境适应、闭气反射等六大维度的全方位教学评分体系,动态跟踪教学成效,提升教学质量,协以技能认定升阶考试,考核教
                    学成果,致力于让每一位
                  </div>
                  <div className="txt3">学员都学有成效。</div>
                  <div className="btn-close" onClick={this.onCancel} />
                </div>
              </div>
            </div>
          </Modal>
        )}
        {[2, 3, 4].indexOf(mIndex) > -1 && (
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
          >
            <div className="adv-modal">
              <div className="wrap">
                <img
                  className="img"
                  src={require("../assert/advantage/i3.png")}
                />
                <div className="border">
                  <h2>ADVANCED EQUIPMENT</h2>
                  <h2>COMFORTABLE</h2>
                  <h2 className="bt30"> ENVIRONMENT</h2>
                  <div className="txt1">先进设备</div>
                  <div className="txt1 bt">舒适环境</div>
                  <div className="txt3 bt5"> (1)P恒温泳池</div>
                  <div className="txt2">
                    泳池水温恒定于32-34°C，采用世界先进的德国进口铜银离子水处理设备，24小时双重注排水循环，每月定期
                    检测水质并公示水质检测报告，以
                  </div>
                  <div className="txt3">保证水质安全。</div>
                  <div className="txt3 bt5"> (2)人性化设计</div>
                  <div className="txt2">
                    不同于大多数机构的公共浴室，Blue开设专用的独立亲子浴室，保护隐私更自在;开设独立母婴室，方便母婴哺乳及小宝休憩，让客户舒适放松无拘束。
                  </div>
                  <div className="txt3" />
                  <div className="txt3 bt5"> (3)恒温除湿系统</div>
                  <div className="txt2">
                    室内安置高效除湿系统，保持适合体感都温度与湿度循环净化室内空气，打造恒温恒湿、洁净清新的
                  </div>
                  <div className="txt3">母婴舒适环境。</div>
                  <div className="txt3 bt5"> (4)温馨风格</div>
                  <div className="txt2">
                    全室装修采用北欧简约温馨风，配以个性化装饰，辅以贴心精致的服努，营造温暖和睦的家庭氛围，
                  </div>
                  <div className="txt3">提供宾至如归的客户关怀。</div>
                  <div className="btn-close" onClick={this.onCancel} />
                </div>
              </div>
            </div>
          </Modal>
        )}
        {[3, 4].indexOf(mIndex) > -1 && (
          <Modal
            visible={true}
            onCancel={this.onCancel}
            className={classnames({
              base: mIndex !== 4,
              "fade-in-left": mIndex === 4 && isLeft,
              "fade-out-right": mIndex === 3 && isRight
            })}
          >
            <div className="adv-modal">
              <div className="wrap">
                <img
                  className="img"
                  src={require("../assert/advantage/i4.png")}
                />
                <div className="border">
                  <h2>MANAGEMENT</h2>
                  <h2 className="bt30">SYSTEM</h2>
                  <div className="txt1 bt">Blue集成化管理系统</div>
                  <div className="txt2">
                    Blue独立研发业内首套会员管理、约课扣课、评分升阶、统计筛选等多功能于一体的集成化管理系统。Blue根据课程设定需要和个性化管理需求,将集成化管理系统分为四大部分,分别是会员端、顾问端、教练端
                    后台管理端,每块对应着不同的功能,四大端口各司其
                    职、相辅相成,保持整个系统的正常流程运作。Blue集成化管理系统的实用性、便捷性、高效性和灵活性,为商家提供日常运营、有序管理的保障,为会员带来更方便快捷的约课操作和更优质舒心
                  </div>
                  <div className="txt3">的服务体验。</div>
                  <div className="btn-close" onClick={this.onCancel} />
                </div>
              </div>
            </div>
          </Modal>
        )}

        {mIndex > 0 &&
          createPortal(
            <div className="adv-btn-modal">
              <div
                className={`${mIndex === 1 ? "left-btn-dis" : "left-btn"}`}
                onClick={this.handleLeft}
              />
            </div>,
            document.getElementById("root")
          )}
        {mIndex > 0 &&
          createPortal(
            <div className="adv-btn-modal">
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

export default Advantage;
