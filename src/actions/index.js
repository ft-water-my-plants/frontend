import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginStart = credentials => dispatch => {
    dispatch(fetchLogin());
    return axios
        .post(`https://water-my-plants-2.herokuapp.com/api/users/login`, credentials)
    .then(res => {
        console.log('Login Data', res)
        dispatch(fetchSuccess(res.data))
    })
    .catch(err => {
        console.log(fetchFail('Failed Login'), err)
    })
};

export const fetchLogin = () => {
    return({ type: LOGIN });
};

export const fetchSuccess = (cred) => {
    return({ type: LOGIN_USER, payload: cred} );
};

export const fetchFail = (error) => {
    return ({ type: LOGIN_FAIL, payload: error });
};