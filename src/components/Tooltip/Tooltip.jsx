import React, { useState } from 'react';
import tooltipInfoIcon from "../../assets/images/tooltip-info-icon.svg";
import blackCross from "../../assets/images/black-cross.png"
import "./Tooltip.scss";

const Tooltip = (props) => {
   const { tipName, tipTitle, tipDesc, toggleTooltips } = props;

   const [showInfo, setShowInfo] = useState(false)

   const toggleInfo = () => setShowInfo(!showInfo)

   return (
      <div>
         {!showInfo && <img className="tip__icon-info" src={tooltipInfoIcon} alt="information icon" onClick={toggleInfo} />}
         {showInfo && (<div className={"tip tip__" + tipName}>

            <div className="tip__flex">
               <h3 className='tip__title'>{tipTitle}</h3>
               <img className="tip__icon-info" src={tooltipInfoIcon} alt="information icon" />
               <img onClick={toggleTooltips} className="tip__icon-cross" src={blackCross} alt="close window icon" />
            </div>

            <p className='tip__desc'>{tipDesc}</p>
         </div>)}
      </div>
   )
}

export default Tooltip

