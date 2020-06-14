import React from "react";
import "./custom-btn.style.scss";
import classnames from "classnames";

const CustomBtn = ({ children, ...otherProps }) => {
  return (
    <button className={classnames("custom-button")} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomBtn;
