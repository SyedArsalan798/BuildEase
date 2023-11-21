import React from 'react';
import feedbackData from './feedbackdata.json'; // Load your JSON data
import './feedbackeditor.css';
import './mail';
import { Link, useNavigate } from "react-router-dom";
import Trash from "./trash.png";
import profileImage from './profile.jpg'; // Import the image

function UnreadedFeedbackList() {
  // Check if feedbackData.unreaded is defined and is an array
  if (!feedbackData || !feedbackData.unread || !Array.isArray(feedbackData.unread)) {
    return <div>No unread feedback data available</div>;
  }

  return (
    <div  className='feedback_row_wrap'>
      {feedbackData.unread.map((feedback, index) => (
          <div key={index} className="feedback_row_main">
          <div className='feedback_row_checkbox_col'>
          <input type="checkbox" />
        </div>
        <Link to={`/usermail/${index}`} className="email_text">
      
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

export default UnreadedFeedbackList;
