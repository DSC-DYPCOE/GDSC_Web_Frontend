import React from "react";
import classes from "./Landing.module.css";
import logo from "../../assets/logo.png"
import { Button } from "../common";
import Cube from "../common/Cube/Cube";

const Landing = () => {
  return (
    <>
      <div className={classes.cubes}>
        <Cube id="paint0_linear_11_7" startColor="#4285F4" stopColor="#0F9D58" />
        <Cube id="paint0_linear_11_76" startColor="#F4B400" stopColor="#DB4437" />
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.mainLockup}>
          <img src={logo} alt="Main Logo" />
          <h1>Google Developer Student Club</h1>
          <h3>D. Y. Patil College of Engineering</h3>
          <Button label="Join Community" padding="0.75em 1.2em" margin="10px 0px"/>
        </div>
      </div>
    </>
  );
};

export default Landing;
