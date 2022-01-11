import React from "react";
import Button from "../../Button/Button";
import "./ScheduleForm.scss";
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from "react-hook-form";

const ScheduleForm = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    props.handleSubmit();
    console.log(data);
  };
  return (
    <>
      <form className="schedule-form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__title">
          <h3 className="form__title-step">Step 02</h3>
          <h2 className="form__title-main">Add Schedule</h2>
        </div>

        <div className="schedule-form__name form__section">
          <label for="name" className="form__label">Name</label>
          <input type="text" id="name" name="name" className="form__input" {...register("name", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "The name needs to contain at least 2 characters",
            },
          })}
          />
          {errors.name && <p>{errors.name.message}</p>}

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
          <label for="scheduleDescription" className="form__label">Description</label>
          <TextareaAutosize name="scheduleDescription" id="scheduleDescription" className="form__input"  {...register("scheduleDescription", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "The description needs to contain at least 2 characters",
            },
          })}
          />
          {errors.scheduleDescription && <p>{errors.scheduleDescription.message}</p>}
        </div>
        <div className="schedule-form__alternate-description form__section">
          <label for="alternate-description" className="form__label">
            Alternate Description (optional)
          </label>
          <TextareaAutosize name="alternate-description" id="alternate-description" className="form__input" placeholder="E.g.Lyric Translations" cacheMeasurements
          />
        </div>
        <div className="schedule-form__buttons form__buttons">
          <Button buttonType="tertiary" buttonText="Add" className="form__button-add" />
          <Button buttonType="primary" buttonText="Next" className="form__button-next" type="submit" />
        </div>
      </form>
    </>
  );
};

export default ScheduleForm;