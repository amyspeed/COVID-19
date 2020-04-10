import {
    GET_STATES_SUCCESS,
    GET_STATES_ERROR
} from '../actions/statesStats';

const initialState = {
    data: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === GET_STATES_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === GET_STATES_ERROR) {
        return Object.assign({}, state, {
            data: null,
            error: action.error
        });
    }
    return state;
}