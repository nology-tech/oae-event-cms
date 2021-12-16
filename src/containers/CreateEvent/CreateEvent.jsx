import React from "react";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";


const CreateEvent = () => {
    return (
        <div>
           <EventFlow/>
           <ScheduleForm/>
        </div>
    )
}
export default CreateEvent;
