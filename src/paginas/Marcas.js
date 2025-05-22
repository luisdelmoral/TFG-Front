import { useEffect, useState } from "react";


function Marcas () {
    const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);
    fetch("/api/marca/getAll")
      .then((response) => response.json())
      .then((json) => setMarcas(json.listaMarcas))
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
                <h1>Marcas</h1>
                <table border={1}>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                    {marcas.map(marca => (
                        <tr key={marca.id}>
                            <td>{marca.nombre}</td>
                            <td>{marca.descripcion}</td>

                        </tr>
                    ))}
                </table>
                </>
            )}
        </div>  
    )
}

export default Marcas;