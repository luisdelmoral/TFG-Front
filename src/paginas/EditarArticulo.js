
import { useState } from 'react';
import '../css/formulario.css'
import { useLocation } from 'react-router-dom';

function EditarArticulo() {
    const location = useLocation();
    const articulo = location.state.data;
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [descatalogado, setDescatalogado] = useState("" + articulo.descatalogado);
    const handleDescatalogadoEditar = (event) => {
        setDescatalogado(event.target.value);
    };

    const [nombre, setNombre] = useState("" + articulo.nombre);
    const handleCambioNombre = (event) => {
        setNombre(event.target.nombre)
    };

    const [descripcion, setDescripcion] = useState("" + articulo.descripcion);
    const handleCambioDescripcion = (event) => {
        setDescripcion(event.target.descripcion)
    };

    const [precio, setPrecio] = useState("" + articulo.precio);
    const handleCambioPrecio = (event) => {
        setPrecio(event.target.precio)
    };

    const [cantidad, setCantidad] = useState("" + articulo.cantidad);
    const handleCambioCantidad = (event) => {
        setCantidad(event.target.cantidad)
    };

    const [marca, setMarca] = useState("" + articulo.marca);
    const handleCambioMarca = (event) => {
        setMarca(event.target.marca)
    };

    function submitArticulo(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        data.id=articulo.id
        formData.forEach((value, key) => data[key] = value);
        data.descatalogado=descatalogado==="true";

        fetch("/api/articulo/actualizar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((json) => {
                if (json.error === "") {
                    alert("Artículo actualizado");
                } else {
                    alert("Error actualizando artículo: " + json.error);
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
                        <input type='text' name='nombre' placeholder='...nombre' value={nombre} onChange={handleCambioNombre} />
                        <input type='number' step='0.01' name='precio' placeholder='...precio' value={precio} onChange={handleCambioPrecio} />
                        <input type='number' name='cantidad' placeholder='...cantidad' value={cantidad} onChange={handleCambioCantidad} />
                        <input type='text' name='descripcion' placeholder='...descripcion' value={descripcion} onChange={handleCambioDescripcion} /><br></br><br></br>
                        <label for="marcas">Elija una marca para el artículo</label><br></br>
                        <select id="marcas" name='marcaId' form='formularioEditarArticulos' defaultValue={marca} onChange={handleCambioMarca} >
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


                        <button className='buttonFormulario' type="submit">Actualizar artículo</button>
                    </form>
                </>
            )}
        </div>

    );

}

export default EditarArticulo;