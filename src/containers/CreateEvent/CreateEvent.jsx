import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";
import ThemePicker from "../../components/ThemePicker/ThemePicker";
import PageOne from '../../components/EventInfoForm/PageOne/PageOne';
import PageTwo from '../../components/EventInfoForm/PageTwo/PageTwo';
import Review from '../../components/Review/Review';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {

    const [event, setEvent] = useState({
        content: [],
        // Note: How is this used?
        featuredEvent: true
    });

    // 1. Get the id of the event we're editing (if we're editting)
    const navigate = useNavigate();
    const params = useParams();
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        setIsEdit(params.id != null);
        const id = params.id;

        // use the API to GET the event with this id
        fetch("https://aoeo-338811.ey.r.appspot.com/events/" + id)
            .then(res => res.json())
            .then(res => {
                setEvent(res);
            })
        // pass it as props to our form

    }, []);

    const handleStepZero = (data) => {
        // Merge form data with event object
        setEvent({
            name: data.name,
            series: data.series,
            time: data.time,
            date: data.date,
            location: data.location,
            venue: data.venue,
            imageSrc: data.imageSrc,
            content: event.content || [],
            schedule: event.schedule || [],
            theme: event.theme || {}
        })        
        incrementStep();
    }

    const handleStepOne = (data) => {
        setEvent({
            ...event,
            content: data.content,
        })
        incrementStep();
    }

    const handleStepTwo = (data) => {
        setEvent({
            ...event,
            schedule: data.schedule
        })
        incrementStep();
    }

    const handleStepThree = (data) => {
        setEvent({
            ...event,
            theme: {
                templateTheme: data.templateTheme,
                primaryColor: data.primaryColor,
                textColor: data.textColor,
                subtitleColor: data.subtitleColor
            }
        })
        incrementStep();
    }
    const [step, setStep] = useState(0);

    const incrementStep = () => {
        setStep(step + 1);
    }

    const decrementStep = () => {
        setStep(step - 1);
    }

    const setReviewStep = (step) => {
        setStep(step);
    }

    const handleFinalSubmit = () => {
        // if isEdit add the id
        let url = "https://aoeo-338811.ey.r.appspot.com";
        if (isEdit) {
            event.id = params.id;
            url += "/events/" + event.id;
        } else {
            url += "/events/add";
        }

        // Note: Is this property needed?
        event.featuredEvent = true;
        const fetchOptions = {
            method: isEdit ? 'PUT' : 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
          }

        fetch(url, fetchOptions)
            .then(res => {
                alert("Successfully updated the event list");
                navigate('/events');   
            })
    }

    return (
        
        <div className="create-event">
            <EventFlow step={step}/>
            {
                step === 0 ? <PageOne data={event} handleSubmit={handleStepZero} imageSrc={event.imageSrc} /> : null
            }
            {
                step === 1 ? <PageTwo formData={event} handleSubmit={handleStepOne}
                handleSubmitBack={step => decrementStep(step)} /> : null
            }
            {
                step === 2 ? <ScheduleForm handleNext={handleStepTwo} 
                handleBack={step => decrementStep(step)} data={event} />: null

            }
            {
                step === 3 ? <ThemePicker handleSubmit={handleStepThree} handleSubmitBack={step => decrementStep(step)} data={event}/> : null
            }
            {
                step === 4 ? <Review event={event} setReviewStep={setReviewStep} handleSubmit={handleFinalSubmit} /> : null
            }
        </div>
           )
    }
export default CreateEvent;
