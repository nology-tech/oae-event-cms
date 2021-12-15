import React from 'react';
import editIcon from "../../assets/images/edit-icon.svg";
import binIcon from "../../assets/images/bin-icon.svg";

const EventCard = (props) => {
   const { eventName, series, date, time, location, URL } = props;

   return (
      <div className="eventCard">
         <h2>{eventName}</h2>
         <p>{series}</p>
         <p>{date}</p>
         <p>{time}</p>
         <p>{location}</p>
         <a href={URL}></a>
         <img src={editIcon} alt="edit button" />
         <img src={binIcon} alt="bin button" />
      </div>
   )
}

export default EventCard
