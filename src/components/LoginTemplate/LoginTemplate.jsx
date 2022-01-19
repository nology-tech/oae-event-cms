import React from "react";
import "./LoginTemplate.scss";

import background from "../../assets//images/welcome-background.svg";
import greyRectangle from "../../assets//images/grey-rectangle.svg";
import eventListPreview from "../../assets//images/eventlist-preview.svg";
import orangeRectangle from "../../assets//images/orange-rectangle.svg";
import circle from "../../assets//images/ellipse.svg";

export const LoginTemplate = () => {
  return (
    <div className="welcomePage">

      <img
        className="welcomePage__image"
        src={background}
        alt="orange background"
      />
      <img
        className="welcomePage__circle-big"
        src={circle}
        alt="orange circle"
      />
      <img
        className="welcomePage__circle-small"
        src={circle}
        alt="orange circle"
      />
      <img
        className="welcomePage__rectangle-grey"
        src={greyRectangle}
        alt="grey rectangle"
      />
      <img
        className="welcomePage__rectangle-orange"
        src={orangeRectangle}
        alt="eventList preview"
      />
      <img
        className="welcomePage__preview"
        src={eventListPreview}
        alt="eventList preview"
      />
    </div>
  );
};

export default LoginTemplate;
