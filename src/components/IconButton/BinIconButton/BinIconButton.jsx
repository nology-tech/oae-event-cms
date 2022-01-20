import React from "react";
import {ReactComponent as BinIcon} from '../../../assets/images/bin-icon.svg';

const BinIconButton = ({onClick}) => {

return (
        <button className="icon" onClick={onClick}>{<BinIcon/>}</button>
      )}

export default BinIconButton;