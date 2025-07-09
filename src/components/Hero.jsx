import { useState } from 'react';
import { Link } from 'react-router-dom';
import promoVideo from '@/assets/videos/flicker.mp4';
import DroneOrderModal from './DroneOrderModal';
import ReserveTableModal from '../components/ReserveTableModal'; // Adjust path as needed

const Hero = ({ setIsModalOpen }) => {
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  // === Button width control ===
  // Set all widths equal, or set them individually here:
  const allWidthsEqual = true;
  const buttonWidths = allWidthsEqual
    ? {
        bookHotel: '250px',
        reserveTable: '250px',
        orderDrone: '250px',
      }
    : {
        bookHotel: '220px',
        reserveTable: '260px',
        orderDrone: '200px',
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

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
        {/* Main Title */}
        <h1
          className="text-2xl mt-24 sm:text-4xl md:text-5xl font-bold text-yellow-100 mb-16 animate-fade-in-up delay-100"
          style={{
            textShadow: '0 6px 8px rgba(0,0,0,0.5)',
            animation: 'growText 4s ease-in-out forwards',
          }}
        >
          Kepong Villa Garden & Suites
        </h1>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center items-center animate-fade-in-up delay-300 w-full"
          style={{
            paddingLeft: '1rem',  // mobile: space from left
            paddingRight: '1rem', // mobile: space from right
          }}
        >
          {/* Book Now */}
          <Link
            to="/bookings"
            className="bg-emerald-900 text-white font-semibold text-base sm:text-lg py-3 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-center"
            aria-label="Book your stay at Kepong Villa"
            style={{
              width: getButtonWidth('bookHotel'),
              maxWidth: '300px',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            }}
          >
            Book Hotel
          </Link>

          {/* Reserve a Table */}
          <button
            onClick={openReserveModal}
            className="bg-yellow-100 text-black font-semibold text-base sm:text-lg py-3 border-2 border-black rounded-lg hover:bg-yellow-500 hover:text-white hover:scale-105 transition-transform duration-300 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-center"
            aria-label="Reserve a table for entertainment"
            style={{
              width: getButtonWidth('reserveTable'),
              maxWidth: '300px',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            }}
          >
            Reserve Table-4-Four
          </button>

          {/* Order by Drone */}
          <button
            onClick={openDroneModal}
            className="bg-transparent text-white font-semibold text-base sm:text-lg py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none mt-2 sm:mt-0 sm:order-last text-center"
            aria-label="Order food or drinks by drone"
            style={{
              width: getButtonWidth('orderDrone'),
              maxWidth: '300px',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            }}
          >
            Order by Drone
          </button>
        </div>

        {/* Modals */}
        <DroneOrderModal isOpen={isDroneModalOpen} setIsModalOpen={closeDroneModal} />
        <ReserveTableModal isOpen={isReserveModalOpen} setIsModalOpen={closeReserveModal} />
      </div>

      {/* Custom CSS for Animation and Responsive Button Widths */}
      <style>
        {`
          @keyframes growText {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Mobile view: buttons full width with spacing from screen edges */
          @media (max-width: 640px) {
            .hero div > div > a, .hero div > div > button {
              width: 100% !important;
              max-width: none !important;
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
              box-sizing: border-box;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
