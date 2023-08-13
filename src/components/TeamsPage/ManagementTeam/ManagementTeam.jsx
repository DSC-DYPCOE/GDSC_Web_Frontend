import React from 'react'
import TeamCard from '../../common/TeamCard/TeamCard'
import info from '../TeamsInfo'
import classes from '../TechTeamPage/TechTeamPage.module.css'

const ManagementTeam = ({data}) => {
    return (
        <>
            <h1>Management Team</h1>
            <div className={`${classes.managementTeam} ${classes.cardContainers}`}>
                {
                    data.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>
        </>
    )
}

export default ManagementTeam