import React from 'react'
import EventCard from '../common/EventCard/EventCard'
import classes from './Events.module.css'
import info from './EventsInfo'

const Events = () => {
    return (
        <div className={classes.mainContainer}>
            <h1>Previous Events</h1>
            <div className={classes.eventsContainer}>
                {info.map((current) => (<EventCard current={current}/>))}
            </div>
        </div>
    )
}

export default Events