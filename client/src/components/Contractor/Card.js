// Card.js

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageSrc, location, title, areaSizeLogo, areaSizeText, description, moreLink }) => {
  return (
    <div className="card-contractor border">
      {/* <img src={imageSrc} alt={title} className="card-img-top" /> */}
      <div className="card-body">
        <p className="location mb-0 text-secondary">{location}</p>
        <h5 className="card-title mt-0 mb-2">{title}</h5>
        <div className="area-size">
          <img src={areaSizeLogo} alt="Area Size" className="area-size-logo" />
          {areaSizeText}
        </div>
        <p className="card-text">{description}</p>
        <Link to={moreLink} className="more-link ">
          See details
        </Link>
      </div>
    </div>
  );
};

export default Card;
