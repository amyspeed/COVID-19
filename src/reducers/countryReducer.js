import {
    GET_COUNTRY_SUCCESS,
    GET_COUNTRY_ERROR
} from '../actions/countryStats';

const initialState = {
    data: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === GET_COUNTRY_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === GET_COUNTRY_ERROR) {
        return Object.assign({}, state, {
            data: null,
            error: action.error
        });
    }
    return state;
}