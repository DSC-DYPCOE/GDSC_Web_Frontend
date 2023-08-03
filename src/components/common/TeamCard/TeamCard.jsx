import React, { useContext } from "react";
import classes from "./TeamCard.module.css";
import LinkedIn from "../SVGs/LinkedIn";
import Insta from "../SVGs/Insta";
import GithubIcon from "../SVGs/Github";
import profilePic from '../../../assets/profilePic.png'
import ImgBg from "../SVGs/ImgBg";
import { ThemeContext } from "../../../App";

const TeamCard = ({current}) => {
  const heights = "30px"
  const theme = useContext(ThemeContext)
  return(
    <div className={`${classes.main} ${theme.theme === "dark" ? classes.dark : ""}`}>
        <div className={classes.imgDiv}>
          <ImgBg imgColor={`${theme.theme === "dark" ? "#ccc" : "#222"}`} />
          <img src={current.profilePic} style={{"--shadowColor": current.shadow}} alt="Profile" />
        </div>
        <div className={classes.info}>
          <h3>{current.name}</h3>
          <p>{current.position}</p>
          <div className={classes.icons}>
            <Insta height={heights} width={heights} />
            <GithubIcon height={heights} width={heights} color={`${theme.theme === "dark" ? "#fff" : "#222"}`}/>
            <LinkedIn height={heights} width={heights}/>
          </div>
        </div>
    </div>
  );
};

export default TeamCard;
