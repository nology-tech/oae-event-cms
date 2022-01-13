import React from "react";
import Button from "../Button/Button";
import "./ForgotPassword.scss";
import LoginTemplate from "../LoginTemplate/LoginTemplate";

const ForgotPassword = (props) => {

    const { handleNext } = props;
  
    return (
      <form onSubmit={handleNext}>
        <div className="welcome forgot-password">
          <h1 className="welcome__header">
            Forgotten Your{" "}
            <span className="welcome__header-highlight">Password.</span>
          </h1>
          <p className="welcome__subtitle">Please enter your email address below to reset your password.</p>
          <div className="form welcome-form">
            <label className="form__label welcome-form__label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form__input welcome-form__input"
              type="text"
              id="email"
              placeholder="team@oae.co.uk"
              required
            />
   
            <Button buttonText="Submit" buttonType="primary"></Button>
          </div>
        </div>
        <LoginTemplate />
      </form>
    )
};

export default ForgotPassword;