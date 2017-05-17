import React from 'react';
import PropTypes from 'prop-types';

import './PictureSelect.css';

const PictureSelect = ({ onSelect }) => (
  <label className="picture-select">
    <div>
      <span className="picture-select__text">Choose Images</span>
      <input className="picture-select__input" type="file" multiple accept="image/*" onChange={(e) => onSelect(e.target.files)} />
    </div>
  </label>
);

PictureSelect.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default PictureSelect;
