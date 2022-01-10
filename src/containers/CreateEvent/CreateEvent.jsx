import React, { useState } from "react";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";
import ThemePicker from "../../components/ThemePicker/ThemePicker";
import PageOne from '../../components/EventInfoForm/PageOne/PageOne';
import PageTwo from '../../components/EventInfoForm/PageTwo/PageTwo';

const CreateEvent = () => {""
     let event = {
            name: "",
            series: "",
            time: "",
            date: "",
            location: "",
            imageSrc: "",
            imageAlt: "",
            featuredEvent: true,
            intro: {
                heading:
                    "",
                content:
                    "",
                quote: "",
                quoteCaption: null,
            },
            schedule: [
                {
                    name: "",
                    title: null,
                    author: null,
                    description: null,
                    alternateDescription: null,
                },
                {
                    name: "",
                    title: "",
                    author: "",
                    description: "",
                    alternateDescription: "", // This is used for any lyric translations. It will create a tab in the component that the end-user can switch between.
                },
            ],
            orchestra: [{}],
            theme: {
                templateTheme: "", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
                primaryColor: "", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
                accentColor: "", // Accent Colour is used to style the call-to-action buttons.

            },
        };
    
    const [step, setStep] = useState(0);

    const incrementStep = () => {
        setStep(step + 1);
    }

    return (
        <div className="create-event">
            <EventFlow/>
            {
                step == 0 ? <PageOne handleSubmit={incrementStep} /> : null
            }
            {
                step == 1 ? <PageTwo handleSubmit={incrementStep} /> : null 
            }
            {
                step == 2 ? <ScheduleForm handleSubmit={incrementStep} /> : null
            }
            {
                step == 3 ? <ThemePicker handleSubmit={incrementStep} /> : null
            }
        </div>
    )
}
export default CreateEvent;
