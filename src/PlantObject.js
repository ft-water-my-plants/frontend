import React, { useEffect, useState } from 'react'
import './App.css';


function Plant (props) {

    const { /* passed from App.js */ } = props

    const onSubmit = event => {

        event.preventDefault()
        /* Add submit function */

    }

    
    const onChange = evt => {

        const { /* Change functions & values */ } = evt.target
        
    }

    return (
        <div className='plant-object'>
            <form onSubmit>
            <div className='errors'>
                <div>{/* Errors go here. */}</div>
                <div>{/* Errors go here. */}</div>
                <div>{/* Errors go here. */}</div>
                <div>{/* Errors go here. */}</div>
            </div>
                <div>
                <label> Nickname: 
                    <input 
                    name='nickname'
                    type="text"
                    
                    />
                </label>
                </div>
                <div>
                <label> Species:
                    <input 
                    name='species'
                    type='text'
                    
                    />
                </label>
                </div>
                <div>
                    <p>Water Frequency:</p>
                <select
                name='water'
                
                > 
                    <option>-- Select an option --</option>
                    <option>Three times a day</option>
                    <option>Twice a day</option>
                    <option>Once a day</option>
                    <option>Once a week</option>
                    <option>Once a month</option>
                </select>
                </div>
                <div>
                <label> Plant Id:
                    <input 
                    type='text'
                    name='plant_id'
                    
                    />
                </label>
                </div>
                <button id="submit_btn">Submit</button>
            </form>
        </div>
    )

}

export default Plant 