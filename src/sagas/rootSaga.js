import { all, fork } from 'redux-saga/effects';

// import watchers from other files
export default function* rootSaga() {
  yield all([].map(fork));
}
