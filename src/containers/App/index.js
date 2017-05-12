import React, { Component } from 'react';

import './App.css';
import PicturesSelect from '../../components/PicturesSelect';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(files) {
    debugger;
    console.log(files);
  }

  render() {
    return (
      <div className="App">
        <PicturesSelect onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
