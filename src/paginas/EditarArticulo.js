
import { useState } from 'react';
import '../css/formulario.css'
import { useLocation } from 'react-router-dom';

function EditarArticulo() {
    const location = useLocation();
    const articulo = location.state.data;
    const [descatalogado, setDescatalogado] = useState("" + articulo.descatalogado);
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleDescatalogadoEditar = (event) => {
        setDescatalogado(event.target.value);
        articulo.descatalogado = event.target.value
    };

    const handleCambioNombre = (event) => {
        articulo.nombre = event.target.value
    };

    const handleCambioDescripcion = (event) => {
        articulo.descripcion = event.target.value
    };

    const handleCambioPrecio = (event) => {
        articulo.precio = event.target.value
    };

    const handleCambioCantidad = (event) => {
        articulo.cantidad = event.target.value
    };

    const handleCambioMarca = (event) => {
        articulo.marcaId = event.target.value
    };

    function submitArticulo(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        formData.forEach((value, key) => data[key] = value);

        fetch("/api/articulo/actualizar", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((json) => {
                if (json.error === "") {
                    alert("Artículo actualizado");
                } else {
                    alert("Error actualizando arículo: " + json.error);
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
                    <form id='formularioEditarArticulos' onSubmit={submitArticulo}>
                        <input type='text' name='nombre' placeholder='...nombre' value={articulo.nombre} onChange={handleCambioNombre} />
                        <input type='number' step='0.01' name='precio' placeholder='...precio' value={articulo.precio} onChange={handleCambioPrecio} />
                        <input type='number' name='cantidad' placeholder='...cantidad' value={articulo.cantidad} onChange={handleCambioCantidad} />
                        <input type='text' name='descripcion' placeholder='...descripcion' value={articulo.descripcion} onChange={handleCambioDescripcion} /><br></br><br></br>
                        <label for="marcas">Elija una marca para el artículo</label><br></br>
                        <select id="marcas" name='marcaId' form='formularioEditarArticulos' defaultValue={articulo.marcaId} onChange={handleCambioMarca} >
                            {marcas.map(marca => {
                                return <option value={marca.id}>{marca.nombre}</option>
                            })}
                        </select><br></br><br></br>
                        <label>¿Descatalogado?</label><br></br>
                        <label>
                            NO
                        </label>
                        <input
                            type="radio"
                            value="false"
                            name='descatalogado'
                            checked={descatalogado === "false"}
                            onChange={handleDescatalogadoEditar}
                        />
                        <label>
                            SÍ
                        </label>
                        <input
                            type="radio"
                            name='descatalogado'
                            value="true"
                            checked={descatalogado === "true"}
                            onChange={handleDescatalogadoEditar}
                        /><br></br>


                        <button className='buttonFormulario' type="submit">Añadir artículo</button>
                    </form>
                </>
            )}
        </div>

    );

}

export default EditarArticulo;