import React, { useState } from 'react';


/* should pass down an existing user OR get existing users within function */
export default UpdateUser() => {

    // Need to only be able to update phone number and password, setting state to current number/password
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
                                />
                            </label>
                            <label className="signup-input"> Password:
                                <input 
                                    type="password"
                                    name="password"
                                    onChange={changePassword}
                                    placeholder={user.password}
                                />
                            </label>
                            <button>Update</button>
                        </form>
                    </div>
            </div>
    )
}