import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./ScheduleForm.scss";
import TextareaAutosize from 'react-textarea-autosize';

const ScheduleForm = (props) => {;

  const [scheduleArr, setScheduleArr] = useState([]);
  const [listHtml, setListHtml] = useState([]);

  // Handler for once ALL schedule items have been added
  const handleNext = (event) => {
    if (scheduleArr.length === 0){
      // Display error message
      // Return
    }

    const formData = {
      step: 2,
      schedule: scheduleArr
    }

    props.handleSubmit(formData);
  }

  // Handler for adding an INVIDIVUDAL schedule item
  const handleAdd = (event) => {
    // 1. Add the new item ot the schedule array for later
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      title: event.target.title.value,
      author: event.target.author.value,
      description: event.target.description.value,
      alternateDescription: event.target.alternateDescription.value
    }
    setScheduleArr([...scheduleArr, formData])
  }
  

  useEffect(() => {
    // 2. Generate some html/jsx to render all the schedule items on the page
    const scheduleArrHtml = scheduleArr.map((schedule, i) =>(
      <div key={i} className="schedule-list__cards-row">
        <h4>{schedule.name}</h4>
        <div className="schedule-list__cards-row-buttons">

        </div>
      </div>
      )
    )
    setListHtml(scheduleArrHtml);

  }, [scheduleArr])


  return (
    <>
    <div className="">
      <form className ="schedule-form form" onSubmit={handleAdd}>
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
          <TextareaAutosize name="alternateDescription" id="alternate-description" className="form__input" placeholder="E.g.Lyric Translations" cacheMeasurements
          />
        </div>
        <div className="schedule-form__buttons form__buttons">
          <Button buttonType="tertiary" buttonText="Add" className="form__button-add" type="submit"/>
        </div>
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
    <div className="schedule-list">
      <h3>Current Schedule</h3>
      <div className="schedule-list__cards">
        {listHtml}
      </div>
    </div>
    </>
  );
};

export default ScheduleForm;

// <Button buttonType="primary" buttonText="Next" className="form__button-next" type="button"/>