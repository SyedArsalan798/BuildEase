import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import feedbackData from './feedbackdata.json';
import './mail.css';
import Reply from "./replyIcon.png";
import Trash from "./trash.png";
import profileImage from './profile.jpg';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sidebar from '../Sidebar';
function Mail() {
  const { index } = useParams();
  const feedback = feedbackData.unread[index];

  const [replyContent, setReplyContent] = useState('');
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [staticReply, setStaticReply] = useState('');

  const handleReplyClick = () => {
    setIsReplyOpen(true);
  };

  const handleReplySubmit = () => {
    if (replyContent.trim() !== '') {
      setStaticReply(replyContent);
      setReplyContent('');
      setIsReplyOpen(false);
    }
  };

  if (!feedback) {
    return <div>Email not found</div>;
  }

  return (
    <div>
      <Sidebar/>



      <div className="">

        <div className='page__container_wrapper feedback__page'>
          <div className='feedback_page_header'>
            <Link to="/feedback" className="back-link">
              <span className="fa fa-long-arrow-left"></span><span className="arrowText"> Back To Inbox</span>
            </Link>
          </div>

          <div className="feedback_page_content">

            <div className='feedback_page_content_header'>
              <div className='feedback_page_content_details'>
                <img className="feedback_page_profile_picture" src={profileImage} alt="pic" />
                <div className='feedback_page_info_content'>
                  <div className="feedback_page_profile_name">{feedback.name}</div>
                  <div className="feedback_page_profile_username">{feedback.username}</div>
                  <div className='feedback_page_profile_subject'>{feedback.subject}</div>
                </div>
              </div>
              <div className="feedback_page_action_buttons">
                <span className="feedback_page_profile_date_container">{feedback.date}</span>
                <span className="feedback__page_icon" onClick={handleReplyClick}><img src={Reply} alt="-" />Reply</span>
                <span className="feedback__page_icon"><img src={Trash} alt='-' />Delete</span>
              </div>
            </div>
            <div className="feedback_page_profile_text_content">
              <p>{feedback.comment}</p>
            </div>

          </div>
          {staticReply && (

            <div className='feedback_page_reply'>
              <div className="feedback_page_content">

                <div className='feedback_page_content_header'>
                  <div className='feedback_page_content_details'>
                    <img className="feedback_page_profile_picture" src={profileImage} alt="pic" />
                    <div className='feedback_page_info_content'>
                      <div className="feedback_page_profile_name">{feedback.name}</div>
                      <div className="feedback_page_profile_username">{feedback.username}</div>
                      <div className='feedback_page_profile_subject'>{feedback.subject}</div>
                    </div>
                  </div>
                  <div className="feedback_page_action_buttons">
                    <span className="feedback_page_profile_date_container">{feedback.date}</span>
                    {/* <span className="feedback__page_icon" onClick={handleReplyClick}><img src={Reply} alt="-"/>Reply</span> */}
                    <span className="feedback__page_icon"><img src={Trash} alt='-' />Delete</span>
                  </div>
                </div>
                <div className="feedback_page_profile_text_content">
                  <div dangerouslySetInnerHTML={{ __html: staticReply }} />
                </div>

              </div>
            </div>
          )}
          {isReplyOpen && (
            <div className='feedback_replyBox_wrapper'>
              <div className='feedback_replyBox_img_replyBox'>
                <img className="feedback_replyBox_profile_picture" src={profileImage} alt="pic" />
                <div className='feedback_quill_container'>
                  <ReactQuill className="feedback_quill_editor"
                    value={replyContent}
                    onChange={setReplyContent}
                    modules={{
                      toolbar: [
                        [{ header: '1' }, { header: '2' }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                      ],
                    }}
                  />
                  <div className='feedback_replyBox_footer'>
                    <button className='feedback_replyBox_submitBtn' onClick={handleReplySubmit}>Send</button>
                    <span className="feedback_replyBox_icon"><img src={Trash} alt='-' /></span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mail;
