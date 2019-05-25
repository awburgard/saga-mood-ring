import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from  'redux-saga';
import rootSaga from './rootSaga';
import * as allReducers from './reducers/all.reducer.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        ...allReducers,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;