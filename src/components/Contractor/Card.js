// Card.js

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageSrc, location, title, areaSizeLogo, areaSizeText, description, moreLink }) => {
  return (
    <div className="card-contractorr">
      <img src={imageSrc} alt={title} className="card-img-top" />
      <div className="card-body">
        <div className="location">{location}</div>
        <h5 className="card-title">{title}</h5>
        <div className="area-size">
          <img src={areaSizeLogo} alt="Area Size" className="area-size-logo" />
          {areaSizeText}
        </div>
        <p className="card-text">{description}</p>
        <Link to={moreLink} className="more-link">
          More
        </Link>
      </div>
    </div>
  );
};

export default Card;
