import React, { useEffect, useState } from 'react'
import '../App.css';
import * as yup from 'yup'
import axios from 'axios';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Modal from './Modal';

function PlantCard (props) {
    const [plant, setPlant] = useState({});
    const [showModal, setShowModal] = useState(false);

    const { id } = props.match.params;

    useEffect(() => {
        axiosWithAuth()
        .get(`https://water-my-plants-bw3.herokuapp.com/api/plants/${id}`)
            .then(res => {
                setPlant(res.data);
            });
    }, []);

    if (!plant){
        return <h3>Loading plant...</h3>;
    }

    const handleEdit = () => {
        props.history.push(`/plants/${plant.id}`);
    }

    const handleDelete = () => {
        setShowModal(true);
    }

    const handleYesFunc = () => {
        axios.delete(`https://water-my-plants-bw3.herokuapp.com/api/plants/${plant.id}`)
        .then(res => {
            props.setPlant(res.data);
            props.history.push('/plants');
        })
    }

    const handleNoFunc = () => {
        setShowModal(false);
    }

    return (
        <div className='plantcard'>
            <div>
                <h3>Plant Nickname: {plant.nickname} </h3>
                <h3>Species: {plant.species} </h3>
                <h3>Water Frequency: {plant.water} </h3>
            </div>
            <div>
                <center>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                {
                    showModal && (<Modal title={`Are you sure you want to delete ${plant.nickname}?`} yesFunc={handleYesFunc} noFunc={handleNoFunc}/>)
                }
                </center>
            </div>
        </div>
    )
}

export default PlantCard;