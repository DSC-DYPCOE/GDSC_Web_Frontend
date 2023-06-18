import React from 'react'
import classes from './TeamsPage.module.css'
import { TeamCard } from '../common'

const TeamsPage = () => {
  return (
    <div className={classes.container}>
        <TeamCard />
    </div>
  )
}

export default TeamsPage