import { useState, useEffect, useRef, useCallback } from 'react';
import DroneOrderModal from './DroneOrderModal';
import ReserveTableModal from '@/components/ReserveTableModal';

// Import images
import amaka from '@/assets/images/foodies/shawarma.webp';
import chilling from '@/assets/images/homepage/snooker.webp';
import djulio from '@/assets/images/homepage/donj.webp';
import unsplash from '@/assets/images/homepage/snooker-table.webp';
import hotel from '@/assets/images/foodies/max.webp';
import palmWine from '@/assets/images/foodies/palm.webp';
import food from '@/assets/images/foodies/food.webp';

const carouselImages = [
  { src: amaka, alt: 'Luxurious room at Kepong Villa Garden & Suites - Amaka' },
  { src: chilling, alt: 'Relaxing ambiance at Kepong Villa - Chilling area' },
  { src: djulio, alt: 'Deluxe Suite at Kepong Villa Garden & Suites' },
  { src: unsplash, alt: 'Cozy rooms' },
  { src: hotel, alt: 'Front building' },
  { src: palmWine, alt: 'Palm wine from Nsukka' },
  { src: food, alt: 'Good food' },
];

// Kepong official red
const KEPONG_RED = '#D62828';

const Hero = ({ setIsModalOpen }) => {
  // Modal states
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const slideIntervalRef = useRef(null);

  // Carousel auto-advance every 5 seconds
  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(slideIntervalRef.current);
  }, []);

  // Manual carousel controls with useCallback for performance
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    clearInterval(slideIntervalRef.current);
    requestAnimationFrame(() => {
      setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
      // Restart interval
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
      }, 3000);
    });
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    clearInterval(slideIntervalRef.current);
    requestAnimationFrame(() => {
      setCurrentSlide((idx) => (idx === 0 ? carouselImages.length - 1 : idx - 1));
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
      // Restart interval
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((idx) => (idx + 1) % carouselImages.length);
      }, 5000);
    });
  }, [isTransitioning]);

  // Swipe support for touch devices
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null || isTransitioning) return;
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
              absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out
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
          py-3 flex justify-center gap-4 bg-slate-800 border-b-2 border-t-2 border-red-600
        "
        role="group"
        aria-label="Carousel navigation buttons"
      >
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          disabled={isTransitioning}
          className="
            w-10 h-10 rounded-sm border border-white text-white font-bold hover:text-white hover:border-opacity-100
            transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600
            focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50
          "
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          disabled={isTransitioning}
          className="
            w-10 h-10 rounded-sm border border-white text-white font-bold hover:text-white hover:border-opacity-100
            transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600
            focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50
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