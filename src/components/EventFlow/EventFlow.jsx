import React, { useState } from"react";
import "./EventFlow.scss";
import {ReactComponent as InfoIcon} from "../../assets/images/info-icon.svg";
import {ReactComponent as ScheduleIcon} from "../../assets/images/music-list-circle.svg";
import {ReactComponent as OrchestraIcon} from "../../assets/images/single-note-circle.svg";
import {ReactComponent as ThemeIcon} from "../../assets/images/paintbrush-circle.svg";
import {ReactComponent as TickIcon} from "../../assets/images/tick-circle.svg";

const EventFlow = () => {
//const [ completed, setCompleted ] = useState(false);

//const handleClick = () => {
   // setCompleted(!completed);
//};

return (
    <div className="event-flow__container">
        <h1 className="event-flow__title">Create Event</h1>
        <h4 className="event-flow__header event-flow__header1" >Event Information</h4>
        <p className="event-flow__text event-flow__text1">Name, Date,  Time, Description etc</p>
            <InfoIcon className="event-flow__icon1" id="icon" /> 
        <h4 className="event-flow__header event-flow__header2">Add Schedule</h4>
        <p className="event-flow__text event-flow__text2">Order of Play, Lyrics, Speeches etc</p>
            <ScheduleIcon className="event-flow__icon2" id="icon" /> 
            
        <h4 className="event-flow__header event-flow__header3">Add Orchestra</h4>
        <p className="event-flow__text event-flow__text3">Instruments, Choir, Speakers</p>
            <OrchestraIcon className="event-flow__icon3" id="icon" />
        <h4 className="event-flow__header event-flow__header4">Choose Theme</h4>
        <p className="event-flow__text event-flow__text4">Colors, Fonts etc</p>
            <ThemeIcon className="event-flow__icon4" id="icon"/>
        <h4 className="event-flow__header event-flow__header5">Review</h4>
        <p className="event-flow__text event-flow__text5">Colors, Fonts etc</p>
            <TickIcon className="event-flow__icon5" id="icon" /> 
    </div>
        )
    }
;
 export default EventFlow ;