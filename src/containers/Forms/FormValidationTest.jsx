import React from "react";
import "./FormValidationTest.scss";
import { useForm } from "react-hook-form";

const EventFormValidationTest = () => {
  const {
    register,
    handleSubmit,
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
          <label>Title</label>
          <input
            className="form__label"
            type="text"
            name="title"
            className="form__input"
            {...register("title", {
              required: "fill this in aswell mate",
              minLength: { value: 3, message: "too short" },
              maxLength: { value: 20, message: "too long" },
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className="schedule-form__title form__section">
          <label>Series</label>
          <input
            type="text"
            name="series"
            className="form__input"
            {...register("series", {
              required: "fill this in aswell mate",
              minLength: { value: 3, message: "too short" },
              maxLength: { value: 20, message: "too long" },
            })}
          />
          {errors.series && <p>{errors.series.message}</p>}
        </div>
        <div className="schedule-form__author form__section">
          <label htmlFor="date" className="form__label">
            Date
          </label>
          <input type="date" name="date" className="form__input" />
        </div>
        <div className="schedule-form__author form__section">
          <label>Time</label>
          <input
            className="form__label"
            type="time"
            id="time"
            name="time"
            className="form__input"
          />
        </div>
        <div className="schedule-form__author form__section">
          <label>Location</label>
          <input
            className="form__label"
            type="text"
            name="location"
            className="form__input"
            {...register("location", {
              required: "fill this in aswell mate",
              minLength: { value: 3, message: "too short" },
              maxLength: { value: 20, message: "too long" },
            })}
          />
          {errors.location && <p>{errors.location.message}</p>}
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default EventFormValidationTest;
