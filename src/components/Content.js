import React, { Fragment } from "react";
import Slider from "react-slick";
// import About from "./About";
// import Advantage from "./Advantage";
// import Course from "./Course";
// import ManageSystem from "./ManageSystem";
// import Join from "./Join";
import LazyComponent from "./LazyComponents";
import "./Content.scss";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cIndex: 3
    };
    this.isScroll = false;
    this.settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      touchMove: false,
      afterChange: index => {
        this.props.changeIndex(index);
        // this.setState({
        //   cIndex: index
        // });
      }
    };
  }

  componentDidMount() {
    if (this.slider) {
      this.props.onRef(this.slider);
    }
    // this.slider.slickGoTo(7);
  }

  handleScroll(e) {
    const { cIndex } = this.props;
    if (!this.isScroll && cIndex < 5) {
      if (e.nativeEvent.deltaY <= -40 && cIndex > 0) {
        this.isScroll = true;
        this.slider.slickPrev();
        // this.setState({
        //   cIndex: cIndex - 1
        // });
        setTimeout(() => {
          this.isScroll = false;
        }, 900);
      } else if (e.nativeEvent.deltaY > 40) {
        // e.preventDefault();
        this.isScroll = true;
        this.slider.slickNext();
        // this.setState({
        //   cIndex: cIndex + 1
        // });
        setTimeout(() => {
          this.isScroll = false;
        }, 900);
      }
    }
  }

  slickPrev = () => {
    this.slider.slickPrev();
    // this.props.changeIndex(this.props.cIndex - 1);
    // this.setState({
    //   cIndex: this.state.cIndex - 1
    // });
  };

  slickNext = () => {
    this.slider.slickNext();
    // this.props.changeIndex(this.props.cIndex + 1);
    // this.setState({
    //   cIndex: this.state.cIndex + 1
    // });
  };

  render() {
    return (
      <div className="container-content" onWheel={e => this.handleScroll(e)}>
        <div className="" />
        <Slider {...this.settings} ref={c => (this.slider = c)}>
          <div className="item home-page-1">
            {""}
            {this.props.cIndex === 0 && (
              <Fragment>
                <div className="left">
                  <img
                    className={`big-title ${this.props.cIndex === 0 &&
                      "anim-fadein"}`}
                    src={require("../assert/home/big-title.png")}
                  />
                  <img
                    className={`small-title ${this.props.cIndex === 0 &&
                      "anim-fadein-delay20"}`}
                    src={require("../assert/home/small-title.png")}
                  />
                  <div
                    className={`txt ${this.props.cIndex === 0 &&
                      "anim-fadein-delay20"}`}
                  >
                    国内首次开放加盟项目
                  </div>
                  <div
                    className={`txt ${this.props.cIndex === 0 &&
                      "anim-fadein-delay20"}`}
                  >
                    十大加盟理由 43项加盟支持
                  </div>
                </div>
                <div className="right">
                  <div className="right-wrap">
                    <img
                      className={`ball ${this.props.cIndex === 0 &&
                        "anim-fadein-delay"}`}
                      src={require("../assert/home/ball.png")}
                    />
                    <img
                      className={`people ${this.props.cIndex === 0 &&
                        "anim-fadein"}`}
                      src={require("../assert/home/people.png")}
                    />
                    <img
                      className={`board ${this.props.cIndex === 0 &&
                        "anim-fadein-delay"}`}
                      src={require("../assert/home/board.png")}
                    />
                  </div>
                  <div />
                </div>
              </Fragment>
            )}
          </div>
          <div className="item">
            {""}
            <LazyComponent
              time={4000}
              default={<div>loading</div>}
              load={() => require("./Qrcode").default}
            />
          </div>
          <div className="item about-page-1">
            {""}
            {/* <About cIndex={this.props.cIndex} /> */}
            <LazyComponent
              time={4000}
              default={<div>loading</div>}
              realProps={{
                cIndex: this.props.cIndex
              }}
              load={() => require("./About").default}
            />
          </div>
          <div className="item">
            {""}
            <LazyComponent
              time={4000}
              default={<div>loading</div>}
              realProps={{
                cIndex: this.props.cIndex
              }}
              load={() => require("./Advantage").default}
            />
          </div>
          <div className="item">
            {""}
            {/* <Course cIndex={this.props.cIndex} /> */}
            <LazyComponent
              time={5000}
              default={<div>loading</div>}
              realProps={{
                cIndex: this.props.cIndex
              }}
              load={() => require("./Course").default}
            />
          </div>
          <div className="item">
            {""}
            <LazyComponent
              time={500}
              default={<div>loading</div>}
              realProps={{
                cIndex: this.props.cIndex,
                slickPrev: this.slickPrev
              }}
              load={() => require("./News").default}
            />
          </div>
          <div className="item about-page-1">
            {""}
            {/* <ManageSystem
              cIndex={this.props.cIndex}
              slickPrev={this.slickPrev}
              slickNext={this.slickNext}
            /> */}
            {/* <LazyComponent
              time={3000}
              render={() => {
                let ManageSystem = require("./ManageSystem").default;
                return (
                  <ManageSystem
                    cIndex={this.props.cIndex}
                    slickPrev={this.slickPrev}
                    slickNext={this.slickNext}
                  />
                );
              }}
            ></LazyComponent> */}

            <LazyComponent
              time={6000}
              default={<div>loading</div>}
              realProps={{
                cIndex: this.props.cIndex,
                slickPrev: this.slickPrev,
                slickNext: this.slickNext
              }}
              load={() => require("./ManageSystem").default}
            />
          </div>
          <div className="item">
            {""}
            {/* <Join cIndex={this.props.cIndex} slickPrev={this.slickPrev} /> */}
            <LazyComponent
              time={6500}
              default={<div>loading</div>}
              realProps={{
                cIndex: this.props.cIndex,
                slickPrev: this.slickPrev
              }}
              load={() => require("./Join").default}
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Content;
