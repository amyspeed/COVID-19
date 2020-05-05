import {
    GET_NEWS_SUCCESS,
    GET_NEWS_ERROR
} from '../actions/news';

const initialState = {
    data: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === GET_NEWS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === GET_NEWS_ERROR) {
        return Object.assign({}, state, {
            data: null,
            error: action.error
        });
    }
    return state;
}