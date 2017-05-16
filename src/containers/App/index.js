import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PicturesSelect from '../../components/PicturesSelect';
import PicturesList from '../../components/PicturesList';
import { savePictures } from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PicturesSelect onSelect={this.props.onSelect} />
        <PicturesList pictures={this.props.pictures} />
      </div>
    );
  }
}

App.propTypes = {
  onSelect: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired
};

const mapStateToProps = ({ pictures }) => {
  return { pictures };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (files) => dispatch(savePictures(files))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
