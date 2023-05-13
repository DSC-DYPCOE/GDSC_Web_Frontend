import React from 'react'
import Button from '../Button/Button'
import classes from './EventCard.module.css'

const EventCard = () => {
  return (
    <div className={classes.main}>
        <div className={classes.container}>
            <div className={classes.imgDiv}></div>
            <div className={classes.info}>Flutter EVent</div>
        </div>
        <div className={classes.btns}>
            <Button />
            <Button />
        </div>
    </div>
  )
}

export default EventCard