import React from 'react'
import TeamCard from '../../common/TeamCard/TeamCard'
import info from '../TeamsInfo'
import classes from '../TechTeamPage/TechTeamPage.module.css'

const PRTeam = () => {
    return (
        <>
            <h1>Public Relations Team</h1>
            <div className={`${classes.prTeam} ${classes.cardContainers}`}>
                {
                    info.teams.pr.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>
        </>
    )
}

export default PRTeam