// import React from 'react';



class MessageParser {
  constructor(ActionProvider){
    this.ActionProvider = ActionProvider;
  }

  parse(message) {
    const message1 = message.toLowerCase();
    if (message1.includes('hello') || message1.includes('hi') || message1.includes('hey') || message1.includes('hola') || message1.includes('excuse') || message1.includes('i am') || message1.includes('myself')) {
            this.ActionProvider.handleHello();
          }

    else if(message1.includes('head') || message1.includes('manages')){
      this.ActionProvider.handle();
    }

    else if (message1.includes('chapter')) {
          this.ActionProvider.chapter();
        }

    else if (message1.includes('role') && message1.includes('coordinator')){
      this.ActionProvider.role_coordinator();
    }

    else if (message1.includes('role') && message1.includes('faculty')){
      this.ActionProvider.role_faculty();
    }

    else if ((message1.includes('join') || message1.includes('contribute')) && (message1.includes('multiple') || message1.includes('more than one') || message1.includes   ('many')) && message1.includes('chapters')) {
            this.ActionProvider.ques2();
        }
    else if ((message1.includes('register') || message1.includes('participate'))){
            this.ActionProvider.register();
        }
    else if (message1.includes('lead' && 'do')) {
            this.ActionProvider.leadwork();
    }
    else if (( message1.includes('gdsc')) && message1.includes('why')) {
      this.ActionProvider.whygdsc();
    }

    else if ((message1.includes('gdsc'))) {
      this.ActionProvider.def();
    }

    else if (message1.includes('join')) {
      this.ActionProvider.who();
    }

    else if ((message1.includes('start') || message1.includes('form')) && ((message1.includes('club') || message1.includes('chapter')))){
      this.ActionProvider.makeclub();
    }


    else if (message1.includes('workshop')){
      this.ActionProvider.workshop();
    }
    else if (message1.includes('project')){
      this.ActionProvider.project();
    }


    else if ((message1.includes('colab'))){
      this.ActionProvider.collab();
    }

    else if ((message1.includes('faculty') || message1.includes('teacher') || message1.includes('professor')) && message1.includes('join') && (message1.includes('gdsc') || message1.includes('club'))){
      this.ActionProvider.join_faculty();
    }

    else if ((message1.includes('benefits') || message1.includes('advantages') || message1.includes('why')) && message1.includes('gdsc') && message1.includes('lead')){
      this.ActionProvider.become_lead();
    }

    else if ((message1.includes('lead') || message1.includes('head') || message1.includes('spcialist'))){
      this.ActionProvider.join_lead();
    }

    else if ((message1.includes('coordinator') || message1.includes('core') || message1.includes('subteam'))){
      this.ActionProvider.join_coordinator();
    }

    else if ((message1.includes('member') || message1.includes('volunteer') || message1.includes('participant'))){
      this.ActionProvider.join_member();
    }


    else if ((message1.includes('commitment') || message1.includes('devote') || message1.includes('invest')) && (message1.includes('much') || message1.includes('time'))){
      this.ActionProvider.time();
    }

    else if ((message1.includes('past') || message1.includes('previous')) && message1.includes('events')){
      this.ActionProvider.past_events();
    }

    else if ((message1.includes('future') || message1.includes('upcoming')) && message1.includes('events')){
      this.ActionProvider.future_events();
    }



    else if (message1.includes('camp') || message1.includes('challenge') || message1.includes('tech') || message1.includes('thon') || message1.includes('development') || message.includes('session')){
      this.ActionProvider.some_comp();
    }

    else if (message1.includes('bye') || message1.includes('done') || message1.includes('thankyou') || message1.includes('end')){
      this.ActionProvider.end();
    }

    else{
      this.ActionProvider.exception();
    }
  }
}

export default MessageParser;