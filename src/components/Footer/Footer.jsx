import React, {useState} from "react";
import classes from "./Footer.module.css";
import FooterLogo from "../common/Svgs/FooterLogo";
import GithubIcon from "../common/Svgs/Github";
import LinkedIn from "../common/Svgs/LinkedIn";
import Insta from "../common/Svgs/Insta";
import Discord from "../common/Svgs/Discord";
// import {FooterLogo, 
//         GithubIcon,
//         LinkedIn,
//         Insta,
//         Discord,
// } from '../common/Svgs';
import { Link } from "react-router-dom";

const Footer = () => {
  const [show, setShow] = useState(false)
  const addClass = (target) => {
    // setShow(!show);
    target.classList.toggle("show");
  }
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <FooterLogo color1={"#fff"} color2={"#ffffffa8"} />
      </div>
      <div className={`${classes.contribute} ${show ? "show" : ""}`} onClick={(div) => {div.classList.add("show")}}>
        <h2 style={{"--color": "#4285F5"}}>Contribute</h2>
        <ul>
          <Link>File a Bug</Link>
          <Link>View Source</Link>
        </ul>
      </div>
      <div className={`${classes.links} ${show ? "show" : ""}`} onClick={(div) => {div.classList.add("show")}}>
        <h2 style={{"--color": "#0F9D58"}}>Quick Links</h2>
        <ul>
          <Link>Women Techmakers</Link>
          <Link>Google Developer Experts</Link>
          <Link>Google Developer Groups</Link>
        </ul>
      </div>
      <div className={`${classes.impLinks} ${show ? "show" : ""}`} onClick={addClass}>
        <h2 style={{"--color": "#F4B400"}}>Important Links</h2>
        <ul>
          <Link>Firebase Console</Link>
          <Link>Google Cloud Platform</Link>
          <Link>Action on Google</Link>
        </ul>
      </div>
      <div className={classes.connect} onClick={addClass}>
        <h2>Connect</h2>
        <ul>
          <Link><GithubIcon height={30} width={30} color={"#fff"}/></Link>
          <Link><LinkedIn height={30} width={30}/></Link>
          <Link><Insta height={30} width={30}/></Link>
          <Link><Discord height={30} width={30}/></Link>
        </ul>

      </div>
    </div>
  );
};

export default Footer;
