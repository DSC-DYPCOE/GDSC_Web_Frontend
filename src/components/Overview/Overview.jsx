import React from 'react'
import classes from './Overview.module.css'

const Overview = () => {
    return (
        <div className={classes.container}>
            <div className={classes.leftSection}>
                <h1>What is GDSC ? 🤔</h1>
                <p>
                    Google Developer Student Clubs is a Developers program for university students to learn mobile and web development skills, design thinking skills and leadership skills.
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula arcu ut dictum condimentum. Phasellus pulvinar at quam eu suscipit. Aliquam id vehicula lacus, vel commodo ligula.
                    </span>
                </p>
                <div className={classes.socialBtns}>
                    <button className={classes.socialbtn}><span className='material-symbols-outlined'>Home</span></button>
                    <button className={classes.socialbtn}><span className='material-symbols-outlined'>Home</span></button>
                    <button className={classes.socialbtn}><span className='material-symbols-outlined'>Home</span></button>
                </div>
            </div>
            <div className={classes.rightSection}>
                <div className={`${classes.concept} ${classes.box}`}>
                    <h2 style={{"--bg-color": "rgba(11, 184, 83, 0.3)", "--color": "#0BB853"}}>Concept of GDSC</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
                <div className={`${classes.target} ${classes.box}`}>
                    <h2 style={{"--bg-color": "rgba(224, 81, 25, 0.251)", "--color": "#E05119"}}>Target Audience</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
                <div className={`${classes.why} ${classes.box}`}>
                    <h2 style={{"--bg-color": "rgba(66, 133, 244, 0.3)", "--color": "#4285f4"}}>Why GDSC ?</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
                <div className={`${classes.other} ${classes.box}`}>
                    <h2 style={{"--bg-color": "rgba(228, 180, 25, 0.3)", "--color": "#E4B419"}}>Other Concept</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Overview