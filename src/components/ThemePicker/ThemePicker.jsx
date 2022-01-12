import React from "react";
import Button from "../Button/Button";
import "./ThemePicker.scss";

const ThemePicker = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit();
  }

  return (
    <form className="themepicker form" onSubmit={handleSubmit} name="form">
      <div className="themepicker__title form__title">
        <p className="form__title-step">Step 04</p>
        <h2 className="form__title-main">Choose Theme</h2>
      </div>

      <div className="themepicker__dropdown form__section">
        <div className="themepicker__section form__section">
          <label className="themepicker__label form__label" htmlFor="fonttype">
            Font Type
          </label>
          <select
            className="themepicker__dropdown form__selectBox"
            id="fonttype"
            name="fonttype"
            required
          >
            <option value="Please select from one of the following..." disabled selected >
            Please select from one of the following...
            </option>
            <option value="Modern">Modern</option>
            <option value="Classic">Classic</option>
          </select>
        </div>

        {/* Theme Input */}
        <div className="themepicker__section form__section">
          <label className="themepicker__theme form__label" htmlFor="theme">
            Theme Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input className="themepicker__input-color" htmlFor="theme" type="color" />
          </div>
        </div>

        {/* Accent Input */}
        <div className="themepicker__section form__section">
          <label className="themepicker__accent form__label" htmlFor="accent">
            Accent Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input className="themepicker__input-color" htmlFor="accent" type="color" />
          </div>
        </div>

        {/* Subtitle Input */}
        <div className="themepicker__section form__section">
          <label className="themepicker__subtitle form__label" htmlFor="subtitle">
            Subtitle Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input className="themepicker__input-color" htmlFor="subtitle" type="color" />
          </div>
        </div>

      </div>
      <div className="themepicker__buttons form__buttons">
        {/* BACK button */}
        <Button buttonText="Back" buttonType="secondary" />
        {/* NEXT button */}
        <Button buttonText="Next" buttonType="primary" type="submit"/>
      </div>
    </form>
  );
};

export default ThemePicker;
