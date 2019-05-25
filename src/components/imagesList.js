import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../components/Modules/mapReduxStateToProps';

class ImagesList extends Component {
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_IMAGES',
        });
    }

    render(){
        const imageList = this.props.reduxState.images.map((imageData, imageIndex)=>{
            return <img key={imageIndex} src={imageData.path} alt={imageData.title} />
        })
        return(
            <div>
                {imageList}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ImagesList);