import React, { useContext } from "react";
import classes from "./TeamCard.module.css";
import LinkedIn from "../SVGs/LinkedIn";
import Insta from "../SVGs/Insta";
import GithubIcon from "../SVGs/Github";
import ImgBg from "../SVGs/ImgBg";
import { ThemeContext } from "../../../App";

const TeamCard = ({ current }) => {
  const heights = "30px"
  const theme = useContext(ThemeContext)
  // console.log({ ...current.socials }.insta);
  const handleClick = (link) => {
    if (link === "insta") {
      window.open({ ...current.socials }.insta, "_blank")
    }
    if (link === "linkedin") {
      window.open({ ...current.socials }.linkedin, "_blank")
    }
    if (link === "github") {
      window.open({ ...current.socials }.github, "_blank")
    }
  }
  return (
    <div className={`${classes.main} ${theme.theme === "dark" ? classes.dark : ""}`}>
      <div className={classes.imgDiv}>
        <ImgBg imgColor={`${theme.theme === "dark" ? "#ccc" : "#222"}`} />
        <div className={classes.imgContainer}><img src={current.img} style={{ "--shadowColor": current.shadow }} alt="Profile" /></div>
      </div>
      <div className={classes.info}>
        <h3>{current.name}</h3>
        <p>{current.position}</p>
        <div className={classes.icons}>
          <Insta height={heights} width={heights} redirect={() => handleClick("insta")} />
          <GithubIcon height={heights} width={heights} color={`${theme.theme === "dark" ? "#fff" : "#222"}`} redirect={() => handleClick("github")}/>
          <LinkedIn height={heights} width={heights} redirect={() => handleClick("linkedin")}/>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
