import React,{useContext} from "react";
import "./carddesign.css";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";
import insta from "../../../assets/insta.svg";
import CardLayout from "../../common/SVGs/CardLayout";
import { ThemeContext } from '../../../App';
import CardLayoutMT from "../../common/SVGs/CardLayoutMT";
import CardLayoutDT from "../../common/SVGs/CardLayoutDT";
import CardLayoutPR from "../../common/SVGs/CardLayoutPR";

export default function CardDesign(props) {
  const theme = useContext(ThemeContext);
  return (
    
    <div className={`card ${theme.theme === "light" ? "light" : "dark"}`}>
      {
        (props.color === "red")?<CardLayout/>
          :(props.color === "yel")?<CardLayoutMT/>
        :(props.color === "gre")?<CardLayoutDT/>
        :<CardLayoutPR/>
      }
      <div className="class_int">
      <img className="profile" src={props.img} alt={props.firstname} />
      <h1 className="first">{props.firstname}</h1>
      <h1 className="second">{props.lastname}</h1>
      <p className="parainfo">{props.bio}</p>
      <div className="links">
        <a href={props.linkedin} target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href={props.github} target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href={props.insta} target="_blank">
          <img src={insta} alt="insta" />
        </a>
      </div>
      </div>
      
    </div>
  );
}
