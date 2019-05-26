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
        console.log(this.props.reduxState.imageTags)
        const imageTags = this.props.reduxState.imageTags.map((data, index) => {
            return (
                <div key={index}>
                    <p>{data.name}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>Tags</h1>
                {imageTags}
            </div>
        )
    }

}
export default connect(mapReduxStateToProps)(JointTable);
