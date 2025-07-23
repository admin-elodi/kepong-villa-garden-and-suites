import { useState, useEffect, useRef } from 'react';
import RoomCard from '../components/booking/RoomCard';
import ScrollToTop from '../components/ScrollToTop';
import standardRoom from '@/assets/images/hotel/standard.webp';
import deluxe from '@/assets/images/hotel/deluxe.webp';
import executive from '@/assets/images/hotel/executive.webp';
import promoVideo from '@/assets/videos/couple.mp4';
import shadesImage from '@/assets/images/shades.webp';

const rooms = [
  {
    id: 1,
    roomType: 'Single',
    price: 7000,
    imageURL: standardRoom,
    amenities: ['Double Bed', 'Flatscreen'],
  },
  {
    id: 2,
    roomType: 'Deluxe',
    price: 10000,
    imageURL: deluxe,
    amenities: ['Queen Bed', 'Work Desk', 'Flatscreen'],
  },
  {
    id: 3,
    roomType: 'Executive',
    price: 15000,
    imageURL: executive,
    amenities: ['King Bed', 'Balcony', 'Flatscreen', 'Mini Bar'],
  },
  {
    id: 4,
    roomType: 'Apartment',
    price: 17000,
    imageURL: executive, // Will be changed later
    amenities: ['King Bed', 'Balcony', 'Mini Bar', 'Flatscreen', 'Room Service', 'Room & Parlor'],
  },
];

const promoTexts = [
  'Book Room or Apartment',
  'Room Service',
  'Dry Cleaning',
  'Luxury Comfort',
  'Exclusive Suites',
  'Unforgettable Stays',
];

const BookingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const modalRef = useRef(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  // Slideshow effect for promo texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promoTexts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <div className="min-h-screen font-montserrat bg-black text-gray-100 py-32">
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

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-12 lg:px-24 overflow-auto">
          <h1
            key={currentPromoIndex}
            className="text-2xl sm:text-5xl md:text-3xl font-bold tracking-widest leading-tight text-red-600 md:px-8 py-4 rounded-lg animate-fadeInUp"
          >
            {promoTexts[currentPromoIndex]}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${shadesImage})`,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Subtle overlay for readability
          backgroundBlendMode: 'darken',
        }}
      >
        {!showModal ? (
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {rooms.slice(0, 3).map((room) => (
                <RoomCard key={room.id} room={room} onSelect={handleRoomSelect} />
              ))}
            </div>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <RoomCard
                key={rooms[3].id}
                room={rooms[3]}
                onSelect={handleRoomSelect}
                isApartment
              />
            </div>
          </div>
        ) : (
          <section
            ref={modalRef}
            className="text-center py-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 shadow-lg max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-white mb-6 drop-shadow-md">
              Booking Confirmation
            </h2>
            <p className="text-gray-100 mb-4 text-lg leading-relaxed px-6">
              Thank you for booking a {selectedRoom?.roomType} at Kepong Villa Garden & Suites! Please make your payment via bank transfer using the details below:
            </p>
            <div className="text-left max-w-md mx-auto bg-gray-900/50 p-4 rounded-lg mb-6">
              <p className="text-gray-100 mb-2"><strong>Bank:</strong> Wema Bank</p>
              <p className="text-gray-100 mb-2"><strong>Account Name:</strong> Kepong Villa Garden & Suites</p>
              <p className="text-gray-100 mb-2"><strong>Account Number:</strong> 0125564025</p>
              <p className="text-gray-100 mb-2"><strong>Reference:</strong> Your Full Name</p>
            </div>
            <p className="text-gray-100 mb-6 text-lg leading-relaxed px-6">
              For further assistance, please call us at <a href="tel:08134493949" className="text-white underline">08134493949</a>.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://wa.me/08134493949?text=Hello,%20I%20have%20made%20a%20booking%20for%20a%20room%20at%20Kepong%20Villa.%20Please%20confirm%20my%20payment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg border-2 border-white shadow-md hover:bg-gray-100 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label="Contact us on WhatsApp to confirm your booking"
              >
                Confirm via WhatsApp
              </a>
              <button
                onClick={handleCloseModal}
                className="bg-gray-700 text-gray-100 px-8 py-3 rounded-lg font-semibold text-lg border-2 border-gray-600 shadow-md hover:bg-gray-800 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close confirmation modal"
              >
                Close
              </button>
            </div>
          </section>
        )}
      </main>

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation-name: fadeInUp;
            animation-duration: 0.8s;
            animation-timing-function: ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default BookingPage;