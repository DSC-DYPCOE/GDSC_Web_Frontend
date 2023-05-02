import { createChatBotMessage } from 'react-chatbot-kit';
import aa from './aa.jpeg';
import chatboticon from './chatboticon.jpg'
import {Hellomsgw, Allmem, Leaddo} from './differentopt.jsx';
import group from './Group_268.svg'
import user from './user.png'
import './css/chatbot.css'
import LogoSVG from './logosvg';

const leadwork = ["Start a club","Host workshops","Build projects","Colab with others"];
const who = ["Faculty", "Leads" , "Coordinators", "Members"];
const hellomsg = ["What is GDSC" , "How to join?" , "Why to join?" , "what is a chapter"]

const config = {
  initialMessages: [createChatBotMessage("Hi there! Welcome to the GDSC Family!!")],
  customComponents: {
    // Replaces the default header
   header: () => <div style={{width:"99%" , padding:"20px 20px"}}>
    {/* <img src={group} className="topone"/> */}
    <LogoSVG />
    <hr></hr>
    </div>,
   // Replaces the default bot avatar
   botAvatar: (props) => <img className="hi" src={aa}/>,
  //  // Replaces the default bot chat message container
  //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
  //  // Replaces the default user icon
   userAvatar: (props) => <img className="hi1" src={user}/>,
 },
  widgets: [
    {
      widgetName: 'differentopt',
      widgetFunc: (props) => <Leaddo {...props}/>,
      props:{
        leadwork
      }
    },
    {
      widgetName: 'differentpeople',
      widgetFunc: (props) => <Allmem {...props}/>,
      props:{
        who
      }
    },
    {
      widgetName: 'hello',
      widgetFunc: (props) => <Hellomsgw {...props}/>,
      props:{
        hellomsg
      }
    },

  ],
};

export default config;