import React, { useCallback } from "react";
import Button from "../../Button/Button";
import "./Page1.scss";

const PageOne = () => {
    
    function MyDropzone() {
        const onDrop = useCallback(acceptedFiles => {
          // Do something with the files
        }, [])
        const {getRootProps, getInputProps, isDragActive} = ({onDrop})
      
        return (
          <div {...getRootProps}>
            <input {...getInputProps} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
        )
      }
return (
    <div className="create-event-info-page">
        <h3 className="create-event-info__step">Step 01</h3>
        <h1 className="create-event-info__title">Event Information (1/2)</h1>
        <div className="event-info-form">

                <div className="form" id="info-form">
                    <h4 className="form__title"> Title </h4>
                    <input type="text" className="form__input" placeholder="Can You Hear The Shape Of A Drum?"
                    />
                    <h4 className="form__title"> Series </h4>
                    <input className="form__input" type="list"placeholder="Bach, The Universe And Everything"/>

                    <h4 className="form__title"> Date </h4>
                    <input type="date" className="form__input"/>
                    <h4 className="form__title"> Time </h4>
                    <input className="form__input" type="time"/>
                    <h4 className="form__title"> Location </h4>
                    <input type="text" className="form__input" placeholder="Kings Place, London"/>
                </div>
                <div className="form" id="picture-form">
                    <h4 className="form__title"> Upload Image </h4>
                
                    <div className="picture-section__border-box">
                    <MyDropzone className="picture-section__dropzone">
                        {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />contr
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        )
                    }
                    </MyDropzone>
                    </div>
                    <h4 className="picture-section__remove" id="remove">Remove</h4>
                    <Button className="primary">Next</Button>
                </div>
            
        </div>
    </div>
        )
                    }    

export default PageOne;