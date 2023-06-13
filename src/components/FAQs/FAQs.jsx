import React from 'react'
import classes from './FAQs.module.css'
import FAQ from '../common/FAQ/FAQ'
import questions from "./Questions"
import { ThemeContext } from '../../App'
// import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { Button } from '../common'
import { useNavigate } from 'react-router'

const FAQs = () => {
    const navigator = useNavigate()
    const clickHandler = () => {
        window.location.href = "https://www.google.com"
    }
    const theme = useContext(ThemeContext)
    return (
        <div className={`${classes.container} ${theme.theme==="dark"? classes.dark : ""}`} >
            <h1>Frequently Asked Questions</h1>
            <div className={classes.questions}>
                {questions.map((current) => <FAQ image={current.topImage} question={current.question} answer={current.answer} borderColor={current.border} margin={current.margin}/>)}
            </div>
            <Button label='Send Us a Email' onClick={clickHandler}/>
        </div>
    )
}

export default FAQs