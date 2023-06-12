import React from 'react'
import classes from './FAQ.module.css'

const FAQ = ({question, answer, borderColor, margin, image}) => {
    return (
        <div className={classes.main} style={{"--borderColor": borderColor, "--margin-top": margin}}>
            {/* <img src={image} /> */}
            <h2>{question}</h2>
            <p>{answer}</p>
        </div>
    )
}

export default FAQ