import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PictureSelect from '../../components/PictureSelect';
import PictureList from '../../components/PictureList';
import {
  savePictures,
  increasePictureRating,
  decreasePictureRating
} from './actions';

const App = ({ onSelect, pictures, onLeftClick, onRightClick }) => (
  <div>
    <PictureSelect onSelect={onSelect} />
    <PictureList pictures={pictures}
                 onLeftClick={onLeftClick}
                 onRightClick={onRightClick} />
  </div>
);

App.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired
};

const sortByRating = (pictures) =>
  pictures.sort((a, b) => b.rating - a.rating);

const mapStateToProps = ({ pictures }) => {
  return {
    pictures: sortByRating(pictures)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (files) => dispatch(savePictures(files)),
    onLeftClick: (pictureUrl) => dispatch(increasePictureRating(pictureUrl)),
    onRightClick: (pictureUrl) => dispatch(decreasePictureRating(pictureUrl)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
