import { useEffect, useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

function Articulos() {
    const [articulos, setArticulos] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const eliminarArticulo = (event) => {
        if (window.confirm('¿Está seguro de querer eliminar?')) {
            setLoading(true);
            const id = event.currentTarget.getAttribute('data-param');

            fetch('/api/articulo/eliminar?id=' + id, { method: 'DELETE' })
                .then((response) => response.json())
                .then((json) => {
                    window.location.reload(true);
                }).finally(() => {
                    setLoading(false);
                });
        }

    }
    const actualizarArticulo = (event) => {
        const articuloId = event.currentTarget.getAttribute('data-param')
        setLoading(true);
        fetch('/api/articulo/get?id='+articuloId, {method: 'GET'})
        .then((response) => response.json())
        .then(json => {
            if (json.error === "") {
            const data = json.listaArticulos[0];
            navigate("/editarArticulo", {state:{data:data}});
            }
        });
    }

    useEffect(() => {
        setLoading(true);
        fetch("/api/articulo/getAll")
            .then((response) => response.json())
            .then((json) => setArticulos(json.listaArticulos))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="divMainHomePage">
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <>
                <div className="cabeceraTabla">
                    <h1>Artículos</h1>
                    <NavLink to="/anadirArticulo" className='buttonFormulario buttonFixed'>añadir artículo</NavLink>
                </div>

                    <table className="tabla">

                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Descatalogado</th>
                            <th>Descripción</th>
                        </tr>
                        {articulos.map(articulo => (
                            <tr key={articulo.id}>
                                <td>{articulo.nombre}</td>
                                <td>{articulo.precio}</td>
                                <td>{articulo.cantidad}</td>
                                <td>{articulo.descatalogado}</td>
                                <td>{articulo.descripcion}</td>
                                <td><button data-param={articulo.id} onClick={actualizarArticulo}>Actualizar</button></td>
                                <td><button data-param={articulo.id} onClick={eliminarArticulo}>Eliminar</button></td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    )
}

export default Articulos;