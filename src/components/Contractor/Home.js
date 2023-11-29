// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import Card from './Card'; // Import the Card component
import Contractoricon from "./images/contractorcard.png";
import areaicon from './images/areameasure.png';
import Icon from './images/plus_icon.png'
// import ShowPrices from '../../ShowPrices';
const Home = () => {
  const handleAddContract = () => {
    // Add your logic for handling the "Add Contract" button click here
    console.log('Add Contract button clicked!');
  };

  return (
    <>
      {/* <ShowPrices /> */}
      <SearchBar />
      <Sidebar />
      <div className="container">
        
        <h6 className='c_home_heading text-secondary'>All your Listings would be shown here.</h6>
        <div className="button-containerr">
          <Link to="/contractlisting" className="add-button align-items-center border">
          <img width="22" height="22" src={Icon} alt="plus--v1"/>
          {/* <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/ffffff/plus--v1.png" alt="plus--v1"/> */}
            <span className='ms-1 me-1 fw-bold'>Create new Listing</span>
          </Link>
        </div>
        <div className="contractor-card-contractors_page">
          <Card className="contractor-card"
            imageSrc={Contractoricon}
            location="Karachi"
            title="Commercial Construction"
            areaSizeLogo={areaicon}
            areaSizeText="180, 240 sq. yards" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            moreLink="/card1-details"
          />
          <Card className="contractor-card"
            imageSrc={Contractoricon}
            location="Karachi"
            title="Residential Construction"
            areaSizeLogo={areaicon}
            areaSizeText="200, 300 sq. yards"
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
