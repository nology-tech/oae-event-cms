import React from "react";
import Button from "../Button/Button";
import "./ResetPassword.scss";
import LoginTemplate from "../LoginTemplate/LoginTemplate";

const ResetPassword = () => {
  
    return (
      <form>
        <div className="welcome forgot-password">
          <h1 className="welcome__header">
            Reset Your{" "}
            <span className="welcome__header-highlight">Password.</span>
          </h1>
          <p className="welcome__subtitle">Enter your new password below.</p>
          <div className="form welcome-form">
          <label className="form__label welcome-form__label" htmlFor="new- password">
            New Password
          </label>
          <input
            className="form__input welcome-form__input"
            type="password"
            id="new-password"
            placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
            required
          />
          <label className="form__label welcome-form__label" htmlFor="confirm-password">Confirm Password</label>
          <input
            className="form__input welcome-form__input"
            type="password"
            id="confirm-password"
            placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
            required
          />
   
            <Button buttonText="Submit" buttonType="primary"></Button>
          </div>
        </div>
        <LoginTemplate />
      </form>
    )}

export default ResetPassword;