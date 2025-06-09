import { useState, useEffect, useRef } from 'react';
import RoomCard from '../components/booking/RoomCard';
import BookingForm from '../components/booking/BookingForm';
import ScrollToTop from '../components/ScrollToTop'; // Assuming this is your component
import standardRoom from '@/assets/images/hotel/standard-room.jpg';
import deluxe from '@/assets/images/hotel/deluxe.jpg';
import executive from '@/assets/images/hotel/executive.jpg';

import promoVideo from '@/assets/videos/couple.mp4';

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
  const [userEmail, setUserEmail] = useState(''); // Store user's email from form
  const confirmationRef = useRef(null); // Ref for confirmation section

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
    setUserEmail(bookingData.email); // Store email from form
    setShowForm(false);
    setBookingConfirmed(true);
  };

  // Scroll to confirmation section when bookingConfirmed changes to true
  useEffect(() => {
    if (bookingConfirmed && confirmationRef.current) {
      confirmationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [bookingConfirmed]);

  return (
    <div className="min-h-screen font-montserrat bg-black text-gray-100">
      {/* Scroll reset */}
      <ScrollToTop />

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[80vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <video
          src={promoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
         
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-100 mb-4 leading-tight">
            Book Your Stay at...
          </h1>
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-100 via-amber-500 to-yellow-300 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-md">
            Kepong Villa Garden & Suites
          </h2>
          <p className="text-lg sm:text-xl font-medium max-w-3xl text-white drop-shadow-md leading-relaxed">
            Reserve room, meals & drinks — in one simple step.
            <br />
            Arrive at your suite, food & drinks ready and waiting.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showForm && !bookingConfirmed ? (
          <>
            <div className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {rooms.map((room) => (
                  <RoomCard key={room.id} room={room} onSelect={handleRoomSelect} />
                ))}
              </div>
              <div className="text-center mt-10">
                <button
                  onClick={handleFoodAndDrinksOnly}
                  className="bg-amber-500 text-emerald-900 px-8 py-3 rounded-lg hover:bg-amber-600 transition transform hover:scale-105 font-semibold text-lg border-2 border-amber-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-400"
                  aria-label="Book food and drinks only"
                >
                  Book Food & Drinks Only
                </button>
              </div>
            </div>
          </>
        ) : showForm ? (
          <BookingForm
            selectedRoom={selectedRoom}
            onBack={() => setShowForm(false)}
            onSubmit={handleBookingSubmit}
          />
        ) : (
          <section
            ref={confirmationRef}
            className="text-center py-16 rounded-lg bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 shadow-lg max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-yellow-300 mb-6 drop-shadow-md">
              Booking Confirmed!
            </h2>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed px-6">
              Thank you for booking with Kepong Villa Garden & Suites! Please check your email
              (including spam/junk folder) for your booking details and payment instructions.
              Complete your payment via bank transfer using the details in the email. Use your full
              name as the reference to ensure quick confirmation.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href={`mailto:${userEmail}`}
                className="bg-yellow-400 text-emerald-900 px-8 py-3 rounded-lg hover:bg-yellow-500 transition font-semibold text-lg border-2 border-yellow-300 shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-400"
                aria-label="Check email for booking and payment details"
              >
                Check Your Email
              </a>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="bg-gray-700 text-gray-100 px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold text-lg border-2 border-gray-600 shadow-md focus:outline-none focus:ring-4 focus:ring-gray-600"
                aria-label="Close confirmation message"
              >
                Close
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default BookingPage;
