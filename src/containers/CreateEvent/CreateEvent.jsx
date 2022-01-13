import React, { useState, useEffect } from "react";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";
import ThemePicker from "../../components/ThemePicker/ThemePicker";
import PageOne from '../../components/EventInfoForm/PageOne/PageOne';
import PageTwo from '../../components/EventInfoForm/PageTwo/PageTwo';

const CreateEvent = () => {
    const [event, setEvent] = useState({});

    // let event = {
    //         name: "",
    //         series: "",
    //         time: "",
    //         date: "",
    //         location: "",
    //         imageSrc: "",
    //         imageAlt: "",
    //         featuredEvent: true,
    //         intro: {
    //             heading:
    //                 "",
    //             content:
    //                 "",
    //             quote: "",
    //             quoteCaption: null,
    //         },
    //         schedule: [],
    //         orchestra: [{}],
    //         theme: {
    //             templateTheme: "", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
    //             primaryColor: "", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
    //             accentColor: "", // Accent Colour is used to style the call-to-action buttons.

    //         },
    //     };


    const handleStepZero = (data) => {
        // Merge form data with event object
        setEvent({
            name: data.name,
            series: data.series,
            time: data.time,
            date: data.date,
            location: data.location,
            imageSrc: data.imageSrc
        })        
        incrementStep();
    }

    const handleStepOne = (data) => {
        const introData = {
            heading: data.heading,
            quote: data.quote,
            quoteCaption: data.quoteCaption,
            content: data.content
        }
        setEvent({
            ...event,
            intro: introData
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
                templateTheme: data.fontType,
                primaryColor: data.themeColor,
                accentColor: data.accentColor
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
   
    useEffect(() => {
        console.log("There was an event change");
        console.log(event);
    }, [event])

    return (
        
        <div className="create-event">
            <EventFlow/>
            <button onClick={() => console.log(event)}>click me </button>
            {
                step === 0 ? <PageOne data={event} handleSubmit={handleStepZero} /> : null
            }
            {
                step === 1 ? <PageTwo handleSubmit={handleStepOne}
                handleSubmitBack={step => decrementStep(step)} /> : null
            }
            {
                step === 2 ? <ScheduleForm handleSubmit={handleStepTwo} 
                handleSubmitBack={step => decrementStep(step)} />: null
            }
            {
                step === 3 ? <ThemePicker handleSubmit={handleStepThree} handleSubmitBack={step => decrementStep(step)}/> : null
            }
        </div>
           )
    }
export default CreateEvent;
