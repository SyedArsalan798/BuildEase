import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import './Request.css';
const HiringRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      username: 'Umer khan',
      type: 'Commercial Construction',
      areaSize: '180,240',
      userBudget: '$50,000',
    },
    {
        id: 2,
        username: 'Umer khan',
        type: 'Residential Construction',
        areaSize: '180,240',
        userBudget: '$80,000',
      },
      {
        id: 3,
        username: 'Umer khan',
        type: 'Commercial Construction',
        areaSize: '180,240',
        userBudget: '$50,000',
      },
      {
        id: 4,
        username: 'Umer khan',
        type: 'Residential Construction',
        areaSize: '180,240',
        userBudget: '$50,000',
      },
  ]);

  const handleAccept = (id) => {
    // Handle the logic for accepting the request
    console.log(`Request ${id} accepted`);
  };

  const handleReject = (id) => {
    // Handle the logic for rejecting the request
    console.log(`Request ${id} rejected`);
  };

  return (
    <>
    <SearchBar/>
    <Sidebar/>
    <div>
      <h1 className='hiring_heading'>Hiring Requests</h1>
      <div className="request-list">
        {requests.map((request) => (
          <div className="request-card" key={request.id}>
            <div>
              <h3>{request.username}</h3>
              <p>{request.type}</p>
              <p>Area Size: {request.areaSize}</p>
              <p>User Budget: {request.userBudget}</p>
            </div>
            <div className="actions">
              <button className="accept-button" onClick={() => handleAccept(request.id)}>Accept</button>
              <button className="reject-button" onClick={() => handleReject(request.id)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default HiringRequests;
