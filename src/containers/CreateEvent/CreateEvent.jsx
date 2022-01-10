import React, { useState } from "react";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";
import ThemePicker from "../../components/ThemePicker/ThemePicker";
import PageOne from '../../components/EventInfoForm/PageOne/PageOne';
import PageTwo from '../../components/EventInfoForm/PageTwo/PageTwo';

const CreateEvent = () => {

    // pageNum
    const [step, setStep] = useState(0);

    const incrementStep = () => {
        setStep(step + 1);
    }

    // need to use useEffect to refresh this function when data is updated
    const pull_data = (data) => {
        console.log(data);
    }

    return (
        <div className="create-event">
            <EventFlow func={pull_data}/>
            {
                step === 0 ? <PageOne handleSubmit={incrementStep} /> : null
            }
            {
                step === 1 ? <PageTwo handleSubmit={incrementStep} /> : null 
            }
            {
                step === 2 ? <ScheduleForm handleSubmit={incrementStep} /> : null
            }
            {
                step === 3 ? <ThemePicker handleSubmit={incrementStep} /> : null
            }
        </div>
    )
}
export default CreateEvent;
