import React, { useContext, useState, useEffect } from 'react'
// import ProjectCard from '../common/ProjectCard/ProjectCard'
import info from './ProjectInfo'
import classes from './ProjectSection.module.css'
import { ThemeContext } from '../../App'
import ProjectCard2 from '../common/ProjectCard2/ProjectCard2'
import left from '../../assets/leftside.png'
import right from '../../assets/rightside.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {getProjects} from "../../getData/getProjectsData"


const ProjectSection = () => {
    useEffect(() => {
        AOS.init({duration: 500});
      },[]);
    const theme = useContext(ThemeContext);
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        async function getData() {
            const projectData = await getProjects()
            setProjectData(projectData)
        }
        getData()
    }, [])
    return (
        <>
            <div className={`${classes.mainDiv} ${theme.theme === "dark" ? classes.dark : "" }`}>
            <div className={classes.d}>
                <img src={left} className={classes.lclass} alt='' data-aos="fade-left"/>
                <p className={classes.head} alt="" data-aos="fade-in" data-aos-delay="300">Our Projects</p>
                <img src={right} className={classes.rclass} alt='' data-aos="fade-right"/>
            </div>
            <div className={classes.container}>
                {projectData.map((current) => <ProjectCard2 key={current.projectName} current={current} />)}
            </div>
            </div>
        </>
    )
}

export default ProjectSection;
