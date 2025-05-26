
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import '../css/formulario.css'
import Select from 'react-select/base';



function AnadirArticulo() {
    const [descatalogado, setDescatalogado] = useState("false");
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleDescatalogado = (event) => {
        setDescatalogado(event.target.value);
    };

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

    function submitArticulo(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        formData.forEach((value, key) => data[key] = value);

        fetch("/api/articulo/anadir", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((json) => {
                if (json.error === "") {
                    alert("artículo insertado");
                } else {
                    alert("error insertando arículo: " + json.error);
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
                    <form id='formularioArticulos' onSubmit={submitArticulo}>
                        <input type='text' name='nombre' placeholder='...nombre'></input>
                        <input type='number' step='0.01' name='precio' placeholder='...precio' ></input>
                        <input type='number' name='cantidad' placeholder='...cantidad'></input>
                        <input type='text' name='descripcion' placeholder='...descripcion'></input><br></br><br></br>
                        <label for="marcas">Elija una marca para el artículo</label><br></br>
                        <select id="marcas" name='marcaId' form='formularioArticulos'>
                            {marcas.map(marca => {
                                return <option value={marca.id}>{marca.nombre}</option>
                            })}
                        </select><br></br><br></br>
                        <label>¿Descatalogado?</label><br></br>

                        <label>
                            <input
                                type="radio"
                                value="false"
                                name='descatalogado'
                                checked={descatalogado === "false"}
                                onChange={handleDescatalogado}
                            />
                            NO
                        </label>
                        <label>
                            <input
                                type="radio"
                                name='descatalogado'
                                value="true"
                                checked={descatalogado === "true"}
                                onChange={handleDescatalogado}
                            />
                            SÍ
                        </label><br></br>


                        <button className='buttonFormulario' type="submit">Añadir artículo</button>
                    </form>
                </>
            )}
        </div>

    );

}

export default AnadirArticulo;