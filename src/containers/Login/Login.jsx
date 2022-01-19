import React from "react";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList";
export const Login = (props) => {

  return (
    <WelcomePage setUser={props.setUser} />
  );
};

export default Login;
