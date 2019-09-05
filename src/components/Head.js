import React from "react";
import "./Head.scss";
class Head extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { index, slickGoTo } = this.props;
    return (
      <div className="head">
        <div className="left">
          <div className="logo" />
          <div className="menu">
            <div className="item">
              <div
                className={index === 2 && "active"}
                onClick={() => slickGoTo(2)}
              >
                关于Blue
              </div>
            </div>
            <div className="item">
              <div
                className={index === 3 && "active"}
                onClick={() => slickGoTo(3)}
              >
                品牌优势
              </div>
            </div>
            <div className="item">
              <div
                className={index === 4 && "active"}
                onClick={() => slickGoTo(4)}
              >
                课程设置
              </div>
            </div>
            <div className="item">
              <div
                className={index === 5 && "active"}
                onClick={() => slickGoTo(5)}
              >
                Blue集成化管理系统
              </div>
            </div>
            <div className="item">
              <div
                className={index === 6 && "active"}
                onClick={() => slickGoTo(6)}
              >
                加盟Blue
              </div>
            </div>
          </div>
        </div>
        <div className={`right ${index === 2 && "right-ac "}`} />
      </div>
    );
  }
}

export default Head;