import React, { useEffect, useState } from "react";
import "./PageTwo.scss";
import Tooltip from "../../Tooltip/Tooltip";
import Button from "../../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import EditIconButton from "../../IconButton/EditIconButton/EditIconButton";
import BinIconButton from "../../IconButton/BinIconButton/BinIconButton";

const PageTwo = (props) => {
  const formData = props.formData;
  const handleBack = props.handleSubmitBack;
  const handleNext = props.handleSubmit;
  const [eventContentArr, setEventContentArr] = useState(formData.content);
  const [eventContentArrHtml, setEventContentArrHtml] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = {
      step: 1,
      content: eventContentArr
    };
    handleNext(formData);
  };
  const handleAdd = (event) => {
    // 1. Add the new item ot the schedule array for later
    event.preventDefault();
    const formData = {
      heading: event.target.heading.value,
      text: event.target.text.value,
    };

    event.target.heading.value = "";
    event.target.text.value = "";

    setEventContentArr([...eventContentArr, formData]);
    console.log(eventContentArr);
  };

  useEffect(() => {
    const handleRemove = (id) => {
      eventContentArr.splice(id, 1);
      setEventContentArr([...eventContentArr]);
    }

    const html = eventContentArr.map((eventContent, i) => (
      <div key={i} className="event-content-list__cards-row">
        <h5 className="event-content-list__cards-row-title">
          {eventContent.heading}
        </h5>
        <BinIconButton buttonType="icon" className="schedule-list__cards-row-buttons-link" onClick={() => handleRemove(i)}/>
        <EditIconButton buttonType="icon" className="schedule-list__cards-row-buttons-link"/>
      </div>
    ));
      setEventContentArrHtml(html)

  }, [eventContentArr])
  


  return (
    <>
      <div className="event-info-2">
        <form className="event-info-2-form form" onSubmit={handleAdd}>
          <div className="form__title">
            <h3 className="form__title-step">Headings</h3>
            <h2 className="form__title-main">Divide the event into headings</h2>
          </div>
          <div className="form__section">
            <label className="form__label">
              Heading &nbsp;
              <Tooltip className="tooltip" tipTitle="Event Heading" tipDesc="This will be the opening header element on the event homepage, e.g.
                                        If this is your first Bach, the Universe & Everything (BAE), welcome!" />
            </label>

            <input
              name="heading"
              className="form__input"
              type="text"
              defaultValue={formData?.heading}
            />
          </div>
          <div className="form__section">
            <label className="form__label">
              Text &nbsp;
              <Tooltip className="tooltip" tipTitle="Event Text" tipDesc="This will be the description used on the event homepage, e.g. 
                    We like to think of the series as a community" />
            </label>
            <TextareaAutosize
              name="text"
              className="form__input"
              defaultValue={formData?.text}
            />
          </div>
          <div className="event-info-2-form__buttons">
            <Button
              buttonType="tertiary"
              buttonText="Add"
              className="form__buttons-add"
              type="submit"
            />
            <div className="event-info-2-form__buttons-nav">
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
          </div>
        </form>
        {eventContentArrHtml.length !== 0 ? (
          <>
            <div className="event-info-2-list">
              <h4 className="event-info-2-lis__title">Event Content</h4>
              <div className="event-info-2-list__cards">{eventContentArrHtml}</div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default PageTwo;
