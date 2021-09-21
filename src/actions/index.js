import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_USER = 'LOGIN_USER';

export const loginStart = credentials => dispatch => {
    dispatch({ type: LOGIN });
    return axios
    .post('', credentials)
    .then(res => {
        console.log('Login Data', res)
        dispatch({ type: LOGIN_USER, payload: res.data })
    })
    .catch(err => {
        console.log('Failed Login', err)
    })
};