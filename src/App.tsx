import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuBar from './componentes/MenuBar';
import HomePage from './paginas/HomePage';
import Articulos from './paginas/Articulos';
import Proveedores from './paginas/Proveedores';
import Marcas from './paginas/Marcas';
import Contactos from './paginas/Contactos';
import AnadirContacto from './paginas/AnadirContactos';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
