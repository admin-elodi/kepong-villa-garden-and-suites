import React, { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMusic,
  FaPhoneAlt,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaMoneyBillWave,
  FaHeart,
} from 'react-icons/fa';
import eventBirthday from '@/assets/images/amaka.webp';
import snooker from '@/assets/images/snooker.webp';
import chilling from '@/assets/images/chilling.webp';
import preEventVideo from '@/assets/videos/ready.mp4';
import backgroundVideo from '@/assets/videos/stars.webm';

const event = {
  title: "Amaka's 30th Birthday Bash!",
  date: 'July 20, 2025',
  time: '5:00 PM',
  contact: '08134493949',
  host: 'MC Odogwu & DJ Transition',
  venue: 'Kepong Villa Garden & Suites',
};

const celebrant = {
  phone: '08134493949',
  instagram: '@amaka_official',
  bank: {
    name: 'Zenith Bank',
    accountName: 'Amaka O. Chukwu',
    accountNumber: '1234567890',
  },
};

const carouselImages = [
  { src: eventBirthday, alt: 'Birthday Party' },
  { src: snooker, alt: 'Snooker Event' },
  { src: chilling, alt: 'Chilling Event' },
];

const promoTexts = [
  "Looking to host an unforgettable event?",
  "Kepong is the perfect backdrop!",
  "For birthdays, weddings, club meetings & more",
  "Book your dream event with us today!",
  "Make your special day truly shine!",
];

