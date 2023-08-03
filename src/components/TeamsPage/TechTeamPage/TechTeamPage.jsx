import React from 'react'
import TeamCard from '../../common/TeamCard/TeamCard'
import info from '../TeamsInfo'
import classes from './TechTeamPage.module.css'

const TechTeamPage = () => {
    return (
        <>
            <h1>Technical Team</h1>
            <div className={`${classes.technicalTeam} ${classes.cardContainers}`}>
                {
                    info.teams.technical.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>
        </>
    )
}

export default TechTeamPage