import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../Modules/mapReduxStateToProps';

class TagList extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'GET_TAGS'
        })
    }
    render() {
        const tagElement = this.props.reduxState.tags.map((tagData, tagIndex) => {
            return <div key={tagIndex}>
                <p>{tagData.name}</p>
            </div>
        })

        return (
            <div>
                {tagElement}
            </div>
        )
    }

}

export default connect(mapStateToProps)(TagList);