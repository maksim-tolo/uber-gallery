import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ url, rating }) => (
  <img src={url} />
);

Picture.propTypes = {
  url: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default Picture;
