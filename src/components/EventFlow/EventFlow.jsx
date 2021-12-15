import React, { useState } from"react";
import "./EventFlow.scss";
import {ReactComponent as InfoIcon} from "../../assets/images/info-icon.svg";
import {ReactComponent as ScheduleIcon} from "../../assets/images/music-list-circle.svg";
import {ReactComponent as OrchestraIcon} from "../../assets/images/single-note-circle.svg";
import {ReactComponent as ThemeIcon} from "../../assets/images/paintbrush-circle.svg";
import {ReactComponent as TickIcon} from "../../assets/images/tick-circle.svg";



const EventFlow = () => {

const [ completed, setCompleted ] = useState(true);
//const handleClick = () => {
    //this.setCompleted({ completed: true})

const handleClick = () => {
    setCompleted(!completed);
};


//3 columns six rows, text 1 to 3, icons 3-4
return (
    <div className="event-flow__container">
        <h1 className="event-flow__title"> create event</h1>
        <h3 className="event-flow__header1" >Event Information</h3>
        <p className="event-flow__text1">Name, Date,  Time, Description etc</p>
        
            {useState.completed ? <InfoIcon className="event-flow__icon1" id="icon" onClick={handleClick} /> 
            : <InfoIcon className="event-flow__icon1" id="icon" onClick={handleClick} /> }
      

        <h3 className="event-flow__header2">Add Schedule</h3>
        <p className="event-flow__text2">Order of Play, Lyrics, Speeches etc</p>
        
            {useState.completed ? <ScheduleIcon className="event-flow__icon2" id="icon" onClick={handleClick} /> 
            : <ScheduleIcon className="event-flow__icon2" id="icon" onClick={handleClick} /> }
   


        <h3 className="event-flow__header3">Add Orchestra</h3>
        <p className="event-flow__text3">Instruments, Choir, Speakers</p>

            {useState.completed ? <OrchestraIcon className="event-flow__icon3" id="icon" onClick={handleClick} /> 
            : <OrchestraIcon className="event-flow__icon3" id="icon" onClick={handleClick} /> }
      


        <h3 className="event-flow__header4">Choose Theme</h3>
        <p className="event-flow__text4">Colors, Fonts etc</p>
     
            {useState.completed ? <ThemeIcon className="event-flow__icon4" id="icon" onClick={handleClick} /> 
            : <ThemeIcon className="event-flow__icon4" id="icon" onClick={handleClick} /> }
  
    

        <h3 className="event-flow__header5">Review</h3>
        <p className="event-flow__text5">Colors, Fonts etc</p>
     
            {useState.completed ? <TickIcon className="event-flow__icon5" id="icon" onClick={handleClick} /> 
            : <TickIcon className="event-flow__icon5" id="icon" onClick={handleClick} /> }
   
    </div>
    )
    }
;
 export default EventFlow ;