import React from "react";
import "./WelcomePage.scss";
import Button from "../Button/Button";
import { LoginTemplate } from "../LoginTemplate/LoginTemplate";

import { Link, useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const WelcomePage = (props) => {
  const auth = getAuth()
 
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value
    const password = event.target[1].value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Signed in successfully!");
        props.setUser(user);
        navigate('/events');      
      })
      .catch((error) => {
        console.log("Uh oh! We didn't sign on");
        alert("Try again 😼")
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="welcome">
        <h1 className="welcome__header">
          Welcome back to the{" "}
          <span className="welcome__header-highlight">OAE.</span>
        </h1>
        <p className="welcome__subtitle">Sign in to the portal below.</p>
        <div className="form welcome-form">
          <label className="form__label welcome-form__label" htmlFor="username">
            Username
          </label>
          <input
            className="form__input welcome-form__input"
            type="text"
            id="username"
            placeholder="team@oae.co.uk"
            required
          />
          <label className="form__label welcome-form__label" htmlFor="password">Password</label>
          <input
            className="form__input welcome-form__input"
            type="password"
            id="password"
            placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
            required
          />
          <Link to="/forgot-password" className="welcome-form__link">Forgot Password?</Link>
          <Button buttonText="Login" buttonType="primary"></Button>
        </div>
      </div>
      <LoginTemplate />
    </form>
  );
};

export default WelcomePage;
