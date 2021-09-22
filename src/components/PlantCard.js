import React, { useEffect, useState } from 'react'
import '../App.css';
import * as yup from 'yup'
import axios from 'axios'

function PlantCard () {

    return (
        <div className='plantcard'>
            <div>
                <h3>Plant Nickname: (nickname variable) </h3>
                <h3>Species: (species variable) </h3>
                <h3>Water Frequency: (water variable) </h3>
            </div>
            <div>
                <center>
                <button>Edit</button>
                <button>Delete</button>
                </center>
            </div>
        </div>
    )
}

export default PlantCard