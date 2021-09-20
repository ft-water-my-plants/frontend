import { LOGIN, LOGIN_USER } from "../actions";

export const initialState = {
    username: '',
    phoneNumber: '',
    password: '',
    isLoggedIn: false, 
    error: '',
    token: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
            };
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.token);
            return {
                isLoggedIn: true,
                username: action.payload.user.username,
                token: action.payload.token,
            };
        default: 
            return state;
    }
}

export default reducer;