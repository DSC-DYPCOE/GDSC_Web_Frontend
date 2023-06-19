import React, { useContext, useState } from 'react'
import classes from './TeamsPage.module.css'
import { TeamCard } from '../common'
import info from './TeamsInfo'
import TechIcon from '../common/SVGs/TechIcon'
import DesignIcon from '../common/SVGs/DesignIcon'
import ManagementIcon from '../common/SVGs/ManagementIcon'
import PRIcon from '../common/SVGs/PRIcon'
import TechTeamPage from './TechTeamPage/TechTeamPage'
import DesignTeam from './DesignTeamPage/DesignTeam'
import ManagementTeam from './ManagementTeam/ManagementTeam'
import PRTeam from './PRTeam/PRTeam'

import { ThemeContext } from '../../App'

const TeamsPage = () => {
  const theme = useContext(ThemeContext)
  const [teamName, setTeamName] = useState("Technical")

  return (
    <div className={`${classes.container} ${theme.theme === "dark" ? classes.dark : ""}`}>
      <h1>Our Team</h1>
      <div className={`${classes.leads} ${classes.cardContainers}`}>
        {info.lead.map((current, idx) => <TeamCard key={idx} current={current} />)}
      </div>
      <div className={classes.icons}>
        <TechIcon onClick={() => { setTeamName("Technical") }} />
        <DesignIcon onClick={() => { setTeamName("Design") }} />
        <ManagementIcon onClick={() => { setTeamName("Management") }} />
        <PRIcon onClick={() => { setTeamName("PR") }} />

      </div>
      {
        teamName === "Technical" ? <TechTeamPage /> : 
        teamName==="Design" ? <DesignTeam /> : 
        teamName === "Management" ? <ManagementTeam /> :
        teamName === "PR" ? <PRTeam /> : null
      }
    </div>
  )
}

export default TeamsPage