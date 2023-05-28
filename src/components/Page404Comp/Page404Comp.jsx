import './Four04.css';
import React, { useContext, useEffect } from 'react';
import backimg from '../../assets/img1.png'
import { ThemeContext } from '../../App';
import Img2 from '../common/SVGs/Img2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';


function Page404Comp() {
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className={`page404main ${theme.theme === "dark" ? "dark" : ""}`}>
      <div className="page404">
        <div className="pg404-conatinimg">
          <img src={backimg} alt="" className="pg404-bg" />
          {/* <img src={elp} alt="" className="pg404_elp"/>  */}
          <Img2 theme={theme} />
        </div>
        <div className="pg404-content">
          <p className="pg404-shtext">Shhh!!</p>
          <p className="pg404-404err pg404s1">404 : Page not found!</p>
          <p className="pg404-bigtext">Our page seems to be busy coding!</p>
          <p className="pg404-also-try">You can try searching for:</p>
          <div className="pg404-btncont">
            <button className="pg404-btn" data-aos="flip-up" onClick={()=> navigate("/")}>Home page</button>
            <button className="pg404-btn" data-aos="flip-down" onClick={()=> navigate(-1)}>Previous page</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404Comp;
