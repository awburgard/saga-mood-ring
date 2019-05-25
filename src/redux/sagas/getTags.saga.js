import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getTags() {
    try {
        const tagResponse = yield axios.get('/tags');
        yield put({
            type: 'SET_TAGS',
            payload: tagResponse.data
        })
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default getTags;