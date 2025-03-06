// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar'; // Asegúrate de importar el Navbar
import { Home } from './pages/Home';
import { Personalizar } from './pages/Personalizar';
import { Productos } from './pages/Productos';



export const App = () => {
  return (
    <Router>
      <Navbar /> {/* Coloca el Navbar aquí */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personalizar" element={<Personalizar />} />
        <Route path="/productos" element={<Productos />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
};
