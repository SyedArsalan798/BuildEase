import React, { useState } from 'react';
import UnreadFeedbackList from './unreadfeedbacklist'; 
import ReadedFeedbackList from './readfeedbacklist'; 
import './feedbackeditor.css';
import Sidebar from '../Sidebar';
import SearchBar from '../Searchbar';
function FeedbackEditor() {
  const [selectedTab, setSelectedTab] = useState('unread');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <SearchBar/>
      <Sidebar/>
      <div className=''>
        <div className='page__container_wrapper feedback__page'>
          <div className='feedback_page_header'>
          <h2>Messages</h2>
          </div>
        <div className='feedback__tab_wrapper'>
          <div className="feedback__tab_tab_buttons">
              <button
                onClick={() => handleTabChange('unread')}
                className={selectedTab === 'unread' ? 'active' : ''}
              >
                Unread
              </button>
              <button
                onClick={() => handleTabChange('readed')}
                className={selectedTab === 'readed' ? 'active' : ''}
              >
                Readed
              </button>
            </div>
            <div className='feedback__tab_datePicker'>
            <input type="date" />
            </div>
        </div>
        {selectedTab === 'unread' ? <UnreadFeedbackList /> : <ReadedFeedbackList />}
      </div>
      </div>
      
    </div>
  );
}

export default FeedbackEditor;
