import React from 'react';
import PropTypes from 'prop-types';

const PicturesSelect = ({ onSelect }) => (
  <input type="file" multiple accept="image/*" onChange={(e) => onSelect(e.target.files)}/>
);

PicturesSelect.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default PicturesSelect;
