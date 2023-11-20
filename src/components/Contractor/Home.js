// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import Sidebar from './Sidebar';

const Home = () => {
  const handleAddContract = () => {
    // Add your logic for handling the "Add Contract" button click here
    console.log('Add Contract button clicked!');
  };

  return (
    <>
    <Sidebar />
    <div className="container">
      <h1>Welcome to Contractors Home Page</h1>
      <div className="button-container">
        <Link to="/contractlisting" className="add-button">
          Add Contract
        </Link>
      </div>
    </div>
    </>
  );
};

export default Home;
