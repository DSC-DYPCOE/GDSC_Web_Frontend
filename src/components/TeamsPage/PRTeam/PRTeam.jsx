import React from 'react'
import TeamCard from '../../common/TeamCard/TeamCard'
import info from '../TeamsInfo'
import classes from '../TechTeamPage/TechTeamPage.module.css'

const PRTeam = ({data}) => {
    return (
        <>
            <h1>Public Relations Team</h1>
            <div className={`${classes.prTeam} ${classes.cardContainers}`}>
                {
                    data.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>
        </>
    )
}

export default PRTeam