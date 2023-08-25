import React, { useContext, useEffect, useState } from "react";
import classes from "./Landing.module.css";
import logo from "../../assets/logo.png"
import { Button } from "../common";
import Cube from "../common/Cube/Cube";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import bg from '../../assets/bgImg.svg'
import LandingBG from "../common/LandingBackground/LandingBG";
import backsvg from '../../assets/homepage.svg'
import HomepageBG from "../common/SVGs/HomepageBG";
import Homepage2BG from "../common/SVGs/Homepage2BG";
const Landing = () => {
  const theme = useContext(ThemeContext)
  const [x1, setX1] = useState("")
  const [y1, setY1] = useState("")
  const [intervalId, setIntervalId] = useState(null);
  const [mobileView, setMobileView] = useState(false)
  // const [scrollThreshold, setScrollThreshold] = useState(0);

  const generateRandomNumber = (min1, min2, max1, max2) => {
    const x = Math.floor(Math.random() * (max1 - min1 + 1) + min1) + "px";
    const y = Math.floor(Math.random() * (max2 - min2 + 1) + min2) + "px";
    setX1(x);
    setY1(y);
  }



  useEffect(() => {

    if (window.screen.width <= 768){
      setMobileView(true)
    }

    if (!intervalId && window.scrollY < 500) {
        // setInterval(() => {
        // Generate a random number.
        // generateRandomNumber(0, 0, 1350, 500);
      // }, 500)
    }

    // Clear the interval when the user scrolls beyond the scroll threshold.
    window.addEventListener('scroll', () => {
      console.log("scrolling");
      if (window.scrollY >= 500) {
        console.log("clearing interval");
        clearInterval(intervalId);
        setIntervalId(null);
      }
    });

    // Return a cleanup function to clear the interval when the component unmounts.
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className={classes.cubes}>
        {/* <img src={backsvg} /> */}
        {!mobileView && <Homepage2BG />}
        {/* <Cube id="paint0_linear_11_7" top={x1} left={y1} startColor="#4285F4" stopColor="#0F9D58" /> */}
        {/* <Cube id="paint0_linear_11_7" top={x1} left={y1} startColor="#4285F4" stopColor="#0F9D58" /> */}
        {/* <Cube id="paint0_linear_11_7" top={x1} left={y1} startColor="#4285F4" stopColor="#0F9D58" /> */}
      </div>
      <div className={`${classes.mainContainer} ${theme.theme === "dark" ? classes.dark : ""}`}>
        <div className={classes.mainLockup}>
          <img src={logo} alt="Main Logo" />
          <h1>Google Developer Student Club</h1>
          <h3>D. Y. Patil College of Engineering</h3>
          <Button label={<Link to="https://gdsc.community.dev/dy-patil-college-of-engineering-pune/" target="_blank" style={{ textDecoration: "none", color: "#fff" }}>Join Community</Link>} padding="0.75em 1.2em" margin="10px 0px" />
        </div>
      </div>
    </>
  );
};

export default Landing;
