import React, { useState } from "react";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";
import ThemePicker from "../../components/ThemePicker/ThemePicker";


const CreateEvent = () => {

    const [step, setStep] = useState(0);

    const incrementStep = () => {
        setStep(step + 1);
    }

    return (
        <div className="create-event">
            <EventFlow/>
            {
                step == 0 ? <ScheduleForm handleSubmit={incrementStep} /> : null
            }
            {
                step == 1 ? <ThemePicker handleSubmit={incrementStep} /> : null
            }
            {
                step == 2 ? <h2>Step 3</h2> : null
            }
        </div>
    )
}
export default CreateEvent;
