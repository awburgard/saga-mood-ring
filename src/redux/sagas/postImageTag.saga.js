import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postImageTag(action) {
    try {
        const tagResponse = yield axios.post('/images/tags/add', action.payload);
        yield put({
            type: 'SET_IMAGE_TAGS',
            payload: tagResponse.data
        })
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default postImageTag;