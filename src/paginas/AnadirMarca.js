import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import '../css/formulario.css'
import Select from 'react-select/base';


function AnadirMarca() {
    const [categorias, setCategorias] = useState([]);
    const [contactos, setContactos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/categoria/getAll", {
            method: "get",
        })
            .then((response) => response.json())
            .then((json) => setCategorias(json.listaCategorias))
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false);
            });

    }, [])

    function submitMarca(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        formData.forEach((value, key) => data[key] = value);

        fetch("/api/marca/anadir", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((json) => {
                if (json.error === "") {
                    alert("marca insertada");
                } else {
                    alert("error insertando marca: " + json.error);
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
                    <form id='formularioMarcas' onSubmit={submitMarca}>
                        <input type='text' name='nombre' placeholder='...nombre'></input>
                        <input type='text' name='descripcion' placeholder='...descripcion'></input><br></br><br></br>
                        <label for="categorias">Elija una categoria para la marca</label><br></br>
                        <select id="categorias" name='categoriaId' form='formularioMarcas'>
                            {categorias.map(categoria => {
                                return <option value={categoria.id}>{categoria.nombreCategoria}</option>
                            })}
                        </select><br></br>
                        <label for="contactos">Elija un contacto para la marca</label><br></br>
                        
                        <button className='buttonFormulario' type="submit">Añadir marca</button>
                    </form>
                </>
            )}
        </div>

    );


}

export default AnadirMarca;