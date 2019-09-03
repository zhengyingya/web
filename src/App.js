import React from "react";
import Head from "./components/Head";
import Content from "./components/Content";
import logo from "./logo.svg";
import "./App.css";
import "./slick.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cIndex: 0
    };
  }

  onRef = node => {
    this.slider = node;
  };

  slickGoTo = index => {
    this.slider.slickGoTo(index);
  };

  changeIndex = index => {
    this.setState({
      cIndex: index
    });
  };

  render() {
    return (
      <div className="App">
        <Head index={this.state.cIndex} slickGoTo={this.slickGoTo} />
        <Content
          cIndex={this.state.cIndex}
          changeIndex={this.changeIndex}
          onRef={this.onRef}
        />
      </div>
    );
  }
}

export default App;
