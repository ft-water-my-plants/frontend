import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import signUpSchema from './signupSchema';
import * as yup from 'yup';
import axios from 'axios';
import '../signup.css';


export default function Signup(props) {

    const { /* props */ } = props;

    // submit onclick re-routes to log in page
    const history = useHistory();
    const routeChange = () => {
        history.push('/login');
    }

    // initial form values, error values & submit button
    const initialSignUpValues = {
        username: "",
        password: ""
    };

    const initialErrorText = {
        username: "",
        password: ""
    };

    const initialDisabled = true;
    const initialUser = [];

    // Setting state for form values, error values & submit button
    const [user, setUser] = useState(initialUser);
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [errorText, setErrorText] = useState(initialErrorText);
    const [disabled, setDisabled] = useState(initialDisabled);


    // Validating signUpValues

    const validate = (name, value) => {
        yup.reach(signUpSchema, name)
            .validate(value)
            .then(() => setErrorText({ ...errorText, [name]: "" }))
            .catch(err => setErrorText({ ...errorText, [name]: err.errors[0] }))
    }

    // Functions for updating form state
    const onChange = (name, value) => {
        validate(name, value);
        setSignUpValues({ ...signUpValues, [name]: value });
    }

    const change = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    }

    // Functions for submitting changes

    const submitChange = (event) => {
        event.preventDefault();
        submit();
    }

    const submit = () => {
        const newUser = {
            username: signUpValues.username,
            password: signUpValues.password
        }
        postUser(newUser);
    }

    const postUser = (newUser) => {
        axios.post('https://water-my-plants-2.herokuapp.com/api/users/register', newUser)
            .then(response => {
                // setUser([resp.data, ...user]);
                // setSignUpValues(initialSignUpValues);
                console.log(response);
            }).catch(err => {
                console.log(err)
                // setSignUpValues(initialSignUpValues);
            });
    }



    // Validating for button to become !disabled

    useEffect(() => {
        signUpSchema.isValid(signUpValues).then(valid => setDisabled(!valid))
    }, [signUpValues]);


    return (
        <div className="signup-bg">
            <div className="form-container">
                <h3>Sign up to start tracking your plants!</h3>
                <form onSubmit={submitChange} className="signup-form">
                    <div className="errors">
                        <div>{errorText.username}</div>
                        <div>{errorText.phoneNumber}</div>
                        <div>{errorText.password}</div>
                    </div>
                    <label className="signup-input"> Username:
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter a username"
                            onChange={change}
                            value={signUpValues.username}
                        />
                    </label>
                    <label className="signup-input"> Password:
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter a password"
                            onChange={change}
                            value={signUpValues.password}
                        />
                    </label>
                    <button className="btn">SignUp!</button>
                    <p>Already have an account? <Link className="link" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}