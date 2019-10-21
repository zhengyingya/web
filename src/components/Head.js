import React from "react";
import classNames from "classnames";
import "./Head.scss";
class Head extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { index, slickGoTo } = this.props;
    return (
      <div
        className={classNames({
          head: true,
          "head-a": index === 6
        })}
      >
        <div className="left">
          <div className="logo" />
          <div className="menu">
            <div className="item">
              <div
                className={index === 2 && "active"}
                onClick={() => slickGoTo(2)}
              >
                关于Blue&nbsp;Blue
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
                动态资讯
              </div>
            </div>
            <div className="item">
              <div
                className={index === 6 && "active"}
                onClick={() => slickGoTo(6)}
              >
                Blue&nbsp;Blue集成化管理系统
              </div>
            </div>
            <div className="item">
              <div
                className={index === 7 && "active"}
                onClick={() => slickGoTo(7)}
              >
                加盟Blue&nbsp;Blue
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
