import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../components/Modules/mapReduxStateToProps';

class ImagesList extends Component {
    state = {
        currentImage: 0,
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGES',
        });
    }

    changeImage = (event) => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
        if (this.state.currentImage > this.props.reduxState.images.length) {
            this.setState({
                currentImage: 0
            })
        }
    }

    render() {
        const currentImageIndex = this.state.currentImage;
        const currentImage = this.props.reduxState.images[this.currentImageIndex];
        const renderElement = <img key={currentImageIndex} src={currentImage.path} alt={currentImage.title}/>

        return (
            <div>
                {renderElement}
                <button onClick={this.changeImage}>Next</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ImagesList);