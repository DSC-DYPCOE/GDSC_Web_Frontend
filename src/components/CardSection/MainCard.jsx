import CardDesign from './cards/carddesign';
import profile from "./images/office.png";
import dipali from "./images/dipaliPatil.jpg";
import Ashutosh_Shimpi from "./images/Ashutosh_Shimpi.jpg"
import Shreya_Dhurde from "./images/Shreya_Dhurde.jpeg"
import Om_Gawande from "./images/Om_Gawande.jpg"
import Palash_Rambhia from "./images/Palash_Rambhia.jpeg"
import Simran_Khaparde from "./images/Simran_Khaparde.png"
import Nikhil_Shinde from "./images/Nikhil_Shinde.jpg"
import Sakshi_Thombre from "./images/Sakshi_Thombre.jpg"
import Saurabh_Barde from "./images/Saurabh_Barde.jpg"
import Yash_Pame from "./images/Yash_Pame.jpg"
import Vaishnavi_Barge from "./images/Vaishnavi_Barge.jpg"
import Vaishnavi_Mokadam from "./images/Vaishnavi_Mokadam.jpeg"
import Abhishek_Suryavanshi from "./images/Abhishek_Suryavanshi.jpeg"
import Onkar from "./images/Onkar.jpg"
import Shweta from "./images/Shweta Mandal .jpg"
import anvi from "./images/anvi_gautam1.png"
import vedant from "./images/Vedant.jpg"
import ayush from "./images/Ayush ahire.jpg"
import kartik from "./images/IMG_20230101_104115.jpg"
import varsha from "./images/K.S.S Varsha _PR_ Coordinator .png"
import neelam from "./images/Neelam.jpg"
import nikita from "./images/Nikita Thakur .jpg"
import soham from "./images/SohamVadje_Management.jpg"
import raunak from "./images/Raunak Meshram.jpg"
import arpan from "./images/Arpan.jpg"
import yash_d from "./images/Yash dhoot_PR_Co.jpg"
import { ThemeContext } from '../../App';
import { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function MainCard() {
    useEffect(() => {
        AOS.init({duration: 800});
      },[]);

    const theme = useContext(ThemeContext);
    return (
        <div className="App">

            <h1 className={`Lead_head ${theme.theme === "light" ? "" : "dark"}`} data-aos="fade-up">Our Team</h1>
            <div className='Our_team'>

                <div data-aos="flip-left">
                <CardDesign
                    img={Shreya_Dhurde}
                    firstname="Shreya"
                    lastname="Dhurde"
                    bio="GDSC Lead"
                    color="yel"
                    profile={profile}
                />
                </div>

                <div data-aos="flip-right">
                <CardDesign
                    img={dipali}
                    firstname="Dipali"
                    lastname="Patil"
                    bio="Faculty Coordinator"
                    color="yel"
                    profile={profile}
                />
                </div>
            </div>

            <h1 className={`Lead_head ${theme.theme === "light" ? "" : "dark"}`} data-aos="fade-up">Tech Team</h1>
            <div className='Tech_team_r1'>
            <div data-aos="flip-left">
                <CardDesign
                    img={Om_Gawande}
                    firstname="Om"
                    lastname="Gawande"
                    bio="Web dev Specialist"
                    color="red"
                    profile={profile}
                />
                </div>

                <div data-aos="flip-right">
                <CardDesign
                    img={Palash_Rambhia}
                    firstname="Palash"
                    lastname="Rambhia"
                    bio="Android Specialist"
                    color="red"
                    profile={profile}
                />
                </div>

                <div data-aos="flip-right">
                <CardDesign
                    img={Simran_Khaparde}
                    firstname="Simran"
                    lastname="Khaparde"
                    bio="CyberSecurity Specialist"
                    color="red"
                    profile={profile}
                />
                </div>
            </div>

            <div className='Our_team'>
            <div data-aos="flip-left">
                <CardDesign
                    img={Nikhil_Shinde}
                    firstname="Nikhil"
                    lastname="Shinde"
                    bio="Cloud Computing Specialist"
                    color="red"
                    profile={profile}
                />
                </div>
                <div data-aos="flip-right">
                <CardDesign
                    img={Yash_Pame}
                    firstname="Yash"
                    lastname="Pame"
                    bio="AI-ML Specialist"
                    color="red"
                    profile={profile}
                />
                </div>
            </div>

            <div className='Tech_team_r1'>
            <div data-aos="flip-left">
                <CardDesign
                    img={Onkar}
                    firstname="Onkar"
                    lastname="Waghmode"
                    bio="Tech Coordinator"
                    color="red"
                    profile={profile}
                />
                </div>
                <div data-aos="flip-right">
                <CardDesign
                    img={Shweta}
                    firstname="Shweta"
                    lastname="Mandal"
                    bio="Tech Coordinator"
                    color="red"
                    profile={profile}
                />
                </div>
                <div data-aos="flip-right">
                <CardDesign
                    img={anvi}
                    firstname="Anvi"
                    lastname="Gautam"
                    bio="Tech Coordinator"
                    color="red"
                    profile={profile}
                />
                </div>
            </div>

            <div className='Our_team'>
            <div data-aos="flip-left">
                <CardDesign
                    img={ayush}
                    firstname="Ayush"
                    lastname="Ahire"
                    bio="Tech Coordinator"
                    color="red"
                    profile={profile}
                />
                </div>

                <div data-aos="flip-right">
                <CardDesign
                    img={vedant}
                    firstname="Vedant"
                    lastname="Bodhke"
                    bio="Tech Coordinator"
                    color="red"
                    profile={profile}
                />
                </div>
            </div>

            <h1 className={`Lead_head ${theme.theme === "light" ? "" : "dark"}`} data-aos="fade-up">Design Team</h1>
            <div className='Our_team'>
            <div data-aos="flip-leftt">
            <CardDesign
                img={Sakshi_Thombre}
                firstname="Sakshi"
                lastname="Thombre"
                bio="Design Lead"
                color="gre"
                profile={profile}
            />
            </div>

            <div data-aos="flip-right">
            <CardDesign
                img={Saurabh_Barde}
                firstname="Saurabh"
                lastname="Barde"
                bio="Design Lead"
                color="gre"
                profile={profile}
            />
            </div>
            </div>

            <div className='Tech_team_r1'>
            <div data-aos="flip-left">
            <CardDesign
                img={nikita}
                firstname="Nikita"
                lastname="Thakur"
                bio="Design Coordinator"
                color="gre"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={raunak}
                firstname="Raunak"
                lastname="Meshram"
                bio="Design Coordinator"
                color="gre"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={kartik}
                firstname="Kartik"
                lastname="Bankar"
                bio="Design Coordinator"
                color="gre"
                profile={profile}
            />
            </div>
            </div>

            <h1 className={`Lead_head ${theme.theme === "light" ? "" : "dark"}`} data-aos="fade-up">Public Relation Team</h1>
            <div className='Our_team'>
            <div data-aos="flip-left">
            <CardDesign
                img={Vaishnavi_Mokadam}
                firstname="Vaishnavi"
                lastname="Mokadam"
                bio="Public Relations Lead"
                color="yel"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={Vaishnavi_Barge}
                firstname="Vaishnavi"
                lastname="Barge"
                bio=" Public Relations Lead"
                color="yel"
                profile={profile}
            />
            </div>
            </div>

            <div className='Tech_team_r1'>
            <div data-aos="flip-left">
            <CardDesign
                img={neelam}
                firstname="Neelam"
                lastname="Pawar"
                bio=" PR Coordinator"
                color="yel"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={yash_d}
                firstname="Yash"
                lastname="Dhoot"
                bio="PR Coordinator"
                color="yel"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={varsha}
                firstname="Varsha"
                lastname="Kotipalli"
                bio="PR Coordinator"
                color="yel"
                profile={profile}
            />
            </div>
            </div>

            <h1 className={`Lead_head ${theme.theme === "light" ? "" : "dark"}`} data-aos="fade-up">Management Team</h1>
            <div className='Our_team'>
            <div data-aos="flip-left">
            <CardDesign
                img={Abhishek_Suryavanshi}
                firstname="Abhishek"
                lastname="Suryavanshi"
                bio="Management Lead"
                color="pur"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={Ashutosh_Shimpi}
                firstname="Ashutosh"
                lastname="Shimpi"
                bio="Management Lead"
                color="pur"
                profile={profile}
            />
            </div>
            </div>

            <div className='Tech_team_r1'>
            <div data-aos="flip-left">
            <CardDesign
                img={soham}
                firstname="Soham"
                lastname="Vadje"
                bio="Management coordinator"
                color="pur"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={dipali}
                firstname="Prathamesh"
                lastname="Nigade"
                bio="Management coordinator"
                color="pur"
                profile={profile}
            />
            </div>
            <div data-aos="flip-right">
            <CardDesign
                img={arpan}
                firstname="Arpan"
                lastname="Yeole"
                bio="Management coordinator"
                color="pur"
                profile={profile}
            />
            </div>
            </div>



        </div>
    );
}

export default MainCard;
