import { combineReducers } from 'redux';
import { default as UserStore } from './userReducer';

const appReducer = combineReducers({
  UserStore
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
