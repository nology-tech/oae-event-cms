import React from 'react';
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import ResetPassword from "../../components/ResetPassword/ResetPassword";

const Password = () => {
    return (
        <div className="password-container">
            <ForgotPassword/>
            <ResetPassword/>
        </div>
    )
}

export default Password;
