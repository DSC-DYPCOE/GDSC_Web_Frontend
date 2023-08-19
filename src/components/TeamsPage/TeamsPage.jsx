import React, { useContext, useEffect, useState } from 'react'
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
import { getTeamsData } from '../../getData/getTeamsData'
import { ThemeContext } from '../../App'
import bgg from '../../assets/bgg.png'
import bgy from '../../assets/bgy.png'
import Meet from '../../assets/meet.svg'
import meet2 from '../../assets/meetb.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamsPage = () => {
  const theme = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({duration: 500});
  },[]);

  const [teamName, setTeamName] = useState("technical")
  const [dataArray, setDataArray] = useState([])
  const [leads, setLeads] = useState([])
  useEffect(() => {
    async function getData() {
      const data = await getTeamsData(teamName)
      setDataArray(data)
    }
    getData()
  }, [teamName])

  useEffect(() => {
    async function getLead() {
      const leadData = await getTeamsData("lead")
      setLeads(leadData)
    }
    getLead()
  }, [])


  return (
    <div className={`${classes.container} ${theme.theme === "dark" ? classes.dark : ""}`}>
      <img src={bgg} alt='' className={classes.bgg}/>
      <img src={bgy} alt='' className={classes.bgy}/>
      {
        (theme.theme === "dark")?<img src={meet2} alt='' className={classes.head}/>
        :<img src={Meet} alt='' className={classes.head} data-aos="fade-down"/>
      }
      <div className={`${classes.leads} ${classes.cardContainers}`}>
        {leads.map((current, idx) => <TeamCard key={idx} current={current} />)}
      </div>
      
      <div className={classes.icons} >
        <TechIcon onClick={() => { setTeamName("technical") }} selected={teamName === "technical"} />
        <DesignIcon onClick={() => { setTeamName("design") }} selected={teamName === "design"} />
        <ManagementIcon onClick={() => { setTeamName("management") }} selected={teamName === "management"} />
        <PRIcon onClick={() => { setTeamName("pr") }} selected={teamName === "pr"} />

      </div>
      {
        teamName === "technical" ? <TechTeamPage data={dataArray} /> :
          teamName === "design" ? <DesignTeam data={dataArray} /> :
            teamName === "management" ? <ManagementTeam data={dataArray} /> :
              teamName === "pr" ? <PRTeam data={dataArray} /> : null
      }
    </div>
  )
}

export default TeamsPage