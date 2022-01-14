import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Button from "../../components/Button/Button";
import Laptop from "../../assets/images/laptop.jpg";

import "./ErrorPage.scss";

const ErrorPage = () =>{


return(
  <div className="error-page">

  <h1 className="error-page__header">Page not <span className="error-page__header--orange"> found</span></h1>
  <img className= "error-page__image"src={Laptop} alt="" />
<p>Click here to return to the login page</p>
<Button className="error-page__button" buttonText={"Return home"} buttonType={"primary"}/>

  </div>
)
}
export default ErrorPage