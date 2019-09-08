import React from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

export default class Modal extends React.PureComponent {
  handleClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  render() {
    const {
      children,
      visible,
      onCancel,
      className,
      showMask,
      height
    } = this.props;
    return (
      visible &&
      createPortal(
        <div className={`wrapper ${className}`} onClick={onCancel}>
          {showMask && <div className="overlayer" onClick={onCancel} />}
          <div
            className="container"
            style={{ top: height && "50%", marginTop: height && -height / 2 }}
            onClick={this.handleClick}
          >
            {children}
          </div>
        </div>,
        document.getElementById("root")
      )
    );
  }
}

Modal.defaultProps = {
  showMask: false
};
