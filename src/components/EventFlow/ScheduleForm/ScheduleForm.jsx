import React from "react";
import Button from "../../Button/Button";
import "./ScheduleForm.scss";
import TextareaAutosize from 'react-textarea-autosize';

const ScheduleForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit();
  }

  return (
    <>
    <form className ="schedule-form form" onSubmit={handleSubmit}>
     <div className="form__title">
          <h3 className="form__title-step">Step 02</h3>
          <h2 className="form__title-main">Add Schedule</h2>
      </div>

      <div className="schedule-form__name form__section">  
        <label for="name" className="form__label">Name</label>
        <input type="text" id="name" name="name" className="form__input" required></input>
      </div>
      <div className="schedule-form__title form__section">
        <label for="title" className="form__label">Title (optional)</label>
        <input type="text" id="title" name="title" className="form__input"></input>
      </div>
      <div className="schedule-form__author form__section">
        <label for="author" className="form__label">Author (optional)</label>
        <input type="text" id="author" name="author" className="form__input"></input>
      </div>
      <div className="schedule-form__description form__section">
        <label for="description" className="form__label">Description</label>
        <TextareaAutosize name="description" id="description" className="form__input" required />
      </div>  
      <div className = "schedule-form__alternate-description form__section">
        <label for="alternate-description" className="form__label">
            Alternate Description (optional)
        </label>
        <TextareaAutosize name="alternate-description" id="alternate-description" className="form__input" placeholder="E.g.Lyric Translations" cacheMeasurements
        />
      </div>
      <div className="schedule-form__buttons form__buttons"> 
        <Button buttonType="tertiary" buttonText="Add" className="form__button-add"/>
        <Button buttonType="primary" buttonText="Next" className="form__button-next" type="submit"/>
      </div>
    </form>
    </>
  );
};

export default ScheduleForm;