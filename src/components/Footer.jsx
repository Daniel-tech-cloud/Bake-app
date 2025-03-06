
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Sección: Sobre Nosotros */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Sobre Nosotros</h3>
            <p className="text-gray-400">
              Somos una empresa dedicada a ofrecerte productos deliciosos, elaborados con ingredientes frescos y técnicas artesanales. 
              Nuestro compromiso es brindarte la mejor experiencia de sabor.
            </p>
          </div>

          {/* Sección: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-pink-500 transition duration-300">Inicio</a>
              </li>
              <li>
                <a href="/productos" className="text-gray-400 hover:text-pink-500 transition duration-300">Productos</a>
              </li>
              <li>
                <a href="/personalizar" className="text-gray-400 hover:text-pink-500 transition duration-300">Personalizar</a>
              </li>
              <li>
                <a href="/nosotros" className="text-gray-400 hover:text-pink-500 transition duration-300">Nosotros</a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-400 hover:text-pink-500 transition duration-300">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Sección: Síguenos en Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <i className="fab fa-facebook-f text-2xl"></i> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <i className="fab fa-twitter text-2xl"></i> {/* Twitter Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <i className="fab fa-instagram text-2xl"></i> {/* Instagram Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2025 BakeApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

