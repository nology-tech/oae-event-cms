import React from "react";
import "./PageTwo.scss";
import Button from "../../Button/Button";
import { useForm } from "react-hook-form";

const PageTwo = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        props.handleSubmit();
        console.log(data);
    };

    return (
        <form className="create-event-info-page" onSubmit={handleSubmit(onSubmit)}>
            <div className="event-info-header">
                <h3 className="create-event-info__step">Step 02</h3>
                <h1 className="create-event-info__title">Event Information (2/2)</h1>
            </div>
            <div className="event-info-form">

                <div className="form" id="info-form">
                    <h4 className="form__title"> Event Heading </h4>
                    <input
                        className="form__input"
                        type="eventHeading"
                        name="eventHeading"
                        id="eventHeading"
                        placeholder="If This Is Your First Bach, the Universe And Everyt..."
                        {...register("eventHeading", {
                            required: "This field is required",
                            minLength: {
                                value: 2,
                                message: "The event heading needs to contain at least 2 characters",
                            },
                        })} />
                    {errors.eventHeading && <p>{errors.eventHeading.message}</p>}
                    <h4 className="form__title"> Add Quote / Note (optional) </h4>
                    <input className="form__input" type="text" placeholder="A note from our principal Keyboard Stephen.." />
                    <h4 className="form__title"> Add Quote Caption (optional) </h4>
                    <input type="text" className="form__input" />
                </div>
                <div className="description form" >
                    <h4 className="description__title form__title"> Event Description </h4>
                    <input
                        className=" description__input form__input"
                        id="description"
                        name="description"
                        width="100"
                        rows="80"
                        placeholder="We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced contatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is this spirit that we cae together for a thought provoking contata and a talk..."
                        {...register("description", {
                            required: "This field is required",
                            minLength: {
                                value: 2,
                                message: "The description needs to contain at least 2 characters",
                            },
                        })} />
                    {errors.description && <p>{errors.description.message}</p>}
                    <div className="description__button form__button">
                        <Button buttonType="secondary" buttonText="Back" className="secondary" />
                        <Button buttonType="primary"
                            buttonText="Next" className="primary" />
                    </div>
                </div>

            </div>
        </form>
    )
}
export default PageTwo