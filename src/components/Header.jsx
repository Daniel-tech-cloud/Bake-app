
export const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <img src="./public/logo.png" alt="Cake Shop Logo" className="h-20" />
            <h1 className="text-3xl font-bold text-pink-600">Bake - App</h1>
            <nav className="space-x-6">
                <a href="#home" className="text-gray-700 hover:text-pink-500">Home</a>
                <a href="#products" className="text-gray-700 hover:text-pink-500">Productos</a>
                <a href="#about" className="text-gray-700 hover:text-pink-500">Sobre Nosotros</a>
            </nav>
        </header>
    );
}