const Events = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [endorseModalOpen, setEndorseModalOpen] = useState(false);
  const [endorsementAction, setEndorsementAction] = useState(null); // 'wishes' | 'monetary' | null

  // Prevent background scrolling when modal open
  useEffect(() => {
    if (endorseModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setEndorsementAction(null); // Reset when closing modal
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [endorseModalOpen]);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate promo text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promoTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(
    `Join us at ${event.title} - an unforgettable night at Kepong Villa!`
  );

  return (
    <main className="relative min-h-screen bg-black bg-opacity-90 py-64 flex flex-col items-center font-montserrat text-yellow-100">
      <style>
        {`
          .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
          }
          .fade-in.delay-1 { animation-delay: 0.2s; }
          .fade-in.delay-2 { animation-delay: 0.4s; }
          .fade-in.delay-3 { animation-delay: 0.6s; }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          .slide-up {
            opacity: 0;
            transform: translateY(30px);
            animation: slideUp 0.9s cubic-bezier(.4,1.2,.6,1) forwards;
          }
          .slide-up.delay-1 { animation-delay: 0.3s; }
          .slide-up.delay-2 { animation-delay: 0.5s; }
          .slide-up.delay-3 { animation-delay: 0.7s; }
          .slide-up.delay-4 { animation-delay: 0.9s; }
          .slide-up.delay-6 { animation-delay: 1.1s; }
          .slide-up.delay-7 { animation-delay: 1.3s; }
          @keyframes slideUp {
            to { opacity: 1; transform: translateY(0); }
          }
          .btn-red {
            background-color: #dc2626;
            color: white;
            font-weight: 700;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: 2px solid white;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            display: inline-block;
          }
          .btn-red:hover {
            background-color: #b91c1c;
            color: white;
            transform: scale(1.05);
          }
          .social-icon {
            color: #fef3c7;
            font-size: 1.75rem;
            margin: 0 0.75rem;
            cursor: pointer;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .social-icon:hover {
            color: #dc2626;
            transform: scale(1.2);
          }
          .booking-invite {
            max-width: 300px;
            background: rgba(254, 243, 199, 0.1);
            border: 1px solid #dc2626;
            border-radius: 12px;
            padding: 1.4rem;
            text-align: center;
            color: #fef3c7;
            box-shadow: 0 0 18px rgba(220, 38, 38, 0.35);
          }
          .booking-invite strong {
            color: #dc2626;
          }
          .booking-invite a {
            color: #dc2626;
            font-weight: 500;
            text-decoration: underline;
          }
          .text-bg {
            background: rgba(0, 0, 0, 0.7);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            display: inline-block;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
          }
          .carousel-container {
            width: 100%;
            height: 28rem;
            position: relative;
            overflow: hidden;
            background: #11182780;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-top: 0; /* Ensure no gap to the section above */
          }
          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            z-index: 1;
          }
          .carousel-image.active {
            opacity: 1;
            z-index: 2;
          }
          .carousel-button {
            background: #dc2626;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            cursor: pointer;
            border: none;
            outline: none;
            transition: background 0.3s ease, transform 0.3s ease;
          }
          .carousel-button:hover {
            background: #b91c1c;
            transform: scale(1.05);
          }
          .video-section {
            width: 100%;
            height: 28rem;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
          }
          /* Modal Styling */
          .modal-overlay {
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.36);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal-content {
            background: #282828;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
            padding: 2.5rem 2rem 2rem 2rem;
            border: 4px solid #dc2626;
            min-width: 90vw;
            max-width: 320px;
            color: #fff7db;
            animation: modalPop 0.27s cubic-bezier(.51, 1.36, .78, 1.01);
            position: relative;
          }
          @keyframes modalPop {
            0% { transform: scale(0.7) translateY(100px); }
            100% { transform: scale(1) translateY(0); }
          }
          .modal-close {
            position: absolute;
            top: 18px;
            right: 18px;
            background: none;
            border: none;
            color: #dc2626;
            font-size: 1.6rem;
            cursor: pointer;
          }
          .modal-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.15rem;
            color: white;
            text-align: center;
            letter-spacing: 0.01em;
          }
          .endorse-options {
            display: flex;
            flex-direction: column;
            gap: 1.35rem;
            margin-bottom: 2rem;
          }
          .endorse-btn {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.9rem 1.2rem;
            border-radius: 10px;
            background: #dc2626;
            color: white;
            font-weight: 700;
            font-size: 1.14rem;
            border: none;
            cursor: pointer;
            transition: background 0.25s, color 0.15s, transform 0.15s;
            justify-content: center;
          }
          .endorse-btn:hover {
            background: #b91c1c;
            color: white;
            transform: scale(1.045);
          }
          .endorse-result-content {
            margin: 0 auto 1.5rem auto;
            padding: 1.25rem 1.1rem 1rem 1.1rem;
            background: #221f15cc;
            border-radius: 10px;
            text-align: left;
            color: #fef3c7;
            max-width: 95%;
            border-left: 5px solid #dc2626;
          }
          .endorse-result-content strong {
            color: #dc2626;
          }
          .endorse-note {
            font-size: 1rem;
            opacity: 0.77;
            text-align: center;
            margin-bottom: 0.4rem;
          }
          .celebrant-social-link {
            color: #fafafa;
            background: #dc2626;
            font-weight: 600;
            border-radius: 6px;
            padding: 0 0.5em;
            margin-left: 0.4em;
            text-decoration: none;
            transition: filter 0.2s;
            display: inline-block;
          }
          .celebrant-social-link:hover {
            filter: brightness(1.12);
          }
          .promo-text-container {
            width: 100%;
            height: 2.5rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 2px solid #dc2626;
            border-bottom: 2px solid #dc2626;
            padding: 10px 0;
            position: relative;
          }
          .promo-text {
            position: absolute;
            width: 100%;
            text-align: center;
            display: none;
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
          }
          .promo-text.active {
            display: block;
            animation: lazySlideText 4s ease-out forwards;
          }
          @keyframes lazySlideText {
            0% { opacity: 0; transform: translateY(20px); }
            20% { opacity: 1; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(0); }
            70% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
          .fixed-caption-container {
            width: 100%;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          .fixed-caption-text {
            font-size: 1.4rem;
            font-weight: bolder;
            color: #FFF;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            letter-spacing: 2px;
          }
          @media (min-width: 768px) {
            .carousel-container {
              height: 45rem;
            }
            .video-section {
              height: 32rem;
            }
            .modal-content { min-width: 470px; }
          }
          @media (max-width: 639px) {
            .header-upcoming-kepong {
              font-size: 1.5rem !important;
              letter-spacing: 5px !important;
              padding-top: 1rem !important;
              padding-bottom: 1rem !important;
              border-radius: 0.75rem !important;
              max-width: 95% !important;
              margin-left: auto !important;
              margin-right: auto !important;
              box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25) !important;
              text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6) !important;
              letter-spacing: 5px;
            }
            .promo-text {
              font-size: 1rem;
            }
            .fixed-caption-text {
              font-size: 1.2rem;
            }
          }
        `}
      </style>

      {/* Text Hero with Slideshow */}
      <section className="relative mt-4 z-20 slide-up delay-7 text-center w-full mb-0">
        <div className="relative w-full h-[150px] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          <h1
            className="md:text-2xl header-upcoming-kepong uppercase relative z-10 font-extrabold text-white tracking-[15px] sm:tracking-[15px] md:tracking-[15px] md:px-18 py-12 mb-4 rounded-lg"
          >
            Upcoming Kepong Events!
          </h1>
        </div>

        {/* Text Slideshow */}
        <div className="promo-text-container bg-white/50 md:py-6">
          {promoTexts.map((text, index) => (
            <div
              key={index}
              className={`promo-text ${index === currentPromoIndex ? 'active' : ''}`}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Fixed Caption Container */}
        <div className="fixed-caption-container bg-red-600">
          <div className="fixed-caption-text">
            {event.title}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="relative z-20 w-full">
        <div className="w-full mx-auto">
          <div className="carousel-container">
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`carousel-image ${index === currentImage ? 'active' : ''}`}
                loading="lazy"
              />
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handlePrevImage}
              className="carousel-button"
              aria-label="Previous carousel image"
            >
              Previous
            </button>
            <button
              onClick={handleNextImage}
              className="carousel-button"
              aria-label="Next carousel image"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative border-b border-t border-red-600 w-full min-h-[360px] flex flex-col items-center justify-center py-14">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster={eventBirthday}
          src={backgroundVideo}
          type="video/webm"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 w-full max-w-3xl mx-auto mb-4">
          <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">You're Invited!</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-lg">
            <div className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-2 shadow">
              <FaCalendarAlt className="text-red-600 text-2xl" />
              <span>
                <span className="font-semibold">{event.date}</span>
                <span className="mx-1">|</span>
                <span>{event.time}</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-2 shadow">
              <FaMapMarkerAlt className="text-red-600 text-2xl" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-2 shadow">
              <FaMusic className="text-red-600 text-2xl" />
              <span>{event.host}</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-2 shadow">
              <FaPhoneAlt className="text-red-600 text-2xl" />
              <span>{event.contact}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pre Event Highlights Video */}
      <section className="relative w-full flex flex-col items-center mb-16 border-b border-red-600">
        <div className="w-full relative h-[400px] md:h-[540px] overflow-hidden rounded-lg shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
            src={preEventVideo}
            poster={eventBirthday}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h3 className="text-3xl md:text-4xl font-semibold text-yellow-50 bg-black/70 px-8 py-3 rounded-md shadow-md">
              Pre Event Highlights
            </h3>
          </div>
        </div>
      </section>

      {/* Socials & Endorse Button */}
      <section className="relative z-20 mb-8 text-center max-w-md mx-auto slide-up delay-6">
        <h3 className="text-red-600 text-2xl font-semibold mb-4">Share This Celebration</h3>
        <div className="flex justify-center">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`mailto:?subject=Join Amaka's Birthday Bash&body=${shareText}%20${encodeURIComponent(shareUrl)}`}
            aria-label="Share via Email"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Endorse Button */}
        <button
          className="btn-red"
          onClick={() => setEndorseModalOpen(true)}
          aria-label="Endorse This Event"
        >
          Endorse This Event
        </button>
      </section>

      {/* Endorse Event Modal */}
      {endorseModalOpen && (
        <div className="modal-overlay" onClick={() => setEndorseModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modal-close"
              onClick={() => setEndorseModalOpen(false)}
              aria-label="Close Modal"
            >
              <FaTimes />
            </button>
            <div className="modal-title">Endorse This Event</div>
            <div className="endorse-options">
              <button
                className="endorse-btn"
                onClick={() => setEndorsementAction(endorsementAction === 'wishes' ? null : 'wishes')}
                aria-label="Send Good Wishes"
              >
                <FaHeart size={22} />
                Send Good Wishes
              </button>
              <button
                className="endorse-btn"
                onClick={() => setEndorsementAction(endorsementAction === 'monetary' ? null : 'monetary')}
                aria-label="Monetary Support"
              >
                <FaMoneyBillWave size={24} />
                Monetary Support
              </button>
            </div>
            {/* Reveal celebrant details according to which button is clicked */}
            {endorsementAction === 'wishes' && (
              <div className="endorse-result-content">
                <div className="mb-2">
                  <strong>Phone:</strong> <a href={`tel:${celebrant.phone}`}>{celebrant.phone}</a>
                </div>
                <div>
                  <strong>Instagram:</strong>
                  <a
                    href={`https://instagram.com/${celebrant.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="celebrant-social-link"
                  >
                    {celebrant.instagram}
                  </a>
                </div>
                <div className="mt-2 text-sm text-yellow-200">Send a kind message or tag the celebrant!</div>
              </div>
            )}
            {endorsementAction === 'monetary' && (
              <div className="endorse-result-content">
                <div className="mb-2">
                  <strong>Phone:</strong> <a href={`tel:${celebrant.phone}`}>{celebrant.phone}</a>
                </div>
                <div className="mb-1"><strong>Bank:</strong> {celebrant.bank.name}</div>
                <div className="mb-1"><strong>Account Name:</strong> {celebrant.bank.accountName}</div>
                <div className="mb-1">
                  <strong>Account Number:</strong>{' '}
                  <span style={{ fontWeight: 700, letterSpacing: '2px' }}>{celebrant.bank.accountNumber}</span>
                </div>
                <div className="mt-2 text-sm text-yellow-200">Thank you for supporting the celebrant!</div>
              </div>
            )}
            <div className="endorse-note">Your endorsement upgrades this celebration!</div>
          </div>
        </div>
      )}

      {/* Booking Invite */}
      <section className="relative z-20 booking-invite slide-up delay-7 mb-2" aria-label="Booking Invitation">
        <p>
          Want to <strong>book this page</strong> for advertising your Kepong Event? Call us at{' '}
          <a href="tel:08162836505">08162836505</a> or <a href="tel:07031576094">07031576094</a>
        </p>
      </section>
    </main>
  );
};

export default Events;