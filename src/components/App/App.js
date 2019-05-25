import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../Modules/mapReduxStateToProps'
import './App.css';
import ImagesList from '../imagesList';

class App extends Component {
  render() {

    return (
      <div className="App">
        <p>Hello</p>
        <ImagesList />
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
