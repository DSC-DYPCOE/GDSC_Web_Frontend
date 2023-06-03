import React, {useState} from 'react'
import classes from './Overview.module.css'
import Insta from '../../components/common/SVGs/Insta'
import LinkedIn from '../../components/common/SVGs/LinkedIn'
import Github from '../../components/common/SVGs/Github'
import Discord from '../../components/common/SVGs/Discord'

const Overview = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }
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
                    <button className={classes.socialbtn}><Insta /> </button>
                    <button className={classes.socialbtn}><LinkedIn /> </button>
                    <button className={classes.socialbtn}><Github /></button>
                    <button className={classes.socialbtn}><Discord /></button>
                </div>
            </div>
            <div className={classes.rightSection}>
                <div style={{"--bg-color": "#B6EACB"}} className={`${classes.concept} ${classes.box} ${selected===0 ? classes.show: ""}`}>
                    <h2 style={{"--bg-color": "#B6EACB", "--color": "#0BB853"}} onClick={() => toggle(0)} >Concept of GDSC</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
                <div style={{"--bg-color": "#F7D3C5"}} className={`${classes.target} ${classes.box} ${selected===1 ? classes.show: ""}`}>
                    <h2 style={{"--bg-color": "#F7D3C5", "--color": "#E05119"}} onClick={() => toggle(1)} >Target Audience</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
                <div style={{"--bg-color": "#C6DAFC"}} className={`${classes.why} ${classes.box} ${selected===2 ? classes.show: ""}`}>
                    <h2 style={{"--bg-color": "#C6DAFC", "--color": "#4285f4"}} onClick={() => toggle(2)}>Why GDSC ?</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
                <div  style={{"--bg-color": "#F5E9BA"}} className={`${classes.other} ${classes.box} ${selected===3 ? classes.show: ""}`}>
                    <h2 style={{"--bg-color": "#F5E9BA", "--color": "#E4B419"}} onClick={() => toggle(3)}>Other Concept</h2>
                    <p>
                        The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Overview