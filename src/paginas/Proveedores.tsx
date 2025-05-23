import { useEffect, useState } from "react";


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
                <table border={1}>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Dirección</th>
                        
                    </tr>
                    {proveedores.map(proveedor => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.nombre}</td>
                            <td>{proveedor.descripcion}</td>
                            <td>{proveedor.direccion}</td>
                            
                        </tr>
                    ))}
                </table>
                </>
            )}
        </div>
    )
}

export default Proveedores; 