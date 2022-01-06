import React from "react";
import "./WelcomePage.scss";

const WelcomePage = () => {
    return (
        <div className="welcome">
            <h1 className="welcome__header">Welcome back to the <span>OAE</span></h1>
            <p className="welcome__subtitle">Sign in to the portal below.</p>

            <div  className="form">
                <label className="form__label"  name="username" >Username</label>
                <input className="form__input"type="text" name="username" placeholder="team@oae.co.uk"/>
                <label className="form__label">Password</label>
                <input className="form__input" type="text" name="password" placeholder="***"/>
            </div>

            <a className="welcome__link" href="">Forgot your password?</a>
            <button className="welcome__button">Login</button>
        </div>
        
    )
}

export default WelcomePage;