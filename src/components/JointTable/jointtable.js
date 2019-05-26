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
                <div key={data.image_id}>
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
