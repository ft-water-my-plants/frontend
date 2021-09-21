import React, { useEffect, useState } from 'react'
import '../App.css';
import plantSchema from './PlantSchema'
import * as yup from 'yup'
import axios from 'axios'




function Plant () {


    const initialFormValues = {

        nickname: '',
        species: '',
        water: '',
        plant_id: '',

    }

    const initialFormErrors = {

        nickname: '',
        species: '',
        water: '',
        plant_id: '',
    }

    const initialPlant = []
    const initialDisabled = true

    // Setting states for form

    const [ plant, setPlant ] = useState(initialPlant)
    const [ formValues, setFormValues] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)

    /* --- Need to connect API below---*/

    
    
    const postPlant = newPlant => {

        axios.post(`https://water-my-plants-bw3.herokuapp.com/api/plants`, newPlant) 

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
          water: formValues.water,
          plant_id: formValues.plant_id,
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
                <div>{formErrors.water}</div>
                <div>{formErrors.plant_id}</div>
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
                name='water'
                onChange={onChange}
                value={formValues.water}

                > 
                    <option>-- Select an option --</option>
                    <option>Three times a day</option>
                    <option>Twice a day</option>
                    <option>Once a day</option>
                    <option>Once a week</option>
                    <option>Once a month</option>
                </select>
                </div>
                <button disabled={disabled} id="submit_btn">Submit</button>
            </form>
        </div>
    )

}

export default Plant 