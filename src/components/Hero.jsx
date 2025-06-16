import { useState } from 'react';
import { Link } from 'react-router-dom';
import promoVideo from '@/assets/videos/rise.mp4';
import DroneOrderModal from './DroneOrderModal';

// Import your ReserveTableModal component or define it here
import ReserveTableModal from '../components/ReserveTableModal'; // Adjust path as needed

const Hero = ({ setIsModalOpen }) => {
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

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
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto"
      >

        {/* Main Title */}
        <h1
          className="text-2xl mb-8 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-100 mb-4 animate-fade-in-up delay-100"
          style={{
            textShadow: '0 6px 8px rgba(0,0,0,0.5)',
            animation: 'growText 4s ease-in-out forwards',
          }}
        >
          Kepong Villa Garden & Suites
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center animate-fade-in-up delay-300 w-full">
          {/* Book Now */}
          <Link
            to="/bookings"
            className="bg-emerald-900 text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none flex-1 sm:flex-none sm:w-auto text-center"
            aria-label="Book your stay at Kepong Villa"
          >
            Book Hotel
          </Link>

          {/* Reserve a Table */}
          <button
            onClick={openReserveModal}
            className="bg-yellow-100 text-black font-semibold text-base sm:text-lg py-3 px-6 border-2 border-black rounded-lg hover:bg-yellow-500 hover:text-white hover:scale-105 transition-transform duration-300 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none flex-1 sm:flex-none sm:w-auto text-center"
            aria-label="Reserve a table for entertainment"
          >
            Reserve Table-4-Four
          </button>

          {/* Order by Drone (full width below) */}
          <button
            onClick={openDroneModal}
            className="bg-transparent text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none w-full sm:w-auto mt-2 sm:mt-0 sm:flex-none sm:order-last"
            aria-label="Order food or drinks by drone"
          >
            Order by Drone
          </button>
        </div>

        {/* Modals */}
        <DroneOrderModal isOpen={isDroneModalOpen} setIsModalOpen={closeDroneModal} />
        <ReserveTableModal isOpen={isReserveModalOpen} setIsModalOpen={closeReserveModal} />
      </div>

      {/* Custom CSS for Animation */}
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
        `}
      </style>
    </section>
  );
};

export default Hero;
