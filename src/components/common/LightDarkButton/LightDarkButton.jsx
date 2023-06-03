import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
import classes from "./LightDarkButton.module.css";


const LightDarkButton = () => {
  const theme = useContext(ThemeContext)
  const changeTheme = () => {
    theme.toggleTheme();
  }
  return (
    <>
      <div className={classes.toggleWrapper}>
        <input
           onClick={changeTheme}
          type="checkbox"
          className={`${classes.dn} ${classes.input}`}
          id="dn"
          checked={theme.theme === "dark" ? true : false}
        />
        <label htmlFor="dn" className={classes.toggle}>
          <span className={classes.toggle__handler}>
            <span
              className={`${classes.crater} ${classes["crater--1"]}`}
            ></span>
            <span
              className={`${classes.crater} ${classes["crater--2"]}`}
            ></span>
            <span
              className={`${classes.crater} ${classes["crater--3"]}`}
            ></span>
          </span>
          <span className={`${classes.star} ${classes["star--1"]}`}></span>
          <span className={`${classes.star} ${classes["star--2"]}`}></span>
          <span className={`${classes.star} ${classes["star--3"]}`}></span>
          <span className={`${classes.star} ${classes["star--4"]}`}></span>
          <span className={`${classes.star} ${classes["star--5"]}`}></span>
          <span className={`${classes.star} ${classes["star--6"]}`}></span>
        </label>
      </div>
    </>
  );
};

export default LightDarkButton;
