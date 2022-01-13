import Button from "../../Button/Button";
import tooltipInfoIcon from "../../../assets/images/tooltip-info-icon.svg";
import Tooltip from "../../Tooltip/Tooltip";
import "./PageOne.scss";
import { useState } from 'react';

const PageOne = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleToolTip = () => {
    setShowTooltip(!showTooltip);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit();
  }

  return (
    <form className="eventinfo" onSubmit={handleSubmit}>
      <div className="eventInfo__pageOne-form__main">
        <section className="eventInfo__pageOne-form form" id="info-form">
          <div className="form__title">
            <h3 className="form__title-step">Step 01</h3>
            <h2 className="form__title-main">Event Information (1/2)</h2>
          </div>
          <div className="form__section">
              <div className="eventInfo__pageOne-form-tooltip">
                <label className="form__label"> Title </label>
                <img className="eventInfo__pageOne-form-tooltipIcon" src={tooltipInfoIcon} alt="tool tip info icon" onClick={toggleToolTip}/>
              </div>
            <input
              type="text"
              className="eventInfo__pageOne-form__input form__input"
              placeholder="Can You Hear The Shape Of A Drum?"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Series </label>
            <input
              className="eventInfo__pageOne-form__input form__input"
              type="list"
              placeholder="Bach, The Universe And Everything"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Date </label>
            <input
              type="date"
              className="eventInfo__pageOne-form__input form__input"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Time </label>
            <input
              className="eventInfo__pageOne-form__input form__input"
              type="time"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Location </label>
            <input
              type="text"
              className="eventInfo__pageOne-form__input form__input"
              placeholder="Kings Place, London"
            />
          </div>
        </section>
        <section className="picture-section form" id="picture-form">
          <label className="form__label"> Upload Image </label>

          <div className="form__borderbox">
            <div>
              <div className="form__borderbox-placeholder">
                image drop placeholder box
              </div>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
          <h4 className="picture-section__remove" id="remove">
            Remove
          </h4>
          <div className="picture-section__button">
            <Button
              buttonType="primary"
              buttonText="Next"
              className="form__button-next eventinfo-btn"
            />
          </div>
        </section>
      </div>
    </form>
  );
};

export default PageOne;
