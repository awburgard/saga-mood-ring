import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class JointTable extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGE_TAGS'
        })
    }

    render() {
        const matchedTags = this.props.reduxState.imageTags.filter((imgTag) => {
            const currImageIndex = this.props.reduxState.currentImage;
            const currentImageId = this.props.reduxState.images[currImageIndex].id;
            return imgTag.image_id === currentImageId;
        });
        const imageTags = matchedTags.map((data, index) => {
            return (
                <div key={index}>
                    <p>{data.name}</p>
                </div>
            )
        })
        return (
            <div>
                <h4>Tags</h4>
                {imageTags}
            </div>
        )
    }

}
export default connect(mapReduxStateToProps)(JointTable);
