import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class TagImage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TAGS'
        })
        this.props.dispatch({
            type: 'GET_IMAGE_TAGS'
        })
    }

    
    render(){
        console.log(this.props)
        return(
            <div key={this.props.key}>
                <p>{this.props.tagData}</p>
                <button>Add Tag</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TagImage);