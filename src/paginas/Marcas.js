import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Marcas() {
    const [loading, setLoading] = useState(false);

    const [marcas, setMarcas] = useState([]);

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
                    <table className="tabla">

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
                    <NavLink to="/anadirMarca" className='buttonFormulario buttonFixed'>añadir marca</NavLink>

                </>
            )}
        </div>
    )
}

export default Marcas;