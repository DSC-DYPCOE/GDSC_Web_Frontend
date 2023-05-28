import './Four04.css';
import React, { useContext } from 'react';
import backimg from './assets/img1.png'
// import elp from './assets/img2.svg'
import { ThemeContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import NotFoundBg from '../common/Svgs/NotFoundBg';


function Page404Comp() {
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);

  return (
    <div className={`page404main ${theme.theme === "dark" ? "dark" : ""}`}>
      <div className="page404">
        <div className="pg404-conatinimg">
          <img src={backimg} alt="" className="pg404-bg" />
          {/* <img src={elp} alt="" className="pg404_elp" /> */}
          <NotFoundBg className="pg404_elp" color={"#221617"} />
        </div>
        <div className="pg404-content">
          {/* <p className="pg404-shtext">Shhh!!</p> */}
          <p className="pg404-404err pg404s1">404 : Page not found!</p>
          <p className="pg404-bigtext">Our page seems to be busy coding!</p>
          <p className="pg404-also-try">You can try searching for:</p>
          <div className="pg404-btncont">
            <button className="pg404-btn" onClick={() => navigate("/")}>Home page</button>
            <button className="pg404-btn" onClick={() => navigate(-1)}>Previous page</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404Comp;
