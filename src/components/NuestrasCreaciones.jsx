

export const NuestrasCreaciones = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-500 mb-8">
            Nuestras Creaciones
            </h2>
            <p className="text-lg text-gray-700 mb-12">
            Cada producto es elaborado con ingredientes seleccionados y técnicas artesanales para ofrecerte la mejor experiencia de sabor.
            </p>

            {/* Contenedor de productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Producto 1 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
                <img 
                src="https://via.placeholder.com/300" 
                alt="Producto 1"
                className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">Producto 1</h3>
                <p className="text-gray-600 mt-2">
                Ingredientes seleccionados y técnicas tradicionales para un sabor único.
                </p>
            </div>

            {/* Producto 2 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
                <img 
                src="https://via.placeholder.com/300" 
                alt="Producto 2"
                className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">Producto 2</h3>
                <p className="text-gray-600 mt-2">
                Hecho con pasión y dedicación para ofrecer una experiencia inigualable.
                </p>
            </div>

            {/* Producto 3 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
                <img 
                src="https://via.placeholder.com/300" 
                alt="Producto 3"
                className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">Producto 3</h3>
                <p className="text-gray-600 mt-2">
                Una combinación perfecta de ingredientes frescos y técnicas modernas.
                </p>
            </div>
            </div>
        </div>
        </section>
    );
};

