import React from "react";
import "./PageTwo.scss";
import Button from "../../Button/Button";

const PageTwo = () => {
return (
     <div className="create-event-info-page" >
        <div className="event-info-header">
            <h3 className="create-event-info__step">Step 02</h3>
            <h1 className="create-event-info__title">Event Information (2/2)</h1>
        </div>
        <div className="event-info-form">

            <div className="form" id="info-form">
                <h4 className="form__title"> Event Heading </h4>
                <input className="form__input" type="text" placeholder="If This Is Your First Bach, the Universe And Everyt...">
                </input>
                <h4 className="form__title"> Add Quote / Note (optional) </h4>
                <input className="form__input" type="text" placeholder="A note from our principal Keyboard Stephen.."/>
                <h4 className="form__title"> Add Quote Caption (optional) </h4>
                <input type="text" className="form__input"  />
            </div>
            <div className="description form" >
                <h4 className="description__title form__title"> Event Description </h4>
                <input className=" description__input form__input" id="description" width="100" rows="80" placeholder="We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced contatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is this spirit that we cae together for a thought provoking contata and a talk..."/>
                <div className="description__button form__button">
                <Button buttonType="secondary" buttonText="Back"className="secondary"/>
                <Button buttonType="primary"
              buttonText="Next"className="primary"/>
            </div>
            </div>
            
        </div>
     </div>
        )
    }
export default PageTwo