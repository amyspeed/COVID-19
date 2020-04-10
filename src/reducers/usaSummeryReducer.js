import {
    GET_USA_SUMMERY_SUCCESS,
    GET_USA_SUMMERY_ERROR
} from '../actions/usaSummery';

const initialState = {
    data: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === GET_USA_SUMMERY_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === GET_USA_SUMMERY_ERROR) {
        return Object.assign({}, state, {
            data: null,
            error: action.error
        });
    }
    return state;
}