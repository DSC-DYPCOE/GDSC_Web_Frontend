// import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatBotMessage,setStateFunc,createClientMessage){
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleHello = () => {
    const botMessage = this.createChatBotMessage('Hello. Nice to meet you.');
  
    const botMessage1 = this.createChatBotMessage(
      "How can I help you today?"
    );

    const botMessage2 = this.createChatBotMessage(
      "You can start by asking some common questions :",
      {
        widget: 'hello',
      }
    );
      this.addmessagetostate(botMessage);
      this.addmessagetostate(botMessage1);
      this.addmessagetostate(botMessage2);

};

role_coordinator = () => {
  const botMessage = this.createChatBotMessage("Role of coordinators is to cooperate with the rest of the team, listen and follow the guidelines by the leads and help and support to put forward successful events.");
  const botMessage1 = this.createChatBotMessage("Coordinators also get to learn a lot about new technologies, communicate and collaborate with successful seniors in the industry, learn management and leadership skills and much more.");
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
}

role_faculty = () => {
  const botMessage = this.createChatBotMessage("Role of faculty members/professors is to manage and support the students in the club and provide them proper guidance and help when the need it. They are the overall supervisors of the club.");
  this.addmessagetostate(botMessage);
}

handle = () => {
  const botMessage = this.createChatBotMessage("GDSC leads who are chosen by google itself handle and manage the club with the help of other team members(leads) and faculties."  );
  this.addmessagetostate(botMessage);
};

  who = () => {
      const botMessage = this.createChatBotMessage("College and university students are encouraged to join Google Developer Student Clubs.\n One can be a part of GDSC in different ways",
      {
        widget: 'differentpeople',
      }
  
      );
      this.addmessagetostate(botMessage);
  };

  who_btn = () => {
    const chatmessge = createClientMessage("How to join the club GDSC?")
    const botMessage = this.createChatBotMessage("College and university students are encouraged to join Google Developer Student Clubs.\n One can be a part of GDSC in different ways",
    {
      widget: 'differentpeople',
    }

    );
    this.addmessagetostate(chatmessge);
    this.addmessagetostate(botMessage);
};

  chapter = () => {
  const botMessage = this.createChatBotMessage("A GDSC chapter is a specific group within the larger network of Google Developer Student Clubs. Each chapter is located at a specific university and is run by a team of student leaders who organize events, workshops, and other activities to help members learn new skills and connect with others in the tech community."
  );
  const botMessage1 = this.createChatBotMessage("GDSC chapters are a great way for students to gain practical experience and build their professional network while still in school. They provide opportunities to work on real-world projects, participate in hackathons and coding competitions, and attend conferences and other events hosted by Google and other tech companies.");
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

chapter_btn = () => {
  const chatmsg = createClientMessage("What is a GDSC chapter?");
  const botMessage = this.createChatBotMessage("A GDSC chapter is a specific group within the larger network of Google Developer Student Clubs. Each chapter is located at a specific university and is run by a team of student leaders who organize events, workshops, and other activities to help members learn new skills and connect with others in the tech community."
  );
  const botMessage1 = this.createChatBotMessage("GDSC chapters are a great way for students to gain practical experience and build their professional network while still in school. They provide opportunities to work on real-world projects, participate in hackathons and coding competitions, and attend conferences and other events hosted by Google and other tech companies.");
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};
  ques2 = () => {
      const botMessage = this.createChatBotMessage(
        "You can participate in events organized by multiple chapters, however if you decide to dedicate yourself to become a GDSC Lead or Core Team Member, you will be officially assigned to one chapter."
      );
        this.addmessagetostate(botMessage);
  };

  def = () => {
    const botMessage = this.createChatBotMessage(
      "Google Developer Student Clubs (GDSC) are like your college/ university clubs, powered by Google Developers. Every year, Google selects leads from across the globe who align with the vision of GDSC and want to empower their community. This year, there are around 352 leads selected across India."
    );
    this.addmessagetostate(botMessage);
};


def_btn = () => {
  const chatmsg = createClientMessage("What is GDSC?");
  const botMessage = this.createChatBotMessage(
    "Google Developer Student Clubs (GDSC) are like your college/ university clubs, powered by Google Developers. Every year, Google selects leads from across the globe who align with the vision of GDSC and want to empower their community. This year, there are around 352 leads selected across India."
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
};

makeclub= () => {
  const botMessage = this.createChatBotMessage(
    "TO form a new club in your college, one first needs to apply to become a GDCS lead and fill up the form accordinly. Once the form is submitted and you become a lead, you need to form the club with the help of fellow students and faculties. "
  );
  this.addmessagetostate(botMessage);
};

makeclub_btn= () => {
  const chatmsg = createClientMessage("How to start a club?");
  const botMessage = this.createChatBotMessage(
    "TO form a new club in your college, one first needs to apply to become a GDCS lead and fill up the form accordinly. Once the form is submitted and you become a lead, you need to form the club with the help of fellow students and faculties. "
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
};

  leadwork = () => {
    console.log("here");
    const botMessage0 = this.createChatBotMessage("In general, GDSC leaders are focused on the following areas:");
    const botMessage = this.createChatBotMessage("1. Start a club - Work with your university or college to start a student club. Select a core team and faculty advisor to support.");

    const botMessage1 = this.createChatBotMessage("2. Host workshops - Grow student knowledge on developer products and platforms through hands-on workshops and events.");

    const botMessage2 = this.createChatBotMessage("3. Build projects - Identify local partners to work with and lead project building activities.",
    {
      widget: 'differentopt',
    }
    );
    this.addmessagetostate(botMessage0);
    this.addmessagetostate(botMessage);
    this.addmessagetostate(botMessage1);
    this.addmessagetostate(botMessage2);
  };

  exception = () => {
  const botMessage = this.createChatBotMessage(
    "Sorry I didn't get that. Please try rephrasing or choosing other words."
  );
  this.addmessagetostate(botMessage);
};

workshop = () => {
  const botMessage = this.createChatBotMessage(
    "Hosting workshops is a great way to engage members and provide value to your GDSC club community."
  );
  const botMessage1 = this.createChatBotMessage(
    "1. Determine the topic that is relevant and interesting to your club members."
  );
  const botMessage2 = this.createChatBotMessage(
    "2. Find a speaker, Identify someone who has expertise in the chosen topic and can deliver an engaging and informative workshop. This could be a member of your club, a guest speaker from your local tech community, or someone from industry."
  );
  const botMessage3 = this.createChatBotMessage(
    "3. Choose a date and time that works for the speaker and your club members. "
  );
  const botMessage4 = this.createChatBotMessage(
    "4. Decide on the format of the workshop (in-person, virtual, or hybrid), and make sure you have the necessary equipment and technology to host it. Determine the duration of the workshop, and plan any breaks or Q&A sessions."
  );
  const botMessage5 = this.createChatBotMessage(
    "5. Create promotional materials (e.g., flyers, social media posts, email announcements) to promote the workshop to your club members and other interested individuals. "
  );
  const botMessage6 = this.createChatBotMessage(
    "6. After the workshop, send a follow-up email to thank the speaker and attendees, and provide any relevant resources or materials from the workshop. Ask for feedback to help"
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
  this.addmessagetostate(botMessage5);
  this.addmessagetostate(botMessage6);
};

workshop_btn = () => {
  const chatmsg = createClientMessage("How to hold workshops?");
  const botMessage = this.createChatBotMessage(
    "Hosting workshops is a great way to engage members and provide value to your GDSC club community."
  );
  const botMessage1 = this.createChatBotMessage(
    "1. Determine the topic that is relevant and interesting to your club members."
  );
  const botMessage2 = this.createChatBotMessage(
    "2. Find a speaker, Identify someone who has expertise in the chosen topic and can deliver an engaging and informative workshop. This could be a member of your club, a guest speaker from your local tech community, or someone from industry."
  );
  const botMessage3 = this.createChatBotMessage(
    "3. Choose a date and time that works for the speaker and your club members. "
  );
  const botMessage4 = this.createChatBotMessage(
    "4. Decide on the format of the workshop (in-person, virtual, or hybrid), and make sure you have the necessary equipment and technology to host it. Determine the duration of the workshop, and plan any breaks or Q&A sessions."
  );
  const botMessage5 = this.createChatBotMessage(
    "5. Create promotional materials (e.g., flyers, social media posts, email announcements) to promote the workshop to your club members and other interested individuals. "
  );
  const botMessage6 = this.createChatBotMessage(
    "6. After the workshop, send a follow-up email to thank the speaker and attendees, and provide any relevant resources or materials from the workshop. Ask for feedback to help"
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
  this.addmessagetostate(botMessage5);
  this.addmessagetostate(botMessage6);
};

project = () => {
  const botMessage = this.createChatBotMessage(
    "1. Choose a project that aligns with your interests and skillset. It can be an existing project or something you want to create from scratch."
  );
  const botMessage1 = this.createChatBotMessage(
    "2. Determine the scope of your project, including the features and functionalities you want to include, and the expected timeline for completion."
  );
  const botMessage2 = this.createChatBotMessage(
    "3. Create a project plan that outlines the goals, milestones, and resources required to complete the project."
  );
  const botMessage3 = this.createChatBotMessage(
    "3. Recruit a team of fellow GDSC members who have the necessary skills and are interested in working on the project. "
  );
  const botMessage4 = this.createChatBotMessage(
    "4. Begin developing the project, working closely with your team members to ensure that everyone is aligned with the project goals and timeline. Use code repositories like GitHub or Bitbucket to collaborate on the project and track changes."
  );
  const botMessage5 = this.createChatBotMessage(
    "5. Test the project thoroughly to ensure that it meets the requirements and works as expected. Make changes and refinements as necessary."
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
  this.addmessagetostate(botMessage5);
};

project_btn = () => {
  const chatmsg = createClientMessage("How to build projects?");
  const botMessage = this.createChatBotMessage(
    "1. Choose a project that aligns with your interests and skillset. It can be an existing project or something you want to create from scratch."
  );
  const botMessage1 = this.createChatBotMessage(
    "2. Determine the scope of your project, including the features and functionalities you want to include, and the expected timeline for completion."
  );
  const botMessage2 = this.createChatBotMessage(
    "3. Create a project plan that outlines the goals, milestones, and resources required to complete the project."
  );
  const botMessage3 = this.createChatBotMessage(
    "3. Recruit a team of fellow GDSC members who have the necessary skills and are interested in working on the project. "
  );
  const botMessage4 = this.createChatBotMessage(
    "4. Begin developing the project, working closely with your team members to ensure that everyone is aligned with the project goals and timeline. Use code repositories like GitHub or Bitbucket to collaborate on the project and track changes."
  );
  const botMessage5 = this.createChatBotMessage(
    "5. Test the project thoroughly to ensure that it meets the requirements and works as expected. Make changes and refinements as necessary."
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
  this.addmessagetostate(botMessage5);
};

collab = () => {
  const botMessage = this.createChatBotMessage("1. Identify potential GDSC clubs to collaborate with. You can start by checking the GDSC website or social media pages.");
  const botMessage1 = this.createChatBotMessage("2. Once you have established contact with the other club, discuss potential ideas for collaboration. You can brainstorm project ideas or events that you can work on together.");
  const botMessage3 = this.createChatBotMessage("3.  With a plan in place, it's time to execute the collaboration. Make sure to communicate regularly with the other club during the project or event to ensure that everything is on track.");
  const botMessage4 = this.createChatBotMessage("4. Once the collaboration is complete, take the time to celebrate the success of the project or event with the other club. ");
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
};

collab_btn = () => {
  const chatmsg = createClientMessage("How to collab with other GDSC clubs?");
  const botMessage = this.createChatBotMessage("1. Identify potential GDSC clubs to collaborate with. You can start by checking the GDSC website or social media pages.");
  const botMessage1 = this.createChatBotMessage("2. Once you have established contact with the other club, discuss potential ideas for collaboration. You can brainstorm project ideas or events that you can work on together.");
  const botMessage3 = this.createChatBotMessage("3.  With a plan in place, it's time to execute the collaboration. Make sure to communicate regularly with the other club during the project or event to ensure that everything is on track.");
  const botMessage4 = this.createChatBotMessage("4. Once the collaboration is complete, take the time to celebrate the success of the project or event with the other club. ");
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
};

join_faculty = () => {
  const botMessage = this.createChatBotMessage(
    "Visit GDSC website (https://developers.google\n.com/community/gdsc/)\n Find the GDSC near you, contact the GDSC lead from their contact information on the GDSC website or social media pages."
  );
  const botMessage1 = this.createChatBotMessage(
    "Ask the GDSC lead if you can attend one of their meetings to get a sense of their activities and how they work.\n Once you have joined the GDSC, participate in their activities and contribute to their projects. This can be in the form of mentorship, guidance, or helping with events and workshops. "
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

join_faculty_btn = () => {
  const chatmsg = createClientMessage("How to join GDSC as a Faculty member?");
  const botMessage = this.createChatBotMessage(
    "Visit GDSC website (https://developers.google\n.com/community/gdsc/)\n Find the GDSC near you, contact the GDSC lead from their contact information on the GDSC website or social media pages."
  );
  const botMessage1 = this.createChatBotMessage(
    "Ask the GDSC lead if you can attend one of their meetings to get a sense of their activities and how they work.\n Once you have joined the GDSC, participate in their activities and contribute to their projects. This can be in the form of mentorship, guidance, or helping with events and workshops. "
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

join_lead = () => {
  const botMessage = this.createChatBotMessage(
    "The first step is to join a GDSC as a member. Attend their meetings, participate in their events and projects, and get to know the current leadership team and other members."
  );
  const botMessage1 = this.createChatBotMessage(
    "work on developing your skills in areas such as programming, web development, mobile app development, data analysis, and machine learning. This can be done through online courses, workshops, hackathons, or any other learning opportunities."
  );
  const botMessage2 = this.createChatBotMessage(
    "When the opportunity arises, apply for the position of GDSC lead or specialist. This may involve submitting an application, attending an interview, or presenting your ideas and plans for the club."
  );
  const botMessage3 = this.createChatBotMessage(
    "If you are selected as a GDSC lead or specialist, attend the training provided by Google to develop the necessary skills and knowledge to effectively lead the club. The lead is directly selected by google while the lead interviews the rest of the specialists"
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
};

join_lead_btn = () => {
  const chatmsg = createClientMessage("How to join GDSC as a Lead?");
  const botMessage = this.createChatBotMessage(
    "The first step is to join a GDSC as a member. Attend their meetings, participate in their events and projects, and get to know the current leadership team and other members."
  );
  const botMessage1 = this.createChatBotMessage(
    "work on developing your skills in areas such as programming, web development, mobile app development, data analysis, and machine learning. This can be done through online courses, workshops, hackathons, or any other learning opportunities."
  );
  const botMessage2 = this.createChatBotMessage(
    "When the opportunity arises, apply for the position of GDSC lead or specialist. This may involve submitting an application, attending an interview, or presenting your ideas and plans for the club."
  );
  const botMessage3 = this.createChatBotMessage(
    "If you are selected as a GDSC lead or specialist, attend the training provided by Google to develop the necessary skills and knowledge to effectively lead the club. The lead is directly selected by google while the lead interviews the rest of the specialists"
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
};

join_coordinator = () => {
  const botMessage = this.createChatBotMessage(
    "The first step is to join a GDSC as a member. Attend their meetings, participate in their events and projects, and get to know the current leadership team and other members."
  );
  const botMessage1 = this.createChatBotMessage(
    "Most of the times the second year students are given the chance to join the team as coordinators and learn from the specialists.\n Attend the club's interview for your interested field to get the chance to become a coordinator."
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

join_coordinator_btn = () => {
  const chatmsg = createClientMessage("How to join GDSC as a coordinator in some field?");
  const botMessage = this.createChatBotMessage(
    "The first step is to join a GDSC as a member. Attend their meetings, participate in their events and projects, and get to know the current leadership team and other members."
  );
  const botMessage1 = this.createChatBotMessage(
    "Most of the times the second year students are given the chance to join the team as coordinators and learn from the specialists.\n Attend the club's interview for your interested field to get the chance to become a coordinator."
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

join_member = () => {
  const botMessage = this.createChatBotMessage(
    "Find a GDSC near you: Visit the GDSC website https://developers.google\n.com/community/gdsc/ and search for a GDSC in your area. You can also check with your university or college to see if they have a GDSC on campus."
  );
  const botMessage1 = this.createChatBotMessage(
    " Look for events or meetings hosted by the GDSC and attend them. This will give you an opportunity to meet the members and learn more about the club and its activities.\nAs a GDSC member, participate in the club's events, workshops, and projects. This will help you develop your skills and learn new technologies while also building relationships with other members."
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

join_member_btn = () => {
  const chatmsg = createClientMessage("How to participate in GDSC as a member/volunteer?");
  const botMessage = this.createChatBotMessage(
    "Find a GDSC near you: Visit the GDSC website https://developers.google\n.com/community/gdsc/ and search for a GDSC in your area. You can also check with your university or college to see if they have a GDSC on campus."
  );
  const botMessage1 = this.createChatBotMessage(
    " Look for events or meetings hosted by the GDSC and attend them. This will give you an opportunity to meet the members and learn more about the club and its activities.\nAs a GDSC member, participate in the club's events, workshops, and projects. This will help you develop your skills and learn new technologies while also building relationships with other members."
  );
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

become_lead = () => {
  const botMessage = this.createChatBotMessage("1. Professional growth - Access to community management training and technical knowledge to help you be a stronger leader, and receive invitations to select Google events.",
  );
  const botMessage2 = this.createChatBotMessage("2. Network growth - Access to a global network of student leaders, professional community organizers, industry experts, and Googlers to gain mentorship and share knowledge.",
  );
  const botMessage3 = this.createChatBotMessage("3. Community learning - Dedicated support to help educate and expand your community online and in-person.",
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
};

time = () => {
  const botMessage = this.createChatBotMessage("GDSC Leads should be available to run an event ideally once a month, and at least every three months to remain an active GDSC chapter. Additionally, running a GDSC is a one year commitment."
  );
  this.addmessagetostate(botMessage);
};

past_events = () => {
  const botMessage = this.createChatBotMessage("Some of the events held by GDSC of our college are:"
  );
  const botMessage1 = this.createChatBotMessage("1. Cybersecurity Roadshow");
  const botMessage2 = this.createChatBotMessage(" 2. Hackathon in collab with IASC ");
  const botMessage3 = this.createChatBotMessage("3. DSA in December");
  const botMessage4 = this.createChatBotMessage(" 4. Flutter Tech Talk");
  const botMessage5 = this.createChatBotMessage("and many more. \nYou can learn more about the past events of the club in the past events section of the website.");
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
  this.addmessagetostate(botMessage5);
};

future_events = () => {
  const botMessage = this.createChatBotMessage("You can learn about all the upcoming events in the UPCOMING EVENTS section of the website."
  );

  const botMessage1 = this.createChatBotMessage("Get updates about all the recent events of the club on your mail by becoming a member. Start by clikcing the button!!"
  );
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

register = () => {
  const botMessage = this.createChatBotMessage("You can directly be a part of any event conducted by GDSC just by clicking on RSVP and filling your details. You will then receive a confirmation mail on the given mailid."
  );
  this.addmessagetostate(botMessage);
};

some_comp = () => {
  const botMessage = this.createChatBotMessage("Sorry I cannot provide you the information of this event. Try searching it in the upcoming or past events section of the website."
  );
  this.addmessagetostate(botMessage);
};

whygdsc = () => {
  const botMessage = this.createChatBotMessage("Joining a GDSC chapter can provide several benefits, including:"
  );
  const botMessage1 = this.createChatBotMessage("1. GDSCs offer a variety of workshops, events, and activities that can help you develop your technical and professional skills, opportunity to learn about Google technologies and other tools used in the industry.");
  const botMessage2 = this.createChatBotMessage("2. GDSCs provide a great way to meet other students who share your interests in technology and connect with professionals in the tech industry. You'll be able to build your network and gain valuable contacts for future job opportunities.");
  const botMessage3 = this.createChatBotMessage("3. GDSCs often offer opportunities to work on real-world projects, participate in hackathons, and attend industry events. ");
  const botMessage4 = this.createChatBotMessage("4. GDSCs have access to resources provided by Google, including training materials, development tools, and other resources that can be useful in your studies and future career.");
  const botMessage5 = this.createChatBotMessage("5. GDSCs are run by student leaders, which means you'll have the opportunity to develop your leadership skills by organizing events and activities for the club.");
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
  this.addmessagetostate(botMessage5);
};

whygdsc_btn = () => {
  const chatmsg = createClientMessage("Why should I join GDSC?");
  const botMessage = this.createChatBotMessage("Joining a GDSC chapter can provide several benefits, including:"
  );
  const botMessage1 = this.createChatBotMessage("1. GDSCs offer a variety of workshops, events, and activities that can help you develop your technical and professional skills, opportunity to learn about Google technologies and other tools used in the industry.");
  const botMessage2 = this.createChatBotMessage("2. GDSCs provide a great way to meet other students who share your interests in technology and connect with professionals in the tech industry. You'll be able to build your network and gain valuable contacts for future job opportunities.");
  const botMessage3 = this.createChatBotMessage("3. GDSCs often offer opportunities to work on real-world projects, participate in hackathons, and attend industry events. ");
  const botMessage4 = this.createChatBotMessage("4. GDSCs have access to resources provided by Google, including training materials, development tools, and other resources that can be useful in your studies and future career.");
  const botMessage5 = this.createChatBotMessage("5. GDSCs are run by student leaders, which means you'll have the opportunity to develop your leadership skills by organizing events and activities for the club.");
  this.addmessagetostate(chatmsg);
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
  this.addmessagetostate(botMessage2);
  this.addmessagetostate(botMessage3);
  this.addmessagetostate(botMessage4);
  this.addmessagetostate(botMessage5);
};

end = () => {
  const botMessage = this.createChatBotMessage("It was nice talking to you! \n Hope our conversation helped you. \n Feel free to talk to me if you need anything else!!"
  );
  const botMessage1 = this.createChatBotMessage("Have a nice day!!");
  this.addmessagetostate(botMessage);
  this.addmessagetostate(botMessage1);
};

  addmessagetostate = (message) => {
    this.setState((prevstate) => ({
      ...prevstate,
      messages: [...prevstate.messages,message],
    }));
  }
}

export default ActionProvider;