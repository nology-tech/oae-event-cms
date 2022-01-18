import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./ScheduleForm.scss";
import TextareaAutosize from "react-textarea-autosize";
import { ReactComponent as EditIcon } from "../../../assets/images/edit-icon.svg";
import { ReactComponent as BinIcon } from "../../../assets/images/bin-icon.svg";

const ScheduleForm = (props) => {
  const data = props.data;
  const [scheduleArr, setScheduleArr] = useState(data.schedule);
  const [listHtml, setListHtml] = useState([]);

  // Handler for once ALL schedule items have been added
  const handleNext = (event) => {
    if (scheduleArr.length === 0) {
      // Display error message
      return;
    }

    const formData = {
      step: 2,
      schedule: scheduleArr,
    };

    props.handleNext(formData);
  };

  const handleBack = (event) => {
    event.preventDefault();
    const formData = {
      step: 1,
    };
    props.handleBack(formData);
  };

  // Handler for adding an INVIDIVUDAL schedule item
  const handleAdd = (event) => {
    // 1. Add the new item ot the schedule array for later
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      title: event.target.title.value,
      author: event.target.author.value,
      description: event.target.description.value,
      alternateDescription: event.target.alternateDescription.value,
    };

    event.target.name.value = "";
    event.target.title.value = "";
    event.target.author.value = "";
    event.target.description.value = "";
    event.target.alternateDescription.value = "";

    setScheduleArr([...scheduleArr, formData]);
    console.log(scheduleArr);
  };

  const handleEdit = (i) => {};

  useEffect(() => {
    const handleRemove = (id) => {
      scheduleArr.splice(id, 1);
      console.log(scheduleArr);
      setScheduleArr([...scheduleArr]);
    };
    // 2. Generate some html/jsx to render all the schedule items on the page
    if (scheduleArr.length === 0) {
      console.log("Reaching if");
      setListHtml([]);
    }

    const scheduleArrHtml = scheduleArr.map((schedule, i) => (
      <div key={i} className="schedule-list__cards-row">
        <h5 className="schedule-list__cards-row-title">{schedule.name}</h5>
        <div className="schedule-list__cards-row-buttons">
          <Button
            buttonType="icon"
            className="schedule-list__cards-row-buttons-link"
            onClick={() => handleRemove(i)}
            buttonText={
              <BinIcon className="schedule-list__cards-row-buttons-link-icon" />
            }
          ></Button>
        </div>
      </div>
    ));
    setListHtml(scheduleArrHtml);
  }, [scheduleArr]);

  return (
    <>
      <div className="schedule">
        <form
          className="schedule-form form"
          onSubmit={handleAdd}
          defaultValue={data?.schedule}
        >
          <div className="form__title">
            <h3 className="form__title-step">Step 02</h3>
            <h2 className="form__title-main">Add Schedule</h2>
          </div>
          <div className="schedule-form__name form__section">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form__input"
              defaultValue={data?.name}
              required
            ></input>
          </div>
          <div className="schedule-form__title form__section">
            <label htmlFor="title" className="form__label">
              Title (optional)
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form__input"
              defaultValue={data?.title}
            ></input>
          </div>
          <div className="schedule-form__author form__section">
            <label htmlFor="author" className="form__label">
              Author (optional)
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="form__input"
              defaultValue={data?.author}
            ></input>
          </div>
          <div className="schedule-form__description form__section">
            <label htmlFor="description" className="form__label">
              Description
            </label>
            <TextareaAutosize
              name="description"
              id="description"
              className="form__input"
              defaultValue={data?.description}
              required
            />
          </div>
          <div className="schedule-form__alternate-description form__section">
            <label htmlFor="alternate-description" className="form__label">
              Alternate Description (optional)
            </label>
            <TextareaAutosize
              name="alternateDescription"
              defaultValue={data?.alternateDescription}
              id="alternate-description"
              className="form__input"
              placeholder="E.g.Lyric Translations"
              cacheMeasurements
            />
          </div>
          <div className="schedule-form__buttons form__buttons">
            <Button
              buttonType="tertiary"
              buttonText="Add"
              className="form__buttons-add"
              type="submit"
            />
            <div className="schedule-form__buttons-nav">
              <Button
                type="submit"
                buttonType="secondary"
                onClick={handleBack}
                buttonText="Back"
                className="form__buttons-next"
              />
              <Button
                type="submit"
                buttonType="primary"
                onClick={handleNext}
                buttonText="Next"
                className="form__buttons-next"
              />
            </div>
          </div>
        </form>
        {listHtml.length !== 0 ? (
          <>
            <div className="schedule-list">
              <h4 className="schedule-list__title">Current Schedule</h4>
              <div className="schedule-list__cards">{listHtml}</div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ScheduleForm;
