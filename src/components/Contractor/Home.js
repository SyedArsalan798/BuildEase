// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import Card from './Card'; // Import the Card component
import Contractoricon from "./images/contractorcard.png";
import areaicon from './images/areameasure.png';
const Home = () => {
  const handleAddContract = () => {
    // Add your logic for handling the "Add Contract" button click here
    console.log('Add Contract button clicked!');
  };

  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="container">
        <h1>Contractors Home Page</h1>
        <div className="button-container">
          <Link to="/contractlisting" className="add-button">
            Add Contract
          </Link>
        </div>
        <div className="contractorcard-container">
          <Card className="contractor-card"
            imageSrc={Contractoricon}
            location="Karachi"
            title="Commercial Construction"
            areaSizeLogo={areaicon}
            areaSizeText="180,240 Sq. Yd." 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            moreLink="/card1-details"
          />
          <Card className="contractor-card"
            imageSrc={Contractoricon}
            location="Karachi"
            title="Residential Construction"
            areaSizeLogo={areaicon}
            areaSizeText="200,300 Sq. Yd."
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            moreLink="/card2-details"
          />
          {/* Add more cards as needed */}
        </div>
      </div>
    </>
  );
};

export default Home;
