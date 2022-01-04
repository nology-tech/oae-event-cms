import React, { useState } from "react";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import Search_Icon from "../../assets/images/Search_Icon.png";

import EventCard from "../../components/EventCard/EventCard";
import "./EventsList.scss";
import events from "../../assets/data/events";

const EventsList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

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

  const checkAll = (event) => {
    const checkbox = document.getElementsByTagName("input");
    if (event.target.checked == true) {
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].type === "checkbox") {
          checkbox[i].checked = true;
        }
      }
    } else {
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].type === "checkbox") {
          checkbox[i].checked = false;
        }
      }
    }
  };

  return (
    <div className="event-list">
      <h1>Events List</h1>
      <div className="event-list__UI">
        <div className="event-list__searchbox">
          <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
          <img
            className="event-list__searchIcon"
            src={Search_Icon}
            alt="search icon"
          />
        </div>
        <Button buttonText="Add +" buttonType="primary" />
      </div>
      <div className="event-list__table">
        <div className="event-list__headings">
          <input onChange={checkAll} type="checkbox" />
          <h5 className="event-list__headings-title">Event Name</h5>
          <h5 className="event-list__headings-series">Series</h5>
          <h5 className="event-list__headings-time">Date</h5>
          <h5 className="event-list__headings-time">Time</h5>
          <h5 className="event-list__headings-title">Location</h5>
          <h5 className="event-list__headings-URL">Digital Programme URL</h5>
        </div>
        {eventsList}
      </div>
    </div>
  );
};

export default EventsList;
