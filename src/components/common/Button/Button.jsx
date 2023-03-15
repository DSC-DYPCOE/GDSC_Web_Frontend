import React from "react";
import classes from "./Button.module.css";

const Button = ({
  children,
  onClick,
  label = "Undefined",
  disabled,
  padding = "0.5em 1.5em",
  fontSize = "17px",
  color = "#39bda7",
}) => {
  return (
    <>
      <button
        style={{ padding: padding, fontSize: fontSize, "--hover-color": color }}
        className={classes.button}
        onClick={onClick}
        disabled={disabled}
      >
        {label || children}
      </button>
    </>
  );
};

export default Button;
