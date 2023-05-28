import React,{useState, useEffect} from 'react'
import '../../Page404Comp/Four04.css'

const Img2 = (theme) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(screenWidth);
  return (
    <>
    <svg width={`${screenWidth <= 530? 690 : screenWidth <= 1300 ? 1600 : 2001 }`} height={`${screenWidth <= 530? 1360 : screenWidth <= 1300 ? 2310 : 2310 }`} viewBox={`${screenWidth <= 530? "0 0 761 2080" : screenWidth <= 1300 ? "0 0 2061 3710" : "0 0 1861 3710"}`}fill="none" xmlns="http://www.w3.org/2000/svg">
    {
      (theme.theme.theme ==="dark")? <ellipse cx={`${screenWidth <= 530? 530 : screenWidth <= 1300 ? 830 : 960.5 }`} 
      cy={`${screenWidth <= 530? 550 : screenWidth <= 1300 ? 830 : 855 }`} 
      rx={`${screenWidth <= 530? 550 : screenWidth <= 1300 ? 890 : 1030.5 }`}
        ry={`${screenWidth <= 530? 550 : screenWidth <= 1300 ? 830 : 855 }`}   fill="rgb(34,22,23)"/>

      : <ellipse cx={`${screenWidth <= 550? 530 : screenWidth <= 830 ? 830 : 960.5 }`} cy={`${screenWidth <= 530? 550 : screenWidth <= 830 ? 830 : 855 }`} 
      rx={`${screenWidth <= 530? 550 : screenWidth <= 1030 ? 890 : 1030.5 }`}  
      ry={`${screenWidth <= 530? 550 : screenWidth <= 1030 ? 830 : 855 }`}  fill="#F8DAC2" />
    }  

</svg>
</>

  )
}

export default Img2