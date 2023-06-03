import React,{useEffect} from "react";
import classes from "./Button.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Button = (
  {
  children,
  onClick,
  label = "Undefined",
  disabled,
  padding = "0.5em 1.5em",
  fontSize = "17px",
  color = "#39bda7",
  margin = "",
  borderRadius = "",
  bgColor= "",
  dataaos="",
}) => {
  useEffect(() => {
    AOS.init({duration: 800});
  },[]);
  return (
    <>
      <button
        style={{ padding: padding, backgroundColor: bgColor, borderRadius:borderRadius, fontSize: fontSize, "--hover-color": color, cursor: "pointer", margin: margin, }}
        className={classes.button}
        onClick={onClick}
        disabled={disabled}
        data-aos={dataaos}
      >
        {label || children}
      </button>
    </>
  );
};

export default Button;
