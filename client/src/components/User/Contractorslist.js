import React from 'react';
import { Link } from 'react-router-dom';
import './Contractlist.css';
import img1 from '../../assets/profile.jpg';
import User_Sidebar from './User_Sidebar';
import SearchBar from './Searchbar';

const ContractList = () => {
  const cardsData = [
    { id: 1, title: 'Commercial Building', imageSrc: img1, rating: 3, date: '4 days ago', readTime: 4 },
    { id: 2, title: 'Residential Project', imageSrc: img1, rating: 4, date: '3 days ago', readTime: 6 },
  ];

  return (
    <>
      <SearchBar />
      <User_Sidebar />
      <div className="contract-list-container">
        <h1>Contract List</h1>
        <div className="card-container">
          {cardsData.map((card) => (
            <Link to={'/detailcontract'} key={card.id} className="card-link">
              <div className="contractorlist-card">
                <div className="contractorlist-cardimage" style={{ backgroundImage: `url(${card.imageSrc})` }}></div>
                <div className="contractorlist-cardtext">
                  <span className="date">{card.date}</span>
                  <h2>{card.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod
                    deserunt eligendi dolor
                  </p>
                </div>
                <div className="contractorlist-cardstats">
                  <div className="stat">
                    <div className="value">
                      {card.readTime}
                    </div>
                    <div className="type">views</div>
                  </div>
                  <div className="stat border">
                    {/* Add your rating logic here */}
                    <div className="value">{card.rating}</div>
                    <div className="rating-type">rating</div>
                  </div>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContractList;
