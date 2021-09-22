import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    username: '',
    phoneNumber: '',
    password: ''
}

/* should pass down an existing user OR get existing users within function */
function UpdateUser(props) {
    const { push } = useHistory();

    // Need to only be able to update phone number and password, setting state to current number/password
    const [user, setUser] = useState(initialState);
    const [number, setNumber] = useState(user.phoneNumber);
    const [password, setPassword] = useState(user.password);


    // On submit, their number and password are set to state, which is either their current or updated values
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            username: user.username,
            phoneNumber: number,
            password: password
        }
        // Need to axios put updated user info
        
        axios.put(`https://water-my-plants-bw3.herokuapp.com/api/users/login`, user)
            .then(res => {
                props.setUser(res.data);
                push('/users/login');
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    

    // Changing number and password
    const changeNumber = (e) => {
        setNumber(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="signup-bg">
                    <div className="form-container">
                        <h3>Update your phone number and password!</h3>
                        <form onSubmit={handleSubmit} className="signup-form">
                            <p>{user.username}</p>
                            <label className="signup-input"> Phone Number:
                                <input 
                                    type="text"
                                    name="phoneNumber"
                                    onChange={changeNumber}
                                    placeholder={user.phoneNumber}
                                    // value={user.phoneNumber}
                                />
                            </label>
                            <label className="signup-input"> Password:
                                <input 
                                    type="password"
                                    name="password"
                                    onChange={changePassword}
                                    placeholder={user.password}
                                    // value={user.password}
                                />
                            </label>
                            <button className="btn">Update</button>
                        </form>
                    </div>
            </div>
    )
}

export default UpdateUser;