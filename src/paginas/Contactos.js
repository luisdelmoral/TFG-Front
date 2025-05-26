import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../css/botonAnadir.css'

function Contactos () {
    const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(false);

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
                <h1>Contactos</h1>
                <table border={1}>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                    </tr>
                    {contactos.map(contacto => (
                        <tr key={contacto.id}>
                            <td>{contacto.nombre}</td>
                            <td>{contacto.apellidos}</td>
                            <td>{contacto.email}</td>
                            <td>{contacto.telefono}</td>

                        </tr>
                    ))}
                    <button className='buttonFormulario' type="submit">Añadir contacto</button>

                </table>
                </>
            )}

        </div>
    )
}
export default Contactos; 