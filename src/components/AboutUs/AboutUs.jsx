import React,{useState , useEffect, useContext} from 'react'
import classses from './About.module.css'
import day from '../../assets/grp292.png'
import dark from '../../assets/grp292.jpg'
import info from '../EventsSection/EventsInfo'
import Pastinfo from './AboutInfo'
import r45 from '../../assets/r45.png'
import { ThemeContext } from '../../App';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutUs = () => {
  const theme = useContext(ThemeContext);
  const [thestate,setstate] = useState("");
  const [finds,setfinds] = useState(info.previous[0].id);
  
  const checkfind = (id1) => {
    setfinds(id1)
  }
  const onclickHandle = (val) => {
    if(thestate !== "" && val === thestate){
      setstate("")
    }
    else{
      setstate(val)
    }
  }

  const setNUll = (val) => {
    setstate("")
  }

  useEffect(() => {
    AOS.init({duration: 800});
  },[]);

  return (
    <div className={`${classses.body} ${theme.theme === "light" ? classses.light : classses.dark}`}>

        <h1 className={classses.head}>About Us</h1>
        <img src={(theme.theme === "light")?day : dark} className={classses.top_back} alt=""/>
        <p className={classses.top_p} data-aos="fade-up">GDSC DYPCOE Akurdi was established with the aim of fostering a vibrant community of student developers and promoting learning, collaboration, and innovation in the field of technology. The club organizes various technical and non-technical events, workshops, coding competitions, and guest lectures to empower students and enhance their skills. Started in 2020 by ____________ on _______________________</p>

        <div className={classses.vission}>
          <div className={classses.v}>
            <h1 className={classses.our} style={{textAlign:"start"}} >Our Vision</h1>
            <div className={classses.write} data-aos="fade-left"></div>
          </div>
          <div className={classses.m}>
          <h1 className={classses.our} style={{textAlign:"right"}} >Our Mission</h1>
          <div className={classses.write} data-aos="fade-right"></div>
          </div>
        </div>

        <div className={classses.past}>
          <h1 className={classses.prev} >Previous Leads</h1>
          <div className={classses.back_style}></div>
          <div className={classses.all}>

            {
              Pastinfo.year.map((e) => {
                return <div className={classses.in} onMouseEnter={() => onclickHandle(e)} onMouseLeave={() => setNUll(e)}>
                  {
                    (thestate !== e)?<p className={classses.year} key={e}>{e}</p>
                    :<div className={classses.show_leadd}>
                      <img src={r45} alt="" className={classses.lead_img}/>
                      <p className={classses.lead_name}>Shreya Dhurde</p>
                    </div>
                  }
              
            </div>
              })
            }
          </div>
        </div>

        <div className={classses.events}>
          <h1 className={classses.prev_event_head} data-aos="fade-up">Previous Events</h1>
          <div className={classses.slider}>
          <section class={classses.carousel} aria-label="Gallery">
            <ol class={classses.carousel__viewport }>
            {
              info.previous.map((e) => {
                return <li id={`id${e.id}`}
                tabindex={e.id}
                onChange={() => checkfind(e.id)}
                onClick={() => checkfind(e.id)}
                class={classses.carousel__slide}>
              <div class={classses.carousel__snapper}>
              <div className={classses.all_det}>
                  <p className={classses.det_name}>{e.eventName}</p>
                  <p className={classses.det_name}>{e.date}</p>
                  <a className={classses.det_name} href={e.moreLink}>View More</a>
                </div>
                <img src={e.img} alt='' className={classses.slider_img}/>
                
                <a href={`#id${e.id-1}`} 
                   class={classses.carousel__prev} >Go to last slide</a>
                <a href={`#id${e.id+1}`} 
                   class={classses.carousel__next} >Go to next slide</a>
              </div>
            </li>
              })
            }
  </ol>
  <aside className={classses.carousel__navigation}>
    <ol className={classses.carousel__navigation_list}>
      {
        info.previous.map((e) => {
          return <li className={classses.carousel__navigation_item}>
          <a href={`#id${e.id}`} onClick={() => checkfind(e.id)}
             className={(finds === e.id)?classses.carousel__navigation_button_on : classses.carousel__navigation_button}>Go to slide 1</a>
        </li>
        })
      }
    </ol>
  </aside>
</section>
          </div>
        </div>
        
    </div>
  )
}

export default AboutUs