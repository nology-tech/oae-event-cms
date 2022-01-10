import React from "react";
import "./WelcomePage.scss";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/oae-logo.svg";
import background from "../../assets//images/welcome-background.svg";
import greyRectangle from "../../assets//images/grey-rectangle.svg";
import eventListPreview from "../../assets//images/eventlist-preview.svg";
import orangeRectangle from "../../assets//images/orange-rectangle.svg";
import circle from "../../assets//images/ellipse.svg";

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <a href="https://oae.co.uk/" target="_blank" rel="noreferrer">
        <img className="welcomePage__logo" src={logo} alt="logo" />
      </a>
      <div className="welcome">
        <h1 className="welcome__header">
          Welcome back to the{" "}
          <span className="welcome__header-highlight">OAE.</span>
        </h1>
        <p className="welcome__subtitle">Sign in to the portal below.</p>
        <div className="form welcome-form">
          <label className="form__label welcome-form__label" name="username">
            Username
          </label>
          <input
            className="form__input welcome-form__input"
            type="text"
            name="username"
            placeholder="team@oae.co.uk"
            required
          />
          <label className="form__label welcome-form__label">Password</label>
          <input
            className="form__input welcome-form__input"
            type="password"
            name="password"
            placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
            required
          />

          <a className="welcome-form__link" href="">
            Forgot your password?
          </a>
          <Button buttonText="Login" buttonType="primary"></Button>
        </div>
      </div>
      <img
        className="welcomePage__image"
        src={background}
        alt="orange background"
      />
      <img
        className="welcomePage__circle-big"
        src={circle}
        alt="orange circle"
      />
      <img
        className="welcomePage__circle-small"
        src={circle}
        alt="orange circle"
      />
      <img
        className="welcomePage__rectangle-grey"
        src={greyRectangle}
        alt="grey rectangle"
      />
      <img
        className="welcomePage__rectangle-orange"
        src={orangeRectangle}
        alt="eventList preview"
      />
      <img
        className="welcomePage__preview"
        src={eventListPreview}
        alt="eventList preview"
      />
    </div>
  );
};

export default WelcomePage;
