import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { loginStart } from "../actions";
import { connect } from 'react-redux';

const credentials = {
    username: '',
    phoneNumber: '',
    password: '',
}

function Login(props){
    const [login, setLogin] = useState(credentials);
    const { push } = useHistory();

    const handleChange = (e) => {
        console.log(e.target.value);
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginStart(login)
        push('/plants')
        console.log('Successful login!')
    }

    return(
        <div className='login-wrapper'>
            <h1>Login</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label> Username: 
                <input 
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={login.username}
                    onChange={handleChange}
                />
                </label>
                <label> Phone Number: 
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={login.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <label> Password:
                    <input
                        type="password" 
                        name="password"
                        placeholder="Enter your password"
                        value={login.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default connect(null, { loginStart })(Login);