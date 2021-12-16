import React, { useState } from "react";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import Search_Icon from "../../assets/images/Search_Icon.png";

import EventCard from "../../components/EventCard/EventCard";
import "./EventsList.scss";
import events from "../../assets/data/events";

const EventsList = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const { eventName, series, date, time, location, URL } = props;
    const [eventsArr, setEventsArr] = useState([]);



    const handleInput = event => {
        setSearchTerm(event.target.value.toLowerCase());
        event.preventDefault();
    }

    console.log(events)
    const filterEvents = eventsArr.filter((event) => {
        const lowerEvent = event.toLowerCase();
        return lowerEvent.includes(searchTerm)
    })
    console.log(filterEvents)

    return (
        <div className="event-list">
            <h1>Events List</h1>
            <div className="event-list__UI">
                <div className="event-list__searchbox">
                    <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
                    <img className="event-list__searchIcon" src={Search_Icon} alt="search icon" />
                </div>
                <Button buttonText="Add +" buttonType="primary" />
            </div>
            <div className="event-list__table">
                <div className="event-list__headings">
                    <input type="checkbox" />
                    <h5 className="event-list__headings-title">Event Name</h5>
                    <h5 className="event-list__headings-series">Series</h5>
                    <h5 className="event-list__headings-time">Date</h5>
                    <h5 className="event-list__headings-time">Time</h5>
                    <h5 className="event-list__headings-title">Location</h5>
                    <h5 className="event-list__headings-URL">Digital Programme URL</h5>
                </div>
                <EventCard eventName="Infant Musicality" series="Bach, The Universe &amp; Everything" date="12-12-21" time="11.30" location="King's Place, London" URL="https://oaedigital.co.uk/events/6bb8ffe8-6e5e-4abc-be7f-b05b749849cf
                " />
            </div>

        </div>
    )
}

export default EventsList;