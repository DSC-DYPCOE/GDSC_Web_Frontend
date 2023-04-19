import config from './config.js';
import React, { useState } from 'react';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import './css/chatbot.css'
import logo from './aa.jpeg'

function Chatbotfolder() {
  const [showBox, setShowBox] = useState(false);

  function handleClick() {
      setShowBox(!showBox);
    }
    
  return (
    <div className="Chatbotdiv">
        <img src={logo} className={`button ${showBox ? 'show' : ''}`} alt="robo" onClick={handleClick}/>
        <button className={`box ${showBox ? 'show' : ''}`}>Chat with Us</button>
        <div className={`chatbox ${showBox ? 'show' : ''} `}>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
    </div>
  );
}

export default Chatbotfolder;
