import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import './App.css';
import Carousel from '../Carousel/carousel';
import TagList from '../TagList/taglist';
import TagImage from '../TagImage/tagimage'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Carousel />
        <TagList/>
        <TagImage />
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
