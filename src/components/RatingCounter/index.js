import React from 'react';
import PropTypes from 'prop-types';

const RatingCounter = ({ rating }) => (
  <div>{rating}</div>
);

RatingCounter.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingCounter;
