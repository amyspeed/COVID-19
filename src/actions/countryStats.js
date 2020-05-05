import { CORONA_NINJA_BASE_URL } from '../config';
import normalizeResponseErrors from './utils';

export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
export const getCountrySuccess = data => ({
    type: GET_COUNTRY_SUCCESS,
    data
});

export const GET_COUNTRY_ERROR = 'GET_COUNTRY_ERROR';
export const getCountryError = error => ({
    type: GET_COUNTRY_ERROR,
    error
});

export const getCountryStats = () => (dispatch) => {
    return fetch(`${CORONA_NINJA_BASE_URL}/countries?sort=country`, {
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin' : '*'}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getCountrySuccess(data)))
        .catch(err => {
            dispatch(getCountryError(err));
        })
}