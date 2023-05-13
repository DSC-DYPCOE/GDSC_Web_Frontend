import React, { useContext } from 'react'
import classes from './ProjectCard2.module.css'
import Button from '../Button/Button'
import image from '../../../assets/projectBg.png'
import { Link } from 'react-router-dom'
import LinkIcon from '../Svgs/Link'
import GithubIcon from '../Svgs/Github'
import { ThemeContext } from '../../../App'

const ProjectCard2 = ({ current }) => {
    const theme = useContext(ThemeContext);
    return (
        <div className={`${classes.main} ${theme.theme === "dark" ? classes.dark : ""}`} style={{ "--accent-color": current.color }}>
            <div className={classes.tags}>
                {current.authors.map((authorName, index) => <div className={classes.tag}><img src={current.tagImg[index]} alt="Logo Img" /> {authorName}</div>)}
            </div>
            <div className={classes.imgDiv}>
                <img src={image} alt="" />
            </div>
            <div>
                <div className={classes.infoDiv}>
                    <div className={classes.info}>
                        <h2>{current.projectName}
                            <Link to={current.link} target='_blank'>
                                <LinkIcon color={current.color} />
                            </Link>
                            <Link to={current.github} target='_blank'>
                                <GithubIcon color={current.color} />
                            </Link>
                        </h2>
                        <h4>{current.tags}</h4>
                        <h5>{current.languages}</h5>
                    </div>
                    <div className={classes.btn}>
                        <Button label='View More' padding='0.5em 1em' borderRadius='1em 0' bgColor={current.color} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard2