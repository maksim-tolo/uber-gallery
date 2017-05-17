import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../Picture';
import './PictureList.css';

const PictureList = ({ pictures, onLeftClick, onRightClick }) => (
  <div className="picture-list">
    {pictures.map((picture) =>
      <Picture {...picture} key={picture.url} onLeftClick={onLeftClick} onRightClick={onRightClick} />)}
  </div>
);

PictureList.propTypes = {
  pictures: PropTypes.array.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired
};

export default PictureList;
