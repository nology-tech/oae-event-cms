import Button from "../../Button/Button";
import "./PageOne.scss";
import { useForm } from "react-hook-form";

const PageOne = (props) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.handleSubmit();
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="eventinfo" onSubmit={handleSubmit(onSubmit)}>
      <div className="eventInfo__pageOne-form__main">
        <section className="eventInfo__pageOne-form form" id="info-form">
          <div className="form__title">
            <h3 className="form__title-step">Step 01</h3>
            <h2 className="form__title-main">Event Information (1/2)</h2>
          </div>
          <div className="form__section">
            <label className="form__label"> Title </label>
            <input
              type="text"
              name="title"
              id="title"
              className="eventInfo__pageOne-form__input form__input"
              placeholder="Can You Hear The Shape Of A Drum?"
              {...register("title", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "The title needs to contain at least 2 characters",
                },
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className="form__section">
            <label className="form__label"> Series </label>
            <input
              name="series"
              id="series"
              className="eventInfo__pageOne-form__input form__input"
              type="list"
              placeholder="Bach, The Universe And Everything"
              {...register("series", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "The series needs to contain at least 2 characters",
                },
              })}
            />
            {errors.series && <p>{errors.series.message}</p>}
          </div>
          <div className="form__section">
            <label className="form__label"> Date </label>
            <input
              type="date"
              name="date"
              id="date"
              className="eventInfo__pageOne-form__input form__input"
              {...register("date", {
                required: "this field requires a valid date input",
                valueAsDate: true,
              })}
            />
            {errors.date && <p>{errors.date.message}</p>}
          </div>
          <div className="form__section">
            <label className="form__label"> Time </label>
            <input
              className="eventInfo__pageOne-form__input form__input"
              type="time"
            />
          </div>
          <div className="form__section">
            <label className="form__label"> Location </label>
            <input
              type="text"
              name="location"
              id="location"
              className="eventInfo__pageOne-form__input form__input"
              placeholder="Kings Place, London"
              {...register("location", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message:
                    "The location needs to contain at least 2 characters",
                },
              })}
            />
            {errors.location && <p>{errors.location.message}</p>}
          </div>
        </section>
        <section className="picture-section form" id="picture-form">
          <label className="form__label"> Upload Image </label>

          <div className="form__borderbox">
            <div>
              <div className="form__borderbox-placeholder">
                image drop placeholder box
              </div>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
          <h4 className="picture-section__remove" id="remove">
            Remove
          </h4>
          <div className="picture-section__button">
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
