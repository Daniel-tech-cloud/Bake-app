export const ProductCard = ({ image, name, price }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={image} alt={name} className="h-40 w-40 object-cover mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">{name}</h3>
            <p className="text-pink-500 font-bold mt-2">$ {price}. 00</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">Comprar</button>
        </div>
    );
}
