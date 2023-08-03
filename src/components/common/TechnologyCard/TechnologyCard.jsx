import React, { useContext } from 'react'
import classes from './TechnologyCard.module.css'
import Button from "../../common/Button/Button"
import { ThemeContext } from "../../../App"
import { Link } from 'react-router-dom'


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

    return (
        <div className={classes.main} style={{ flexDirection: `${current.reverse ? "row-reverse" : ""}`, "--bg-color": divBgColor }}>
            <div className={classes.imgDiv}>
                <img src={current.img} alt='Web' />
            </div>
            <div className={classes.info}>
                <h1><span style={{ "--color": current.color }}>{current.span}</span> {current.heading}</h1>
                <p>Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.</p>
                <Button label={name} borderRadius='10px' bgColor={current.color} />
            </div>
        </div>
    )
}

export default TechnologyCard