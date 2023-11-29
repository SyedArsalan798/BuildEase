import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import areaicon from './images/areameasure.png';
import './Request.css';
const HiringRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      username: 'Umer khan',
      type: 'Commercial Construction',
      areaSize: '240',
      userBudget: '50,000',
    },
    {
        id: 2,
        username: 'Umer khan',
        type: 'Residential Construction',
        areaSize: '180',
        userBudget: '80,000',
      },
      {
        id: 3,
        username: 'Umer khan',
        type: 'Commercial Construction',
        areaSize: '180',
        userBudget: '50,000',
      },
      {
        id: 4,
        username: 'Umer khan',
        type: 'Residential Construction',
        areaSize: '120',
        userBudget: '50,000',
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
      <h6 className='hiring_heading text-secondary'>All the Hiring Requests from clients would be shown here.</h6>
      <h3 className='hiring_heading_h3'>Client's Requests</h3>
      <div className="request-list">
        {requests.map((request) => (
          <div className="request-card" key={request.id}>
            <div>
              <p className='requested_para'><b className=''>{request.username}</b> requested you for <b>{request.type}</b> with:</p>
              {/* <p>{request.type}</p> */}
              <p className='mb-0 text-secondary'><img src={areaicon} alt="Area Size" className="area-size-logo" />{request.areaSize} sq. yards</p>
              <p className='text-secondary d-flex'>
              <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/60/money--v1.png" alt="money--v1"/>
              <span className='ms-1'>{request.userBudget} rupees</span>
              </p>
            </div>
            <div className="actions">
              <a className="accept-button" onClick={() => handleAccept(request.id)}>Accept</a>
              <a className="reject-button" onClick={() => handleReject(request.id)}>Reject</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default HiringRequests;
