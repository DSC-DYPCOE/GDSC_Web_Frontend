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
        <div className={`${classes.contribute}`}>
          <h2>Contribute</h2>
          <ul>
            <Link target="_blank" to="https://github.com/DSC-DYPCOE/GDSC_Web_Frontend/issues/new">File a Bug</Link>
            <Link target="_blank" to="https://github.com/DSC-DYPCOE/GDSC_Web_Frontend">View Source</Link>
          </ul>
        </div>
        <div className={`${classes.programs}`}>
          <h2>Programs</h2>
          <ul>
            <Link target="_blank" to="https://developers.google.com/womentechmakers">Women Techmakers</Link>
            <Link target="_blank" to="https://developers.google.com/community/experts">Google Developer Experts</Link>
            <Link target="_blank" to="https://developers.google.com/community/gdg">Google Developer Groups</Link>
          </ul>
        </div>
        <div className={`${classes.impLinks}`}>
          <h2>Important Links</h2>
          <ul>
            <Link target="_blank" to="https://console.firebase.google.com/">Firebase Console</Link>
            <Link target="_blank" to="https://console.cloud.google.com/">Google Cloud Platform</Link>
            <Link target="_blank" to="https://console.actions.google.com/">Action on Google</Link>
          </ul>
        </div>
      </div>
      <div className={classes.connect}>
        <h2>Connect</h2>
        <ul>
          <Link target="_blank" to="https://github.com/DSC-DYPCOE"><GithubIcon height={30} width={30} color={"#fff"} /></Link>
          <Link target="_blank" to="https://www.linkedin.com/company/dsc-dypcoe/"><LinkedIn height={30} width={30} /></Link>
          <Link target="_blank" to="https://www.instagram.com/dsc_dypcoe/"><Insta height={30} width={30} /></Link>
          <Link target="_blank" to="https://discord.com/invite/AjHxR5D5rE"><Discord height={30} width={30} /></Link>
        </ul>

      </div>
    </div>
  );
};

export default Footer;
