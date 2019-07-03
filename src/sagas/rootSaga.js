import { all, fork } from 'redux-saga/effects';
import * as signInSagas from './signInSaga';

// import watchers from other files
export default function* rootSaga() {
  yield all([
    ...Object.values(signInSagas)
  ].map(fork));
}
