import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from "../../assets/images/edit-icon.svg";
import binIcon from "../../assets/images/bin-icon.svg";
import "./EventCard.scss";

const EventCard = (props) => {
   const { eventName, series, date, time, location, URL } = props;

   const handleDelete = () => {
      console.log(props.onDelete(props.eventId));
   }

   return (
      <div className="eventCard">
         <h5 className='eventCard-title'>{eventName}</h5>
         <p className="eventCard-series">{series}</p>
         <p className="eventCard-time">{date}</p>
         <p className="eventCard-time">{time}</p>
         <p className="eventCard-location">{location}</p>
         <p className="eventCard-URL">{URL}</p>
         <div className="eventCard__icons">
            <Link to={"/event/" + props.eventId}>
               <img className="eventCard-icon" src={editIcon} alt="edit button"  title="Click to edit this event"/>
            </Link>           
            <img onClick={handleDelete} className="eventCard-icon" src={binIcon} alt="bin button"  title="Click to delete this event"/>
         </div>
      </div>
   )
}

export default EventCard
