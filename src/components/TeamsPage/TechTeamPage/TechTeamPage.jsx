import React from 'react'
import TeamCard from '../../common/TeamCard/TeamCard'
import info from '../TeamsInfo'
import classes from './TechTeamPage.module.css'

const TechTeamPage = ({data}) => {
    // const teamData = await getTeamsData("technical")
    // console.log(teamData);
    // console.log("data", data);
    return (
        <>
            <h1>Technical Team</h1>
            <div className={`${classes.technicalTeam} ${classes.cardContainers}`}>
                {
                    data.map((current, idx) => <TeamCard key={idx} current={current} />)
                    // info.teams.technical.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>
        </>
    )
}

export default TechTeamPage