
const RoomCard = ({ room, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
      <img
        src={room.imageURL}
        alt={room.roomType}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-2 Eagles-6">
        <h3 className="text-xl font-semibold text-green-800">{room.roomType}</h3>
        <p className="text-orange-500 font-bold">₦{room.price.toLocaleString()}/night</p>
        <ul className="mt-2 text-sm text-gray-600">
          {room.amenities.map((amenity, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              {amenity}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onSelect(room)}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          aria-label={`Book ${room.roomType}`}
          style={{ borderColor: '#FFD700', borderWidth: '2px' }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;