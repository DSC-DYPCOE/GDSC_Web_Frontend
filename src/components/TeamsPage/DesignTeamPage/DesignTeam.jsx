import React from 'react'
import { TeamCard } from '../../common'
import classes from '../TechTeamPage/TechTeamPage.module.css'
import info from '../TeamsInfo'

const DesignTeam = () => {
  return (
    <>
    <h1>Design Team</h1>
      <div className={`${classes.technicalTeam} ${classes.cardContainers}`}>
        {
          info.teams.design.map((current, idx) => <TeamCard key={idx} current={current} />)
        }
      </div>
    </>
  )
}

export default DesignTeam