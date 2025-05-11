import { useState } from 'react';
import RoomCard from '../components/booking/RoomCard';
import BookingForm from '../components/booking/BookingForm';

// ✅ Import images using alias
import standardRoom from '@/assets/images/hotel/standard-room.jpg';
import deluxe from '@/assets/images/hotel/deluxe.jpg';
import executive from '@/assets/images/hotel/executive.jpg';
import heroBg from '@/assets/images/hotel/hotel-image.png';

const rooms = [
  {
    id: 1,
    roomType: 'Standard Room',
    price: 15000,
    imageURL: standardRoom,
    amenities: ['Double Bed', 'Wi-Fi'],
  },
  {
    id: 2,
    roomType: 'Deluxe Suite',
    price: 20000,
    imageURL: deluxe,
    amenities: ['Queen Bed', 'Wi-Fi', 'Work Desk'],
  },
  {
    id: 3,
    roomType: 'Executive Suite',
    price: 25000,
    imageURL: executive,
    amenities: ['King Bed', 'Wi-Fi', 'Balcony', 'Mini Bar'],
  },
];

const BookingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setShowForm(true);
  };

  const handleFoodAndDrinksOnly = () => {
    setSelectedRoom(null);
    setShowForm(true);
  };

  const handleBookingSubmit = (bookingData) => {
    console.log('Booking Data:', bookingData);
    setShowForm(false);
    setBookingConfirmed(true);
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center font-montserrat"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover', // or 'cover', or '100% auto'
        backgroundPosition: 'right', // change to 'top', 'bottom', 'left', etc.
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to improve contrast */}
      <div className="min-h-screen bg-black bg-opacity-70">
        {/* Hero Section */}
        <section className="h-80 flex items-center justify-center text-center text-white w-full">
          <div className="p-8 rounded-lg max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">
              Kepong Villa Garden & Suites
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Book your room, food, and drinks all at once!
            </p>
            <p className="text-lg md:text-xl text-white/80">
              Arrive to a warm Enugu welcome with everything ready.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 text-white">
          {!showForm && !bookingConfirmed ? (
            <>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6 text-center">
                  Choose Your Room
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rooms.map((room) => (
                    <RoomCard
                      key={room.id}
                      room={room}
                      onSelect={handleRoomSelect}
                    />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={handleFoodAndDrinksOnly}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
                    aria-label="Book food and drinks only"
                  >
                    Book Food & Drinks Only
                  </button>
                </div>
              </section>
            </>
          ) : showForm ? (
            <BookingForm
              selectedRoom={selectedRoom}
              onBack={() => setShowForm(false)}
              onSubmit={handleBookingSubmit}
            />
          ) : (
            <section className="text-center py-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-4">
                Booking Confirmed
              </h2>
              <p className="text-white/90 mb-6">
                Thank you for booking with Kepong Villa. Confirmation details will be implemented in
                ConfirmationPage.jsx.
              </p>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
                aria-label="Return to home"
                style={{ borderColor: '#FFD700', borderWidth: '2px' }}
              >
                Back to Home
              </button>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default BookingPage;
