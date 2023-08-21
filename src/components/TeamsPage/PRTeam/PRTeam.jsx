import React from 'react'
import TeamCard from '../../common/TeamCard/TeamCard'
// import info from '../TeamsInfo'
import classes from '../TechTeamPage/TechTeamPage.module.css'
import bgr from '../../../assets/redball.png'
import bgg from '../../../assets/bgg.png'
import bgb from '../../../assets/blueball.png'

const PRTeam = ({ data }) => {
    return (
        <>
            <img src={bgr} alt='' className={classes.bgrp} />
            <img src={bgb} alt='' className={classes.bgbp} />
            <img src={bgg} alt='' className={classes.bggp} />
            <h1 className={classes.h1}  data-aos="fade-left">Public Relations Team</h1>
            <div className={`${classes.prTeam} ${classes.cardContainers}`}>
                {
                    data.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>
        </>
    )
}

export default PRTeam