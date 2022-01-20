import React from "react";
import Button from "../Button/Button";
import "./ThemePicker.scss";

const ThemePicker = (props) => {
  const { data } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      step: 3,
      templateTheme: event.target.templateTheme.value,
      primaryColor: event.target.primaryColor.value,
      textColor: event.target.textColor.value,
      subtitleColor: event.target.subtitleColor.value,
    };
    props.handleSubmit(formData);
  };

  const handleBack = (event) => {
    event.preventDefault();
    const formData = {
      step: 3,
    };
    props.handleSubmitBack(formData);
  };

  return (
    <form className="themepicker form" onSubmit={handleSubmit}>
      <div className="themepicker__title form__title">
        <p className="form__title-step">Step 04</p>
        <h2 className="form__title-main">Choose Theme</h2>
      </div>

      <div className="themepicker__dropdown form__section">
        <div className="themepicker__section form__section">
          <label className="themepicker__label form__label" for="templateTheme">
            Font Type
          </label>
          <select
            className="themepicker__dropdown form__selectBox"
            required
            id="templateTheme"
            name="templateTheme"
            defaultValue={data.theme.templateTheme}
          >
            <option defaultValue="" disabled selected>
              Please select from one of the following...
            </option>
            <option defaultValue="Modern">Modern</option>
            <option defaultValue="Classic">Classic</option>
          </select>
        </div>

        <div className="themepicker__section form__section">
          <label className="themepicker__theme form__label" for="theme">
            Theme Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input
              className="themepicker__input-color"
              htmlFor="theme"
              type="color"
              name="primaryColor"
              data-testid="theme"
              defaultValue={data.theme.primaryColor}
            />
          </div>
        </div>

        <div className="themepicker__section form__section">
          <label className="themepicker__accent form__label" for="accent">
            Text Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input
              className="themepicker__input-color"
              htmlFor="accent"
              type="color"
              name="textColor"
              data-testid="accent"
              defaultValue={data.theme.textColor}
            />
          </div>
        </div>

        {/* Subtitle Input */}
        <div className="themepicker__section form__section">
          <label
            className="themepicker__subtitle form__label"
            htmlFor="subtitle"
          >
            Subtitle Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input
              className="themepicker__input-color"
              htmlFor="subtitle"
              type="color"
              name="subtitleColor"
              data-testid="subtitle"
              defaultValue={data.theme.subtitleColor}
            />
          </div>
        </div>
      </div>
      <div className="themepicker__buttons form__buttons">
        {/* BACK button */}
        <Button
          type="submit"
          onClick={handleBack}
          buttonText="Back"
          buttonType="secondary"
        />
        {/* NEXT button */}
        <Button buttonText="Next" buttonType="primary" type="submit" />
      </div>
    </form>
  );
};

export default ThemePicker;
