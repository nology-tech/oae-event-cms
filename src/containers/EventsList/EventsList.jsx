import React, { useState } from "react";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import Search_Icon from "../../assets/images/Search_Icon.png";
import {Link} from "react-router-dom";

import EventCard from "../../components/EventCard/EventCard";
import "./EventsList.scss";
import events from "../../assets/data/events";

const EventsList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(true);

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    event.preventDefault();
  };

  const filterEvents = events.filter((event) => {
    const lowerEvent = event.name.toLowerCase();
    return lowerEvent.includes(searchTerm);
  });

  const eventsList = filterEvents.map((event) => (
    <EventCard
      eventName={event.name}
      series={event.series}
      date={event.date}
      time={event.time}
      location={event.location}
      URL={event.uniqueURL}
    />
  ));

  return (
    <div className="event-list">
      <h2 className="event-list__header">Events List</h2>
      <div className="event-list__UI">
        <div className="event-list__searchbox">
          <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
          <img
            className="event-list__searchIcon"
            src={Search_Icon}
            alt="search icon"
          />
        </div>
        <Link to="/" ><Button buttonText="Add +" buttonType="primary" /></Link>
        
          
      </div>
      <div className="event-list__table">
        <div className="event-list__headings">
          <h5 className="event-list__headings-title table__header">Event Name</h5>
          <h5 className="event-list__headings-series table__header">Series</h5>
          <h5 className="event-list__headings-time table__header">Date</h5>
          <h5 className="event-list__headings-time table__header">Time</h5>
          <h5 className="event-list__headings-title table__header">Location</h5>
          <h5 className="event-list__headings-URL table__header">Digital Programme URL</h5>
        </div>
        {eventsList}
      </div>
    </div>
  );
};

export default EventsList;
