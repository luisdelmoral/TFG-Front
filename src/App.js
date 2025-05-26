import React from 'react';
import './css/menuPrincipal.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './paginas/HomePage';
import Articulos from './paginas/Articulos';
import Contactos from './paginas/Contactos';
import Marcas from './paginas/Marcas';
import Proveedores from './paginas/Proveedores';
import MenuBar from './componentes/MenuBar';
import AnadirContacto from './paginas/AnadirContacto'
import AnadirArticulo from './paginas/AnadirArticulo';
import AnadirMarca from './paginas/AnadirMarca';
import AnadirProveedor from './paginas/AnadirProveedor';


function App() {
  return (
     <BrowserRouter>
      <MenuBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/anadirContacto" element={<AnadirContacto/>} />
          <Route path="/anadirArticulo" element={<AnadirArticulo/>} />
          <Route path="/anadirMarca" element={<AnadirMarca/>} />
          <Route path="/anadirProveedor" element={<AnadirProveedor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;