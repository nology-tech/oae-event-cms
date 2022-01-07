import React from "react";
import Button from "../Button/Button";
import "./ThemePicker.scss";
import arrowDown from "../../assets/images/arrow-down.svg";

const ThemePicker = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit();
  }

  return (
    <form className="themepicker form" onSubmit={handleSubmit}>
      <div className="themepicker__title form__title">
        <p className="form__title-step">Step 04</p>
        <h2 className="form__title-main">Choose Theme</h2>
      </div>

      <div className="themepicker__dropdown form__section">
        <div className="themepicker__section form__section">
          <label className="themepicker__label form__label" for="fonttype">
            Font Type
          </label>
          <select
            className="themepicker__dropdown form__selectBox"
            id="fonttype"
            name="fonttype"
          >
            <option value="" disabled selected>
              Please select from one of the following...
            </option>
            <option value="Modern">Modern</option>
            <option value="Classic">Classic</option>
          </select>
        </div>

        <div className="themepicker__section form__section">
          <label className="themepicker__theme form__label" for="theme">
            Theme Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input className="themepicker__input-color" for="theme" type="color" />
            <img
              className="themepicker__section-img form__section-img"
              src={arrowDown}
              alt="down arrow"
            />
          </div>
        </div>

        <div className="themepicker__section form__section">
          <label className="themepicker__accent form__label" for="accent">
            Accent Color
          </label>
          <div className="themepicker__section-color form__section-color">
            <input className="themepicker__input-color" for="accent" type="color" />
            <img
              className="themepicker__section-img form__section-img"
              src={arrowDown}
              alt="down arrow"
            />
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
