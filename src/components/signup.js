import React from 'react';

export default function Signup() {


    return(
        <div>
            <form>
                <label> Username:
                    <input 
                        type="text"
                        name="username"
                        />
                </label>
                <label> Phone Number:
                    <input 
                        type="text"
                        name="phonenumber"
                        />
                </label>
                <label> Password:
                    <input 
                        type="password"
                        name="password"
                        />
                </label>
            </form>
        </div>
    )
}