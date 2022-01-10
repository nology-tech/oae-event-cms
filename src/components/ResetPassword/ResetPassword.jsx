import React from "react";
import Button from "../Button/Button";
import "./ResetPassword.scss";

const ResetPassword = () => {
    return (
    <div className="reset">
        <div className="left-container">
            <form>
                <h1 className="left-container__header">Reset Your <span className="left-container__header--orange"> Password.</span></h1>
                <p className="left-container__subtitle">Enter your new password below.</p>
                <label className="left-container__label">New Password</label>
                <input type="password" required className="left-container__input" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
                <label className="left-container__label">Confirm Password</label>
                <input type="password" required className="left-container__input" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
                <Button buttonText="Submit" buttonType="primary"/>
            </form>
        </div>
        
    </div>

    )}

export default ResetPassword;