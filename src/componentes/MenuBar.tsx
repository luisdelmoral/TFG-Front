import { NavLink } from "react-router-dom";

function MenuBar() {

    return (
        <ul className="mainMenu">
            <NavLink
                className={({ isActive })=> (isActive ? 'itemMenu selected' : 'itemMenu')}
                to="/">Home</NavLink>
            <NavLink
                className={({ isActive })=> (isActive ? 'itemMenu selected' : 'itemMenu')}
                to="/articulos">Artículos</NavLink>
            <NavLink
                className={({ isActive })=> (isActive ? 'itemMenu selected' : 'itemMenu')}
                to="/marcas">Marcas</NavLink>
            <NavLink
                className={({ isActive })=> (isActive ? 'itemMenu selected' : 'itemMenu')}
                to="/proveedores">Proveedores</NavLink>
            <NavLink
                className={({ isActive })=> (isActive ? 'itemMenu selected' : 'itemMenu')}
                to="/contactos">Contactos</NavLink>
        </ul>
    );
}

export default MenuBar;