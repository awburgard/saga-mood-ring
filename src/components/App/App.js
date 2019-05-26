import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import './App.css';
import Carousel from '../Carousel/carousel';
import TagList from '../TagList/taglist';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Carousel />
        <TagList/>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
