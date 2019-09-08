import React, { Fragment } from "react";
import Modal from "./Modal";
import "./Join.scss";

class Join extends React.Component {
  isScroll = false;
  state = {
    visible1: false,
    visible2: false,
    visible3: false
  };

  onWheel = e => {
    if (
      !this.isScroll &&
      e.currentTarget.scrollTop === 0 &&
      e.nativeEvent.deltaY <= -30
    ) {
      this.isScroll = true;
      this.props.slickPrev();
      setTimeout(() => {
        this.isScroll = false;
      }, 2000);
    }
  };

  onCancel = key => {
    this.setState({
      [key]: false
    });
  };

  render() {
    return (
      <div className="page-join" onWheel={this.onWheel}>
        <div className="page-join-bg">
          {/* <img className="bg" src={require("../assert/join/bg.png")} /> */}
          <img className="img-i1" src={require("../assert/join/i1.jpg")} />
          <h2 style={{ marginTop: "50px" }}>加盟前景</h2>
          <div className="divider" />
          <h3>JOINING PROSPECTS</h3>
          <div className="prospect">
            <div className="border-1">
              <img className="img-i2" src={require("../assert/join/i2.jpg")} />
              <span>
                国家二胎政策全面开放，新生儿数量在未来几年将以平均2000多万的出生量持续增长，联合国测算，2020年中国婴幼儿数量将达2.61亿峰值。
              </span>
            </div>
            <div className="border-1">
              <img className="img-i3" src={require("../assert/join/i3.jpg")} />
              <span>
                家庭教育观念的转变，越来越重视早教与游泳运动，现代父母对孩子早教投入较大，愿意为孩子的健康成长投资，亲子游泳项目对婴幼儿身心发展的好处也得到普遍认可。
              </span>
            </div>
          </div>
          <div className="prospect">
            <div className="border-1">
              <img className="img-i4" src={require("../assert/join/i4.jpg")} />
              <span>
                婴幼儿亲子游泳属于早教行业的新兴行业，是一个刚性增长的朝阳产业，呈现快速发展的上升趋势。
              </span>
            </div>
            <div className="border-1">
              <img className="img-i5" src={require("../assert/join/i5.jpg")} />
              <span>
                婴幼儿早教行业连续多年被推动选为最具发展潜力且投资回报率较高的行业。投资成本相对较低，回本周期短，利润较高，是极佳的中小型投资首选。
              </span>
            </div>
          </div>

          <h2 style={{ marginTop: "50px" }}>加盟条件</h2>
          <div className="divider" />
          <h3>JOINING CONDITIONS</h3>

          <div className="condition">
            <img
              className="border"
              src={require("../assert/join/border2.png")}
            />
            <div className="condition-cnt">
              <div className="card">
                <img
                  className="icon-1"
                  src={require("../assert/join/icon1.png")}
                />
                <div className="txt1">ENTHUSIASM</div>
                <div className="txt2">热情</div>
                <div>
                  热爱幼儿游泳教育行业，认同卜鲁卜鲁亲子游泳(Blue Blue Baby
                  Swimming)的教育理念，有志于长期 发展亲子游泳早教事业
                </div>
              </div>
              <div className="card">
                <img
                  className="icon-1"
                  src={require("../assert/join/icon2.png")}
                />
                <div className="txt1">SERVICE</div>
                <div className="txt2">服务</div>
                <div className="txt3">具备良好的服务意识，注重客户体</div>
                <div className="txt4">验，共同维护品牌形象和口碑。</div>
              </div>
              <div className="card">
                <img
                  className="icon-1"
                  src={require("../assert/join/icon3.png")}
                />
                <div className="txt1">OPERATION</div>
                <div className="txt2">经营</div>
                <div className="txt3">
                  具有一定的经营管理能力，能够全身心投入经营管理，认同卜鲁卜鲁亲子游泳（Blue
                  Blue Baby Swimming）的经营理念与管理规范，接受总部的
                </div>
                <div className="txt4">管理和指导。</div>
              </div>
              <div className="card">
                <img
                  className="icon-1"
                  src={require("../assert/join/icon4.png")}
                />
                <div className="txt1">FUNDS</div>
                <div className="txt2">资金</div>
                <div className="txt4">具备一定的资金实力和良好的信用。</div>
              </div>
            </div>
          </div>

          <h2 style={{ marginTop: "80px" }}>加盟流程</h2>
          <div className="divider" />
          <h3>JOINING PROCESS</h3>
          <div className="process">
            <div className="card">
              <img className="icon" src={require("../assert/join/icon5.png")} />
              <div className="txt">
                <div>STEP 01</div>
                <div>加盟申请阶段</div>
                <div className="en">Join application</div>
              </div>
              <div
                className="btn-right"
                // onClick={() => {
                //   this.setState({ visible1: true });
                // }}
              />
              {/* <img
                className="bg"
                src={require("../assert/join/card-bg2.png")}
              /> */}
            </div>

            <div className="step-modal">
              <div className="bottom">
                <li>01</li>
                <span>初步沟通，了解品牌情况</span>
                <div className="arrow" />
                <li>02</li>
                <span>填写加盟意向申请表</span>
                <div className="arrow" />
                <li>03</li>
                <span>双方意向确认</span>
                <div className="arrow" />
                <li>04</li>
                <span>签署加盟合同</span>
              </div>
            </div>
          </div>
          <div className="process">
            <div className="card">
              <img className="icon" src={require("../assert/join/icon6.png")} />
              <div className="txt">
                <div>STEP 02</div>
                <div>开业筹备阶段</div>
                <div className="en">Opening preparation</div>
              </div>
              <div
                className="btn-right"
                // onClick={() => {
                //   this.setState({ visible2: true });
                // }}
              />
              {/* <img
                className="bg"
                src={require("../assert/join/card-bg2.png")}
              /> */}
            </div>
            <div className="step-modal">
              <div className="bottom mb">
                <li>01</li>
                <span>市场调研及分析</span>
                <div className="arrow" />
                <li>02</li>
                <span>选址及定址</span>
                <div className="arrow" />
                <li>03</li>
                <span>装修及施工</span>
                <div className="arrow" />
                <li>04</li>
                <span>开业前期各项筹备</span>
              </div>
              <div className="bottom">
                <li>05</li>
                <span>人员集中培训</span>
                <div className="arrow" />
                <li>06</li>
                <span>到店巡视指导</span>
              </div>
            </div>
          </div>
          <div className="process">
            <div className="card">
              <img className="icon" src={require("../assert/join/icon7.png")} />
              <div className="txt">
                <div>STEP 03</div>
                <div>日常运营阶段</div>
                <div className="en">Daily operation</div>
              </div>
              <div
                className="btn-right"
                // onClick={() => {
                //   this.setState({ visible3: true });
                // }}
              />
              {/* <img
                className="bg"
                src={require("../assert/join/card-bg2.png")}
              /> */}
            </div>
            <div className="step-modal">
              <div className="bottom mb">
                <li>01</li>
                <span>市场推广活动</span>
                <div className="arrow" />
                <li>02</li>
                <span>管理运营指导</span>
                <div className="arrow" />
                <li>03</li>
                <span>工作流程支持</span>
                <div className="arrow" />
                <li>04</li>
                <span>系统升级维护</span>
              </div>
              <div className="bottom">
                <li>05</li>
                <span>定期培训指导</span>
                <div className="arrow" />
                <li>06</li>
                <span>教案教具更新</span>
                <div className="arrow" />
                <li>07</li>
                <span>品牌宣传支持</span>
              </div>
            </div>
          </div>

          <Modal
            visible={this.state.visible1}
            showMask={true}
            onCancel={() => {
              this.onCancel("visible1");
            }}
          >
            <div className="step-modal">
              <div
                className="btn-close"
                onClick={() => {
                  this.onCancel("visible1");
                }}
              />
              <div className="top">
                <img
                  className="icon"
                  src={require("../assert/join/icon5.png")}
                />
                <div className="mt">
                  <div className="txt">加盟申请阶段</div>
                  <div className="txt">Join application</div>
                </div>
              </div>
              <div className="bottom mb">
                <li>01</li>
                <span>初步沟通，了解品牌情况</span>
                <div className="arrow" />
                <li>02</li>
                <span>填写加盟意向申请表</span>
                <div className="arrow" />
                <li>03</li>
                <span>双方意向确认</span>
                <div className="arrow" />
                <li>04</li>
                <span>签署加盟合同</span>
              </div>
            </div>
          </Modal>

          <Modal
            visible={this.state.visible2}
            showMask={true}
            onCancel={() => {
              this.onCancel("visible2");
            }}
          >
            <div className="step-modal">
              <div
                className="btn-close"
                onClick={() => {
                  this.onCancel("visible2");
                }}
              />
              <div className="top">
                <img
                  className="icon"
                  src={require("../assert/join/icon6.png")}
                />
                <div className="mt">
                  <div className="txt">开业筹备阶段</div>
                  <div className="txt">Opening preparation</div>
                </div>
              </div>
              <div className="bottom mb">
                <li>01</li>
                <span>市场调研及分析</span>
                <div className="arrow" />
                <li>02</li>
                <span>选址及定址</span>
                <div className="arrow" />
                <li>03</li>
                <span>装修及施工</span>
                <div className="arrow" />
                <li>04</li>
                <span>开业前期各项筹备</span>
              </div>
              <div className="bottom">
                <li>05</li>
                <span>人员集中培训</span>
                <div className="arrow" />
                <li>06</li>
                <span>到店巡视指导</span>
              </div>
            </div>
          </Modal>

          <Modal
            visible={this.state.visible3}
            showMask={true}
            onCancel={() => {
              this.onCancel("visible3");
            }}
          >
            <div className="step-modal">
              <div
                className="btn-close"
                onClick={() => {
                  this.onCancel("visible3");
                }}
              />
              <div className="top">
                <img
                  className="icon"
                  src={require("../assert/join/icon7.png")}
                />
                <div className="mt">
                  <div className="txt">日常运行阶段</div>
                  <div className="txt">Daily operation</div>
                </div>
              </div>
              <div className="bottom mb">
                <li>01</li>
                <span>市场推广活动</span>
                <div className="arrow" />
                <li>02</li>
                <span>管理运营指导</span>
                <div className="arrow" />
                <li>03</li>
                <span>工作流程支持</span>
                <div className="arrow" />
                <li>04</li>
                <span>系统升级维护</span>
              </div>
              <div className="bottom">
                <li>05</li>
                <span>定期培训指导</span>
                <div className="arrow" />
                <li>06</li>
                <span>教案教具更新</span>
                <div className="arrow" />
                <li>07</li>
                <span>品牌宣传支持</span>
              </div>
            </div>
          </Modal>

          <h2 style={{ marginTop: "80px" }}>全方位支持体系</h2>
          <div className="divider" />
          <h3>FULL SUPPORT</h3>
          <div className="support">
            <div className="card">
              <img className="icon" src={require("../assert/join/icon8.png")} />
              <div className="txt-wrap">
                <div className="txt1">前期筹备支持</div>
                <span className="txt2">
                  市场调研及评估 | 选址指导及建议 | 提供装修风格、装修方案及团队
                  | 泳池设备安装
                </span>
              </div>
            </div>
          </div>

          <div className="support-r">
            <div className="card">
              <img className="icon" src={require("../assert/join/icon9.png")} />
              <div className="txt-wrap">
                <div className="txt1">阶梯式专业培训支持</div>
                <span className="txt2">
                  岗位专项集中培训 | 教练专业培训 | 区域培训师巡店指导 |
                  外教到店授课指导
                </span>
              </div>
            </div>
          </div>

          <div className="support">
            <div className="card">
              <img
                className="icon icon-a"
                src={require("../assert/join/icon10.png")}
              />
              <div className="txt-wrap">
                <div className="txt1">信息管理系统支持</div>
                <span className="txt2">
                  自助约课系统的安装及使用 | 信息管理系统的运用指导 |
                  各岗位端口的使用培训 |
                </span>
                <span className="txt2">约课系统升级维护</span>
              </div>
            </div>
          </div>

          <div className="support-r">
            <div className="card">
              <img
                className="icon icon-a"
                src={require("../assert/join/icon11.png")}
              />
              <div className="txt-wrap">
                <div className="txt1">运营管理支持</div>
                <span className="txt2">
                  门店管理制度 | 岗位绩效管理制度 | 泳池水质管理手册 |
                  市场推广规划 | 大型营销策划 |
                </span>
                <span className="txt2">
                  {" "}
                  月度福利活动 |大型营销策划 | 会员福利活动
                </span>
              </div>
            </div>
          </div>

          <div className="support">
            <div className="card">
              <img
                className="icon"
                src={require("../assert/join/icon12.png")}
              />
              <div className="txt-wrap">
                <div className="txt1">教学指导支持</div>
                <span className="txt2">
                  课程分阶与课程体系分解指导 | 课程内容支持及多元化更新 |
                  教案创新及教具升级 |
                </span>
                <span className="txt2"> 教学课程评分体系</span>
              </div>
            </div>
          </div>

          <div className="support-r">
            <div className="card">
              <img
                className="icon icon-a"
                src={require("../assert/join/icon13.png")}
              />
              <div className="txt-wrap">
                <div className="txt1">品牌宣传支持</div>
                <span className="txt2">
                  品牌使用授权 | 品牌VI全套设计支持 | 品牌素材库支持 |
                  跨国际品牌联合 | 专家讲座沙龙
                </span>
                <span className="txt2">
                  支持 | 自媒体、官网、知名媒体等互联网宣传
                </span>
              </div>
            </div>
          </div>

          <img className="img6" src={require("../assert/join/i6.jpg")} />

          <h2 style={{ marginTop: "80px" }}>投资回报可观</h2>
          <div className="divider" />
          <h3>FULL SUPPORT</h3>
          <div className="reward">
            <div className="card">
              <div>卜鲁卜鲁亲子游泳( Blue Blue Baby Swimming)属于国际</div>
              <div>专业游泳早教机构行业内的中小型投资，与市场上的同行</div>
              <div>相比，Blue Blue的投资成本相对更低，约节省40%的成本。</div>
            </div>
            <div className="card-2">
              <div>德国进口水处理设备是由原厂直供的，无中间商赚差价，</div>
              <div>成本更低</div>
            </div>
          </div>
          <div className="reward">
            <div className="card-3">
              <div>中小型机构的市场把控度较高，经营管理更加便捷灵活,</div>
              <div>可有效减少经营压力。</div>
            </div>
            <div className="card-4">
              <div>中小型机构经营成本较低，利润率更高，投资回报率高。</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <div className="tab">
              <dd>关于我们 ABOUT US</dd>
              <dd>常见问题 FAQ</dd>
              <dd>加入我们 JOIN US</dd>
            </div>
            <div className="tab2">
              <dd>商务合作 BUSSINESS COOPERATION</dd>
              <dd>官方客服 TEL 400-0220-058</dd>
            </div>
          </div>
          <img
            className="divider"
            src={require("../assert/join/foot-divider.png")}
          />
          <div className="right">
            <div className="top">
              <a
                href="http://wpa.qq.com/msgrd?v=3&uin=1846189021&site=qq&menu=yes"
                target="_blank"
              >
                <div className="qq" />
              </a>
              <div className="wechat">
                <div className="qrcode"></div>
              </div>
              <a href="https://weibo.com" target="_blank">
                <div className="webo" />
              </a>
              <div className="logo" />
            </div>
            <div className="bottom">
              <div>Copyright厦门暖舍教育咨询有限公司版权所有</div>
              <div>All rights reserved浙CP备120289758号-1</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
