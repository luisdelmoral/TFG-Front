import React, {Component, useState} from 'react';
import axios from 'axios';
import Contactos from './Contactos';
import { render } from '@testing-library/react';



function AnadirContacto() {     
    function submitCredentials(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        formData.forEach((value, key) => data[key] = value);

        fetch("/api/contacto/anadir", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
        })
        .then(() => console.log("OK!"))
        .catch(error => console.error(error));
    }

    return(
        <div>
            <>
            <form onSubmit={submitCredentials}>
                <input type='text' name='nombre' value={this.contacto.nombre} onChange={this.handleChange}></input>
                <input type='text' name='apellidos' value={this.contacto.apellidos} onChange={this.handleChange}></input>
                <input type='text' name='email' value={this.contacto.email} onChange={this.handleChange}></input>
                <input type='number' name='telefono' value={this.contacto.telefono} onChange={this.handleChange}></input>
            </form>
            </>
            
        </div>

    );
}

export default AnadirContacto;