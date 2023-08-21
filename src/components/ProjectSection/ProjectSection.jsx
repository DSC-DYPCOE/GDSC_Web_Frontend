import React, { useContext, useEffect } from 'react'
// import ProjectCard from '../common/ProjectCard/ProjectCard'
import info from './ProjectInfo'
import classes from './ProjectSection.module.css'
import { ThemeContext } from '../../App'
import ProjectCard2 from '../common/ProjectCard2/ProjectCard2'
import left from '../../assets/leftside.png'
import right from '../../assets/rightside.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectSection = () => {
    useEffect(() => {
        AOS.init({duration: 500});
      },[]);
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={`${classes.mainDiv} ${theme.theme === "dark" ? classes.dark : "" }`}>
            <div className={classes.d}>
                <img src={left} className={classes.lclass} alt='' data-aos="fade-left"/>
                <p className={classes.head} alt="" data-aos="fade-in" data-aos-delay="300">Our Projects</p>
                <img src={right} className={classes.rclass} alt='' data-aos="fade-right"/>
            </div>
            <div className={classes.container}>
                {info.map((current) => <ProjectCard2 current={current}/>)}
            </div>
            </div>
        </>
    )
}

export default ProjectSection;
