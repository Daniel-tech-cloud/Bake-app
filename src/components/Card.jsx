
export const Card = ({ titulo, precio, seleccionado, onClick }) => {
  return (
    <div
    className={` border text-black rounded-lg p-3 cursor-pointer transition-all ${
        seleccionado ? "border-pink-500 bg-pink-50" : "border-gray-200 hover:border-pink-300"
      }`}
    
      onClick={onClick}
    >
      <h3 className="font-semibold">{titulo}</h3>
      <p>${precio}</p>
    </div>
  );
};
