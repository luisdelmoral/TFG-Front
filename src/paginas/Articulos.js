import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Articulos () {
    const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(false);

  const eliminarArticulo=(event) => {
    if (window.confirm('¿Está seguro de querer eliminar?')) {
        setLoading (true);
    const id = event.currentTarget.getAttribute('data-param');

    fetch('/api/articulo/eliminar?id='+id, { method: 'DELETE' })
        .then((response) => response.json())
        .then((json) => {
            window.location.reload(true);
        }).finally(() => {
            setLoading(false);
        });
    }
    
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
                <h1>Artículos</h1>
                <table border={1}>
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
                            <td><button data-param={articulo.id} onClick={eliminarArticulo}>Eliminar</button></td>
                            

                        </tr>
                    ))}
                </table>
                <NavLink to="/anadirArticulo" className='botonAnadir'>añadir artículo</NavLink>
                </>
            )}
        </div>
    )
}

export default Articulos;