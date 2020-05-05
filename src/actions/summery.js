import { CORONA_NINJA_BASE_URL } from '../config';
import normalizeResponseErrors from './utils';

export const GET_SUMMERY_SUCCESS = 'GET_SUMMERY_SUCCESS';
export const getSummerySuccess = data => ({
    type: GET_SUMMERY_SUCCESS,
    data
});

export const GET_SUMMERY_ERROR = 'GET_SUMMERY_ERROR';
export const getSummeryError = error => ({
    type: GET_SUMMERY_ERROR,
    error
});

export const getSummery = () => (dispatch) => {
    return fetch(`${CORONA_NINJA_BASE_URL}/all`, {
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin' : '*'}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getSummerySuccess(data)))
        .catch(err => {
            dispatch(getSummeryError(err));
        })
}