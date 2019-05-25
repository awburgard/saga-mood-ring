import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getImages() {
    try {
        const imageResponse = yield axios.get('/image');
        yield put({
            type: 'SET_IMAGES',
            payload: imageResponse.data
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default getImages;