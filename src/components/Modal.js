import React from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

export default class Modal extends React.PureComponent {
  render() {
    const { children, visible, onCancel, className, showMask } = this.props;
    return (
      visible &&
      createPortal(
        <div className={`wrapper ${className}`}>
          {showMask && <div className="overlayer" onClick={onCancel} />}
          <div className="container">{children}</div>
        </div>,
        document.getElementById("root")
      )
    );
  }
}

Modal.defaultProps = {
  showMask: false
};
