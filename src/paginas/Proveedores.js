import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Proveedores() {
    const [proveedores, setProveedores] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/proveedor/getAll")
            .then((response) => response.json())
            .then((json) => setProveedores(json.listaProveedores))
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
                    <h1>Proveedores</h1>
                    <table className="tabla">

                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Dirección</th>

                        </tr>
                        {proveedores.map(proveedor => (
                            <tr key={proveedor.id}>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.direccion}</td>
                                <td>{proveedor.descripcion}</td>

                            </tr>
                        ))}
                    </table>
                    <NavLink to="/anadirProveedor" className='buttonFormulario buttonFixed'>añadir proveedor</NavLink>

                </>
            )}
        </div>
    )
}

export default Proveedores; 