import React from "react";
import Button from "../../Button/Button";
import "./PageTwo.scss";

const PageTwo = () => {
    return <div className="form">
                <h1 className="form__title">Reset Your<span className="form__title--orange"> Password.</span></h1>
                <p>Enter your new password below.</p>
                <h4 className="form__title">New Password</h4>
                <input type="password" className="form__input" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
                <h4 className="form__title">Confirm Password</h4>
                <input type="password" className="form__input" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
        <Button buttonText="Submit" buttonType="primary"/>
    </div>
}

export default PageTwo;