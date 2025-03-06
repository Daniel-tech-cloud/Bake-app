// src/components/Productos.jsx
import React from 'react';

const productos = [
  {
    id: 1,
    nombre: 'Pastel de Chocolate',
    descripcion: 'Un delicioso pastel de chocolate con crema suave.',
    precio: 15.99,
    imagen: 'https://via.placeholder.com/300x200?text=Pastel+de+Chocolate',
  },
  {
    id: 2,
    nombre: 'Pastel Red Velvet',
    descripcion: 'Pastel esponjoso de red velvet con glaseado cremoso.',
    precio: 18.99,
    imagen: 'https://via.placeholder.com/300x200?text=Pastel+Red+Velvet',
  },
  {
    id: 3,
    nombre: 'Pastel de Vainilla',
    descripcion: 'Un pastel clásico de vainilla con relleno de crema batida.',
    precio: 12.99,
    imagen: 'https://via.placeholder.com/300x200?text=Pastel+de+Vainilla',
  },
  {
    id: 4,
    nombre: 'Pastel de Fresa',
    descripcion: 'Pastel fresco de fresa con glaseado de fresa natural.',
    precio: 16.50,
    imagen: 'https://via.placeholder.com/300x200?text=Pastel+de+Fresa',
  },
];

export const Productos = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Nuestros Pasteles</h2>
        <p className="text-gray-600 mt-2 text-center">
          Descubre nuestra selección de deliciosos pasteles hechos con ingredientes frescos y naturales.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{producto.nombre}</h3>
                <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-600">${producto.precio}</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
