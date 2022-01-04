import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.scss";
import eventsHomeIcon from "../../assets/images/carbon-home.svg";
import eventsListIcon from "../../assets/images/calendar-icon.svg";
import bandMemberIcon from "../../assets/images/music-note-icon.svg";

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/" activeClassName="nav__icon--active"><img className="nav__icon" src={eventsHomeIcon} alt="event icon"  /></NavLink>
            <NavLink to="/events" activeClassName="nav__icon--active"><img className="nav__icon" src={eventsListIcon} alt="event list icon" /></NavLink>
            <NavLink to="/orchestra" activeClassName="nav__icon--active"><img className="nav__icon" src={bandMemberIcon} alt="orchestra icon" /></NavLink>
        </nav >
    )
}

export default Nav;