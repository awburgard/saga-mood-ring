import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../Modules/mapReduxStateToProps'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.getTags();
    this.getImages();
    this.getImageTags();
  }

  getTags() {
    this.props.dispatch({
      type: 'GET_TAGS'
    })
  }

  getImages() {
    this.props.dispatch({
      type: 'GET_IMAGES'
    })
  }

  getImageTags() {
    this.props.dispatch({
      type: 'GET_IMAGE_TAGS'
    })
  }

  render() {
    const imageMarkup = this.props.reduxState.images.map((imgData, imgIndex) => {
      return <img key={imgIndex} src={imgData.path} alt={imgData.title}/>

    })

    const tagMarkUp = this.props.reduxState.tags.map((tagData, tagIndex)=>{
      return <div key={tagIndex}>
        <p>{tagData.name}</p>

      </div>
    })

    return (
      <div className="App">
        <p>Hello</p>
        {imageMarkup}
        {tagMarkUp}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
