import React from"react";
import "./EventFlow.scss";
import {ReactComponent as InfoIcon} from "../../assets/images/info-icon.svg";
import {ReactComponent as ScheduleIcon} from "../../assets/images/music-list-circle.svg";
import {ReactComponent as OrchestraIcon} from "../../assets/images/single-note-circle.svg";
import {ReactComponent as ThemeIcon} from "../../assets/images/paintbrush-circle.svg";
import {ReactComponent as TickIcon} from "../../assets/images/tick-circle.svg";



const EventFlow = () => {
    
//3 columns six rows, text 1 to 3, icons 3-4
return (
    <div className="event-flow_container">
     
        <h3 className="event-flow__text" >Event Information</h3>
        <p className="event-flow__text">Name, Date,  Time, Description etc</p>
        <InfoIcon className="event-flow__icon" id="infoIcon"/>


        <h3 className="event-flow__text1">Add Schedule</h3>
        <p className="event-flow__text1">Order of Play, Lyrics, Speeches etc</p>
        <ScheduleIcon className="event-flow__icon1" id="scheduleIcon"/>


        <h3 className="event-flow__text2">Add Orchestra</h3>
        <p className="event-flow__text2">Instruments, Choir, Speakers</p>
        <OrchestraIcon className="event-flow__icon2"/>


        <h3 className="event-flow__text3">Choose Theme</h3>
        <p className="event-flow__text3">Colors, Fonts etc</p>
        <ThemeIcon className="event-flow__icon3"/>


        <h3 className="event-flow__text4">Review</h3>
        <p className="event-flow__text4">Colors, Fonts etc</p>
        <TickIcon className="event-flow__icon4"/>
        
    </div>
    )
}
 export default EventFlow 