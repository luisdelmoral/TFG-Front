import React, {Component, useState} from 'react';
import axios from 'axios';
import Contactos from './Contactos';
import { render } from '@testing-library/react';
import '../css/formulario.css'



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
        <div className='formulario'>
            <>
            <form onSubmit={submitCredentials}>
                <input type='text' name='nombre' placeholder='...nombre'></input>
                <input type='text' name='apellidos' placeholder='...apellidos' ></input>
                <input type='text' name='email' placeholder='...email'></input>
                <input type='number' name='telefono' placeholder='...telefono'></input>
                <button className='buttonFormulario' type="submit">Añadir contacto</button>
            </form>
            </>
            
        </div>

    );
}

export default AnadirContacto;