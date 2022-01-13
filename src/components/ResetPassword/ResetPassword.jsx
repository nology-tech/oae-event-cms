import React, { useState, createRef } from "react";
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

    //       <input 
    //         type="password"
    //         required
    //       //  ref={node => (password2 = node)}
    //         className="left-container__input"
    //         id="password-field-2"
    //         placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
    //       />
    //       {passwordsMatch ? (
    //         <p>Passwords match!</p>
    //       ) : (
    //         <p>Passwords don't match!</p>
    //       )}
    //       <Button onClick={onSubmit} type="submit" buttonText="Submit" buttonType="primary" />
    //     </form>
    //   </div>
    // </div>
//   );
// };
export default ResetPassword;
