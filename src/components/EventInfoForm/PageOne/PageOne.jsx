import React, { useState, useCallback } from "react";
import Button from "../../Button/Button";
import "./Page1.scss";
import DropdownButton from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import {useDropzone} from 'react-dropzone'
const PageOne = () => {
    function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        }    , [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
    <div className="event-info-page1" >
        <div className="event-info-header">
            <h3>Step 01</h3>
            <h1>Event Information (1/2)</h1>
        </div>
        <div className="info-section">
            <h2 className="info-section__title-1"> Title </h2>
            <p className="info-section__input-1" placeholder="Can You Hear The Shape Of A Drum?">
            </p>
            <h2 className="info-section__title-2"> Series </h2>
            <DropdownButton id="info-section-input-2">
                <DropdownButton.Item href="#/action-1">Bach, The Universe And Everything</DropdownButton.Item>
                <DropdownButton.Item href="#/action-2">Life, Liberty And The Pursuit Of Happiness</DropdownButton.Item>
                <DropdownButton.Item href="#/action-3">Something Else</DropdownButton.Item>
            </DropdownButton>
           <h2 className="info-section__title-3"> Date </h2>
           <input type="date" className="info-section__input-3" />
            <h2 className="info-section__title-4"> Time </h2>
            <input className="info-section-_input-4" type="time"/>
            <h2 className="Info-section__title-5-"> Location </h2>
            <p className="Info-section__input-5" placeholder="Kings Place, London"></p>
        </div>
        <div className="picture-section">
            <h2 className="picture-section__title"> Upload Image </h2>
            <div className="picture-section__upload-image">
                <MyDropzone className="picture-section__dropbox-container" {...getRootProps()}>
                    <input {...getInputProps()} /> { isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                 </MyDropzone>
            </div>
            <h4 className="picture-section__remove">Remove</h4>
            <Button className="primary">Next</Button>
        </div>
    </div>
        )
    }
}
export default PageOne;