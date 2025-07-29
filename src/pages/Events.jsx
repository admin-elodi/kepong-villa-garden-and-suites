// src/pages/Events.jsx
import { useState, useEffect } from 'react';
import amaka from '@/assets/images/amaka.webp';
import chilling from '@/assets/images/chilling.webp';
import shawarma from '@/assets/images/shawarma.webp';
import stars from '@/assets/videos/stars.webm';
import preEventVideo from '@/assets/videos/club.mp4';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const slides = [
    'Celebrate with Amaka',
    'Live at Kepong Villa!',
    'Join the Celebration',
    'Create Lasting Memories',
  ];

  const images = [amaka, chilling, shawarma];

  // Carousel slide advances every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) setModalMessage('');
  };

  const handleGoodWishes = () => {
    setModalMessage(
      'Contact: +123-456-7890\nX: @AmakaCelebrates\nInstagram: @AmakaOfficial'
    );
  };

  const handleMonetarySupport = () => {
    setModalMessage(
      'Bank: Zenith Bank\nAccount Name: Amaka Events\nAccount Number: 1234567890'
    );
  };

  // Carousel navigation handlers
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-black pt-40 text-white font-sans">
      {/* Branded Caption */}
      <section
        className="relative h-[200px] md:pt-14 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${amaka})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-8 flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
            Kepong Events Page
          </h1>
          <p className="text-[1rem] md:text-[1.5rem] font-semibold text-center text-white">
            Amaka's 30th Birthday Bash!
          </p>
        </div>
      </section>

      {/* Text Slideshow */}
      <section className="py-2 border-8 rounded-xl bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-semibold transition-opacity duration-500">
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
              <strong>Special Attraction:</strong> Hosted by MC Basketmouth
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Share This Celebration
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.911 1.826 5.295.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 3.384 1.839 5.071 5.223 5.226 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.384-.155 5.071-1.839 5.226-5.223.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.155-3.384-1.839-5.071-5.223-5.226C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Event Photos Carousel */}
      <section className="bg-white text-black">
        <h2 className="text-xl md:text-3xl font-bold text-center py-2 border-4 border-black text-red-600">
          Pre-Event Photos
        </h2>
        <div className="relative w-full h-[400px] overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Pre-event photo ${index + 1}`}
                className="w-full h-[400px] object-cover flex-shrink-0"
              />
            ))}
          </div>
          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <button
              onClick={goToPreviousSlide}
              className="p-2 bg-red-600/80 text-white rounded-full hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="p-2 bg-red-600/80 text-white rounded-full hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
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
          <video
            className="w-full h-full object-cover"
            controls
            src={preEventVideo}
          >
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
      </section>

      {/* Sticky Endorse This Event Button */}
      <button
        onClick={toggleModal}
        className="fixed top-1/2 right-4 border-2 border-white transform -translate-y-1/2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition shadow-lg z-50"
      >
        Endorse Event
      </button>

      {/* Modal for Endorsement */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full text-black">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Endorse Amaka's Event
            </h3>
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