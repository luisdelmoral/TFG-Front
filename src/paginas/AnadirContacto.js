import React, {Component, useState} from 'react';
import axios from 'axios';
import Contactos from './Contactos';
import { render } from '@testing-library/react';



class AnadirContacto extends Component{
    
    state = {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: 0 
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            nombre: this.contacto.nombre,
            apellidos: this.contacto.apellidos,
            email: this.contacto.email,
            telefono: this.contacto.telefono
        }
        axios.post('http://localhost:8080/api/contacto/anadir', {data: formData})
        .then(response => console.log(response.data))
        .then(error => console.error(error));
    };

    render() {
        return(
    <div>
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='nombre' value={this.contacto.nombre} onChange={this.handleChange}></input>
            <input type='text' name='apellidos' value={this.contacto.apellidos} onChange={this.handleChange}></input>
            <input type='text' name='email' value={this.contacto.email} onChange={this.handleChange}></input>
            <input type='number' name='telefono' value={this.contacto.telefono} onChange={this.handleChange}></input>
        </form>
        </>
        
    </div>

    );
    }
}

export default AnadirContacto;