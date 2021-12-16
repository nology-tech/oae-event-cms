import React, { useState } from "react";
import Button from "../../Button/Button";
import "./Page2.scss";
const PageTwo = () => {
return (
     <div className="event-info-page2" >
        <div className="event-info-header">
            <h3>Step 02</h3>
            <h1>Event Information (2/2)</h1>
        </div>
        <div className="info-section">
            <h2 className="info-section__title-1"> Event Heading </h2>
            <input className="info-section__input-1" type="text" placeholder="f This Is Your First Bach, the Universe And Everything">
            </input>
            <h2 className="info-section__title-2"> Add Quote / Note (optional) </h2>
            <input className="info-section__input-3" type="text"/>
            <h2 className="info-section__title-3"> Add Quote Caption (optional) </h2>
            <input type="text" className="info-section__input-3" />
        </div>
        <div className="event-description-section">
            <h2 className="event-description__title"> Event Description </h2>
            <input type="text" className="event-description__textbox"/>
        </div>
        <div>
            <Button className="secondary">Back</Button>
            <Button className="primary">Next</Button>
        </div>
     </div>
        )
    }
export default PageTwo;
















