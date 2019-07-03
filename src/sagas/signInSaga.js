import { put, takeLatest, call } from 'redux-saga/effects';
import {
    FETCH_TOKEN,
    TOKEN,
    TOKEN_FAILED,
    SET_USER_ID,
 } from '../actions/types';

 function getToken(data) {
    //TODO: Add logic to get jwt token using username and password
    return { token: 'fakeToken', userId: 'fakeUserId' };
}

function* setToken(action) {
    try {
        // const response = yield call(getToken, action);
        localStorage.setItem("userId", 'fakeUserId');
        localStorage.setItem("token", 'fakeToken');
        // yield put({ type: SET_USER_ID, response.userId });
        // yield put({ type: TOKEN, response.token });
    }
    catch(error) {
        console.error(error)
        yield put({ type: TOKEN_FAILED, error });
    }
}

export function* getTokenSaga() {
    yield takeLatest(FETCH_TOKEN, setToken)
}
