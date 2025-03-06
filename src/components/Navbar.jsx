import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('inicio'); // Estado para trackear el link activo
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú móvil

  const handleLinkClick = (link) => {
    setActiveLink(link); // Establece el enlace activo cuando se hace clic
  };

  return (
    <nav className="bg-gray-800 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-white">Bake</span><span className="text-pink-500">App</span>
          </h1>

          {/* Menú para pantallas grandes */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className={`text-xl text-white font-medium px-6 py-3 rounded-md ${activeLink === 'inicio' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('inicio')}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/productos"
                className={`text-xl text-white font-medium px-6 py-3 rounded-md ${activeLink === 'productos' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('productos')}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/personalizar"
                className={`text-xl text-white font-medium px-6 py-3 rounded-md ${activeLink === 'personalizar' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('personalizar')}
              >
                Personalizar
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                className={`text-xl text-white font-medium px-6 py-3 rounded-md ${activeLink === 'nosotros' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('nosotros')}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`text-xl text-white font-medium px-6 py-3 rounded-md ${activeLink === 'contacto' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('contacto')}
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Botón "Ordenar Ahora" */}
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-200 hidden md:block">
            Ordenar Ahora
          </button>

          {/* Icono de menú hamburguesa para móviles */}
          <button
            className="md:hidden text-pink-500 hover:text-pink-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú desplegable en dispositivos móviles */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-4">
            <li>
              <Link
                to="/"
                className={`text-xl font-medium px-6 py-3 rounded-md ${activeLink === 'inicio' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('inicio')}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/productos"
                className={`text-xl font-medium px-6 py-3 rounded-md ${activeLink === 'productos' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('productos')}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/personalizar"
                className={`text-xl font-medium px-6 py-3 rounded-md ${activeLink === 'personalizar' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('personalizar')}
              >
                Personalizar
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                className={`text-xl font-medium px-6 py-3 rounded-md ${activeLink === 'nosotros' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('nosotros')}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`text-xl font-medium px-6 py-3 rounded-md ${activeLink === 'contacto' ? 'text-pink-500 border-b-2 border-pink-500' : 'hover:text-pink-500'} transition duration-300`}
                onClick={() => handleLinkClick('contacto')}
              >
                Contacto
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
