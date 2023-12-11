// DetailList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Detaillist.css'; // Import the CSS file for styling
import User_Sidebar from './User_Sidebar';
import SearchBar from './Searchbar';

const DetailList = () => {
  // Updated data for a project
  const projectDetails = {
    title: 'We will design Commercial Building with Material',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit vitae elit sodales eleifend. Vivamus interdum ac quam at pellentesque. Phasellus congue aliquet lorem, at hendrerit metus. Integer euismod, neque vel hendrerit accumsan, augue urna tempus purus, vitae scelerisque nunc ipsum sit amet justo.`,
    type: 'Commercial',
    residentialOptions: ['Custom Home Building', 'Flat Construction'],
    commercialOptions: ['Hotel Construction', 'Office', 'Healthcare'],
    areaSize: '120 sq yards',
  };

  const handleCallContractor = () => {
    // Add logic to handle calling the contractor
    console.log('Calling the contractor...');
  };

  const handleMessageContractor = () => {
    // Add logic to handle messaging the contractor
    console.log('Messaging the contractor...');
  };

  // Use Link to make "Request Hire" button linkable
  const RequestHireLink = ({ children }) => (
    <Link to="/hirerequestform" className="req-button">
      {children}
    </Link>
  );

  return (
    <>
      <SearchBar />
      <User_Sidebar />
      <div className="detail-container">
        <h2>{projectDetails.title}</h2>
        <p>{projectDetails.description}</p>
        <div>
          <strong>Type:</strong> {projectDetails.type}
        </div>
        {projectDetails.type === 'Residential' && (
          <div>
            <strong>Residential Options:</strong>{' '}
            {projectDetails.residentialOptions.join(', ')}
          </div>
        )}
        {projectDetails.type === 'Commercial' && (
          <div>
            <strong>Commercial Options:</strong>{' '}
            {projectDetails.commercialOptions.join(', ')}
          </div>
        )}
        <div>
          <strong>Area Size:</strong> {projectDetails.areaSize}
        </div>

        <div className="button-container">
          <button className="call-button" onClick={handleCallContractor}>
            Call the Contractor
          </button>
          <button className="msg-button" onClick={handleMessageContractor}>
            Message the Contractor
          </button>
          {/* Use RequestHireLink to make "Request Hire" button linkable */}
          <RequestHireLink className="req-button">Request Hire</RequestHireLink>
        </div>
      </div>
    </>
  );
};

export default DetailList;
