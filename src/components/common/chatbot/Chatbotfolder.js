import config from './config.js';
import React, { useState, useContext } from 'react';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import './css/chatbot.css'
import logo from './aa.jpeg'
import { func } from 'prop-types';
import { ThemeContext } from '../../../App.jsx';

function Chatbotfolder() {
  const [showBox, setShowBox] = useState(false);
  const [hide, setHide] = useState(false);
  const hideText = setTimeout(()=>{setHide(true)}, 3000);
  
  const theme = useContext(ThemeContext)


  function handleClick() {
    setShowBox(!showBox);
  }

  return (
    <div className={`chatbotdiv ${theme.theme === "dark" ? "dark" : ""}`}>
      <button className={`box ${hide ? 'hide' : ''}`}>
        <p>Chat With Us</p>
        <img src={logo} className={`button ${showBox ? 'show' : ''}`} alt="robo" onClick={handleClick} />
      </button>
      <div className={`chatbox ${showBox ? 'show' : ''} `}>
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
      </div>
    </div>
  );
}

export default Chatbotfolder;
