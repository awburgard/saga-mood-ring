import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../Modules/mapReduxStateToProps'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.getTags();
  }

  getTags() {
    this.props.dispatch({
      type: 'GET_TAGS'
    })
  }
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
