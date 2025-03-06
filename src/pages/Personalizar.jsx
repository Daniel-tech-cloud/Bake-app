import { useState } from 'react';
import { Card } from '../components/Card';
import { VistaPrevia } from '../components/VistaPrevia';
import { Total } from '../components/Total';

export const Personalizar = () => {
  const [selectedBizcocho, setSelectedBizcocho] = useState('');
  const [selectedRelleno, setSelectedRelleno] = useState('');
  const [selectedCobertura, setSelectedCobertura] = useState('');
  const [selectedDecoraciones, setSelectedDecoraciones] = useState([]);

  const bizcochos = [
    { nombre: 'Vainilla', precio: 150 },
    { nombre: 'Chocolate', precio: 170 },
    { nombre: 'Red Velvet', precio: 190 },
    { nombre: 'Zanahoria', precio: 180 },
  ];

  const rellenos = [
    { nombre: 'Crema de Vainilla', precio: 50 },
    { nombre: 'Ganache de Chocolate', precio: 70 },
    { nombre: 'Mermelada de Fresa', precio: 60 },
    { nombre: 'Dulce de Leche', precio: 80 },
  ];

  const coberturas = [
    { nombre: 'Buttercream', precio: 80 },
    { nombre: 'Fondant', precio: 120 },
    { nombre: 'Ganache', precio: 100 },
    { nombre: 'Crema de Queso Light', precio: 90 },
  ];

  const decoraciones = [
    { nombre: 'Frutas Frescas', precio: 60 },
    { nombre: 'Virutas de Chocolate', precio: 40 },
    { nombre: 'Flores Comestibles', precio: 70 },
    { nombre: 'Figuritas de Fondant', precio: 90 },
  ];

  const handleDecoracionChange = (nombre) => {
    setSelectedDecoraciones((prev) =>
      prev.includes(nombre) ? prev.filter((item) => item !== nombre) : [...prev, nombre]
    );
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-4 text-center text-black">Personaliza tu Pastel</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Columna Izquierda: Ingredientes */}
        <div>
          {/* Sección de Bizcocho */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2 text-black">Elige el bizcocho</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {bizcochos.map((bizcocho) => (
                <Card
                  key={bizcocho.nombre}
                  titulo={bizcocho.nombre}
                  precio={bizcocho.precio}
                  seleccionado={selectedBizcocho === bizcocho.nombre}
                  onClick={() => setSelectedBizcocho(bizcocho.nombre)}
                />
              ))}
            </div>
          </div>

          {/* Sección de Relleno */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2 text-black">Selecciona el relleno</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {rellenos.map((relleno) => (
                <Card
                  key={relleno.nombre}
                  titulo={relleno.nombre}
                  precio={relleno.precio}
                  seleccionado={selectedRelleno === relleno.nombre}
                  onClick={() => setSelectedRelleno(relleno.nombre)}
                />
              ))}
            </div>
          </div>

          {/* Sección de Cobertura */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2 text-black">Elige la cobertura</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {coberturas.map((cobertura) => (
                <Card
                  key={cobertura.nombre}
                  titulo={cobertura.nombre}
                  precio={cobertura.precio}
                  seleccionado={selectedCobertura === cobertura.nombre}
                  onClick={() => setSelectedCobertura(cobertura.nombre)}
                />
              ))}
            </div>
          </div>

          {/* Sección de Decoraciones */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2 text-black">Añade decoraciones (opcional)</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {decoraciones.map((decoracion) => (
                <div
                  key={decoracion.nombre}
                  className={`cursor-pointer text-black border rounded-lg p-4 text-center transition-all duration-300 
                    ${selectedDecoraciones.includes(decoracion.nombre) ? 'bg-pink-100 text-black' : 'bg-white hover:bg-gray-100'}`}
                  onClick={() => handleDecoracionChange(decoracion.nombre)}
                >
                  <span>{decoracion.nombre} - ${decoracion.precio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Resumen y Total */}
        <div className="flex flex-col">
          {/* Vista Previa del Pastel */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Vista previa del pastel</h2>
            <VistaPrevia />
          </div>

          {/* Resumen de compra y Total */}
          <Total
            bizcocho={bizcochos.find((b) => b.nombre === selectedBizcocho)}
            relleno={rellenos.find((r) => r.nombre === selectedRelleno)}
            cobertura={coberturas.find((c) => c.nombre === selectedCobertura)}
            decoraciones={decoraciones.filter((d) => selectedDecoraciones.includes(d.nombre))}
          />
        </div>
      </div>
    </div>
  );
};
