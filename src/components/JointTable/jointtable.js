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
        const imageTags = this.props.reduxState.imageTags.map((data, index) => {
            return (
                <div key={index}>
                    <h1>Tags</h1>
                    <p>{data}</p>
                </div>
            )
        })
        return (
            <div>
                {imageTags}
            </div>
        )
    }

}
export default connect(mapReduxStateToProps)(JointTable);
