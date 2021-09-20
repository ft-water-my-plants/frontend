import React, { useEffect, useState } from 'react'
import './App.css';


function Plant () {

    return (
        <div className='plant-object'>
            <h3>Create Plant</h3>
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
                <label> Water Frequency:
                    <input 
                    />
                </label>
                </div>
                <div>
                <label> Plant Id:
                    <input 
                    />
                </label>
                </div>
            </form>
        </div>
    )

}

export default Plant 