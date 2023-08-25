import React, { useState, useEffect, useContext } from 'react'
import classes from './Login.module.css'
import bg from '../../assets/grp277.png'
import logo from '../../assets/logo.png'
import google from '../../assets/gi.png'
import github from '../../assets/github.svg'
import discord from '../../assets/discord.svg'
import linkedin from '../../assets/linkedin.svg'
import { ThemeContext } from '../../App';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  let [userdata, setuserdata] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const submitform = (e) => {
    e.preventDefault();
    // use this part to connect backend
    // data accessed by userdat.name, userdata.email and userdata.message
    console.log(e);
    setuserdata({ name: "", email: "", message: "" })
  }

  const [logged, setLogged] = useState(false)

  const openMsg = (e) => {
    e.preventDefault()
    if (!userdata.email || !userdata.password){
      alert("Please fill all the fields")
      return
    }
    // window.scrollTo(250, 250);
    setLogged(true)
  }
  const closeMsg = () => {
    // window.scrollTo(150, 150);
    setLogged(false)
  }

  const theme = useContext(ThemeContext);

  return (
    <div className={`${classes.main} ${theme.theme === "light" ? classes.light : classes.dark}`}>
      <div className={`${classes.main2} ${logged ? classes.overlay : ""}`}>
        <img src={bg} className={classes.mainbg} alt="" />
        <div className={classes.left_body}>
          <motion.img className={classes.logo} src={logo}
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.5 }}
            alt="" />
          <p className={classes.mp}><span className={classes.welcome}>WELCOME</span>  Techie<span className={classes.expp}> !</span></p>
          <p className={classes.please}>Please enter your details!</p>

          <motion.div className={classes.main_conatct}
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.5 }}>
            <form name="myContact" className={classes.contactform} >
              <label className={classes.label}>Email</label>
              <input type='email' className={classes.input} required value={userdata.email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} placeholder='Enter your Email'></input>
              <label className={classes.label} pla>Passowrd</label>
              <input type='password' className={classes.input} required value={userdata.password} onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} placeholder='**************'></input>
              <button className={classes.signin} onClick={openMsg} type='submit' >Sign In</button>
              {/* <button className={classes.forgot}>Forgot Password ? </button> */}
              {/* <p className={classes.others}>Sign In using : </p>
              <div className={classes.btn}>
                <button className={classes.go_btn}
                  data-aos="zoom-in-left"><img className={classes.google_btn} src={google} alt="" /></button>
                <button className={classes.go_btn} data-aos="zoom-in-up"><img className={classes.discord_btn} src={discord} alt="" /></button>
                <button className={classes.go_btn} data-aos="zoom-in-down"><img className={classes.github_btn} src={github} alt="" /></button>
                <button className={classes.go_btn} data-aos="zoom-in-right"><img className={classes.linkedin_btn} src={linkedin} alt="" onClick={() => submitform()} /></button>
              </div> */}
            </form>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {logged &&
          <motion.div className={classes.message}
            initial={{ opacity: 0, transform: "scale(0)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{ opacity: 0, transform: "scale(1)" }}
            transition={{ duration: .5 }}
          >
            <span onClick={closeMsg}></span>
            <h1>Sorry 😕😕</h1>
            <h2>Seems Like You are not a GDSC Team Member</h2>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default Login