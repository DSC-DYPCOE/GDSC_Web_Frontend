import React from "react";
import classes from "./EventCard.module.css";
import Button from '../../common/Button/Button'

const EventCard = ({current}) => {
  return (
    <div className={classes.main} style={{"--color": current.color,}}>
      <div className={classes.container}>
        <div className={classes.imgDiv}><img src={current.img}/></div>
        <div className={classes.info}>
          <h2>{current.eventName}</h2>
          <p>{current.date}</p>  
        </div>
      </div>
      <div className={classes.btns}>
        <Button label="Register" bgColor={current.color}/>
        <Button label="View More" bgColor={current.color}/>
      </div>
    </div>
  )
};

export default EventCard;
