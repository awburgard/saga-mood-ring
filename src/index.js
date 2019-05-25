import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from '@redux-saga/core/effects';
import axios from 'axios'

function* getImages() {
    try {
        const imageResponse = yield axios.get('/images');
        yield put({
            type: 'SET_IMAGES',
            payload: imageResponse.data
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}

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

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_IMAGES', getImages)
    yield takeEvery('GET_TAGS', getTags)
    yield takeEvery('GET_IMAGE_TAGS', getImageTags)

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store images returned from the server
const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const imageTags = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGE_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags,
        imageTags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
