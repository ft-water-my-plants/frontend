// import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const initialValues = {
    username: '',
    phoneNumber: '',
    password: '',
}

function NewAccount(){
    const [newLogin, setNewLogin] = useState(initialValues);
    const history = useHistory();

    const onChange = (e) => {
        setNewLogin({
            ...newLogin,
            [e.target.name]: e.target.value,
        })
    }

    // const handleSignUp = e => {
    //     e.preventDefault();
    //     axios.post('')
    //     .then(res => {
    //         console.log('Registration Success!', res)
    //         history.push('/');
    //     })
    //     .then(err => {
    //         console.log('Failed Registration', err)
    //     })
    // }

    return(
        <div className='NewAccount'>
            <h2>Sign Up Form</h2>
        </div>
    )
}

export default NewAccount;