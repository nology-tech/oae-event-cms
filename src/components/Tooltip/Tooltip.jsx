import React, { useState } from 'react';
import infoIcon from "../../assets/images/info-icon.png";
import blackCross from "../../assets/images/black-cross.png"
import "./Tooltip.scss";

const Tooltip = (props) => {
   const { tipName, tipTitle, tipDesc } = props;

   const [showInfo, setShowInfo] = useState(false)

   const toggleInfo = () => setShowInfo(!showInfo)

   return (
      <div>
         {!showInfo && <img className="tip__icon-info" src={infoIcon} alt="information icon" onClick={toggleInfo} />}
         {showInfo && (<div className={"tip tip__" + tipName}>

            <div className="tip__flex">
               <h3 className='tip__title'>{tipTitle}</h3>
               <img className="tip__icon-info" src={infoIcon} alt="information icon" />
               <img onClick={toggleInfo} className="tip__icon-cross" src={blackCross} alt="close window icon" />
            </div>

            <p className='tip__desc'>{tipDesc}</p>
         </div>)}
      </div>
   )
}

export default Tooltip;

