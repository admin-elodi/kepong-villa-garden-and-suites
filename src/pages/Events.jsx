import { useState, useEffect, useRef } from 'react';
import amaka from '@/assets/images/amaka.webp';
import chilling from '@/assets/images/chilling.webp';
import shawarma from '@/assets/images/foodies/shawarma.webp';
import stars from '@/assets/videos/stars.webm';
import preEventVideo from '@/assets/videos/club.mp4';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false); // To disable carousel buttons during slide transition

  const slides = [
    'Celebrate with Amaka',
    'Join the Celebration',
    'Party all the Way',
    'Endorse this Event',
  ];

  const images = [amaka, chilling, shawarma];
  const bookingNumber = '2347031576094';
  const whatsappLink = `https://wa.me/${bookingNumber}`;

  // Base style for social media circles
  const socialBtnBase =
    'transform transition-transform duration-300 rounded-full flex items-center justify-center w-12 h-12 shadow-lg';

  // Individual social button styles for official brand backgrounds and hover
  const socialBtnStyles = {
    x: 'bg-[#1DA1F2] text-white hover:bg-[#0d8ddb]',
    instagram:
      'bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:brightness-110',
    facebook: 'bg-[#1877F2] text-white hover:bg-[#155fbe]',
    tiktok: 'bg-black border-2 border-white text-white hover:bg-pink-600',
  };

  // Text slideshow - auto advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) setModalMessage('');
  };

  const handleGoodWishes = () => {
    setModalMessage(
      'Contact: +234-813-789 3450\nX: @AmakaCelebrates\nInstagram: @AmakaOfficial'
    );
  };

  const handleMonetarySupport = () => {
    setModalMessage(
      'Bank: Zenith Bank\nAccount Name: Amaka Events\nAccount Number: 1234567890'
    );
  };

  // Fix carousel to prevent blank spaces by duplicating images in a loop and using translateX properly
  const [carouselIndex, setCarouselIndex] = useState(0);
  const containerRef = useRef(null);

  // We create an extended images array for infinite seamless scroll
  const extendedImages = [...images, ...images];

  const slideWidth = 100; // percent width per slide

  // Handle automatic slide for image carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [isTransitioningLocal, setIsTransitioningLocal] = useState(false);

  // Previous slide handler
  const prevSlide = () => {
    if (isTransitioningLocal) return;
    setIsTransitioningLocal(true);
    setCarouselIndex((prev) => prev - 1);
  };

  // Next slide handler
  const nextSlide = () => {
    if (isTransitioningLocal) return;
    setIsTransitioningLocal(true);
    setCarouselIndex((prev) => prev + 1);
  };

  // Handle the transition end event to reset carouselIndex when looping
  const handleTransitionEnd = () => {
    setIsTransitioningLocal(false);
    if (carouselIndex >= images.length) {
      setCarouselIndex(carouselIndex - images.length);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(-${
          (carouselIndex - images.length) * slideWidth
        }%)`;
        void containerRef.current.offsetWidth; // force reflow
        containerRef.current.style.transition = 'transform 0.5s ease';
      }
    } else if (carouselIndex < 0) {
      setCarouselIndex(carouselIndex + images.length);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(-${
          (carouselIndex + images.length) * slideWidth
        }%)`;
        void containerRef.current.offsetWidth;
        containerRef.current.style.transition = 'transform 0.5s ease';
      }
    }
  };

  // Synchronize translateX with carouselIndex
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${carouselIndex * slideWidth}%)`;
    }
  }, [carouselIndex]);

  return (
    <div className="min-h-screen bg-black pt-40 text-white font-sans">
      {/* Branded Caption */}
      <section
        className="relative h-[250px] md:pt-14 bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${amaka})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-8 flex flex-col items-center">
          <h1 className="text-3xl py-4 md:px-8 md:text-5xl font-bold text-center text-white">
            Kepong Events Page
          </h1>
          <div className="text-center">
            <h2 className="text-red-600 md:text-2xl border-b-2 border-white inline font-bold text-xl">
              This Edition...
            </h2>
            <p className="text-[1rem] md:text-[1.5rem] font-semibold text-center text-white">
              Amaka's 30th Birthday Bash!
            </p>
          </div>
        </div>
      </section>

      {/* Text Slideshow */}
      <section className="py-2 border-8 rounded-xl px-8 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-2xl font-semibold transition-opacity duration-500">
            {slides[currentSlide % slides.length]}
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 bg-black text-center relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={stars}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-2">
              Amaka's 30th Birthday Bash!
            </h2>
            <p className="text-lg md:text-2xl font-bold">You're Cordially Invited</p>
          </div>
          <div className="space-y-4 text-lg">
            <p>
              <strong>Date:</strong> August 15, 2025
            </p>
            <p>
              <strong>Time:</strong> 6:00 PM - Midnight
            </p>
            <p>
              <strong>Venue:</strong> Kepong Villa Garden & Suites
            </p>
            <p>
              <strong>Special Attraction:</strong> Acrobat dancers
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Share This Celebration</h3>
            <div className="flex justify-center gap-6">
               {/* Facebook button */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex flex-col items-center"
              >
                <div className={`${socialBtnBase} ${socialBtnStyles.facebook} hover:scale-110`}>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </div>
                <span className="mt-1 text-xs text-white">Facebook</span>
              </a>
              {/* X (Twitter) button */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="flex flex-col items-center"
              >
                <div className={`${socialBtnBase} ${socialBtnStyles.x} hover:scale-110`}>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="mt-1 text-xs text-white">X</span>
              </a>

              {/* Instagram button */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Instagram"
                className="flex flex-col items-center"
              >
                <div
                  className={`${socialBtnBase} ${socialBtnStyles.instagram} hover:scale-110`}
                  style={{
                    background:
                      'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.911 1.826 5.295.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 3.384 1.839 5.071 5.223 5.226 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.384-.155 5.071-1.839 5.226-5.223.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.155-3.384-1.839-5.071-5.223-5.226C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <span className="mt-1 text-xs text-white">Instagram</span>
              </a>

             

              {/* TikTok button */}
              <a
                href="https://www.tiktok.com/@kepongvilla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on TikTok"
                className="flex flex-col items-center"
              >
                <div className={`${socialBtnBase} ${socialBtnStyles.tiktok} hover:scale-110`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.25c.53 0 1.04.102 1.5.289v4.362a2.84 2.84 0 01-1.5-.471 3.022 3.022 0 00-1.693-.518c-1.659 0-3 1.502-3 3.358 0 1.854 1.341 3.357 3 3.357.15 0 .298-.034.437-.061V19.5a6.022 6.022 0 01-3.936-1.568 6.318 6.318 0 01-1.425-5.006 6.04 6.04 0 015.361-4.844V2.25z" />
                  </svg>
                </div>
                <span className="mt-1 text-xs text-white">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Event Photos Carousel */}
      <section className="bg-white text-black relative">
        <h2 className="text-xl md:text-3xl font-bold text-center py-2 border-4 border-black text-red-600">
          Pre-Event Photos
        </h2>
        <div className="relative w-full h-[400px] overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${carouselIndex * slideWidth}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Pre-event photo ${index + 1}`}
                className="w-full h-[400px] object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* Carousel Navigation Container */}
          <div
            className="
              absolute bottom-0 left-0 right-0 z-20 w-full px-4 sm:px-6 lg:px-0
              py-3 flex justify-center gap-4 bg-black/90 border-b-2 border-white
            "
            role="group"
            aria-label="Carousel navigation buttons"
          >
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              disabled={isTransitioningLocal}
              className="
                w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100
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
              disabled={isTransitioningLocal}
              className="
                w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100
                transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600
                focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50
              "
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Pre-Event Video */}
      <section className="bg-black">
        <h2 className="text-xl md:text-3xl font-bold py-2 border-b-2 border-white text-center text-red-600">
          Pre-Event Video
        </h2>
        <div className="w-full h-[400px]">
          <video className="w-full h-full object-cover" controls src={preEventVideo}>
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Endorse This Event Button (Inline) */}
      <section className="py-2 bg-white border-b-4 border-black text-center">
        <button
          onClick={toggleModal}
          className="px-6 py-3 cursor-pointer border-4 border-black bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
        >
          Endorse This Event
        </button>
        <p className="text-black font-bold">
          To book this page, call{' '}
          <a href="+2347031576094" className="underline text-blue-600">
            0703 157 6094
          </a>{' '}
          or{' '}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-900 underline"
            aria-label="make page booking enquiry through WhatsApp"
          >
            WhatsApp
          </a>{' '}
          to reserve your event advert period
        </p>
      </section>

      {/* Sticky Endorse This Event Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-10 right-4 border-2 border-white px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition shadow-lg z-50"
      >
        Endorse Event
      </button>

      {/* Modal for Endorsement */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full text-black">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Endorse Amaka's Event</h3>
            <div className="space-y-4">
              <div>
                <button
                  className="w-full px-4 py-2 cursor-pointer bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={handleGoodWishes}
                >
                  Send Good Wishes
                </button>
              </div>
              <div>
                <button
                  className="w-full px-4 py-2 cursor-pointer bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={handleMonetarySupport}
                >
                  Send Monetary Support
                </button>
              </div>
            </div>
            {modalMessage && (
              <pre
                className="mt-4 p-4 bg-gray-100 text-black rounded whitespace-pre-wrap break-words"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {modalMessage}
              </pre>
            )}
            <button
              onClick={toggleModal}
              className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
