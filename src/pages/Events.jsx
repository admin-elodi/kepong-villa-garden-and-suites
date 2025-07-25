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
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
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
  { src: eventBirthday, alt: 'Amaka’s Birthday Party', caption: 'Celebrate Amaka’s big day!' },
  { src: snooker, alt: 'Snooker Event', caption: 'Fun moments at Kepong!' },
  { src: chilling, alt: 'Chilling Event', caption: 'Vibes in our gardens!' },
];

const promoTexts = [
  "Join Amaka’s 30th Birthday Bash!",
  "Celebrate with us at Kepong Villa!",
  "Music, laughter, and memories!",
  "Endorse Amaka’s event now!",
  "Make your special day shine at Kepong!",
];

const Events = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [endorseModalOpen, setEndorseModalOpen] = useState(false);
  const [endorsementAction, setEndorsementAction] = useState(null); // 'wishes' | 'monetary' | null
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  // Prevent background scrolling when modal is open
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

  const handleEndorsementClick = () => {
    setIsConfettiActive(true);
    setEndorseModalOpen(true);
    setTimeout(() => setIsConfettiActive(false), 3000); // Confetti lasts 3 seconds
  };

  return (
    <main className="relative min-h-screen py-52 md:text-lg md:py-64 bg-black bg-opacity-90 font-montserrat text-yellow-100">
      <style>
        {`
          .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
          }
          .fade-in.delay-1 { animation-delay: 0.2s; }
          @keyframes fadeIn { to { opacity: 1; } }
          .slide-up {
            opacity: 0;
            transform: translateY(30px);
            animation: slideUp 0.9s ease-in-out forwards;
          }
          .slide-up.delay-1 { animation-delay: 0.3s; }
          .slide-up.delay-2 { animation-delay: 0.5s; }
          @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
          .btn-red {
            background-color: #dc2626;
            color: white;
            font-weight: 700;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: 2px solid white;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            overflow: hidden;
          }
          .btn-red:hover {
            background-color: #b91c1c;
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
          }
          .btn-pulse::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.5rem;
            border: 2px solid #dc2626;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0; }
            100% { transform: scale(1); opacity: 0; }
          }
          .social-icon {
            color: #fef3c7;
            font-size: 1.75rem;
            margin: 0 0.75rem;
            transition: all 0.3s ease;
          }
          .social-icon:hover {
            color: #dc2626;
            transform: scale(1.2);
          }
          .carousel-container {
            width: 100%;
            height: 20rem;
            position: relative;
            overflow: hidden;
            background: #11182780;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
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
          .carousel-caption {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 3;
          }
          .carousel-container:hover .carousel-caption { opacity: 1; }
          .carousel-button {
            background: #dc2626;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
          }
          .carousel-button:hover {
            background: #b91c1c;
            transform: scale(1.05);
          }
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
            padding: 2.5rem 2rem;
            border: 4px solid #dc2626;
            min-width: 90vw;
            max-width: 400px;
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
            height: 3rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 2px solid #dc2626;
            border-bottom: 2px solid #dc2626;
            background: white;
          }
          .promo-text {
            position: absolute;
            width: 100%;
            text-align: center;
            display: none;
            font-size: 1.5rem;
            font-weight: bold;
            color: #dc2626;
          }
          .promo-text.active {
            display: block;
            animation: lazySlideText 4s ease-out forwards;
          }
          @keyframes lazySlideText {
            0% { opacity: 0; transform: translateY(20px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
          .fixed-caption-container { background: #dc2626; padding: 1rem; }
          .fixed-caption-text { font-size: 1.5rem; font-weight: bold; color: white; }
          .parallax-bg {
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
          }
          .sticky-cta {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
          }
          .confetti-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10000;
          }
          .main-caption {
            text-align: center;
            padding: 1.5rem 1rem;
            background: rgba(0, 0, 0, 0.7);
            border: 1px solid #dc2626;
            border-radius: 0.5rem;
            margin: 0 auto 1rem;
            max-width: 90%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }
          .main-caption h1 {
            
            font-weight: 800;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
          }
          @media (max-width: 768px) {
            .carousel-container { height: 16rem; }
            .promo-text { font-size: 1.2rem; }
            .fixed-caption-text { font-size: 1.3rem; }
            .modal-content { min-width: 90vw; max-width: 320px; }
            .main-caption h1 { font-size: 1.8rem; }
          }
          @media (min-width: 768px) {
            .carousel-container { height: 32rem; }
            .sticky-cta { bottom: 30px; right: 30px; }
            .modal-content { min-width: 470px; }
            .main-caption h1 { font-size: 4rem; }
          }
        `}
      </style>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

      {/* Main Caption */}
      <section className="main-caption slide-up fade-in">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <h1>Kepong Events Page!</h1>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center parallax-bg" style={{ backgroundImage: `url(${eventBirthday})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight">{event.title}</h1>
          
        </motion.div>
      </section>

      {/* Text Slideshow */}
      <section className="promo-text-container">
        {promoTexts.map((text, index) => (
          <motion.div
            key={index}
            className={`promo-text ${index === currentPromoIndex ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index === currentPromoIndex ? 1 : 0, y: index === currentPromoIndex ? 0 : -20 }}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.div>
        ))}
      </section>

      {/* Fixed Caption */}
      <div className="fixed-caption-container">
        <div className="fixed-caption-text text-center">{event.title}</div>
      </div>

      {/* Amaka’s Event Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">You’re Invited!</h2>
            <p className="text-yellow-100 text-lg max-w-2xl mx-auto mb-8">
              Celebrate with Amaka at Kepong Villa Garden & Suites!
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-3 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaCalendarAlt className="text-red-600 text-2xl" />
              <span>
                <span className="font-semibold">{event.date}</span> | {event.time}
              </span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-3 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaMapMarkerAlt className="text-red-600 text-2xl" />
              <span>{event.venue}</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-3 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <FaMusic className="text-red-600 text-2xl" />
              <span>{event.host}</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-3 bg-black/70 rounded-lg px-5 py-3 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <FaPhoneAlt className="text-red-600 text-2xl" />
              <span>{event.contact}</span>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`mailto:?subject=Join Amaka's Birthday Bash&body=${shareText}%20${encodeURIComponent(shareUrl)}`}
              className="social-icon"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section (Event Highlights) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-8">Event Highlights</h2>
          <div className="carousel-container">
            {carouselImages.map((image, index) => (
              <React.Fragment key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`carousel-image ${index === currentImage ? 'active' : ''}`}
                  loading="lazy"
                />
                <div className="carousel-caption">{image.caption}</div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={handlePrevImage} className="carousel-button" aria-label="Previous carousel image">
              <FaArrowLeft />
            </button>
            <button onClick={handleNextImage} className="carousel-button" aria-label="Next carousel image">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-8">Pre-Event Vibes</h2>
          <div className="relative h-80 md:h-[32rem] overflow-hidden rounded-lg shadow-2xl">
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
          </div>
        </div>
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
                Send Good Wishes To The Celebrant
              </button>
              <button
                className="endorse-btn"
                onClick={() => setEndorsementAction(endorsementAction === 'monetary' ? null : 'monetary')}
                aria-label="Monetary Support"
              >
                <FaMoneyBillWave size={24} />
                Monetary Support For Celebrant
              </button>
            </div>
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

      {/* Confetti Effect */}
      {isConfettiActive && (
        <div className="confetti-container">
          <ConfettiExplosion
            force={0.6}
            duration={3000}
            particleCount={100}
            width={1600}
          />
        </div>
      )}

      {/* Sticky Endorsement Button */}
      <motion.button
        className="sticky-cta btn-red btn-pulse"
        onClick={handleEndorsementClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCalendarAlt /> Endorse This Event
      </motion.button>

      {/* Endorsement Invite Section */}
      <section className="py-12 bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-6">To book this page, call...</h2>
          <div className="flex justify-center gap-4 mb-6">
            <a href="tel:08162836505" className="text-white font-semibold underline">08162836505</a>
            <a href="tel:07031576094" className="text-white font-semibold underline">07031576094</a>
          </div>
          <motion.button
            className="btn-red btn-pulse"
            onClick={handleEndorsementClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt /> Endorse This Event
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Events;