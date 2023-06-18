import React from "react";
import classes from "./TeamCard.module.css";
import LinkedIn from "../SVGs/LinkedIn";
import Insta from "../SVGs/Insta";
import GithubIcon from "../SVGs/Github";
import profilePic from '../../../assets/profilePic.png'

const TeamCard = () => {
  const heights = "30px"
  return(
    <div className={classes.main}>
        <div className={classes.imgDiv}>
          <img src={profilePic} alt="Profile" />
        </div>
        <div className={classes.info}>
          <h2>Onkar Waghmode</h2>
          <p>Tech Coordinator</p>
          <div className={classes.icons}>
            <Insta height={heights} width={heights}/>
            <GithubIcon height={heights} width={heights} color={"black"}/>
            <LinkedIn height={heights} width={heights}/>
          </div>
        </div>
    </div>
  );
};

export default TeamCard;
