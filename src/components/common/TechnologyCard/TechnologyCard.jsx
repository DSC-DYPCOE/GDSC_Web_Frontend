import React, { useContext, useEffect } from 'react'
import classes from './TechnologyCard.module.css'
import Button from "../../common/Button/Button"
import { ThemeContext } from "../../../App"
import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
import Lottie from "lottie-react"
import android from "../../../assets/android.json"
const TechnologyCard = ({ current }) => {
    const theme = useContext(ThemeContext)
    const name = <Link to={current.link}
        target='_blank'
        style={{ textDecoration: "none", color: "#fff" }}>
        <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            CodeLabs
            <span className="material-symbols-outlined">open_in_new</span>
        </p>
    </Link>


    var divBgColor;
    if (theme.theme === "dark") {
        if (!current.reverse)
            divBgColor = "#222"
        else
            divBgColor = "none"
    }
    else
        divBgColor = current.bgColor

    useEffect(() => {

    }, [])

    return (
        <div className={classes.main} style={{ flexDirection: `${current.reverse ? "row-reverse" : ""}`, "--bg-color": divBgColor }}>
            <div className={classes.imgDiv} >
                <div className={classes.gifContainer}>
                    <Lottie animationData={current.img} />
                </div>
                {/* <img src={current.img} alt={current.heading}/> */}
            </div>
            <div className={classes.info}>
                <h1><span style={{ "--color": current.color }}>{current.span}</span> {current.heading}</h1>
                <p>{current.description}</p>
                {current.link && <Button label={name} margin='20px 0' borderRadius='10px' bgColor={current.color} />}
            </div>
        </div>
    )
}

export default TechnologyCard