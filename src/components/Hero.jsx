import { useState, useEffect, useRef, useCallback } from 'react';
import DroneOrderModal from './DroneOrderModal';
import ReserveTableModal from '../components/ReserveTableModal';

// Import images
import amaka from '@/assets/images/shawarma.webp';
import chilling from '@/assets/images/snooker.webp';
import deluxe from '@/assets/images/donj.jpg';
import unsplash from '@/assets/images/unsplash.webp';
import hotel from '@/assets/images/hotel.webp';

const carouselImages = [
  { src: amaka, alt: 'Luxurious room at Kepong Villa Garden & Suites - Amaka' },
  { src: chilling, alt: 'Relaxing ambiance at Kepong Villa - Chilling area' },
  { src: deluxe, alt: 'Deluxe Suite at Kepong Villa Garden & Suites' },
  { src: unsplash, alt: 'Cozy rooms' },
  { src: hotel, alt: 'Front building' },
];

// Kepong official red
const KEPONG_RED = '#D62828';

const Hero = ({ setIsModalOpen }) => {
  // Modal states
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const slideIntervalRef = useRef(null);

  // Carousel auto-advance every 7 seconds
  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(slideIntervalRef.current);
  }, []);

  // Manual carousel controls with useCallback for performance
  const nextSlide = useCallback(() => {
    clearInterval(slideIntervalRef.current);
    setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
    // Restart interval
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
    }, 7000);
  }, []);

  const prevSlide = useCallback(() => {
    clearInterval(slideIntervalRef.current);
    setCurrentSlide((idx) => (idx === 0 ? carouselImages.length - 1 : idx - 1));
    // Restart interval
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
    }, 2000);
  }, []);

  // Swipe support for touch devices
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX - touchEndX;

    // Swipe threshold: 50px
    if (diffX > 50) {
      nextSlide();
      setTouchStartX(null);
    } else if (diffX < -50) {
      prevSlide();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  // Modal handlers
  const openDroneModal = () => {
    setIsDroneModalOpen(true);
    setIsModalOpen(true);
  };
  const closeDroneModal = () => {
    setIsDroneModalOpen(false);
    setIsModalOpen(false);
  };
  const openReserveModal = () => setIsReserveModalOpen(true);
  const closeReserveModal = () => setIsReserveModalOpen(false);

  return (
    <section
      className="
        relative min-h-screen w-full m-0 p-0 font-montserrat text-gray-200 overflow-hidden
        pt-[112px] md:pt-[112px] /* offset fixed header + ticker height on md and up */
      "
      aria-label="Hero section showcasing Kepong Villa Garden & Suites"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <style>
        {`
          .carousel-image {
            will-change: opacity, transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .carousel-image {
              transition: none;
            }
          }
        `}
      </style>

      {/* Carousel Background Images */}
      <div className="absolute inset-0 flex overflow-hidden" aria-hidden="true">
        {carouselImages.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={image.alt}
            loading={idx === currentSlide ? 'eager' : 'lazy'}
            fetchPriority={idx === currentSlide ? 'high' : 'low'}
            className={`
              absolute inset-0 w-full h-full object-cover transition-all duration-800 ease-in-out
              carousel-image
              ${idx === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}
              select-none pointer-events-none
            `}
            aria-hidden={idx !== currentSlide}
          />
        ))}
      </div>

      {/* Carousel Navigation Container */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-20 w-full px-4 sm:px-6 lg:px-0
          py-3 flex justify-center gap-4 bg-black/90 border-2 border-white
        "
        role="group"
        aria-label="Carousel navigation buttons"
      >
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="
            w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100
            transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600
            focus-visible:ring-offset-2 bg-black/30
          "
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="
            w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100
            transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600
            focus-visible:ring-offset-2 bg-black/30
          "
        >
          ›
        </button>
      </div>

      {/* Modals */}
      <DroneOrderModal
        isOpen={isDroneModalOpen}
        setIsModalOpen={closeDroneModal}
        className="transition-opacity duration-300"
      />
      <ReserveTableModal
        isOpen={isReserveModalOpen}
        setIsModalOpen={closeReserveModal}
        className="transition-opacity duration-300"
      />
    </section>
  );
};

export default Hero;