import React from "react";
import {ReactComponent as EditIcon} from '../../../assets/images/edit-icon.svg';
import "./EditIconButton.scss";


const EditIconButton = ({onClick}) => {

return (
        <button className="icon" onClick={onClick}>{<EditIcon/>}</button>
      )}

export default EditIconButton;