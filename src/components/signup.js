import React, { useState, useEffect } from 'react';
import signUpSchema from '../signupSchema';
import * as yup from 'yup'


export default function Signup(props) {

    const { /* props */ } = props;

    // initial form values, error values & submit button
    const initialSignUpValues = {
        username: "",
        phoneNumber: "",
        password: "",
    };

    const initialErrorText = {
        username: "",
        phoneNumber: "",
        password: "",
    };

    const initialDisabled = true;

    // Setting state for form values, error values & submit button
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [errorText, setErrorText] = useState(initialErrorText);
    const [disabled, setDisabled] = useState(initialDisabled);
    

    // Validating signUpValues

    const validate = (name, value) => {
        yup.reach(signUpSchema, name)
            .validate(value)
            .then(() => setErrorText({...errorText, [name]: "" }))
            .catch(err => setErrorText({ ...errorText, [name]: err.error[0] }))
    }

    // Functions for updating form state
    const onChange = (name, value) => {
        validate(name, value);
        setSignUpValues({ ...signUpValues, [name]: value});
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
            phoneNumber: signUpValues.phoneNumber,
            password: signUpValues.password,
        }
        // Needs somewhere to submit the new users to 
    }


    // Validating for button to become !disabled
    
    useEffect(() => {
        signUpSchema.isValid(signUpValues).then(valid => setDisabled(!valid))
    }, [signUpValues]);


    return(
        <div>
            <h3>Sign up to start tracking your plants!</h3>
            <form onSubmit={submitChange}>
                <div className="errors">
                    <div>{errorText.username}</div>
                    <div>{errorText.phoneNumber}</div>
                    <div>{errorText.password}</div>
                </div>
                <label> Username:
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter a username"
                        onChange={change}
                        value={signUpValues.username}
                    />
                </label>
                <label> Phone Number:
                    <input 
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        onChange={change}
                        value={signUpValues.phoneNumber}
                    />
                </label>
                <label> Password:
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter a password"
                        onChange={change}
                        value={signUpValues.password}
                    />
                </label>
                <button disabled={disabled}>SignUp!</button>
            </form>
        </div>
    )
}