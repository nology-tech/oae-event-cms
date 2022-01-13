import React, { useState } from"react";
import "./EventFlow.scss";
import {ReactComponent as InfoIcon} from "../../assets/images/info-icon.svg";
import {ReactComponent as ScheduleIcon} from "../../assets/images/music-list-circle.svg";
import {ReactComponent as OrchestraIcon} from "../../assets/images/single-note-circle.svg";
import {ReactComponent as ThemeIcon} from "../../assets/images/paintbrush-circle.svg";
import {ReactComponent as TickIcon} from "../../assets/images/tick-circle.svg";

const EventFlow = () => {
const [ completed, setCompleted ] = useState(true);

const handleClick = () => {
    setCompleted(!completed);
};

return (
    <div className="event-flow">
        <h1 className="event-flow__title">Create Event</h1>
        <div className="event-flow__step">
            <div className="event-flow__step-text">
                <h4 className="event-flow__step-text-title">Event Information 1</h4>
                <p className="event-flow__step-text-info">Name, Date,  Time, Description etc</p>
                <InfoIcon/>
            </div>
            <div className="event-flow__step-text">
                <h4 className="event-flow__step-text-title">Event Information 2</h4>
                <p className="event-flow__step-text-info">Name, Date,  Time, Description etc</p>
                <InfoIcon/>
            </div>
            <div className="event-flow__step-text">
                <h4 className="event-flow__step-text-title">Add Schedule</h4>
                <p className="event-flow__step-text-info">Name, Date,  Time, Description etc</p>
                <InfoIcon/>
            </div>
            <div className="event-flow__step-text">
                <h4 className="event-flow__step-text-title">Choose Theme</h4>
                <p className="event-flow__step-text-info">Name, Date,  Time, Description etc</p>
                <InfoIcon/>
            </div>
            <div className="event-flow__step-text">
                <h4 className="event-flow__step-text-title">Review</h4>
                <p className="event-flow__step-text-info">Name, Date,  Time, Description etc</p>
                <InfoIcon/>
            </div>
        </div>
    </div>
        )
    }
;
 export default EventFlow ;