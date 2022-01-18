import React, { useEffect, useState } from "react";
import "./PageTwo.scss";
import Button from "../../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import {ReactComponent as EditIcon} from '../../../assets/images/edit-icon.svg';
import {ReactComponent as BinIcon} from '../../../assets/images/bin-icon.svg';

const PageTwo = (props) => {
  const formData = props.formData;
  const handleBack = props.handleSubmitBack;
  const handleNext = props.handleSubmit;
  const [eventContentArr, setEventContentArr] = useState(formData.intro);
  const [eventContentArrHtml, setEventContentArrHtml] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = {
      step: 1,
      intro: eventContentArr
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
        <Button buttonType="icon" className="schedule-list__cards-row-buttons-link" onClick={() => handleRemove(i)} buttonText={<BinIcon className=""/>}></Button>
      </div>
    ));
      setEventContentArrHtml(html)

  }, [eventContentArr])
  


  return (
    <>
      <div className="event-info-2">
        <form className="event-info-2-form form" onSubmit={handleAdd}>
          <div className="form__title">
            <h3 className="form__title-step">Step 02</h3>
            <h2 className="form__title-main">Event Information (2/2)</h2>
          </div>
          <div className="form__section">
            <label className="form__label">Heading</label>
            <input
              name="heading"
              className="form__input"
              type="text"
              defaultValue={formData?.heading}
            />
          </div>
          <div className="form__section">
            <label className="form__label">Text</label>
            <TextareaAutosize
              name="content"
              className="form__input"
              defaultValue={formData?.content}
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
