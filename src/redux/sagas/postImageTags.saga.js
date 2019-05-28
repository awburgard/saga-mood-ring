import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postImageTags(action) {
    const imageId = action.payload.imageId;
    try {
        yield axios.post('/images/tags', action.payload);
        yield put({
            type: 'GET_CURRENT_TAGS',
            payload: imageId,
        })
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default postImageTags;