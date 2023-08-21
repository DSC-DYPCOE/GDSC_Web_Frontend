import React, { useContext, useState, useEffect } from 'react'
// import ProjectCard from '../common/ProjectCard/ProjectCard'
import info from './ProjectInfo'
import classes from './ProjectSection.module.css'
import { ThemeContext } from '../../App'
import ProjectCard2 from '../common/ProjectCard2/ProjectCard2'
import { getProjects } from '../../getData/getProjectsData'

const ProjectSection = () => {
    const theme = useContext(ThemeContext);
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        async function getData() {
            const projectData = await getProjects()
            console.log(projectData);
            setProjectData(projectData)
        }
        getData()
    }, [])
    return (
        <>
            <div className={`${classes.mainDiv} ${theme.theme === "dark" ? classes.dark : "" }`}>
            <h1>Our Projects</h1>
            <div className={classes.container}>
                {projectData.map((current) => <ProjectCard2 key={current.projectName} current={current} />)}
            </div>
            </div>
        </>
    )
}

export default ProjectSection;
