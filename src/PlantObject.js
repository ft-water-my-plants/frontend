import React, { useEffect, useState } from 'react'
import './App.css';


function Plant () {

    return (
        <div className='plant-object'>
            <form>
                <div>
                <label> Nickname: 
                    <input 
                    type="text"
                    />
                </label>
                </div>
                <div>
                <label> Species:
                    <input 
                    />
                </label>
                </div>
                <div>
                    <p>Water Frequency:</p>
                <select> 
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
                    />
                </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Plant 