import React from "react";
import "./WelcomePage.scss";
import Button from "../../components/Button/Button";

const WelcomePage = () => {
    return (
        <div className="welcome">
            <h1 className="welcome__header">Welcome back to the <span className="welcome__header-highlight">OAE.</span></h1>
            <p className="welcome__subtitle">Sign in to the portal below.</p>

            <div  className="form welcome-form">
                <label className="form__label welcome-form__label"  name="username" >Username</label>
                <input className="form__input welcome-form__input"type="text" name="username" placeholder="team@oae.co.uk" required/>
                <label className="form__label welcome-form__label">Password</label>
                <input className="form__input welcome-form__input" type="text" name="password" placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" required/>
            
                <a className="welcome-form__link" href="">Forgot your password?</a>
                <Button buttonText="Login" buttonType="primary"></Button>
            </div>
        </div>
        
    )
}

export default WelcomePage;