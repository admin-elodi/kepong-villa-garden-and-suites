import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import promoVideo from '@/assets/videos/stars.webm';
import DroneOrderModal from './DroneOrderModal';
import ReserveTableModal from '../components/ReserveTableModal'; // Adjust path if needed

const promotionalTexts = [
  '24hrs Light',
  'Free WiFi',
  'Quick & Responsive Services',
  'Comfortable Rooms',
  'Special Table for Four',
  'Local & Foreign Foods',
  'Play Games',
  'Enjoy Club K',
  'Nigerian & Ghana Jollof',
  'Drone Delivery Coming Soon!',
];

const Hero = ({ setIsModalOpen }) => {
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  // Slideshow state for promotional texts
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

  useEffect(() => {
    console.log('✅ Hero component rendered');

    // Auto-rotate promotional texts every 3 seconds
    const interval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promotionalTexts.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const buttonWidths = {
    bookHotel: '180px',
    reserveTable: '180px',
    orderDrone: '370px',
  };

  const getButtonWidth = (buttonName) => buttonWidths[buttonName];

  const openDroneModal = () => {
    setIsDroneModalOpen(true);
    setIsModalOpen(true);
  };

  const closeDroneModal = () => {
    setIsDroneModalOpen(false);
    setIsModalOpen(false);
  };

  const openReserveModal = () => {
    setIsReserveModalOpen(true);
  };

  const closeReserveModal = () => {
    setIsReserveModalOpen(false);
  };

  return (
    <section className="hero relative min-h-screen font-montserrat text-gray-800 overflow-hidden">
      {/* Video Background */}
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

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
        {/* Main Title */}
        <h1
          className="text-2xl mt-24 sm:text-4xl md:text-4xl font-bold text-red-600 tracking-widest mb-6 animate-fade-in-up delay-100"
          style={{
            textShadow: '0 6px 8px rgba(0,0,0,0.5)',
            animation: 'growText 4s ease-in-out forwards',
          }}
        >
          Kepong Villa Garden & Suites
        </h1>

        {/* Promotional Text Slideshow */}
        <p
          key={currentPromoIndex} // key triggers re-render for animation
          className="rounded-lg p-4 text-white text-xl sm:text-xl md:text-3xl font-semibold mb-16 transition-opacity duration-1000 ease-in-out"
          style={{
            textShadow: '0 4px 6px rgba(0,0,0,0.6)',
            opacity: 1,
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {promotionalTexts[currentPromoIndex]}
        </p>

        <div className="w-full max-w-[600px]" style={{ minWidth: '280px' }}>
          {/* Desktop View */}
          <div className="hidden sm:flex flex-col gap-6">
            <div className="flex justify-center gap-6 mb-4">
              <Link
                to="/bookings"
                className="bg-yellow-100 text-black font-bold cursor-pointer text-base sm:text-lg py-3 rounded-lg border-2 border-red shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors duration-300 hover:bg-slate-500 hover:text-white hover:scale-105"
                aria-label="Book your stay at Kepong Villa"
                style={{
                  width: getButtonWidth('bookHotel'),
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Book Hotel
              </Link>

              <button
                onClick={openReserveModal}
                className="bg-red-600 text-white font-bold text-base cursor-pointer sm:text-lg py-3 border-2 rounded-lg shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors duration-300 hover:bg-slate-500 hover:text-white hover:scale-105"
                aria-label="Reserve a table for entertainment"
                style={{
                  width: getButtonWidth('reserveTable'),
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Reserve Table
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={openDroneModal}
                className="bg-transparent text-white font-bold cursor-pointer text-base sm:text-lg py-3 rounded-lg border-2 border-red-600 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors duration-300 hover:bg-slate-500 hover:text-black"
                aria-label="Order food or drinks by drone"
                style={{
                  width: getButtonWidth('orderDrone'),
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                }}
              >
                Order by Drone
              </button>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col gap-6 sm:hidden mt-8">
            <Link
              to="/bookings"
              className="bg-white text-black font-bold text-base py-3 rounded-lg border-2 border-red shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors duration-300 hover:bg-yellow-100 hover:text-white hover:border-yellow-300 hover:scale-105 text-center"
              aria-label="Book your stay at Kepong Villa"
            >
              Book Hotel
            </Link>

            <button
              onClick={openReserveModal}
              className="bg-red-600 text-black font-bold text-base py-3 rounded-lg shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors duration-300 hover:bg-yellow-200 hover:text-yellow-100 hover:border-yellow-700 hover:scale-105 text-center"
              aria-label="Reserve a table for entertainment"
            >
              Reserve Table
            </button>

            <button
              onClick={openDroneModal}
              className="bg-transparent text-white font-semibold text-base py-3 rounded-lg border-2 border-red-600 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-colors duration-300 hover:bg-indigo-400 hover:text-white hover:border-indigo-700 text-center"
              aria-label="Order food or drinks by drone"
            >
              Order by Drone
            </button>
          </div>
        </div>

        {/* Modals */}
        <DroneOrderModal isOpen={isDroneModalOpen} setIsModalOpen={closeDroneModal} />
        <ReserveTableModal isOpen={isReserveModalOpen} setIsModalOpen={closeReserveModal} />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes growText {
            0% { opacity: 0; transform: scale(0.9); }
            50% { opacity: 0.5; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease forwards;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
