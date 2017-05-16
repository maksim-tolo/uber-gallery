import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../Picture';

const PicturesList = ({ pictures, onLeftClick, onRightClick }) => (
  <div>
    {pictures.map((picture) =>
      <Picture {...picture} key={picture.url} onLeftClick={onLeftClick} onRightClick={onRightClick} />)}
  </div>
);

PicturesList.propTypes = {
  pictures: PropTypes.array.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired
};

export default PicturesList;
