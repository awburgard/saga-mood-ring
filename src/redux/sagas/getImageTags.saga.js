import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getImageTags() {
    try {
        const imageTagResponse = yield axios.get('/images/tags/all');
        yield put({
            type: 'SET_IMAGE_TAGS',
            payload: imageTagResponse.data
        })
    } catch (err) {
        console.log('error HELP:', err)
    }
};

export default getImageTags;