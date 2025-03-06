
export const VistaPrevia = () => {
   
    return (
      <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4 bg-pink-50 flex items-center justify-center">
        {/* Aquí podría ir una visualización del pastel */}
        <div className="text-center p-4">
            <div className="w-40 h-40 mx-auto bg-gradient-to-b from-[#FFCAD4] to-[#F4ACB7] rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-b from-[#F8EDEB] to-[#FEC5BB] rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-b from-[#FFE5D9] to-[#FFCAD4] rounded-full"></div>
                </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">Representación ilustrativa</p>
        </div>
    </div>
        
    );
};

