import React from 'react';
import './css/menuPrincipal.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <MenuPrincipal />
    </div>
  );

}
function MenuPrincipal() {
  return (
    <ul className='menuPrincipal'>
      <ListaArticulos />
      <ListaMarcas />
      <ListaProveedores />
      <ListaContactos />
    </ul>
  );
}

function ListaArticulos() {
  return (
    <li><a>Artículos</a></li>
  );
}

function ListaMarcas() {
  return (
    <li><a>Marcas</a></li>
  );
}

function ListaProveedores() {
  return (
    <li><a>Proveedores</a></li>
  );
}

function ListaContactos() {
  return (
    <li><a>Contactos</a></li>
  );
}


export default App;