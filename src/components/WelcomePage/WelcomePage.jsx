import React from "react";
import "./WelcomePage.scss";
import Button from "../Button/Button";
import { LoginTemplate } from "../LoginTemplate/LoginTemplate";

const WelcomePage = (props) => {
  const { handleNext } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="welcome">
        <h1 className="welcome__header">
          Welcome back to the{" "}
          <span className="welcome__header-highlight">OAE.</span>
        </h1>
        <p className="welcome__subtitle">Sign in to the portal below.</p>
        <div className="form welcome-form">
          <label className="form__label welcome-form__label" htmlFor="username">
            Username
          </label>
          <input
            className="form__input welcome-form__input"
            type="text"
            id="username"
            placeholder="team@oae.co.uk"
            required
          />
          <label className="form__label welcome-form__label" htmlFor="password">Password</label>
          <input
            className="form__input welcome-form__input"
            type="password"
            id="password"
            placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
            required
          />

          <a className="welcome-form__link" onClick={handleNext}>
            Forgot your password?
          </a>
          <Button buttonText="Login" buttonType="primary"></Button>
        </div>
      </div>
      <LoginTemplate />
    </form>
  );
};

export default WelcomePage;
