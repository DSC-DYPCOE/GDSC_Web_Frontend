import React, { useContext } from 'react'
// import ProjectCard from '../common/ProjectCard/ProjectCard'
import info from './ProjectInfo'
import classes from './ProjectSection.module.css'
import { ThemeContext } from '../../App'
import ProjectCard2 from '../common/ProjectCard2/ProjectCard2'

const ProjectSection = () => {
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={`${classes.mainDiv} ${theme.theme === "dark" ? classes.dark : "" }`}>
            <h1>Our Projects</h1>
            <div className={classes.container}>
                {info.map((current) => <ProjectCard2 current={current} />)}
            </div>
            </div>
        </>
    )
}

export default ProjectSection;
