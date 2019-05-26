import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../Modules/mapReduxStateToProps';
import TagImage from '../TagImage/tagimage'

class TagList extends Component {

    render() {
        const tagElement = this.props.reduxState.tags.map((tagData, tagIndex) => {
            return <TagImage key={tagIndex} tagData={tagData} />
        })

        return (
            <div>
                <TagImage/>
            </div>
        )
    }

}

export default connect(mapStateToProps)(TagList);