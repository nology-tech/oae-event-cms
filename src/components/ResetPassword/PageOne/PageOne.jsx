import React from "react";
import Button from "../../Button/Button";
import "./PageOne.scss";

const PageOne = () => {
    return <div className="form">
                <h1 className="form__title">Forgotten Your<span className="form__title--orange"> Password.</span></h1>
                <p>Please enter your email address below to reset your password.</p>
                <h4 className="form__title">Email Address</h4>
                <input type="text" className="form__input" placeholder="team@oae.co.uk"/>
        <Button buttonText="Submit" buttonType="primary"/>
    </div>
}

export default PageOne;