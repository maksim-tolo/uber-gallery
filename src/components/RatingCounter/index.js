import React from 'react';
import PropTypes from 'prop-types';

import './RatingCounter.css';

const RatingCounter = ({ rating }) => (
  <div className="picture-list__counter">{rating}</div>
);

RatingCounter.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingCounter;
