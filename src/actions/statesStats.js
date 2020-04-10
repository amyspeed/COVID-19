import normalizeResponseErrors from './utils';

export const GET_STATES_SUCCESS = 'GET_STATES_SUCCESS';
export const getStatesSuccess = data => ({
    type: GET_STATES_SUCCESS,
    data
});

export const GET_STATES_ERROR = 'GET_STATES_ERROR';
export const getStatesError = error => ({
    type: GET_STATES_ERROR,
    error
});

export const getStatesStats = () => (dispatch) => {
    return fetch('https://corona.lmao.ninja/states', {
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin' : '*'}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getStatesSuccess(data)))
        .catch(err => {
            dispatch(getStatesError(err));
        })
}