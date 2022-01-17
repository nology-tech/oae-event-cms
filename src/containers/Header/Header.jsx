import React from "react";
import "./Header.scss";
import logo from "../../assets/images/oae-logo.svg";

const Header = (props) => {
  return (
    <div className="header">
      <a href="https://oae.co.uk/" target="_blank" rel= "noreferrer">
        <img className="header__logo" src={logo} alt="logo"/></a>
        <h2 className="header__title">OAE Digital Programme Editor</h2>
    </div>
  );
};
export default Header;
