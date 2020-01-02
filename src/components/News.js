import React from "react";
import Footer from "./Footer";
import { Format } from "../utils";
import "./News.scss";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      newsList: [],
      detail: {}
    };
  }

  componentDidMount() {
    fetch("http://47.92.194.221:8089/api/NewsAPI/", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({
          newsList: res
        });
      });
  }

  jump = id => {
    fetch(`http://47.92.194.221:8089/api/NewsAPI/${id}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({
          detail: res,
          showList: false
        });
      });
  };

  render() {
    const { showList, detail } = this.state;
    return (
      <div className="page-news">
        <div className="list">
          {showList &&
            this.state.newsList.map(item => (
              <div
                className="card"
                onClick={() => this.jump(item.id)}
                key={item.id}
              >
                <div>
                  <div className="day">
                    {Format(new Date(item.createDate), "dd")}
                  </div>
                  <div className="year">
                    {Format(new Date(item.createDate), "yyyy-MM")}
                  </div>
                </div>
                <div className="right">
                  <h3 className="title">{item.title}</h3>
                  <span>{item.subContent}...</span>
                  <span
                    style={{
                      color: "#3fb0fe",
                      cursor: "pointer",
                      marginLeft: "5px"
                    }}
                  >
                    查看详情
                  </span>
                </div>
              </div>
            ))}
          {!showList && (
            <div className="news-detail">
              <div
                className="btn"
                onClick={() => this.setState({ showList: true })}
              >
                <img src={require("../assert/course/pre.png")}></img>
                <span>返回</span>
              </div>
              <div className="news-head">
                <h2>{detail.title}</h2>
                <p className="date">
                  发布时间：{Format(new Date(detail.createDate), "yyyy-MM-dd")}
                </p>
              </div>
              <div
                className="cnt"
                dangerouslySetInnerHTML={{ __html: detail.content }}
              ></div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
