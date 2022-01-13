import React, { useState } from "react";
import "./Accordian.scss";
import {ReactComponent as DownArrow} from "../../assets/images/down-arrow-thin.svg"
import {ReactComponent as UpArrow} from "../../assets/images/up-arrow-thin.svg"

const Accordian = (props) => {
    const {name, title, author, description, alternativeDescription} = props;

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordian__item">
          <div className="accordian__item-title" onClick={() => setIsActive(!isActive)}>
            <p className="accordian__item-title-name">{name}</p>
            <div>{isActive ? <UpArrow/> : <DownArrow/>}</div>
            </div>
            {title !== "" ? <p className='accordian__item-content-input'>{title}</p> : null}
          {isActive && <div className="accordian__item-content">
          
                    {author !== "" ? <p className='accordian__item-content-input'>By {author}</p> : null}
                    <p className='accordian__item-content-text'>Description</p>
                    <p className='accordian__item-content-input'>{description}</p>
                    {alternativeDescription !== "" ? <><p className='accordian__item-content-text'>Alternative Description</p>
                    <p className='accordian__item-content-input'>{alternativeDescription}</p></> : null}
          </div>}
        </div>
      );
}

export default Accordian;