import {
    TOKEN,
    LOGOUT
} from '../actions/types';

const initialState = {
    authenticated: false
};

export default function userReducer (state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case TOKEN:
            newState = Object.assign({}, state, {authenticated: true});
            return newState;
        case LOGOUT:
            localStorage.removeItem('userId');
            localStorage.removeItem('token');
            return state;
        default:
            return state;
    }
}
