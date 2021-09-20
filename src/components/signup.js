import React, { useState } from 'react';

export default function Signup(props) {

    const { /* props */ } = props;

    // initial form values
    const initialSignUpValues = {
        username: "",
        phoneNumber: "",
        password: "",
    };

    // Setting state for form values
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);

    // Functions for updating form state
    const onChange = (name, value) => {
        setSignUpValues({ ...signUpValues, [name]: value});
    }

    const change = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    }

    // Functions for submitting changes

    const submitChange = (event) => {
        event.preventDefault();

    }

    return(
        <div>
            <form onSubmit={submitChange}>
                <div className="errors">
                    
                </div>
                <label> Username:
                    <input 
                        type="text"
                        name="username"
                        onChange={change}
                        />
                </label>
                <label> Phone Number:
                    <input 
                        type="text"
                        name="phoneNumber"
                        onChange={change}
                        />
                </label>
                <label> Password:
                    <input 
                        type="password"
                        name="password"
                        onChange={change}
                        />
                </label>
                <button>SignUp!</button>
            </form>
        </div>
    )
}