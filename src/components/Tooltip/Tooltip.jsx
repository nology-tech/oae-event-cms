import React from 'react';
import infoIcon from "../../assets/images/info-icon.png";
import blackCross from "../../assets/images/black-cross.png"
import "./Tooltip.scss";

const Tooltip = (props) => {
   const { tipName, tipTitle, tipDesc } = props

   return (
      <div className={"tip tip__" + tipName}>

         <div className="tip__flex">
            <h3 className='tip__flex-title'>{tipTitle}</h3>
            <img className="tip__flex-icon" src={infoIcon} alt="information icon" />
            <img className="tip__flex-icon" src={blackCross} alt="close window icon" />
         </div>

         <p className='tip__desc'>{tipDesc}</p>
      </div>
   )
}

export default Tooltip

