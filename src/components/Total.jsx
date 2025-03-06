export const Total = ({ bizcocho, relleno, cobertura, decoraciones }) => {
    const calcularTotal = () => {
      return (
        (bizcocho?.precio || 0) +
        (relleno?.precio || 0) +
        (cobertura?.precio || 0) +
        decoraciones.reduce((acc, decoracion) => acc + decoracion.precio, 0)
      );
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-xl mt-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resumen de tu Pastel</h2>
        <ul className="space-y-3 text-gray-700">
          {bizcocho && (
            <li className="flex justify-between">
              <span className="font-medium">Bizcocho:</span>
              <span>{bizcocho.nombre} - <span className="font-semibold">${bizcocho.precio}</span></span>
            </li>
          )}
          {relleno && (
            <li className="flex justify-between">
              <span className="font-medium">Relleno:</span>
              <span>{relleno.nombre} - <span className="font-semibold">${relleno.precio}</span></span>
            </li>
          )}
          {cobertura && (
            <li className="flex justify-between">
              <span className="font-medium">Cobertura:</span>
              <span>{cobertura.nombre} - <span className="font-semibold">${cobertura.precio}</span></span>
            </li>
          )}
          {decoraciones.length > 0 && (
            <li>
              <span className="font-medium">Decoraciones:</span>
              <ul className="ml-4 space-y-2">
                {decoraciones.map((decoracion, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{decoracion.nombre}</span>
                    <span className="font-semibold">${decoracion.precio}</span>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
        <div className="mt-6 p-4 bg-pink-100 rounded-lg shadow-md text-center">
          <span className="text-xl font-semibold text-gray-800">Total: </span>
          <span className="text-2xl font-bold text-pink-600">${calcularTotal()}</span>
        </div>
      </div>
    );
  };
  