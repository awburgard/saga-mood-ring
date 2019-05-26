import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class TagImage extends Component {
    render(){
        return(
            <div>
                CONTENT
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TagImage);