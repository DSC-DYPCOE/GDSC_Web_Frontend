import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import lightLogo from "../../assets/nav_logo_light.png";
import darkLogo from "../../assets/nav_logo_dark.png";
import { LightDarkButton } from "../common";
import { ThemeContext } from '../../App'
import info from './nav_info'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const theme = useContext(ThemeContext);
  const [isOpen, setisOpen] = useState(false);

  const collapse = () => {
    if (isOpen) {
      setisOpen(false)
    }
    else {
      setisOpen(true)
    }
  }


  return (
    <>
      <nav className={`${classes.navbar} ${theme.theme === "light" ? classes.light : classes.dark}`}>
        <div className={classes.inner_navbar}>
          <NavLink to="/">
            <div className={classes.brand}>
              <div className={classes.brand_logo}>
                <img src={theme.theme === "light" ? lightLogo : darkLogo} alt="logo" className={classes.logo} />
              </div>
            </div>
          </NavLink>
          <div className={`${classes.menu} ${isOpen ? classes.isOpen : ''}`}>
            <ul
              className={
                active
                  ? `${classes.navbar_items} ${classes.navbar_mitems}`
                  : `${classes.navbar_items}`
              }>

              {info.map((currentValue) =>

                <li
                  key={currentValue.name}
                  className={`${classes.navbar_item} `}
                  onClick={() => {
                    setActive((prevValue) => !prevValue);
                    collapse();
                  }}
                >
                  <NavLink to={currentValue.to} className={({ isActive }) => (isActive ? `${classes.active} ${classes.link_text}` : `${classes.link_text}`)}>
                    <span className={`material-symbols-outlined ${classes.icon}`}>
                      {currentValue.iconName}
                    </span>
                    {currentValue.name}
                  </NavLink>
                </li>
              )}
            </ul>
            <LightDarkButton />
          </div>
          <div
            className={classes.hamburger}
            onClick={() => {
              setActive((prevValue) => !prevValue);
              collapse();
            }}
          >
            <svg
              className={
                active
                  ? `${classes.ham} ${classes.hamRotate} ${classes.ham1} ${classes.active}`
                  : `${classes.ham} ${classes.hamRotate} ${classes.ham1}`
              }
              viewBox="0 0 100 100"
              width="80"
            >
              <path
                className={`${classes.line} ${classes.top}`}
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path
                className={`${classes.line} ${classes.middle}`}
                d="m 30,50 h 40"
              />
              <path
                className={`${classes.line} ${classes.bottom}`}
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
