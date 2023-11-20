
import React from 'react';
import { Link } from 'react-router-dom';
import './Contractlist.css';
import img1 from '../../assets/profile.jpg';
import User_Sidebar from './User_Sidebar'

const ContractList = () => {
  const cardsData = [
    { id: 1, title: 'Contract 1', imageSrc: img1},
    { id: 2, title: 'Contract 2', imageSrc: img1 },
    { id: 3, title: 'Contract 3', imageSrc: img1 },
    { id: 4, title: 'Contract 4', imageSrc: img1 },
  ];

  return (
    <>
    <User_Sidebar />
    <div className="contract-list-container">
      <h1>Contract List</h1>
      <div className="card-container">
        {cardsData.map((card) => (
          <Link to={'/detailcontract'} key={card.id} className="card-link">
            <div className="card">
              <div className="image-container">
                <img src={card.imageSrc} alt={`Contract ${card.id}`} className="card-image" />
              </div>
              <h3 className="card-title">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default ContractList;
