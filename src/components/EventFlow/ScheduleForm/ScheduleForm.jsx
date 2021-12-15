import React from "react";
import Button from "../../Button/Button";
import "./ScheduleForm.scss"
import "../../../assets/styles/layout/_forms.scss"

const ScheduleForm = () => {
  return (
    <>
    <form className ="schedule-form form-section">
      <div className="schedule-form__titles">
        <h3>Step 02</h3>
        <h2>Add schedule</h2>
      </div>
      <div className="schedule-form__name form-section">  
        <label for="name" className="form-label">Name</label>
        <input type="text" id="name" name="name" className="form-input"></input>
      </div>
      <div className="schedule-form__title form-section">
        <label for="title" className="form-label">Title (optional)</label>
        <input type="text" id="title" name="title" className="form-input"></input>
      </div>
      <div className="schedule-form__author form-section">
        <label for="author" className="form-label">Author (optional)</label>
        <input type="text" id="author" name="author" className="form-input"></input>
      </div>
      <div className="schedule-form__description form-section">
        <label for="description" className="form-label">Description</label>
        <input type="text" id="description" name="description" className="form-input"></input>
      </div>  
      <div className = "schedule-form__alternate-description form-section">
        <label for="alternate-description" className="form-label">
            Alternate Description (optional)
        </label>
        <input type="text" id="alternate-description" name="alternate-description" className="form-input" placeholder="E.g.Lyric Translations"></input>
      </div>
      <div className="schedule-form__buttons form-section"> 
        <Button buttonType="tertiary" buttonText="Add" />
        <Button buttonType="primary" buttonText="Next" />
      </div>
    </form>
    </>
  );
};

export default ScheduleForm;