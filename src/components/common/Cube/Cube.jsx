import React, { useEffect, useRef } from 'react'
import classes from './Cube.module.css'


const Cube = ({ id, startColor, stopColor , top, left}) => {

    // var top = Math.floor(Math.random()*(90-10+1) + 10) + "%";
    // var left = Math.floor(Math.random()*(90-10+1) + 10) + "%";
    // console.log("top", top)    
    // console.log("left", left)    
    // var offset = Math.floor(Math.random()*(15-2+1)+2) + "px"

    // const objectRef = useRef()


    // const moveMouse = ({ clientX, clientY }) => {

    //     // console.log("fsd");
    //     objectRef.current.style.left = clientX + "px"
    //     objectRef.current.style.top = clientY + "px"

    // }

    // useEffect(() => {
    //     document.addEventListener("mousemove", moveMouse)
    //     return () => {
    //         document.removeEventListener("mousemove", moveMouse)
    //     }
    // }, [])

    console.log(top, left);

    return (
        // <div>    
            <svg width="150" className={classes.cube} height="145" viewBox="0 0 150 145" fill="none" >
                <path d="M112.804 22.0462L57.0199 1.5192C52.0069 -0.328793 46.3491 1.15329 42.8552 5.20695L3.53174 50.8308C0.352316 54.5196 -0.459965 59.6835 1.40848 64.1552L25.3983 121.57C26.9466 125.307 30.1693 128.085 34.0934 129.065L94.4195 144.322C99.1383 145.528 104.123 143.925 107.285 140.256L146.608 94.6325C150.102 90.5789 150.716 84.7847 148.149 80.0991L119.617 27.9536C118.162 25.2157 115.729 23.1194 112.804 22.0462ZM105.381 37.5851L131.718 85.7194L131.526 85.9424L78.9846 68.2105L53.6957 18.8601L53.8878 18.6371L105.381 37.5851ZM49.6758 115.33L75.6876 85.1509L119.472 99.9275L96.0805 127.067L49.6758 115.33Z" fill={`url(#${id})`} />
                <defs>
                    <linearGradient id={id} x1="116.754" y1="24.3691" x2="28.8549" y2="126.351" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DC2121" />
                        <stop offset="0.0001" stopColor={startColor} stopOpacity="0.5" />
                        <stop offset="1" stopColor={stopColor} stopOpacity="0.5" />
                    </linearGradient>
                </defs>
            </svg>
        // </div>

    )
}




export default Cube

// import React, { useState, useEffect, useRef } from "react";


// const App = () => {

//     const updateObjectPosition = (event) => {
//         const { clientX, clientY } = event;

//         // console.log("Object", objectRef.current);
//         // console.log("Cll");
//         // const left = clientX + "px";
//         // const top = clientY + "px";
//         objectRef.current.style.left = clientX + "px";
//         objectRef.current.style.top = clientY + "px";
//         // setObjectPosition({
//             // x: left,
//             // y: top
//         // })
//     };
//     const objectRef = useRef();
//     const [objectPosition, setObjectPosition] = useState({
//         x: 0,
//         y: 0,
//     });

//     useEffect(() => {
//         document.addEventListener("mousemove", updateObjectPosition);

//         return () => {
//             document.removeEventListener("mousemove", updateObjectPosition);
//         };
//     }, []);

//     return (
//         <div>
//             <div ref={objectRef} style={{ position: "absolute", width: "100px", height: "100px", background: "red" }} >HELLO</div>
//         </div>
//     );
// };

// export default App