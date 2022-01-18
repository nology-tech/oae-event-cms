import React from 'react-dom';
import "./Review.scss";
import Button from '../Button/Button';
import Accordian from '../Accordian/Accordian';
import {ReactComponent as EditIcon} from '../../assets/images/edit-icon.svg';

const Review = (props) => {
    const { event, setReviewStep } = props;

    const primaryColorStyles = {
        backgroundColor: event.theme.themeColor
    }
    const accentColorStyles = {
        backgroundColor: event.theme.accentColor
    }
    const subtitleColorStyles = {
        backgroundColor: event.theme.subtitleColor
    }

    const onSubmit = {
        // This is where the API call would be. 
    }

    const generateScheduleList = () => {
        const scheduleArr = event.schedule;
        console.log(scheduleArr);
        return scheduleArr.map((schedule, i) =>
            (
                <div key={i} className='accordian review__right-schedule-card'>
                    <Accordian name={schedule.name} title={schedule.title !== "" ? schedule.title : ""} author={schedule.author !== "" ? schedule.author : ""} description={schedule.description} alternativeDescription={schedule.alternateDescription !== "" ? schedule.alternateDescription : ""}/>
                </div>
            )
        )
    }

    return (
        <div className='review'>
            <div className='review__left'>
                <div className='review__section review__left-info'>
                    <p className='review__left-info-step'>Step 05</p>
                   <h2>Review</h2>
                   <div className='review__section-title-edit'>
                   <h3>Event Information</h3>
                   <button onClick={() => setReviewStep(0)}><EditIcon/></button>
                   </div>
                   <p className='review__section-header'>Part 1</p>
                   <p className='review__section-text'>Name</p>
                   <p className='review__section-input'>{event.name}</p> 
                   <p className='review__section-text'>Series</p>
                   <p className='review__section-input'>{event.series}</p>
                   <p className='review__section-text'>Date</p>
                   <p className='review__section-input'>{event.date}</p>
                   <p className='review__section-text'>Time</p>
                   <p className='review__section-input'>{event.time}</p>
                   
                   <p className='review__section-header'>Part 2</p>
                   <p className='review__section-text'>Heading</p>
                   <p className='review__section-input'>{event.intro.heading}</p>
                   <p className='review__section-text'>Content</p>
                   <p className='review__section-input'>{event.intro.content}</p>
                   <p className='review__section-text'>Quote</p>
                   <p className='review__section-input'>{event.intro.quote}</p>
                   <p className='review__section-text'>Quote Caption</p>
                   <p className='review__section-input'>{event.intro.quoteCaption}</p>
                </div>

                <div className='review__section review__left-theme'>
                    <div class='review__section-title-edit'>
                        <h3>Theme Settings</h3>
                        <button onClick={() => setReviewStep(3)}><EditIcon/></button>
                    </div>
                    <p className='review__section-text'>Font Type</p>
                    <p className='review__section-input'>{event.theme.fontType}</p>
                    <p className='review__section-text'>Primary Colour</p>
                    <div className='review__left-theme-box' style={primaryColorStyles}></div>
                    <p className='review__section-text'>Accent Colour</p>
                    <div className='review__left-theme-box' style={accentColorStyles}></div>
                    <p className='review__section-text'>Subitle Colour</p>
                    <div className='review__left-theme-box' style={subtitleColorStyles}></div>
                </div>
            </div>
            <div className='review__right'>
                <div className='review__section review__right-next'>
                    <h4>Are you happy with all of the information provided for this event?</h4>
                    <Button buttonType="primary" buttonText="Submit" onClick={onSubmit}/>
                </div>
                <div className='review__section review__right-schedule'>
                <div className='review__section-title-edit'>
                    <h3>Event Schedule</h3>
                    <button onClick={() => setReviewStep(2)}><EditIcon/></button>
                </div>
                {generateScheduleList()}
                </div>
            </div>
        </div>
    )
}

export default Review;