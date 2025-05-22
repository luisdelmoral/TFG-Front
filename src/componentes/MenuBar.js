import { Link } from "react-router";

function MenuBar() {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/articulos">Artículos</Link>
            <Link to="/marcas">Marcas</Link>
            <Link to="/proveedores">Proveedores</Link>
            <Link to="/contactos">Contactos</Link>
        </ul>
    )
}

export default MenuBar;