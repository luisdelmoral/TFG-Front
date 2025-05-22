import React from 'react';
import './css/menuPrincipal.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './paginas/HomePage';
import Articulos from './paginas/Articulos';
import Contactos from './paginas/Contactos';
import Marcas from './paginas/Marcas';
import Proveedores from './paginas/Proveedores';
import MenuBar from './componentes/MenuBar';


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;