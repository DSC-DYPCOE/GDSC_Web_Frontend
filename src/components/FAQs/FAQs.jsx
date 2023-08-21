import React from 'react'
import classes from './FAQs.module.css'
import FAQ from '../common/FAQ/FAQ'
import questions from "./Questions"
import { ThemeContext } from '../../App'
// import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { Button } from '../common'

const FAQs = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className={`${classes.container} ${theme.theme==="dark"? classes.dark : ""}`} >
            <h1>Frequently Asked Questions</h1>
            <div className={classes.questions}>
                {questions.map((current, idx) => <FAQ key={idx} image={current.topImage} question={current.question} answer={current.answer} borderColor={current.border} margin={current.margin}/>)}
            </div>
            <Button label='Send Us a Email' onClick={() => {window.open("mailto:dsc.dypcoe@gmail.com", "_blank")}}/>
            {/* <a href='mailto:onkarwaghmode58@gmail.com'>Send</a> */}
        </div>
    )
}

export default FAQs