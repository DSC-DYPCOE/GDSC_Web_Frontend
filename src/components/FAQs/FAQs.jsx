import React from 'react'
import classes from './FAQs.module.css'
import FAQ from '../common/FAQ/FAQ'
import questions from "./Questions"
import { ThemeContext } from '../../App'
import { useContext } from 'react'

const FAQs = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className={`${classes.container} ${theme.theme==="dark"? classes.dark : ""}`} >
            <h1>Frequently Asked Questions</h1>
            <div className={classes.questions}>
                {questions.map((current) => <FAQ image={current.topImage} question={current.question} answer={current.answer} borderColor={current.border} margin={current.margin}/>)}
            </div>
        </div>
    )
}

export default FAQs