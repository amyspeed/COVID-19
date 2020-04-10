import normalizeResponseErrors from './utils';

export const GET_USA_SUMMERY_SUCCESS = 'GET_USA_SUMMERY_SUCCESS';
export const getUsaSummerySuccess = data => ({
    type: GET_USA_SUMMERY_SUCCESS,
    data
});

export const GET_USA_SUMMERY_ERROR = 'GET_USA_SUMMERY_ERROR';
export const getUsaSummeryError = error => ({
    type: GET_USA_SUMMERY_ERROR,
    error
});

export const getUsaSummery = () => (dispatch) => {
    return fetch('https://corona.lmao.ninja/countries/USA', {
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin' : '*'}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getUsaSummerySuccess(data)))
        .catch(err => {
            dispatch(getUsaSummeryError(err));
        })
}