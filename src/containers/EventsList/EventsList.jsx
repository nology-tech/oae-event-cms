import React, { useState } from "react";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import Search_Icon from "../../assets/images/Search_Icon.png";

import EventCard from "../../components/EventCard/EventCard";
import "./EventsList.scss";

const EventsList = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const { eventName, series, date, time, location, URL } = props;

    // useEffect(() => {

    //     return () => {
    //         cleanup
    //     }
    // }, [searchTerm])

    const handleInput = event => {
        setSearchTerm(event.target.value.toLowerCase());
        event.preventDefault();
    }



    return (
        <div className="event-list">
            <h1>Events List</h1>
            <div className="event-list__searchbox">
                <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
                <img className="event-list__searchIcon" src={Search_Icon} alt="search icon" />
                <Button buttonText="Add +" buttonType="primary" />
            </div>
            <div className="event-list__table">
                <div className="event-list__headings">
                    <h2>Event Name</h2>
                    <h2>Series</h2>
                    <h2>Date</h2>
                    <h2>Time</h2>
                    <h2>Location</h2>
                    <h2>Digital Programme URL</h2>
                </div>
                <EventCard eventName="{eventName}" series="{series}" date="{date}" time="{time}" URL="{URL}" />
            </div>

        </div>
    )
}

export default EventsList;