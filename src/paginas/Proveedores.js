import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Proveedores() {
    const [loading, setLoading] = useState(false);

    const [proveedores, setProveedores] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch("/api/proveedor/getAll")
            .then((response) => response.json())
            .then((json) => setProveedores(json.listaProveedores))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch("/api/marca/getAll")
            .then((response) =>
                response.json())
            .then((json) =>
                setMarcas(json.listaMarcas))
            .finally(() => {
                setLoading(false);
            });
    }, []);


  useEffect(() => {
    setLoading(true);
    fetch("/api/contacto/getAll")
      .then((response) => response.json())
      .then((json) => setContactos(json.listaContactos))
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
                            <th>Marca</th>
                            <th>Nombre Contacto</th>
                        </tr>
                        {proveedores.map(proveedor => (
                            <tr key={proveedor.id}>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.direccion}</td>
                                <td>{proveedor.descripcion}</td>
                                {marcas ?
                                    <td>{marcas.find(marca => marca.id === proveedor.marcaId)?.nombre}</td>
                                : <td></td>
                                }
                                {contactos ?
                                    <td>{contactos.find(contacto => contacto.id === proveedor.contactoId)?.nombre}</td>
                                : <td></td>
                                }
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