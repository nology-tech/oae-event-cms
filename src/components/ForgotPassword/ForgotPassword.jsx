import React from "react";
import Button from "../Button/Button";

const ForgotPassword = (props) => {

    const handleNext = (event) => {
        event.preventDefault();
        props.handleNext();
      }

    return (
        <div className="forgot">
            <div className="left-container">
                <form onSubmit={handleNext}>
                    <h1 className="left-container__header">Forgotten Your <span className="left-container__header--orange"> Password.</span> </h1>
                    <p className="left-container__subtitle">Please enter your email address below to reset your password.</p>
                    <label className="left-container__label">Email Address</label>
                    <input type="text" className="left-container__input" placeholder="team@oae.co.uk" required/>
                    <Button buttonText="Submit" buttonType="primary" />
                </form>
            </div>
        </div>

    )
};

export default ForgotPassword;