import React, { useContext, useState } from 'react'
import classes from './Overview.module.css'
import Insta from '../../components/common/SVGs/Insta'
import LinkedIn from '../../components/common/SVGs/LinkedIn'
import Github from '../../components/common/SVGs/Github'
import Discord from '../../components/common/SVGs/Discord'
import { ThemeContext } from "../../App"
import Youtube from '../common/SVGs/Youtube'
import Twitter from '../common/SVGs/Twitter'

const Overview = () => {
    const theme = useContext(ThemeContext)
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
      <div className={`${classes.container} ${theme.theme === "dark" ? classes.dark : ""}`}>
            <div className={classes.leftSection}>
                <h1>What is GDSC ? 🤔</h1>
                <p>
                    Google Developer Student Clubs is a student-led program supported by Google. It's a dynamic platform for students to learn, collaborate on web and mobile development, machine learning, and more.
                    <span>
                        GDSC fosters skill-building, networking, and grants access to Google's resources and expertise, making it an invaluable opportunity for tech enthusiasts.
                    </span>
                </p>
                <div className={classes.socialBtns}>
                    <button className={classes.socialbtn} onClick={() => { window.open("https://www.instagram.com/gdsc_dypcoe/", "_blank") }}><Insta /> </button>
                    <button className={classes.socialbtn} onClick={() => { window.open("https://www.linkedin.com/company/dsc-dypcoe/", "_blank") }}><LinkedIn /> </button>
                    <button className={classes.socialbtn} onClick={() => { window.open("https://github.com/DSC-DYPCOE", "_blank") }}><Github color={theme.theme === "dark" ? "#fff" : "#000"} /></button>
                    <button className={classes.socialbtn} onClick={() => { window.open("https://discord.com/invite/AjHxR5D5rE", "_blank") }}><Discord /></button>
                    <button className={classes.socialbtn} onClick={() => { window.open("https://www.youtube.com/channel/UC6xM36BdV14BF76PtpvZJPw", "_blank") }}><Youtube /></button>
                    <button className={classes.socialbtn} onClick={() => { window.open("https://twitter.com/DSC_DYPCOE", "_blank") }}><Twitter /></button>
                </div>
            </div>
            <div className={classes.rightSection}>
                <div style={{ "--bg-color": "#B6EACB" }} className={`${classes.concept} ${classes.box} ${selected === 0 ? classes.show : ""}`}>
                    <h2 style={{ "--bg-color": "#B6EACB", "--color": "#0BB853" }} onClick={() => toggle(0)} >Concept of GDSC</h2>
                    <p>
                        GDSC provides a space for students to explore diverse tech fields, focusing on skill development and networking, ideal for tech enthusiasts and aspiring developers.
                    </p>
                </div>
                <div style={{ "--bg-color": "#F7D3C5" }} className={`${classes.target} ${classes.box} ${selected === 1 ? classes.show : ""}`}>
                    <h2 style={{ "--bg-color": "#F7D3C5", "--color": "#E05119" }} onClick={() => toggle(1)} >Target Audience</h2>
                    <p>
                        GDSC is tailored for tech-savvy university students seeking to improve coding skills, collaborate on projects, and gain real-world tech experience.
                    </p>
                </div>
                <div style={{ "--bg-color": "#C6DAFC" }} className={`${classes.why} ${classes.box} ${selected === 2 ? classes.show : ""}`}>
                    <h2 style={{ "--bg-color": "#C6DAFC", "--color": "#4285f4" }} onClick={() => toggle(2)}>Why GDSC ?</h2>
                    <p>
                        GDSC is a smart choice for students to focus on practical tech skill development through real-world projects and networking for professional growth.
                    </p>
                </div>
                <div style={{ "--bg-color": "#F5E9BA" }} className={`${classes.other} ${classes.box} ${selected === 3 ? classes.show : ""}`}>
                    <h2 style={{ "--bg-color": "#F5E9BA", "--color": "#E4B419" }} onClick={() => toggle(3)}>Other Concept</h2>
                    <p>
                        GDSC fosters community and student leadership, inspiring collaboration on tech events and initiatives. It's a hub for growth, learning, and connections.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Overview