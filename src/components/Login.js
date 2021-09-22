import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import { loginStart } from "../actions";
import { connect } from 'react-redux';
import * as yup from 'yup';
import LoginSchema from './LoginSchema';
import '../Login.css';


const credentials = {
    username: '',
    phoneNumber: '',
    password: '',
}

const initialErrors = {
    username: '',
    phoneNumber: '',
    password: '',
}

function Login(props){
    const [login, setLogin] = useState(credentials);
    const [errorMessage, setErrorMessage] = useState(initialErrors);
    const { push } = useHistory();

    const handleChange = (e) => {
        console.log(e.target.value);
        validate(e.target.name, e.target.value);
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

    // Validating login values
    const validate = (name, value) => {
        yup.reach(LoginSchema, name)
            .validate(value)
            .then(() => setErrorMessage({ ...errorMessage, [name]: '' }))
            .catch(err => setErrorMessage({ ...errorMessage, [name]: err.errors[0] }))
    }

    return(
        <div className='login-wrapper'>
            <div className="form-container">
                <h3>Login</h3>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className="errors">
                        <div>{errorMessage.username}</div>
                        <div>{errorMessage.phoneNumber}</div>
                        <div>{errorMessage.password}</div>
                    </div>
                    <label className="login-input"> Username: 
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={login.username}
                        onChange={handleChange}
                    />
                    </label>
                    <label className="login-input"> Phone Number: 
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={login.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="login-input"> Password:
                        <input
                            type="password" 
                            name="password"
                            placeholder="Enter your password"
                            value={login.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="btn">Login</button>
                    <p>Don't have an account? <Link className="link" to="/signup">Create new account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { loginStart })(Login);