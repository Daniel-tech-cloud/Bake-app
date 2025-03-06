import { CakeIcon } from 'lucide-react';  // Asegúrate de importar solo el ícono que usas
import { NuestrasCreaciones } from '../components/NuestrasCreaciones';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            {/* Hero Section */}
            <header className="bg-pink-50 py-20 text-center px-4">
                <div className="flex justify-center items-center space-x-4">
                    <CakeIcon className="text-8xl text-pink-600" /> {/* Tamaño grande del ícono */}
                    <h2 className="text-5xl font-bold text-gray-900">
                        Dulces momentos, <span className="text-pink-600">sabores inolvidables</span>
                    </h2>
                </div>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                    Descubre nuestras deliciosas creaciones artesanales elaboradas con los mejores ingredientes y sabor incomparable.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-pink-600 border border-white text-white px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white font-bold">
                        Ver Catálogo
                    </button>
                    <button className="bg-pink-600 border border-white text-white px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white font-bold">
                        Ordenar Especial
                    </button>
                </div>
            </header>

            <NuestrasCreaciones />
            <Footer />
        </div>
    );
};
