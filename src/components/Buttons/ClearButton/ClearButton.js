import React from "react";
import classes from "./ClearButton.module.scss";

const ClearButton = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ClearButton;
