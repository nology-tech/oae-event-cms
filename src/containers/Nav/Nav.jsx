import React from "react";
import {Link} from "react-router-dom";
import "./Nav.scss";
import eventsHomeIcon from "../../assets/images/carbon-home.svg";
import eventsListIcon from "../../assets/images/calendar-icon.svg";
import bandMemberIcon from "../../assets/images/music-note-icon.svg";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/"><img className="nav__icon" src={eventsHomeIcon} alt="event icon" /></Link>
            <Link to="/events"><img className="nav__icon" src={eventsListIcon} alt="event list icon" /></Link>
            <Link to="/orchestra"><img className="nav__icon" src={bandMemberIcon} alt="orchestra icon" /></Link>
        </nav >
    )
}

export default Nav;