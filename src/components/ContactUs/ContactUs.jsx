import React,{useEffect, useState} from 'react'
import contactbg from './ContactImg/contactlbg.png';
import enbottom from './ContactImg/emailbgb.svg'
import entop from './ContactImg/mailbgt.svg'
import bgg from './ContactImg/bgg.png'
import bgy from './ContactImg/bgy.png'
import classes from './ContactUs.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function ContactUs() {

    let [userdata, setuserdata] = useState({
        name: "",
        email: "",
        message: ""
      })

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);

      const submitform = (e) => {
        e.preventDefault();
        // use this part to connect backend
        // data accessed by userdat.name, userdata.email and userdata.message
        console.log(e);
        setuserdata({name:"",email:"",message:""})
      }

  return (
    <div className={classes.mainb}>
        <img src={entop} alt="" className={classes.emailtop} data-aos="fade-down" data-aos-duration="3000"/>
        <img src={enbottom} alt="" className={classes.emailbottom} data-aos="fade-up" data-aos-duration="3000"/>
        <img src={contactbg} alt="" className={classes.bg_only} data-aos="fade-right" data-aos-delay="3000" /> 
         <img src={bgg} alt="" className={classes.greenbg}/> 
        <img src={bgy} alt="" className={classes.yellowbg}/> 

        <div className={classes.insisemail} data-aos="fade-up"
     data-aos-delay="3000">
            <p className={classes.pques}>Got A Question?</p>
            <p className={classes.contact}>Contact <span style={{color:"rgba(234, 67, 53, 1)"}}>G</span><span style={{color:"rgba(52, 168, 83, 1)"}}>D</span><span style={{color:"rgba(251, 188, 4, 1)"}}>S</span><span style={{color:"rgba(66, 133, 244, 1)"}}>C</span>!</p>
            <p className={classes.would_love}>We would love to hear from you! Please feel free to reach out to us
 with any questions or comments using the contact form below.</p>

        <div className={classes.main_conatct} data-aos="flip-left" data-aos-delay="3000">
            <form name="myContact" className={classes.contactform} onSubmit={submitform}>
                <label className={classes.label}>Name</label>
                <input type='text' className={classes.input} required  value={userdata
            .name} onChange={(e) => setuserdata({ ...userdata, name: e.target.value })}></input>
                <label className={classes.label}>Email Address</label>
                <input type='email' className={classes.input} required  value={userdata
            .email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}></input>
                <label className={classes.label}>Message</label>
                <textarea className={classes.doit} required  value={userdata
            .message} onChange={(e) => setuserdata({ ...userdata, message: e.target.value })}></textarea>
                <input type='submit' className={classes.submit}/>
            </form>
        </div>
        </div>

        <div className={classes.backall}>
            <p className={classes.sponsor} data-aos="zoom-out">Sponser Us</p>
            <p className={classes.talk} data-aos="fade-up">By becoming a sponsor, you'll have the opportunity to promote your brand and showcase your commitment to social responsibility. </p>

            <button className={classes.sponsorbtn} data-aos="flip-up">Sponsor US</button>
        </div>
    </div>
  )
}