import React, { useContext, useEffect } from 'react'
import classes from './TechnologyCard.module.css'
import Button from "../../common/Button/Button"
import { ThemeContext } from "../../../App"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TechnologyCard = ({ current }) => {
    const theme = useContext(ThemeContext)
    const name = <Link to={current.link} 
                    target='_blank' 
                    style={{textDecoration: "none", color: "#fff" }}>
                    <p style={{display: "flex", alignItems: "center", gap: "10px"}}>
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
            <div className={classes.imgDiv}>
                <motion.img src={current.img} alt={current.heading} 
                //     initial={{
                //     x: `${current.reverse ? "-100vw": "100vw"}`
                // }}
                // animate={{
                //     x: 0
                // }}
                // transition={{
                //     delay: 5,
                //     duration: 2,
                //     type: 'spring',
                //     stiffness: 300
                // }}
                />
            </div>
            <div className={classes.info}>
                <h1><span style={{ "--color": current.color }}>{current.span}</span> {current.heading}</h1>
                <p>Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.</p>
                {current.link && <Button label={name} margin='20px 0' borderRadius='10px' bgColor={current.color} />}
            </div>
        </div>
    )
}

export default TechnologyCard