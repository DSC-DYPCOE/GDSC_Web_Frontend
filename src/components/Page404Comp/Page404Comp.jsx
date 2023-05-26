import './Four04.css';
import { useEffect } from 'react';
import backimg from '../../assets/img1.png'
import elp from '../../assets/img2.svg'
import nnn from '../../assets/nnn.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Page404Comp() {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  return (
    <div className="page404main">
    <div className="page404">
      <div className="pg404-conatinimg"> 
       <img src={backimg} alt="" className="pg404-bg" /> 
       <img src={elp} alt="" className="pg404_elp"/> 
      </div>
      <div className="pg404-content">
        <p className="pg404-shtext">Shhh!!</p>
        <p className="pg404-404err pg404s1" data-aos="fade-up">404 : Page not found!</p>
        <p className="pg404-bigtext">Our page seems to be busy coding!</p>
        <p className="pg404-also-try">You can try searching for:</p>
        <div className="pg404-btncont" data-aos="flip-right">
          <button className="pg404-btn">Home page</button>
          <button className="pg404-btn">Previous page</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Page404Comp;
