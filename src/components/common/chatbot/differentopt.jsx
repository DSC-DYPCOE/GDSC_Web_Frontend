
import React,{useState} from 'react';


const Hellomsgw = (props) => {
  const [buttonClass, setButtonClass] = useState([
    { id: props.hellomsg[0],
      handler: () => props.actionProvider.def_btn(),
      class: 'showoptions' },
    { id: props.hellomsg[1],
      handler: () => props.actionProvider.who_btn(),
       class: 'showoptions' },
    { id: props.hellomsg[2],
      handler: () => props.actionProvider.whygdsc_btn(),
       class: 'showoptions' },
    { id: props.hellomsg[3],
      handler: () => props.actionProvider.chapter_btn(),
       class: 'showoptions' }
  ]);
  setButtonClass();
  const setbutton = buttonClass.map((title) => {
    return <button className={title.class} key={title.id} onClick={title.handler}>{title.id}</button>
  })
  return (
    <div className='buttonholder'>
      {setbutton}
      
    </div>
  )
};

const Leaddo = (props) => {
  const [buttonClass, setButtonClass] = useState([
    { id: props.leadwork[0],
      handler: () => props.actionProvider.makeclub_btn(),
      class: 'showoptions' },
    { id: props.leadwork[1],
      handler: () => props.actionProvider.workshop_btn(),
       class: 'showoptions' },
    { id: props.leadwork[2],
      handler: () => props.actionProvider.project_btn(),
       class: 'showoptions' },
    { id: props.leadwork[3],
      handler: () => props.actionProvider.collab_btn(),
       class: 'showoptions' }
  ]);
  setButtonClass();

  const setbutton = buttonClass.map((title) => {
    return <button className={title.class} key={title.id} onClick={title.handler}>{title.id}</button>
  })
  return (
    <div className='buttonholder'>
      {setbutton}
      
    </div>
  )
};

const Allmem = (props) => {
  const [buttonClass, setButtonClass] = useState([
    { id: props.who[0],
      handler: () => props.actionProvider.join_faculty_btn(),
      class: 'showoptions' },
    { id: props.who[1],
      handler: () => props.actionProvider.join_lead_btn(),
       class: 'showoptions' },
    { id: props.who[2],
      handler: () => props.actionProvider.join_coordinator_btn(),
       class: 'showoptions' },
    { id: props.who[3],
      handler: () => props.actionProvider.join_member_btn(),
       class: 'showoptions' }
  ]);
  setButtonClass();

  const setbutton = buttonClass.map((title) => {
    return <button className={title.class} key={title.id} onClick={title.handler}>{title.id}</button>
  })
  return (
    <div className='buttonholder'>
      {setbutton}
      
    </div>
  )
};

export {Hellomsgw,Leaddo,Allmem};