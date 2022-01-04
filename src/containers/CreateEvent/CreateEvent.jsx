import React from "react";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";
import {Route, Routes } from "react-router-dom";


const CreateEvent = () => {
    return (
        <div className="create-event__container">
           <EventFlow/>
              <Routes>
                  <Route path="/" element={<ScheduleForm/>} />
                  <Route path="/event-info-2"/>
                  <Route path="/event-schedule" element={<ScheduleForm/>} />
                  <Route path="/event-theme" />
              </Routes>  
        </div>
    )
}
export default CreateEvent;
