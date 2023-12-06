// CardInfo.js

import React from 'react';
import './CardInfo.css'; // Import the CSS file
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';

const CardInfo = () => {
  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="card-info-container">
        <div className="showproject-details">
          <h2>Project Title</h2>
          <p className="showdescription">We Will build a residential House as well as 
          Commerical Project in Reasonable Price with best Qualityi</p>
          <div className="showtype">
            <h3>Type:</h3>
            <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
            className="me-2 rounded-pill px-3 py-2">Residential</span>
            <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
            className="me-2 rounded-pill px-3 py-2">Commercial</span>
            <div className="showresidential-types">
              <h3>Residential Types:</h3>  
              <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
              className="me-2 rounded-pill px-3 py-2">Flat</span>
            <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
            className="me-2 rounded-pill px-3 py-2">Home</span>
            </div>
            <div className="showcommercial-types">
                <h3>Commercial Types:</h3>
                <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
                  className="me-2 rounded-pill px-3 py-2">Office</span>
                  <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
                  
                  className="me-2 rounded-pill px-3 py-2">Hotel</span>
              
            </div>
          </div>
          <h3>Area Size:</h3>
          <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
            className="me-2 rounded-pill px-3 py-2">120 sq ft</span>
             <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
            className="me-2 rounded-pill px-3 py-2">220 sq ft</span>
            <span style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
            className="me-2 rounded-pill px-3 py-2">500 sq ft</span>
            
          
          <h3>Team Size:</h3>
          <p> 25 Members</p>
        </div>

        <div className="showmaterial-info">
          <h2>Material Info</h2>
          <div className="showrequired-material">
  <table>
    <thead>
      <tr>
        <th>Material</th>
        <th>Brand</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cement</td>
        <td>Lucky Cement</td>
      </tr>
      <tr>
        <td>Blocks</td>
        <td>Fair Face 1200 PSI</td>
      </tr>
      <tr>
        <td>Steel</td>
        <td>Amreli Steel</td>
      </tr>
      <tr>
        <td>Sand</td>
        <td>Makli</td>
      </tr>
      <tr>
        <td>Crush (Bajri)</td>
        <td>Crush-Stone Soling (Rohra) 2"-3" 50-80mm</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
      </div>
    </>
  );
};

export default CardInfo;
