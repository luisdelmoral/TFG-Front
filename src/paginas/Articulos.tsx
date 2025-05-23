import { useEffect, useState } from "react";

function Articulos () {
    const [articulos, setArticulos] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/articulo/getAll")
      .then(response => setArticulos(response.body))
      .finally(() =>  setLoading(false));
  }, []);

    return (
        <>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <>
                <h1>Artículos</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Descatalogado</th>
                        <th>Descripción</th>
                    </tr>
                    </thead>
                    <tbody>
                    {articulos.map(articulo => (
                        <tr key={articulo.id}>
                            <td>{articulo.name}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.cantidad}</td>
                            <td>{articulo.descatalogado}</td>
                            <td>{articulo.descripcion}</td>

                        </tr>

                    ))}
                    </tbody>
                </table>
                </>
            )}
        </>
    )
}

export default Articulos;