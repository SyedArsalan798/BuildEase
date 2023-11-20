import React from 'react';
import feedbackData from './feedbackdata.json';
import './feedbackeditor.css';
import Mail from './mail';
import { Link, useNavigate } from "react-router-dom";
import Trash from "./trash.png";
import profileImage from './profile.jpg'; 

function ReadedFeedbackList() {
  if (!feedbackData || !feedbackData.read || !Array.isArray(feedbackData.read)) {
    return <div>No read feedback data available</div>;
  }

  return (
    <div  className='feedback_row_wrap'>
      {feedbackData.read.map((feedback, index) => (
        <div key={index} className="feedback_row_main">
            <div className='feedback_row_checkbox_col'>
            <input type="checkbox" />
          </div>
          <Link to={`/mail/${index}`} className="email_text">
        
          <div className='feedback_row_image_info'>
            <img className="feedback_row_image_info_profile_picture" src={profileImage} alt="pic" />
            <div className="feedback_row_image_info_name_email">
              <div className="feedback_row_image_info_name">{feedback.name}</div>
              <div className="feedback_row_image_info_email">{feedback.email}</div>
            </div>
          </div>
          <div className='feedback_row_content_col'>
            {feedback.subject}
          </div>

          <div className="date_trash_container_date">{feedback.date}</div>

          <div className='feedback_row_content_dlt'>
            <img src={Trash} alt="-"/>
          </div>

          </Link>
        </div>
      ))}
    </div>
  );
}

export default ReadedFeedbackList;
