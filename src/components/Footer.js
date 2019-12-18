import React from "react";
import Modal from "./Modal";
import "./Join.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qavisible: false,
      joinvisible: false
    };
  }

  onCancel = key => {
    this.setState({
      [key]: false
    });
  };

  render() {
    const { showList, detail } = this.state;
    return (
      <>
        <div className="footer">
          <div className="left">
            <div className="tab">
              {/* <dd>关于我们 ABOUT US</dd> */}
              <div className="logo" />
            </div>
            <div className="tab2">
              <dd
                onClick={() => this.setState({ joinvisible: true })}
                style={{ cursor: "pointer" }}
              >
                加入我们 JOIN US
              </dd>
              {/* <dd>商务合作 BUSSINESS COOPERATION</dd> */}
              <dd
                onClick={() => this.setState({ qavisible: true })}
                style={{ cursor: "pointer" }}
              >
                常见问题 FAQ
              </dd>
              <dd>官方客服 TEL 400-0220-058</dd>
            </div>
          </div>
          <img
            className="divider"
            src={require("../assert/join/foot-divider.png")}
          />
          <div className="right">
            <div className="top">
              {/* <a
            href="http://wpa.qq.com/msgrd?v=3&uin=1846189021&site=qq&menu=yes"
            target="_blank"
          > */}
              <div className="qq">
                <div className="qq-modal"></div>
              </div>
              {/* </a> */}
              <div className="wechat">
                <div className="qrcode"></div>
              </div>
              {/* <a href="https://weibo.com" target="_blank"> */}
              <div className="webo">
                <div className="douyin-model"></div>
              </div>
              {/* </a> */}
            </div>
            <div className="bottom">
              <div>© 2019-2029 厦门暖舍教育咨询有限公司 版权所有</div>
              <div>ICP证：<a style="color:#fff" href="http://www.beian.miit.gov.cn">浙ICP备13015284号-1</a></div>
            </div>
          </div>
        </div>

        <Modal
          visible={this.state.qavisible}
          showMask={true}
          height={810}
          onCancel={() => {
            this.onCancel("qavisible");
          }}
        >
          <div className="qa-modal">
            <div
              className="btn-close"
              onClick={() => {
                this.onCancel("qavisible");
              }}
            />
            <h3>常见问题</h3>
            <div className="divider" />
            <h4>FAQ</h4>
            <div className="card-wrap">
              <div className="card">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>关于选址</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    在选址方面，我们会委派专人协助您，为您提供选址方向和建议，待您有意向场所后，我们会有专人前去实地与您考察场地，参考讨论，确定最终选址。
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>关于装修、设计、施工</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    我们会提供给您几套装修风格图，您从中选择一套风格。我们提供给您效果图，您可选择找熟识的设计师设计装修图纸，也可以交由我们这边的设计师设计。关于装修施工，你可以选择自己找当地熟悉的装修团队装修，也可以交由我们的装修团队过去装修。
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>关于泳池设备及后期维修</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    为了保证泳池水质的安全与标准，我们采用世界先进的原装进口铜银离子、臭氧、紫外线等消毒、加热、过滤的水处理设备，双重注排水循环，能够保障泳池水质。我们提供泳池设备前期安装、指导与后期维修服务。在泳池设备安装时，由设备团队到场进行安装、指导操作，如果后续设备操作需要指导和维修，可及时联系设备售后客服。
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>关于门店执照</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    办理营业执照、许可证等证件，需要您在当地工商局或市场监管局注册办理的，不同城市的审批流程可能些许不同，具体需要准备的资料您可致电当地工商局等相关机构咨询筹备。
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>关于人员招聘与培训</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    您需要在当地招聘不同岗位的人员，我们可以为您提供岗位任职要求、职责以及招聘建议。我们会对您招聘的员工进行专业岗前培训和技能培训，培训后可直接上岗工作，后期总部将会委派培训师进行巡店指导。具体培训事宜可咨询品牌加盟顾问。
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>关于加盟费用</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    加盟费用在不同的城市有所区别，具体需视您的意向加盟城市而定。关于加盟费用详情，可咨询400-0220-058或联系品牌加盟顾问，我们会安排专人为您解答。
                  </span>
                </div>
              </div>
              <div className="card no-line">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>关于开店成本</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    所选门店规模不同，开店成本预算也有所不同。在同等品质的基础上，与市场同行投资相比，Blue
                    Blue的开店投资成本可节省约40%。您可致电400-0220-058咨询客服，我们会安排品牌加盟顾问为您分析预估成本。
                  </span>
                </div>
              </div>
              <div className="card no-line">
                <div className="mb-15">
                  <span className="txt1">Q </span>
                  <span>目前加盟的门店分布主要在哪些地区</span>
                </div>
                <div className="mb-20">
                  <span className="txt1">A </span>
                  <span>
                    目前温州、重庆、山东、宁波、绍兴、台州、丽水、衢州等地设有22家门店，现有上海、杭州、吉林等多个城市正在陆续开放门店。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          visible={this.state.joinvisible}
          showMask={true}
          height={310}
          onCancel={() => {
            this.onCancel("joinvisible");
          }}
        >
          <div className="join-modal">
            <div
              className="btn-close"
              onClick={() => {
                this.onCancel("joinvisible");
              }}
            />
            <h3>联系我们</h3>
            <div className="divider" />
            <h4>CONTACT US</h4>
            <div className="card-wrap">
              <div className="card">
                <img
                  className="img"
                  src={require("../assert/join/business.png")}
                ></img>
                <div className="panel">
                  <div>商务拓展</div>
                  <div>bdblueblue@163.com</div>
                </div>
              </div>
              <div className="card">
                <img
                  className="img"
                  src={require("../assert/join/recruit.png")}
                ></img>
                <div className="panel">
                  <div>人才招聘</div>
                  <div>hrblueblue@163.com</div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Footer;
