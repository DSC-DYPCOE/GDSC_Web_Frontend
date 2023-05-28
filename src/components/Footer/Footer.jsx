import React from "react";
import classes from "./Footer.module.css";
import FooterLogo from "../common/SVGs/FooterLogo";
import GithubIcon from "../common/SVGs/Github";
import LinkedIn from "../common/SVGs/LinkedIn";
import Insta from "../common/SVGs/Insta";
import Discord from "../common/SVGs/Discord";
// import {FooterLogo, 
        // GithubIcon,
        // LinkedIn,
        // Insta,
        // Discord,
// } from '../common/SVGs';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <FooterLogo color1={"#fff"} color2={"#ffffffa8"} />
      </div>
      <div className={classes.links}>
        <div className={`${classes.contribute}`} onClick={(div) => { div.classList.add("show") }}>
          <h2>Contribute</h2>
          <ul>
            <Link>File a Bug</Link>
            <Link>View Source</Link>
          </ul>
        </div>
        <div className={`${classes.programs}`}>
          <h2>Programs</h2>
          <ul>
            <Link>Women Techmakers</Link>
            <Link>Google Developer Experts</Link>
            <Link>Google Developer Groups</Link>
          </ul>
        </div>
        <div className={`${classes.impLinks}`}>
          <h2>Important Links</h2>
          <ul>
            <Link>Firebase Console</Link>
            <Link>Google Cloud Platform</Link>
            <Link>Action on Google</Link>
          </ul>
        </div>
      </div>
      <div className={classes.connect}>
        <h2>Connect</h2>
        <ul>
          <Link><GithubIcon height={30} width={30} color={"#fff"} /></Link>
          <Link><LinkedIn height={30} width={30} /></Link>
          <Link><Insta height={30} width={30} /></Link>
          <Link><Discord height={30} width={30} /></Link>
        </ul>

      </div>
    </div>
  );
};

export default Footer;
