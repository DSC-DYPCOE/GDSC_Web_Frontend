import React,{useState, useEffect} from 'react'
import classes from './Login.module.css'
import bg from '../../assets/grp277.png'
import logo from '../../assets/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import google from '../../assets/gi.png'
import github from '../../assets/github.svg'
import discord from '../../assets/discord.svg'
import linkedin from '../../assets/linkedin.svg'

const Login = () => {
    let [userdata, setuserdata] = useState({
        name: "",
        email: ""
      })

      useEffect(() => {
        AOS.init({duration: 800});
      },[]);

      const submitform = (e) => {
        e.preventDefault();
        // use this part to connect backend
        // data accessed by userdat.name, userdata.email and userdata.message
        console.log(e);
        setuserdata({name:"",email:"",message:""})
      }

  return (
    <div className={classes.main}>
        <div className={classes.main2}>
        <img src={bg} className={classes.mainbg} alt=""/>
        <div className={classes.left_body}>
            <img className={classes.logo} src={logo} alt=""/>
            <p className={classes.mp}><span className={classes.welcome}>WELCOME</span>  Techie<span className={classes.expp}> !</span></p>
            <p className={classes.please}>Please enter your details!</p>

            <div className={classes.main_conatct} data-aos="flip-left">
            <form name="myContact" className={classes.contactform} onSubmit={submitform}>
                <label className={classes.label}>Name</label>
                <input type='text' className={classes.input} required  value={userdata
            .name} onChange={(e) => setuserdata({ ...userdata, name: e.target.value })}></input>
                <label className={classes.label}>Email Address</label>
                <input type='email' className={classes.input} required  value={userdata
            .email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}></input>
            <p className={classes.forgot}>Forgot Password</p>
            <button className={classes.signin}>Sign In</button>
            <p className={classes.others}>Sign In using : </p>
            <div className={classes.btn}>
            <button className={classes.go_btn}><img className={classes.google_btn} src={google} alt=""/></button>
            <button className={classes.go_btn}><img className={classes.discord_btn} src={discord} alt=""/></button>
            <button className={classes.go_btn}><img className={classes.github_btn} src={github} alt=""/></button>
            <button className={classes.go_btn}><img className={classes.linkedin_btn} src={linkedin} alt=""/></button>
            </div>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login