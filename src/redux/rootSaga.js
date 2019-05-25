import { takeEvery } from 'redux-saga/effects';
import allSagas from './sagas/all.saga';

function* rootSaga() {
    const allSagaKeys = Object.keys(allSagas);

    for (let i = 0; i < allSagaKeys.length; i++) {
        const sagaKey = allSagaKeys[i];
        yield takeEvery(sagaKey, allSagas[sagaKey]);
    }
}

export default rootSaga;