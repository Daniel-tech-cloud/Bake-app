import { ProductCard } from './ProductCard';

export const Products = () => {
    const products = [
        { image: './public/pastel.jpg', name: 'Torta de Frutas', price: 2500 },
        { image: './public/pastel.jpg', name: 'Torta de Chocolate', price: 2500 },
        { image: './public/pastel.jpg', name: 'Torta de Queso', price: 2500 }
    ];
    
    return (
        <section className="py-12 bg-pink-50">
        <h2 className="text-2xl font-bold text-center text-gray-800">Nuestros Pasteles</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
        </section>
    );
}

