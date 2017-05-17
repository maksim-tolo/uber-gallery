import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PicturesSelect from '../../components/PicturesSelect';
import PictureList from '../../components/PictureList';
import {
  savePictures,
  increasePictureRating,
  decreasePictureRating
} from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PicturesSelect onSelect={this.props.onSelect} />
        <PictureList pictures={this.props.pictures}
                      onLeftClick={this.props.onLeftClick}
                      onRightClick={this.props.onRightClick} />
      </div>
    );
  }
}

App.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired
};

const mapStateToProps = ({ pictures }) => {
  return { pictures };
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
