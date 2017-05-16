import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../Picture';

const PicturesList = ({ pictures }) => (
  <div>
    {pictures.map((picture) => <Picture {...picture} key={picture.url} />)}
  </div>
);

PicturesList.propTypes = {
  pictures: PropTypes.array.isRequired
};

export default PicturesList;
