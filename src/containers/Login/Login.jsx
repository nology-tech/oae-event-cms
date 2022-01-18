import React, { useState } from "react";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import CreateEvent from "../CreateEvent/CreateEvent";
import { Navigate } from "react-router-dom";
export const Login = (props) => {
  const [step, setStep] = useState(0);

  const { toggleLogoutButton } = props;

  const incrementStep = () => {
    setStep(step + 1);
  };

  const mainPage = () => {
    setStep(3);
  };
  return (
    <div className="Login">
      {step === 0 ? (
        <WelcomePage toggleLogoutButton={toggleLogoutButton} handleNext={incrementStep} handleSubmit={mainPage} />
      ) : null}
      {step === 1 ? <ForgotPassword handleNext={incrementStep} /> : null}
      {step === 2 ? <ResetPassword /> : null}
      {step === 3 ? <Navigate to="/" /> : null}
    </div>
  );
};

export default Login;
