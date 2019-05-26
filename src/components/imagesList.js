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
        if (this.state.currentImage + 1 > this.props.reduxState.images.length - 1) {
            this.setState({
                currentImage: 0
            });
        } else {
            this.setState({
                currentImage: this.state.currentImage + 1,
            });
        }
}

    render() {
        let renderElement = <div></div>;
        if (this.props.reduxState.images.length > 0) {
            const currentImage = this.props.reduxState.images[this.state.currentImage];
            renderElement = <img src={currentImage.path} alt={currentImage.title} />
        }

        return (
            <div>
                {renderElement}
                <button onClick={this.changeImage}>Next</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ImagesList);