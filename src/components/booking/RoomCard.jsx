const RoomCard = ({ room, onSelect, isApartment = false }) => {
  return (
    <div
      className={`bg-black rounded-lg overflow-hidden transition-all duration-300 border-b-2 border-red-600 font-montserrat shadow-sm hover:shadow-md flex flex-col ${
        isApartment ? 'lg:w-[540px]' : ''
      }`}
    >
      <img
        src={room.imageURL}
        alt={room.roomType}
        className="w-full h-40 sm:h-56 object-cover"
        loading="lazy"
      />
      <div className="p-2 sm:p-5 text-left bg-black text-white flex flex-col flex-grow min-h-[220px]">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-red-600">
            {room.roomType}
          </h3>
          <p className="text-white font-semibold text-base sm:text-lg mt-1">
            ₦{room.price.toLocaleString()}/night
          </p>
          {isApartment ? (
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-base sm:text-lg text-white">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  {amenity}
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-2 text-base sm:text-lg text-white space-y-1">
              {room.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Button aligned to bottom */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => onSelect(room)}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-600 hover:text-white transition-transform duration-300 text-base sm:text-lg font-semibold border-2 border-red-600 shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label={`Book ${room.roomType}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;