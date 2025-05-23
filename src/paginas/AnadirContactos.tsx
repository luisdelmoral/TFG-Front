import React, { Component, useState } from 'react';
import axios from 'axios';
import Contactos from './Contactos';
import { render } from '@testing-library/react';



function AnadirContacto() {

    const [values, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: 0
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target
        setFormData({ ...values, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formData = {
            nombre: values.nombre,
            apellidos: values.apellidos,
            email: values.email,
            telefono: values.telefono
        }
        axios.post('http://localhost:8080/api/contacto/anadir', { data: formData })
            .then(response => console.log(response.data))
            .then(error => console.error(error));
    };

    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text' 
                        name='nombre' 
                        value={values.nombre} 
                        onChange={handleChange}></input>
                    <input 
                        type='text' 
                        name='apellidos' 
                        value={values.apellidos} 
                        onChange={handleChange}></input>
                    <input 
                    type='text' 
                    name='email' 
                    value={values.email} 
                    onChange={handleChange}></input>
                    <input 
                    type='number' 
                    name='telefono' 
                    value={values.telefono} 
                    onChange={handleChange}></input>
                </form>
            </>

        </div>

    );
}

export default AnadirContacto;