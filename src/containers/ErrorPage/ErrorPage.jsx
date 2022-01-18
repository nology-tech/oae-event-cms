import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Laptop from "../../assets/images/laptop.jpg";

import "./ErrorPage.scss";

const ErrorPage = () => {


  return (
    <div className="error-page">
      <h1 className="error-page__header">Page Not <span className="error-page__header--orange"> Found</span></h1>
      <img className="error-page__image" src={Laptop} alt="" />
      <Link to="/">
        <Button className="error-page__button" buttonText={"Return Home"} buttonType={"secondary"} />
      </Link>

    </div>
  )
}
export default ErrorPage