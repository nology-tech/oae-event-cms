import React, { useState } from "react";
import "./PageTwo.scss";
import Button from "../../Button/Button";
import TextareaAutosize from "react-textarea-autosize";

const PageTwo = (props) => {
  const formData = props.formData;
  const handleBack = props.handleSubmitBack;
  const handleNext = props.handleSubmit;
  const [eventContentArr, setEventContentArr] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = {
      step: 1,
      intro: eventContentArr,
    };
    handleNext(formData);
  };
  const handleAdd = (event) => {
    // 1. Add the new item ot the schedule array for later
    event.preventDefault();
    const formData = {
      heading: event.target.heading.value,
      content: event.target.content.value,
    };

    event.target.heading.value = "";
    event.target.content.value = "";

    setEventContentArr([...eventContentArr, formData]);
    console.log(eventContentArr);
  };

  const eventcontentArrHtml = eventContentArr.map((eventContent, i) => (
    <div key={i} className="event-content-list__cards-row">
      <h5 className="event-content-list__cards-row-title">
        {eventContent.heading}
      </h5>
    </div>
  ));

  return (
    <>
      <form className="eventInfo" onSubmit={handleAdd}>
        <div className="eventInfo__pageTwo-form__main">
          <section className="eventInfo__pageTwo-form form" id="info-form">
            <div className="form__title">
              <h3 className="form__title-step">Step 02</h3>
              <h2 className="form__title-main">Event Information (2/2)</h2>
            </div>
            <div className="form__section">
              <label className="form__label"> Heading </label>
              <input
                name="heading"
                className="form__input"
                type="text"
                defaultValue={formData?.heading}
              />
            </div>
            <div className="form__section">
              <label className="form__label"> Text </label>
              <TextareaAutosize
                name="content"
                className="form__input"
                defaultValue={formData?.content}
                placeholder="A note from our principal Keyboard Stephen.."
              />
            </div>
            <div className="schedule-form__buttons form__buttons">
              <Button
                buttonType="tertiary"
                buttonText="Add"
                className="form__buttons-add"
                type="submit"
              />
              <Button
                type="submit"
                buttonType="secondary"
                onClick={handleBack}
                buttonText="Back"
                className="form__buttons-next"
              />
              <Button
                type="button"
                buttonType="primary"
                onClick={handleSubmit}
                buttonText="Next"
                className="form__buttons-next"
              />
            </div>
          </section>
        </div>
      </form>

      {eventcontentArrHtml.length !== 0 ? (
        <>
          <div className="schedule-list">
            <h4 className="schedule-list__title">Event Content</h4>
            <div className="schedule-list__cards">{eventcontentArrHtml}</div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default PageTwo;
