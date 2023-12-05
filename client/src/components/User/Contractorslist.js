import React from 'react';
import { Link } from 'react-router-dom';
import './Contractlist.css';
import img1 from '../../assets/profile.jpg';
import User_Sidebar from './User_Sidebar';
import SearchBar from './Searchbar';
import star from '../Contractor/images/rating.png'

const ContractList = () => {
  const cardsData = [
    { id: 1, contractor_name:'Imam Ul Haq', title: 'We will design Commercial Building with Material', imageSrc: img1, rating: 3.4, review_count: 23, date: '4 days ago', views: '42'},
    { id: 2, contractor_name:'Shahid Khakan', title: 'We will make Residential Project without Material', imageSrc: img1, rating: 4.7, review_count: 23, date: '3 days ago', views: '60' },
    { id: 3, contractor_name:'Ayaz Hasan', title: 'Commercial Hotel Construction with High Quality Material', imageSrc: img1, rating: 4.4, review_count: 98, date: '3 days ago', views: '6.2K' },


  ];

  return (
    <>
      <SearchBar />
      <User_Sidebar />
      <div className="contract-list-container">
      <h6 className='text-secondary'>All the contractor's listings would be shown here.</h6>
        {/* <h1>Contract List</h1> */}
        <div className="card-container">
          {cardsData.map((card) => (
            <>

              <div className="contractorlist-card p-0" key={card.id}>
                <Link to={'/detailcontract'} className="card-link">

                <div className="contractorlist-cardimage">
                  <img className='border' src={card.imageSrc}></img>
                </div>
                </Link>
                <div className="contractorlist-cardtext mt-1">
                  <span className="date text-secondary">{card.date}</span>
                  {/* Contractor Profile link */}
                  <Link to={'/'} className="card-link">
                  <p className='fw-bold mb-1 mt-1'>{card.contractor_name}</p>
                  </Link>
                  <Link to={'/detailcontract'} className="card-link">
                  <p className='title m-0 mb-1'>{card.title}</p>
                  </Link>
                </div>
                <div className='mb-1 fw-bold'>From 80 Sq. yards</div>

                <div className="contractorlist-cardstats text-dark mb-1">
                <div className="stat">
                   
                    <img width="20" height="20" src={star} alt="star--v1"/>
                    <div className="value fw-bold">{card.rating}</div>
                    <div className="type text-secondary">({card.review_count})</div>
                  </div>
                  <div className="stat">
                  <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/60/visible--v1.png" alt="visible--v1"/>
                    <div className="value fw-bold">{card.views}</div>
                    <div className="type text-secondary">views</div>
                  </div>
                </div>
                
              </div>
              </>
              
          ))}
        </div>
      </div>
    </>
  );
};

export default ContractList;
