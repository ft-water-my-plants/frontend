import React, { useEffect, useState } from 'react'
import '../App.css';
import plantSchema from './PlantSchema'
import * as yup from 'yup'
import axios from 'axios'
import PlantCard from './PlantCard'
import axiosWithAuth from '../helpers/axiosWithAuth';



function Plant () {


    const initialFormValues = {

        nickname: '',
        species: '',
        h2oFrequency: 0,
        image: '',

    }

    const initialFormErrors = {

        nickname: '',
        species: '',
        h2oFrequency: '',
        image: '',
    }

    const initialPlant = []
    const initialDisabled = true

    // Setting states for form

    const [ plant, setPlant ] = useState(initialPlant)
    const [ formValues, setFormValues] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)
    
    const postPlant = newPlant => {
        axiosWithAuth()
        .post(`https://water-my-plants-2.herokuapp.com/api/plants`, newPlant) 

        .then( res => {
          
          setPlant([res.data , ...plant])
          setFormValues(initialFormValues)
        })
        .catch( err => {
          console.error(err)
          setFormValues(initialFormValues)
        })
      }  
      
      


    /* --- Event Handlers  ---*/

    const validate = ( name, value ) => {

        yup.reach( plantSchema , name )
        .validate(value)
        .then( () => setFormErrors({ ...formErrors, [name]: ''})) 
        .catch( err => setFormErrors( { ...formErrors , [name]: err.errors[0]} ))
    
      }

      const inputChange = ( name, value) => {

        validate( name, value )
        setFormValues({ ...formValues, [name]: value })
      }

      const formSubmit = () => {

        const newPlant = {
          nickname: formValues.nickname.trim(),
          species: formValues.species.trim(),
          h2oFrequency: formValues.h2oFrequency,
          image: formValues.image,
        }

        postPlant(newPlant)

    }

    // Adjusting the state of disabled every time formValues change

        useEffect( () => {
            plantSchema.isValid(formValues)
            .then( valid => {
            setDisabled(!valid)
            })
        }, [formValues])

    const onSubmit = event => {

        event.preventDefault()
        formSubmit()

    }

    const onChange = evt => {
        setFormValues({ ...formValues, [evt.target.name]: evt.target.value });        
    }

    return (

        <div className='plant-object'>
            <form onSubmit={onSubmit}>
            <div className='errors'>
                <div>{formErrors.nickname}</div>
                <div>{formErrors.species}</div>
                <div>{formErrors.h2oFrequency}</div>
            </div>
                <div>
                <label> Nickname: 
                    <input 
                    name='nickname'
                    type="text"
                    onChange={onChange}
                    value={formValues.nickname}
                    />
                </label>
                </div>
                <div>
                <label> Species:
                    <input 
                    name='species'
                    type='text'
                    onChange={onChange}
                    value={formValues.species}
                    />
                </label>
                </div>
                <div>
                    <p>Water Frequency:</p>
                <select
                name='h2oFrequency'
                onChange={onChange}
                value={formValues.h2oFrequency}

                > 
                    <option>-- Select an option --</option>
                    <option value='1'>Three times a day</option>
                    <option value='2'>Twice a day</option>
                    <option value='3'>Once a day</option>
                    <option value='4'>Once a week</option>
                    <option value='5'>Once a month</option>
                </select>
                </div>
                <div>
                <label> Image URL (optional):
                    <input 
                    name='image'
                    type='text'
                    onChange={onChange}
                    value={formValues.image}
                    />
                </label>
                </div>
                <div></div>
                <button disabled={disabled} className={`submit_btn ${disabled ? 'disabled' : ""}`}>Submit</button>
            </form>
        </div>
        
    )

}

export default Plant 