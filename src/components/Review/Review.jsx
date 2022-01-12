import React from 'react-dom';
import "./Review.scss";
import Button from '../Button/Button';

const Review = (props) => {
    const { event } = props;

    const primaryColorStyles = {
        backgroundColor: event.theme.primaryColor
    }
    const accentColorStyles = {
        backgroundColor: event.theme.accentColor
    }

    const generateScheduleList = () => {
        const scheduleArr = event.schedule;
        console.log(scheduleArr);
        return scheduleArr.map(schedule =>
            (
                <div className='review__right-schedule-card'>
                    <p>{schedule.name}</p>
                    {schedule.title !== "" ? <p>{schedule.title}</p> : null}
                    {schedule.author !== "" ? <p>By {schedule.author}</p> : null}
                    <h3>Description</h3>
                    <p>{schedule.description}</p>
                    {schedule.alternativeDescription !== "" ? <><h3>Alternative Description</h3>
                    <p>{schedule.alternateDescription}</p></> : null}
                </div>
            )
        )
    }

    return (
        <div className='review'>
            <div className='review__left'>
                <div className='review__section review__left-info'>
                    <p>Step 05</p>
                   <h2>Review</h2>
                   <div className='review__section-title-edit'>
                   <h3>Event Information</h3>
                   <p>edit</p>
                   </div>
                   <p className='review__section-header'>Part 1</p>
                   <p>Name</p>
                   <p>{event.name}</p> 
                   <p>Series</p>
                   <p>{event.series}</p>
                   <p>Date</p>
                   <p>{event.date}</p>
                   <p>Time</p>
                   <p>{event.time}</p>
                   
                   <p className='review__section-header'>Part 2</p>
                   <p>Heading</p>
                   <p>{event.intro.heading}</p>
                   <p>Content</p>
                   <p>{event.intro.content}</p>
                   <p>Quote</p>
                   <p>{event.intro.quote}</p>
                   <p>Quote Caption</p>
                   <p>{event.intro.quoteCaption}</p>
                </div>

                <div className='review__section review__left-theme'>
                    <div class='review__section-title-edit'>
                        <h3>Theme Settings</h3>
                        <p>edit</p>
                    </div>
                    <p>Font Type</p>
                    <p>{event.theme.templateTheme}</p>
                    <p>Primary Colour</p>
                    <div className='review__left-theme-box' style={primaryColorStyles}></div>
                    <p>Accent Colour</p>
                    <div className='review__left-theme-box' style={accentColorStyles}></div>

                </div>
            </div>
            <div className='review__right'>
                <div className='review__section review__right-next'>
                    <h4>Are you happy with all of the information provided for this event?</h4>
                    <Button buttonType="primary" buttonText="Submit"/>
                </div>
                <div className='review__section review__right-schedule'>
                <div className='review__section-title-edit'>
                    <h3>Event Schedule</h3>
                    <p>edit</p>
                </div>
                {generateScheduleList()}
                </div>
            </div>
        </div>
    )
}

export default Review;