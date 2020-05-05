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
    return fetch(`${NEWS_BASE_URL}?q=COVID&language=en&sortBy=publishedAt&pageSize=6&page=1`, {
        method: 'GET',
        headers: { 
            Authorization: 'Bearer 9d728f0139044cf3a54a15e546d1851e',
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getNewsSuccess(data)))
        .catch(err => {
            console.log(err);
            dispatch(getNewsError(err));
        })
}
