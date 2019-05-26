import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../Modules/mapReduxStateToProps';

class TagList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TAGS'
        })
        this.props.dispatch({
            type: 'GET_IMAGE_TAGS'
        })
    }

    clickTag = (event) => {
        const imageId = this.props.reduxState.currentImage + 1;
        const payload = {
            imageId : imageId,
            tagId : event.target.dataset.id,
        }
        this.props.dispatch({
            type: 'ADD_IMAGE_TAG',
            payload: payload
        })
    }

    render() {
        const tagElement = this.props.reduxState.tags.map((tagData, tagIndex) => {
            return ( <div key={tagIndex} onClick={this.clickTag} data-id={tagData.id}>
                {tagData.name}
            </div>
            )
        })

        return (
            <div>
                {tagElement}
                {this.props.reduxState.imageTags.tag_id}
            </div>
        )
    }

}

export default connect(mapStateToProps)(TagList);