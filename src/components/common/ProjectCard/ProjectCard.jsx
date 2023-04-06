import React, { useContext } from "react";
import classes from "./ProjectCard.module.css";
import image from "../../../assets/projectImg.png"
import { ThemeContext } from "../../../App"
import Button from "../Button/Button";


const ProjectCard = ({ current }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${classes.container} ${theme.theme === "light" ? classes.light : classes.dark}`}>
      <div className={classes.front}>
        <div className={classes.imgDiv}>
          <img src={image} alt="img" />
        </div>
        <div className={classes.details}>
          <h1>{current.projectName}</h1>
          <h3>{current.domain}</h3>
          <div className={classes.nameDiv}>
            <h2><span className="material-symbols-outlined">account_circle</span>{current.author}</h2>
            <Button label="View" />
          </div>
        </div>
      </div>
      <div className={classes.back}>
        <div className={classes.para}>
          <h1>About The Project</h1>
          <p>{current.summary}</p>
          <div className={classes.tags}>
            {current.tags.map((tag) => <li>{tag}</li>)}
          </div>
        </div>
        <div className={classes.btns}>
          <button className={classes.brandBtn}><a href={current.linkedin} target="blank"><i className="fa-brands fa-linkedin"></i></a></button>
          <button className={classes.brandBtn}><a href={current.github} target="blank"><i className="fa-brands fa-github"></i></a></button>
          <Button label="View" style={{}} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
