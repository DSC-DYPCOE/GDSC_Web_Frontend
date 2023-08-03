import React, { useContext } from 'react'
import classes from './FAQ.module.css'
import { ThemeContext } from '../../../App'

const FAQ = ({ question, answer, borderColor, margin, image }) => {
    const theme = useContext(ThemeContext)
    return (
        <div className={`${classes.main} ${theme.theme === "dark" ? classes.dark : ""}`} style={{ "--borderColor": borderColor, "--margin-top": margin }}>
            {/* <img src={image} /> */}
            <h2>{question}</h2>
            <p>{answer}</p>
        </div>
    )
}

export default FAQ