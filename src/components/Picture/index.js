import React from 'react';
import PropTypes from 'prop-types';

import RatingCounter from '../RatingCounter';
import './Picture.css';

const Picture = ({ url, rating, onLeftClick, onRightClick }) => (
  <div className="picture-list__item" onClick={() => onLeftClick(url)} onContextMenu={(e) => {
    e.preventDefault();
    onRightClick(url);
  }}>
    <img src={url} />
    <RatingCounter rating={rating} />
  </div>
);

Picture.propTypes = {
  url: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired
};

export default Picture;
