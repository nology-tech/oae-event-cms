import React from "react";
import "./FormValidationTest.scss";
import { useForm } from "react-hook-form";

const EventFormValidationTest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="schedule-form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__title">
          <h3 className="form__title-step">Event form validation test</h3>
        </div>

        <div className="schedule-form__name form__section">
          <label htmlFor="title" className="form__label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form__input"
            {...register("title", {
              required: true,
              minLength: { value: 3, message: "too short" },
              maxLength: { value: 20, message: "too long" },
            })}
          ></input>
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className="schedule-form__title form__section">
          <label for="series" className="form__label">
            Series
          </label>
          <input
            type="text"
            id="series"
            name="series"
            className="form__input"
            required
          ></input>
        </div>
        <div className="schedule-form__author form__section">
          <label for="date" className="form__label">
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            className="form__input"
            required
          ></input>
        </div>
        <div className="schedule-form__author form__section">
          <label for="time" className="form__label">
            Time
          </label>
          <input
            type="text"
            id="time"
            name="time"
            className="form__input"
            required
          ></input>
        </div>
        <div className="schedule-form__author form__section">
          <label for="location" className="form__label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="form__input"
          ></input>
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default EventFormValidationTest;
