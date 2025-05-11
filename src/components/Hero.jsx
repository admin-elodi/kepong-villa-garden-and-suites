import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shawarma from '@/assets/images/food-drink/shawarma.jpg';
import deluxeRoom from '@/assets/images/hotel/unsplash.jpg';
import weddingReception from '@/assets/images/hotel/executive.jpg';
import DroneOrderModal from './DroneOrderModal'; // Adjust path as needed

const Hero = () => {
  const slides = [
    {
      bg: shawarma,
      alt: 'Shawarma dish at Kepong Villa',
    },
    {
      bg: deluxeRoom,
      alt: 'Deluxe room at Kepong Villa',
    },
    {
      bg: weddingReception,
      alt: 'Wedding reception at Kepong Villa',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen text-white overflow-hidden">
      {/* Full-Width Carousel for All Devices */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out ${
              index === currentIndex
                ? 'translate-x-0 opacity-100'
                : index > currentIndex
                ? 'translate-x-full opacity-0'
                : '-translate-x-full opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.bg})` }}
            aria-label={slide.alt}
            aria-hidden={index !== currentIndex}
          />
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 african-bg z-5"></div>
      {/* Content */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kepong Villa Garden & Suites
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Experience Enugu’s Finest – Book Rooms, Savor Jollof, Dance the Night Away, and Hunt for
          Treasure!
        </p>
        <div className="flex space-x-4">
          <Link
            to="/bookings"
            className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition"
            aria-label="Book Now"
          >
            Book Now
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
            aria-label="Order by Drone"
          >
            Order by Drone
          </button>
        </div>
      </div>
      {/* Drone Order Modal */}
      <DroneOrderModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </section>
  );
};

export default Hero;