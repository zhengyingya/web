import React, { Component } from "react";

export default class LazyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: !!this.M
    };
  }
  componentDidMount() {
    if (!this.M) {
      setTimeout(() => {
        this.M = this.props.load();
        this.setState({ show: true });
      }, this.props.time);
    }
  }
  render() {
    if (!this.state.show) {
      if (this.props.default) {
        return this.props.default;
      } else {
        return <div>will appear later</div>;
      }
    } else {
      const M = this.M;
      return <M {...this.props.realProps} />;
    }
  }
}
