import React, { useContext, } from 'react'
import classes from './ProjectCard2.module.css'
import Button from '../Button/Button'
import image from '../../../assets/projectBg.png'
import { Link } from 'react-router-dom'
import LinkIcon from '../SVGs/Link'
import GithubIcon from '../SVGs/Github'
import { ThemeContext } from '../../../App'

const ProjectCard2 = ({ current }) => {

    const theme = useContext(ThemeContext);
    console.log(current);

    return (
        <div className={`${classes.main} ${theme.theme === "dark" ? classes.dark : ""}`} style={{ "--accent-color": current.color }}>
            <div className={classes.names}>
                {/* {current.authors.map((authorName, index) => <div key={index} className={classes.tag}><img src={current.tagImg[index]} alt="Logo Img" /> {authorName}</div>)} */}
                <div className={classes.name}><img src={current.authorImg} alt="Logo Img" />{current.author}</div>
            </div>
            <div className={classes.imgDiv}>
                <img src={current.image} alt="" />
            </div>
            <div>
                <div className={classes.infoDiv}>
                    <div className={classes.info}>
                        <h2>{current.projectName}
                            <Link to={current.liveLink} target='_blank'>
                                <LinkIcon color={current.color} />
                            </Link>
                            <Link to={current.githubLink} target='_blank'>
                                <GithubIcon color={current.color} />
                            </Link>
                        </h2>
                        <h4>{current.type}</h4>
                        <div className={classes.tags}>
                            {current.hashtags.map((current) => (<span>#{current} </span>))}
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <Button onClick={() => { window.open(current.githubLink, "_blank") }} label='View More' padding='0.5em 1em' borderRadius='1em 0' bgColor={current.color} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard2