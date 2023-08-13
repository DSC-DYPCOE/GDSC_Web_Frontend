import React, { useContext, useEffect } from "react";
import classes from "./EventCard.module.css";
import Button from '../../common/Button/Button'
import { ThemeContext } from '../../../App'

import Aos from 'aos';
import 'aos/dist/aos.css';

const EventCard = ({ current }) => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    Aos.init();
  }, []);

  const redirect = (link) => {
    window.open(link, "_blank")
  }

  return (
    <div className={`${classes.main} ${theme.theme === "dark" ? classes.dark : ""}`} style={{ "--color": current.color, }}  data-aos="fade-left" data-aos-duration="1000">
      <div className={classes.container}>
        <div className={classes.imgDiv}><img alt="" src={current.img} /></div>
        <div className={classes.info}>
          <h2>{current.name}</h2>
          <p>{current.date}</p>
        </div>
      </div>
      <div className={classes.btns}>
        <Button label="Register" cursorValue={`${current.register ? "pointer" : "not-allowed"}`} bgColor={current.register ? current.color : "#252525"} onClick={current.register ? () => redirect(current.register) : null}/>
        <Button label="View More" bgColor={current.color} onClick={() => redirect(current.more)}/>
      </div>
    </div>
  )
};

export default EventCard;
