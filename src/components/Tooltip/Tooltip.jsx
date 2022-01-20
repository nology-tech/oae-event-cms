import React, { useState } from 'react';
import tooltipInfoIcon from "../../assets/images/tooltip-info-icon.svg";
import blackCross from "../../assets/images/black-cross.png"
import "./Tooltip.scss";

const Tooltip = (props) => {
   const { tipTitle, tipDesc } = props;

   const [showInfo, setShowInfo] = useState(false)

   const toggleInfo = () => setShowInfo(!showInfo)

   return (
      <span>
         {!showInfo && <img className="tip__icon-info" src={tooltipInfoIcon} alt="information icon" onClick={toggleInfo} />}
         {showInfo && (<div className={"tip"}>

            <div className="tip__flex">
               <h4 className='tip__title'>{tipTitle}</h4>
               <img className="tip__icon-info" src={tooltipInfoIcon} alt="information icon" />
               <img onClick={toggleInfo} className="tip__icon-cross" src={blackCross} alt="close window icon" />
            </div>

            <p className='tip__desc'>{tipDesc}</p>
         </div>)}
      </span>
   )
}

export default Tooltip;

