import React, { useCallback } from "react";
import Button from "../../Button/Button";
import "./PageOne.scss";


const PageOne = () => {
  function MyDropzone() {
    const onDrop = useCallback((acceptedFiles) => {
      // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = { onDrop };

    return (
      <div {...getRootProps}>
        <input {...getInputProps} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    );
  }
  return (
    <form className="eventinfo potato">
      <div className="form__main">
        <section className="form" id="info-form">
          {/* Page Titles */}
          <div className="form__title">
            <h3 className="form__title-step">Step 01</h3>
            <h2 className="form__title-main">Event Information (1/2)</h2>
          </div>

          {/* Form Titles */}
          <div className="form__section">
            <label className="form__label"> Title </label>
            <input
              type="text"
              className="form__input"
              placeholder="Can You Hear The Shape Of A Drum?"
            />
          </div>

          {/* Form Series */}
          <div className="form__section">
            <label className="form__label"> Series </label>
            <input
              className="form__input"
              type="list"
              placeholder="Bach, The Universe And Everything"
            />
          </div>

          {/* Form Date */}
          <div className="form__section">
            <label className="form__label"> Date </label>
            <input type="date" className="form__input" />
          </div>

          {/* Form Time */}
          <div className="form__section">
            <label className="form__label"> Time </label>
            <input className="form__input" type="time" />
          </div>

          {/* Form Location */}
          <div className="form__section">
            <label className="form__label"> Location </label>
            <input
              type="text"
              className="form__input"
              placeholder="Kings Place, London"
            />
          </div>
        </section>

        {/* Form Image */}
        <section className="form" id="picture-form">
          <label className="form__label"> Upload Image </label>

          <div className="form__border-box">
            <MyDropzone className="form__dropzone">
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <div className="imageDropPlaceholder">image drop placeholder box</div>
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              )}
            </MyDropzone>
          </div>

          <h4 className="picture-section__remove" id="remove">
            Remove
          </h4>
          <div className="ButtonTest">
            <Button
              buttonType="primary"
              buttonText="Next"
              className="form__button-next eventinfo-btn"
            />
          </div>
        </section>
      </div>
    </form>
  );
};

export default PageOne;
