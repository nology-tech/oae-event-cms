import React from "react";
import "./PageTwo.scss";
import Button from "../../Button/Button";

const PageTwo = (props) => {
    const data = props.data;
    const handleBack = props.handleSubmitBack;
    const handleNext = props.handleSubmit;

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            step: 1,
            heading: event.target.heading.value,
            quote: event.target.quote.value,
            quoteCaption: event.target.quoteCaption.value,
            content: event.target.eventDescription.value
          }
        handleNext(formData);
    }

    return (
     <form className="create-event-info-page" onSubmit={handleSubmit}>
       
        <div className="event-info-form">
        
            <div className="form" id="info-form">
                <div className="form__title">
                    <h3 className="form__title-step">Step 02</h3>
                    <h2 className="form__title-main">Event Information (2/2)</h2>
                </div>
                <div className="form__section">
                    <label className="form__label"> Event Heading </label>
                    <input name="heading" className="form__input" type="text" value={data?.heading} placeholder="If This Is Your First Bach, the Universe And Everyt...">
                    </input>
                </div>
                <div className="form__section">
                    <label className="form__label"> Add Quote / Note (optional) </label>
                    <input name="quote" className="form__input" type="text" value={data?.quote} placeholder="A note from our principal Keyboard Stephen.."/>
                </div>
                <div className="form__section">
                    <label className="form__label"> Add Quote Caption (optional) </label>
                    <input name="quoteCaption" type="text" value={data?.quoteCaption} className="form__input"  />
                </div>
            </div>
            <div className="description form" >
                <label className="description__label form__label"> Event Description </label>
                <input name="eventDescription" className=" description__input form__input" id="description" width="100" rows="80" placeholder="We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced contatas at..."  value={data?.content}/>
                <div className="description__button form__button">
                    <button className="form__button-back secondary" type="submit" onClick={handleBack}>Back</button>
                    <Button buttonType="primary"
                    buttonText="Next"className="primary"/>
                </div>
            </div>
        </div>
     </form>
     )
    }
export default PageTwo