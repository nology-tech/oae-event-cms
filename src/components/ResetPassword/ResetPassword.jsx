import React, { useState, createRef } from "react";
import Button from "../Button/Button";
import "./ResetPassword.scss";

const ResetPassword = () => {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  //const [inputFieldText, setInputFieldText] = useState({password1:"", password2:""})
  
  const onSubmit = (e) => {
    return e.preventDefault
  }
  const password1 = createRef();
  const password2 = createRef();

  const doPasswordsMatch = () => {
    const inputField1 = password1.current
    const inputField2 = password2.current
    console.log(inputField1)


 //     setInputFieldText({password1:password1.current.value});
   //      setInputFieldText({password2:password2.current.value});
    if (inputField1 === inputField2) {
      setPasswordsMatch(true);

    } else {
      setPasswordsMatch(false);
      return
    }
  };

  return (
    <div className="reset">
      <div className="left-container">
        <form onSubmit="onSubmit">
          <h1 className="left-container__header">
            Reset Your{" "}
            <span className="left-container__header--orange"> Password.</span>
          </h1>
          <p className="left-container__subtitle">
            Enter your new password below.
          </p>
          <label className="left-container__label">New Password</label>

          <input
            type="password"
            required
            onBlur={doPasswordsMatch}
          //  ref={node => (password1 = node)}   
            className="left-container__input"
            id="password-field-1"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <label className="left-container__label">Confirm Password</label>

          <input 
            type="password"
            required
          //  ref={node => (password2 = node)}
            className="left-container__input"
            id="password-field-2"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          {passwordsMatch ? (
            <p>Passwords match!</p>
          ) : (
            <p>Passwords don't match!</p>
          )}
          <Button onClick={onSubmit} type="submit" buttonText="Submit" buttonType="primary" />
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
