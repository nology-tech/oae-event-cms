import React, { useEffect } from"react";
import "./EventFlow.scss";
import {ReactComponent as InfoIcon} from "../../assets/images/info-icon.svg";
import {ReactComponent as ScheduleIcon} from "../../assets/images/music-list-circle.svg";
import {ReactComponent as ThemeIcon} from "../../assets/images/paintbrush-circle.svg";
import {ReactComponent as TickIcon} from "../../assets/images/tick-circle.svg";

const EventFlow = (props) => {
const {step} = props;

useEffect(()=>{
    switch(step){
        case 0:
            // set all to grey
            console.log("All grey")
            break;
        case 1: 
            // first to primary
            console.log("1")
            break;
        case 2: 
            // first&second to primary
            console.log("2")
            break;
        case 3: 
            // first&second&third to primary
            console.log("3")
            break;
        case 4: 
            // set all but last to primary
            console.log("4")
            break;
        default: 
            // set all grey
            console.log("All grey")
            break;
    }
},[step])

return (
    <div className="event-flow">
        <h3 className="event-flow__title">Create Event</h3>
        <div className="event-flow__step">
            <div className="event-flow__step-text">
                <h5 className="event-flow__step-text-title">Event Information</h5>
                <p className="event-flow__step-text-info">Name, Date,  Time, Description etc</p>
            </div>
            <InfoIcon className="event-flow__step-text-icon"/>
        </div>
        <div className="event-flow__step">
            <div className="event-flow__step-text">
                <h5 className="event-flow__step-text-title">Headings</h5>
                <p className="event-flow__step-text-info">Section headings</p>
            </div>
            <InfoIcon className="event-flow__step-text-icon"/>
        </div>
        <div className="event-flow__step">
            <div className="event-flow__step-text">
                <h5 className="event-flow__step-text-title">Add Schedule</h5>
                <p className="event-flow__step-text-info">When is this happening?</p>                
            </div>
            <ScheduleIcon className="event-flow__step-text-icon"/>
        </div>
        <div className="event-flow__step">
            <div className="event-flow__step-text">
                <h5 className="event-flow__step-text-title">Choose Theme</h5>
                <p className="event-flow__step-text-info">Customise the look and feel</p>                
            </div>
            <ThemeIcon className="event-flow__step-text-icon"/>
        </div>
        <div className="event-flow__step">
            <div className="event-flow__step-text">
                <h5 className="event-flow__step-text-title">Review</h5>
                <p className="event-flow__step-text-info">Final edits and checks</p>               
            </div>
            <TickIcon className="event-flow__step-text-icon"/>
        </div>
    </div>
        )
    }
;
 export default EventFlow ;