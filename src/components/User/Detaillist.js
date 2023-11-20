// DetailList.js

import React from 'react';
import { Link } from 'react-router-dom';

const DetailList = () => {
  // Dummy data (replace with actual data)
  const details = {
    title: 'Contractor XYZ',
    location: '123 Main St, City',
    type: 'House',
    areaSize: '200 sq yards',
    bedrooms: '3 bedrooms',
    contactNo: '123-456-7890',
    teamSize: '5 persons',
    constructionServices: 'Residential, Commercial, Renovations',
  };

  // Dummy description (replace with actual descriptions)
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit vitae elit sodales eleifend. Vivamus interdum ac quam at pellentesque. Phasellus congue aliquet lorem, at hendrerit metus. Integer euismod, neque vel hendrerit accumsan, augue urna tempus purus, vitae scelerisque nunc ipsum sit amet justo.`;

  const handleCallContractor = () => {
    // Add logic to handle calling the contractor
    console.log('Calling the contractor...');
  };

  const handleMessageContractor = () => {
    // Add logic to handle messaging the contractor
    console.log('Messaging the contractor...');
  };

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{description}</p>
      <div>
        <strong>Location:</strong> {details.location}
      </div>
      <div>
        <strong>Type:</strong> {details.type}
      </div>
      {details.type === 'House' || details.type === 'Both' ? (
        <div>
          <strong>Area Size:</strong> {details.areaSize}
        </div>
      ) : null}
      {details.type === 'Flats' || details.type === 'Both' ? (
        <div>
          <strong>Bedrooms:</strong> {details.bedrooms}
        </div>
      ) : null}
      <div>
        <strong>Contact No:</strong> {details.contactNo}
      </div>
      <div>
        <strong>Size of Team:</strong> {details.teamSize}
      </div>
      <div>
        <strong>Construction Services:</strong> {details.constructionServices}
      </div>

      <div>
        <Link to="/call-contractor">
          <button onClick={handleCallContractor}>Call the Contractor</button>
        </Link>
        <Link to="/message-contractor">
          <button onClick={handleMessageContractor}>Message the Contractor</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailList;
