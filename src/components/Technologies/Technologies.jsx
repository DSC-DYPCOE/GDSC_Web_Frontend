import React, { useContext } from 'react'
import TechnologyCard from '../common/TechnologyCard/TechnologyCard'
import classes from "./Technologies.module.css"
import {ThemeContext} from "../../App"
import info from "./TechnologiesInfo"

const Technologies = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${classes.container} ${theme.theme === "dark" ? classes.dark : ""}`}>
      <h1 className={classes.containerHeading}><span>Technologies</span> We are Intrested about</h1>
      <div className={classes.cardsDiv}>
        {info.map((current, idx) => <TechnologyCard key={idx} current={current} />)}
      </div>
    </div>
  )
}

export default Technologies