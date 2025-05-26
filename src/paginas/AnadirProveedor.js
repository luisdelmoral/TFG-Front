import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import '../css/formulario.css'
import Select from 'react-select/base';

function AnadirProveedor() {
    const [marcas, setMarcas] = useState([]);
    const [contactos, setContactos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            setLoading(true);
            fetch("/api/marca/getAll", {
                method: "get",
            })
                .then((response) => response.json())
                .then((json) => setMarcas(json.listaMarcas))
                .catch(error => console.error(error))
                .finally(() => {
                    setLoading(false);
                });
    
        }, [])

        useEffect(() => {
                setLoading(true);
                fetch("/api/contacto/getAll", {
                    method: "get",
                })
                    .then((response) => response.json())
                    .then((json) => setContactos(json.listaContactos))
                    .catch(error => console.error(error))
                    .finally(() => {
                        setLoading(false);
                    });
        
            }, [])

         function submitProveedor(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        formData.forEach((value, key) => data[key] = value);

        fetch("/api/proveedor/anadir", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((json) => {
                if (json.error === "") {
                    alert("proveedor insertado");
                } else {
                    alert("error insertando proveedor: " + json.error);
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='formulario'>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <>
                    <form id='formularioProveedores' onSubmit={submitProveedor}>
                        <input type='text' name='nombre' placeholder='...nombre'></input>
                        <input type='text' name='descripcion' placeholder='...descripcion'></input>
                        <input type='text' name='direccion' placeholder='...direccion'></input><br></br><br></br>
                        <label for="marcas">Elija una marca para el proveedor</label><br></br>
                        <select id="marcas" name='marcaId' form='formularioProveedores'>
                            {marcas.map(marca => {
                                return <option value={marca.id}>{marca.nombre}</option>
                            })}
                        </select><br></br>
                        <label for="contactos">Elija un contacto para el proveedor</label><br></br>
                        <select id="contactos" name='contactoId' form='formularioProveedores'>
                            {contactos.map(contacto => {
                                return <option value={contacto.id}>{contacto.nombre}</option>
                            })}
                        </select><br></br><br></br>

                        <button className='buttonFormulario' type="submit">Añadir Proveedor</button>
                    </form>
                </>
            )}
        </div>

    );


}

export default AnadirProveedor;
        