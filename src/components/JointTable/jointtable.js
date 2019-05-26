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
        return (
            <div>
                CONTENT
            </div>
        )
    }

}
export default connect (mapReduxStateToProps)(JointTable);
