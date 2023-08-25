import React, { useContext, useEffect, useState } from 'react'
import EventCard from '../common/EventCard/EventCard'
import classes from './Events.module.css'
import info from './EventsInfo'
import { ThemeContext } from '../../App'
import { useSpring, animated } from "react-spring"
import { getEventsData } from '../../getData/getEventsData'
import { Button } from '../common'

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const Events = () => {
    const theme = useContext(ThemeContext)
    const [previousEvents, setPreviousEvents] = useState([])
    const [upcomingEvents, setUpcomingEvents] = useState([])
    useEffect(() => {
      async function fetchData() {
        try {
          const preData = await getEventsData("past");
          const upcomingdata = await getEventsData("upcoming");
          setPreviousEvents(preData)
          setUpcomingEvents(upcomingdata)

        } catch (error) {
          console.log("Error fetching data:", error);
        }
      }
      fetchData();
    }, []);

    return (
        <div className={`${classes.mainContainer} ${theme.theme === "dark" ? classes.dark : ""}`}>
            <div className={classes.infoContainer}>
                <h1>EVENTS <span>&</span> WORKSHOPS</h1>
                <div className={classes.numbers}>
                    {/* <h1><Number n={15}/> <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" style={{ "--color": "#EA4335" }}>Events</span></h1> */}
                    {/* <h1><Number n={10}/><span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" style={{ "--color": "#34A853" }}>Workshops</span></h1> */}
                    {/* <h1><Number n={100}/><span data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1500" style={{ "--color": "#FBBC04" }}>Members</span></h1> */}
                    {info["total"].map((current, idx) => (
                        <h1 key={idx}>
                            <Number n={current.number} />
                            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500" style={{ "--color": current.color }}>
                                {current.name}
                            </span>
                        </h1>
                    ))}
                </div>
            </div>
            <div className={classes.eventsContainer}>
                <div className={classes.upComingEventsContainer}>
                    <h1>Upcoming Events</h1>
                    <div className={classes.cards}>
                        {upcomingEvents && upcomingEvents.map((current, idx) => (<EventCard key={idx} current={current} />))}
                        {upcomingEvents.length===0 && <h1 className={classes.noEventInfo}>No upcoming Events Right Now But we will be back shortly</h1>}
                    </div>
                </div>
                <div className={classes.prevEventsContainer}>
                    <h1>Previous Events</h1>
                    <div className={classes.cards}>
                        {previousEvents.map((current, idx) => (<EventCard key={idx} current={current} />))}
                        {/* {info['previous'].map((current, idx) => (<EventCard key={idx} current={current} />))} */}
                    </div>
                </div>
            </div>
            <Button label="See more" color='#DB4437' onClick={() => {window.open("https://gdsc.community.dev/dy-patil-college-of-engineering-pune/", "_blank")}}/>
        </div>
    )
}

export default Events