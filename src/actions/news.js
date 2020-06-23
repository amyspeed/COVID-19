import { NEWS_BASE_URL } from '../config';
import normalizeResponseErrors from './utils';

export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const getNewsSuccess = data => ({
    type: GET_NEWS_SUCCESS,
    data
});

export const GET_NEWS_ERROR = 'GET_NEWS_ERROR';
export const getNewsError = error => ({
    type: GET_NEWS_ERROR,
    error
});

export const fetchNews = () => (dispatch) => {
    return fetch(NEWS_BASE_URL, {
        method: 'GET',
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getNewsSuccess(data)))
        .catch(err => {
            console.log(err);
            dispatch(getNewsError(err));
        })
}
