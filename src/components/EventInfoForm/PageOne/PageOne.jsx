import Button from "../../Button/Button";
import "./PageOne.scss";
import { useState, useEffect } from "react"

const PageOne = (props) => {
  const data = props.data;
  const handleNext = props.handleSubmit;

  const [imageSrc, setImageSrc] = useState(props.imageSrc);

  useEffect(() => {
    setImageSrc(props.imageSrc);
  }, [props])


  const handleChange = (e) => {
    const url = e.target.value;
    setImageSrc(url);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event);
    const formData = {
      step: 0,
      name: event.target.eventname.value,
      series: event.target.series.value,
      time: event.target.time.value,
      date: event.target.date.value,
      location: event.target.location.value,
      venue: event.target.venue.value,
      imageSrc: event.target.imageSrc.value
    }
    handleNext(formData);    
  }

  return (
    <form className="eventInfo" onSubmit={handleSubmit}>
      <div className="eventInfo__pageOne-form__main">
        <section className="eventInfo__pageOne-form form" id="info-form">
          <div className="form__title">
            <h3 className="form__title-step">Step 01</h3>
            <h2 className="form__title-main">Event Information</h2>
          </div>
          <div className="form__section">
              <div className="eventInfo__pageOne-form-tooltip">
                <label className="form__label"> Title </label>
              </div>
            <input
              defaultValue={data?.name}
              name="eventname"
              type="text"
              className="eventInfo__pageOne-form__input form__input"
              placeholder="Can You Hear The Shape Of A Drum?"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Series </label>
            <input
              name="series"
              defaultValue={data?.series}
              className="eventInfo__pageOne-form__input form__input"
              type="list"
              placeholder="Bach, The Universe And Everything"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Date </label>

            <input
            
              name="date"
              type="date"
              defaultValue={data?.date}
              className="eventInfo__pageOne-form__input form__input"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Time </label>
            <input
              name="time"
              defaultValue={data?.time}
              className="eventInfo__pageOne-form__input form__input"
              type="time"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Venue </label>
            <input
              name="venue"
              type="text"
              className="eventInfo__pageOne-form__input form__input"
              defaultValue={data?.venue}
              placeholder="e.g. Kings Place"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Location </label>
            <input
              name="location"
              type="text"
              className="eventInfo__pageOne-form__input form__input"
              defaultValue={data?.location}
              placeholder="e.g. London"
            />
          </div>
        </section>
        <section className="picture-section form"          id="picture-form">
          <div className="picture-section__container">
            <label className="picture-section__label form__label"> Upload Image </label>
            <div className="form__borderbox">
              <div>
                <div className="picture-section__dropbox-placeholder">
                  <img src={imageSrc} alt="Heading for this event"/>
                </div>
              </div>
            </div>
            <div className="form__section">
              <label className="form__label">Image Url </label>
              <input
                name="imageSrc"
                type="text"
                className="eventInfo__pageOne-form__input form__input"
                defaultValue={data?.imageSrc}
                placeholder="e.g. External Image Link"
                onChange={handleChange}
              />
            </div>
            <div className="picture-section__button">
              <Button
                type="submit"
                buttonType="primary"
                buttonText="Next"
                className="form__button-next eventinfo-btn"
              />
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default PageOne;
