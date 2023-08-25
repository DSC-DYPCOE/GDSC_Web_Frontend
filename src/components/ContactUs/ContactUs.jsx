import React, { useContext, useEffect, useState, useRef } from 'react'
import contactbg from '../../assets/contactlbg.png';
import enbottom from '../../assets/emailbgb.svg'
import entop from '../../assets/mailbgt.svg'
import bgg from '../../assets/bgg.png'
import bgy from '../../assets/bgy.png'
import classes from './ContactUs.module.css'
import { ThemeContext } from '../../App';
import { Button } from '../common';
import emailjs from '@emailjs/browser';


import AOS from 'aos';
import 'aos/dist/aos.css';
// import EmailBgB from '../common/SVGs/EmailBgB';

export default function ContactUs() {
    const form = useRef();


    let [userdata, setuserdata] = useState({
        name: "",
        email: "",
        message: ""
    })
    const theme = useContext(ThemeContext);

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    const submitform = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_be3i6vf', 'template_21rrgwb', form.current, '_El3IBTU7KOivsfk4')
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error.text);
                alert("Couldn't send mail successfully!!")
            });

            emailjs.sendForm('service_be3i6vf', 'template_bdi9xul', form.current, '_El3IBTU7KOivsfk4')
            .then((result) => {
                alert("Your mail has been sent successfully!! We will soon reachout to you");
                setuserdata({ name: "", email: "", message: "" })
            }, (error) => {
                console.log(error.text);
                alert("Couldn't send mail successfully!!")
            });

        console.log(e);
        setuserdata({ name: "", email: "", message: "" })
    }

    return (
        <div className={`${classes.mainb} ${theme.theme === "light" ? classes.light : classes.dark}`}>
            <img src={entop} alt="" className={classes.emailtop} data-aos="fade-down" data-aos-duration="800" />
            <img src={enbottom} alt="" className={classes.emailbottom} data-aos="fade-up" data-aos-duration="800" />
            <img src={contactbg} alt="" className={classes.bg_only} data-aos="fade-right" data-aos-delay="800" />
            <img src={bgg} alt="" className={classes.greenbg} />
            <div className={classes.abcd}>
                <img src={bgy} alt="" className={classes.yellowbg} />
            </div>

            <div className={classes.insisemail} data-aos="fade-up"
                data-aos-delay="800">
                <p className={classes.pques}>Got A Question?</p>
                <p className={classes.contact}>Contact <span style={{ color: "rgba(234, 67, 53, 1)" }}>G</span><span style={{ color: "rgba(52, 168, 83, 1)" }}>D</span><span style={{ color: "rgba(251, 188, 4, 1)" }}>S</span><span style={{ color: "rgba(66, 133, 244, 1)" }}>C</span>!</p>
                <p className={classes.would_love}>We would love to hear from you! Please feel free to reach out to us
                    with any questions or comments using the contact form below.</p>

                <div className={classes.main_contact} data-aos="flip-left" data-aos-delay="800">
                    <form name="myContact" className={classes.contactform} onSubmit={submitform} ref={form}>
                        <label className={classes.label}>Name</label>
                        <input type='text' className={classes.input} required value={userdata
                            .name} onChange={(e) => setuserdata({ ...userdata, name: e.target.value })} name="from_name"></input>
                        <label className={classes.label}>Email Address</label>
                        <input type='email' className={classes.input} required value={userdata
                            .email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} name="from_email"></input>
                        <label className={classes.label}>Message</label>
                        <textarea className={classes.doit} required value={userdata
                            .message} onChange={(e) => setuserdata({ ...userdata, message: e.target.value })} name="message"></textarea>
                        <input type='submit' className={classes.submit} />
                    </form>
                </div>
            </div>

            <div className={classes.backall}>
                <p className={classes.sponsor} data-aos="zoom-out">Sponsor Us</p>
                <p className={classes.talk} data-aos="fade-up">By becoming a sponsor, you'll have the opportunity to promote your brand and showcase your commitment to social responsibility. </p>

                <Button label='Sponsor US' margin="40px" dataaos="flip-up" onClick={() => {window.open("mailto:dsc.dypcoe@gmail.com", "_blank")}}/>
            </div>
        </div>
    )
}
