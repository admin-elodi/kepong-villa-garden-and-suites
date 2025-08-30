import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import amaka from '@/assets/images/events/amaka.webp';
import chilling from '@/assets/images/events/chilling.webp';
import shawarma from '@/assets/images/foodies/max.webp';
import logo from '@/assets/images/foodies/max.webp';
import stars from '@/assets/videos/stars.webm';
import preEventVideo from '@/assets/videos/club.mp4';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
} from 'react-icons/fa';

// --- Helper: Social Share Button Component ---
const SocialShareButton = ({ type, href, label }) => {
  const socialBtnBase =
    'transform transition-transform duration-300 rounded-full flex items-center justify-center w-14 h-14 shadow-lg cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2';
  const socialBtnStyles = {
    facebook: 'bg-[#1877F2] text-white hover:bg-[#155fbe]',
    instagram:
      'bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:brightness-110',
    tiktok: 'bg-black border-2 border-white text-white hover:bg-pink-600',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20b358]',
    phone: 'bg-gray-600 text-white hover:bg-gray-700',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${socialBtnBase} ${socialBtnStyles[type]}`}
      tabIndex={0}
    >
      {type === 'facebook' && <FaFacebookF className="text-xl" />}
      {type === 'instagram' && <FaInstagram className="text-xl" />}
      {type === 'tiktok' && <FaTiktok className="text-xl" />}
      {type === 'whatsapp' && <FaWhatsapp className="text-xl" />}
      {type === 'phone' && <FaPhoneAlt className="text-xl" />}
    </a>
  );
};

// --- Helper: Focus Trap Hook for Modal ---
const useFocusTrap = (isOpen, modalRef, onClose) => {
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableSelectors =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableEls = modalRef.current.querySelectorAll(focusableSelectors);
    let firstFocusableEl = focusableEls[0];
    let lastFocusableEl = focusableEls[focusableEls.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift+Tab
          if (document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstFocusableEl.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, modalRef, onClose]);
};

// --- Main Component ---
const Events = () => {
  // --- Sponsor & Celebrant Data ---
  const sponsor = {
    name: 'CoolBrew',
    logoUrl: 'https://dummyimage.com/150x50/00aaff/fff&text=CoolBrew',
    message:
      "CoolBrew proudly refreshes the fun at Amaka's 30th Birthday Bash at Kepong Villa Garden & Suites!",
    image: {logo},
    additionalLinks: [
      { label: 'Visit CoolBrew', url: 'https://coolbrew.example.com' },
      { label: 'CoolBrew Promotions', url: 'https://coolbrew.example.com/promotions' },
    ],
    promoText:
      'Celebrate with CoolBrew! Enjoy exclusive beverage offers and refreshing moments during Amaka’s 30th Birthday Bash at Kepong Villa Garden & Suites. Taste the cool that brings everyone together!',
    servicesDescription:
      'CoolBrew offers a refreshing lineup of beverages perfect for celebrations and everyday enjoyment. Discover our flavors and join the cool community with CoolBrew.',
  };

  const celebrant = {
    name: 'Amaka',
    facebook: 'https://facebook.com/amaka.profile',
    instagram: 'https://instagram.com/amaka.profile',
    tiktok: 'https://tiktok.com/@amaka.profile',
    whatsapp: 'https://wa.me/2349162836505',
    phone: '+2349162836505',
  };

  // --- Carousel Images ---
  const images = [amaka, chilling, shawarma];
  const slideWidth = 100; // %, used in transform

  // --- State ---
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTransitioningLocal, setIsTransitioningLocal] = useState(false);
  const containerRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('info'); // info, contact, thankYou, sponsorMessage, sponsorPromo, goodWishes, sponsorWebsite
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  const bookingNumber = '2347031576094';
  const whatsappLink = `https://wa.me/${bookingNumber}`;

  // --- Focus Trap & ESC to close modal ---
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setModalView('info');
    setFormStatus(null);
    setFormErrors({});
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
  }, []);

  useFocusTrap(isModalOpen, modalRef, handleCloseModal);

  // --- Carousel Prev/Next Controls with keyboard support ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || isModalOpen) return; // Skip when typing or modal open

      if (e.key === 'ArrowLeft') {
        prevSlide();
      }
      if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioningLocal, isModalOpen]); // dependency to skip when modal open

  // --- Autoplay Carousel ---
  useEffect(() => {
    if (isModalOpen) return; // pause autoplay when modal open
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [carouselIndex, isModalOpen]);

  // --- Carousel Transition ---
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${carouselIndex * slideWidth}%)`;
      containerRef.current.style.transition = 'transform 0.5s ease';
      if (carouselIndex < 0 || carouselIndex >= images.length) {
        setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.style.transition = 'none';
          const newIndex = (carouselIndex + images.length) % images.length;
          setCarouselIndex(newIndex);
          containerRef.current.style.transform = `translateX(-${newIndex * slideWidth}%)`;
          void containerRef.current.offsetWidth; // reflow
          containerRef.current.style.transition = 'transform 0.5s ease';
          setIsTransitioningLocal(false);
        }, 500);
      } else {
        setIsTransitioningLocal(false);
      }
    }
  }, [carouselIndex]);

  const prevSlide = () => {
    if (isTransitioningLocal) return;
    setIsTransitioningLocal(true);
    setCarouselIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (isTransitioningLocal) return;
    setIsTransitioningLocal(true);
    setCarouselIndex((prev) => prev + 1);
  };

  // --- Swipe Support (Basic) ---
  const swipeStart = useRef(null);
  const swipeEnd = useRef(null);

  const onTouchStart = (e) => {
    swipeStart.current = e.changedTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    swipeEnd.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (swipeStart.current !== null && swipeEnd.current !== null) {
      const diff = swipeStart.current - swipeEnd.current;
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
      }
    }
    swipeStart.current = null;
    swipeEnd.current = null;
  };

  // --- Sponsor Banner dismissal (for mobile) ---
  const [showSponsorBanner, setShowSponsorBanner] = useState(true);
  // Auto-hide after 10 seconds on mobile widths
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setShowSponsorBanner(true);
      else setShowSponsorBanner(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!showSponsorBanner) return;
    if (window.innerWidth < 640) {
      const timer = setTimeout(() => {
        setShowSponsorBanner(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showSponsorBanner]);

  // --- Form Validation Helpers ---
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required.';
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Valid email is required.';
      case 'message':
        return value.trim() ? '' : 'Message is required.';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Real-time validation update
    setFormErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }
    setFormStatus('sending');
    try {
      // Simulate sending
      await new Promise((res) => setTimeout(res, 1500));
      setFormStatus('success');
      setModalView('thankYou');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
      setFormErrors({});
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black pt-40 text-white font-sans relative select-none">
      {/* Sponsor Banner */}
      <AnimatePresence>
        {showSponsorBanner && (
          <motion.section
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            style={{ position: 'fixed', zIndex: 9999, top: '147px', left: 0, right: 0 }}
            className="max-w-[90%] mx-auto bg-[#00aaff] bg-opacity-90 border-2 border-[#00aaff] rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg sm:max-w-none sm:justify-start sm:pl-6 sm:pr-4 justify-center relative top-[-50px] sm:top-0"
            aria-label="Sponsored Event Highlight"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 flex-1 sm:justify-start justify-center">
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${sponsor.name} website`}
                className="flex-shrink-0"
              >
                <img
                  src=''
                  alt={`${sponsor.name} logo`}
                  className="h-16 w-auto rounded"
                  loading="lazy"
                />
              </a>
              <div className="flex flex-col items-center md:items-start">
                <h2 className="font-extrabold text-white text-xl md:text-2xl">Sponsored Event Highlight</h2>
                <p className="text-white max-w-md text-center md:text-left">{sponsor.message}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setModalView('sponsorWebsite') || setIsModalOpen(true)}
                className="inline-block px-4 py-2 font-semibold rounded-md bg-white text-[#00aaff] hover:bg-gray-100 transition"
                aria-label="View Sponsor Services and Website"
                type="button"
              >
                Visit Sponsor
              </button>
              <button
                aria-label="Dismiss sponsor banner"
                title="Dismiss Sponsor Banner"
                onClick={() => setShowSponsorBanner(false)}
                className="font-bold text-white p-2 rounded hover:bg-white hover:text-[#00aaff] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                type="button"
              >
                ×
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Header Hero */}
      <section
        className="relative h-[250px] md:pt-20 bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${amaka})` }}
        aria-label="Kepong Events Page header"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-4 flex flex-col items-center z-10">
          <h1 className="text-3xl py-4 md:px-8 md:text-5xl font-bold text-center text-white mb-2 md:-mt-2">
            Kepong Events Page
          </h1>
        </div>
      </section>

      {/* Event Invitation + Social Sharing */}
      <section className="py-12 bg-black text-center relative overflow-hidden max-w-4xl mx-auto px-4 rounded-lg shadow-lg mt-10 select-text">
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          src={stars}
        />
        <div className="absolute inset-0 bg-black/70 rounded-lg pointer-events-none"></div>
        <div className="relative z-10">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-2">Amaka's 30th Birthday Bash!</h2>
            <p className="text-lg md:text-2xl font-bold">You're Cordially Invited</p>
          </div>
          <div className="space-y-4 text-lg max-w-xl mx-auto">
            <p><strong>Date:</strong> August 15, 2025</p>
            <p><strong>Time:</strong> 6:00 PM - Midnight</p>
            <p><strong>Venue:</strong> Kepong Villa Garden & Suites</p>
            <p><strong>Special Attraction:</strong> Acrobat dancers</p>
          </div>

          <div className="mt-12 max-w-sm mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4 pb-2">Share this Celebration:</h3>
            <div className="flex justify-center gap-8">
              <SocialShareButton
                type="facebook"
                href="https://facebook.com"
                label="Share on Facebook"
              />
              <SocialShareButton
                type="instagram"
                href="https://instagram.com"
                label="Share on Instagram"
              />
              <SocialShareButton
                type="tiktok"
                href="https://tiktok.com"
                label="Share on TikTok"
              />
            </div>

            <div className="mt-10 border-t border-white pt-6 max-w-xs mx-auto bg-red-600 bg-opacity-20 rounded-lg p-4 text-center shadow-md">
              <h4 className="text-lg font-bold text-white mb-4">Send Good Wishes</h4>
              <p className="text-white mb-4">Send your goodwill messages to Amaka by call or WhatsApp</p>
              <div className="flex justify-center gap-6">
                <SocialShareButton
                  type="phone"
                  href={`tel:${celebrant.phone}`}
                  label={`Call ${celebrant.name}`}
                />
                <SocialShareButton
                  type="whatsapp"
                  href={celebrant.whatsapp}
                  label={`Send WhatsApp message to ${celebrant.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Event Photos Carousel */}
      <section
        className="bg-white text-black relative w-full mt-14 rounded-lg shadow-lg overflow-hidden"
        aria-label="Pre-event photo gallery carousel"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center py-2 border-2 border-black">
          Pre-Event Photos
        </h2>
        <div
          className="relative w-full h-[400px] overflow-hidden touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={containerRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${carouselIndex * slideWidth}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Pre-event photo number ${index + 1} at Kepong Villa Garden & Suites`}
                className="w-full h-[400px] object-cover flex-shrink-0"
                loading="lazy"
                draggable={false}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-4 sm:px-6 lg:px-0 py-2 flex justify-center gap-4 bg-black/90 border-b-2 border-white">
            <button
              onClick={prevSlide}
              disabled={isTransitioningLocal}
              className="w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50"
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioningLocal}
              className="w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50"
              aria-label="Next image"
              type="button"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Pre-Event Video */}
      <section
        className="bg-black w-full mt-12 rounded-lg shadow-lg"
        aria-label="Pre-event video"
      >
        <h2 className="text-xl md:text-2xl font-bold py-2 border-b-2 border-white text-center text-white rounded-t-lg">
          Pre-Event Video
        </h2>
        <div className="w-full h-[400px] rounded-b-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            src={preEventVideo}
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Advertise Call to Action */}
      <section className="text-center mx-auto mt-14 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          onClick={() => setIsModalOpen(true) || setModalView('info')}
          className="px-6 py-3 cursor-pointer border border-white bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-slate-500 hover:shadow-lg transition-transform duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
          aria-haspopup="dialog"
          aria-controls="advertise-modal"
          aria-expanded={isModalOpen}
          type="button"
        >
          Why Advertise with Kepong?
        </motion.button>
        <p className="text-white font-semibold text-lg mt-4 px-4 select-text">
          For adverts, call{' '}
          <a
            href="tel:+2347031576094"
            className="underline text-yellow-300 hover:text-yellow-200 transition"
            aria-label="Call Kepong Villa Garden & Suites advertisement booking"
          >
            0703 157 6094
          </a>{' '}
          or{' '}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-500 hover:text-green-600 transition"
            aria-label="Make page booking enquiry through WhatsApp"
          >
            WhatsApp
          </a>
        </p>
      </section>

      {/* Sponsor’s Message Button */}
      <button
        onClick={() => setIsModalOpen(true) || setModalView('sponsorMessage')}
        className="fixed bottom-10 right-4 border-2 border-white px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-black cursor-pointer transition shadow-lg z-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
        aria-haspopup="dialog"
        aria-label="Open sponsor's message modal"
        type="button"
      >
        Sponsor's Message
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50000 p-4 overflow-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            id="advertise-modal"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleCloseModal();
            }}
          >
            <motion.div
              key="modal-content"
              ref={modalRef}
              tabIndex={-1}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-lg max-w-lg w-full p-6 relative text-black shadow-lg focus:outline-none"
            >
              {modalView === 'info' && (
                <>
                  <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                    Advertise with Kepong
                  </h3>
                  <p className="mb-4">
                    Reach thousands of visitors monthly who love good food, great entertainment, and memorable events at Kepong Villa Garden & Suites.
                  </p>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-800">
                    <li>
                      <strong>30,000+</strong> monthly website visits
                    </li>
                    <li>Highly engaged local audience from Enugu and South-East Nigeria</li>
                    <li>Event page sponsorships tie your brand to real celebrations</li>
                    <li>Native and banner ads integrated organically site-wide</li>
                  </ul>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setModalView('contact')}
                      className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                      type="button"
                    >
                      Contact Us
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}

              {modalView === 'goodWishes' && (
                <>
                  <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                    Send Good Wishes to {celebrant.name}
                  </h3>
                  <p className="mb-4 text-gray-800">
                    Connect with {celebrant.name} to share your birthday wishes!
                  </p>
                  <div className="flex justify-center gap-8 mb-6 flex-wrap">
                    <SocialShareButton
                      type="facebook"
                      href={celebrant.facebook}
                      label={`Visit ${celebrant.name}'s Facebook profile`}
                    />
                    <SocialShareButton
                      type="instagram"
                      href={celebrant.instagram}
                      label={`Visit ${celebrant.name}'s Instagram profile`}
                    />
                    <SocialShareButton
                      type="tiktok"
                      href={celebrant.tiktok}
                      label={`Visit ${celebrant.name}'s TikTok profile`}
                    />
                    <SocialShareButton
                      type="whatsapp"
                      href={celebrant.whatsapp}
                      label={`Send WhatsApp message to ${celebrant.name}`}
                    />
                    <SocialShareButton
                      type="phone"
                      href={`tel:${celebrant.phone}`}
                      label={`Call ${celebrant.name}`}
                    />
                  </div>
                  <div className="text-right">
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}

              {modalView === 'sponsorMessage' && (
                <>
                  <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                    Message from {sponsor.name}
                  </h3>
                  <p className="mb-4 text-gray-900">{sponsor.promoText}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {sponsor.additionalLinks.map(({ label, url }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#00aaff] text-white px-4 py-2 rounded hover:bg-[#007acc] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}

              {modalView === 'sponsorWebsite' && (
                <>
                  <h3 id="modal-title" className="text-2xl font-bold text-blue-800 mb-4">
                    About {sponsor.name}
                  </h3>
                  <p className="mb-4 text-gray-900">{sponsor.servicesDescription}</p>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00aaff] text-white px-5 py-2 rounded hover:bg-[#007acc] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    aria-label={`Visit ${sponsor.name} website`}
                  >
                    Visit Website
                  </a>
                  <div className="flex justify-end gap-3 mt-6">
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}

              {modalView === 'contact' && (
                <>
                  <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                    Contact Us About Advertising
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4 text-black" noValidate>
                    <div>
                      <label htmlFor="name" className="block font-semibold mb-1">
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 ${
                          formErrors.name ? 'border-red-600' : 'border-gray-300'
                        }`}
                        required
                        autoComplete="name"
                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                        aria-invalid={!!formErrors.name}
                      />
                      {formErrors.name && (
                        <p id="name-error" className="text-red-600 mt-1 text-sm">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="block font-semibold mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-semibold mb-1">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 ${
                          formErrors.email ? 'border-red-600' : 'border-gray-300'
                        }`}
                        required
                        autoComplete="email"
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        aria-invalid={!!formErrors.email}
                      />
                      {formErrors.email && (
                        <p id="email-error" className="text-red-600 mt-1 text-sm">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-semibold mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-semibold mb-1">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full border rounded px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-red-600 ${
                          formErrors.message ? 'border-red-600' : 'border-gray-300'
                        }`}
                        rows={4}
                        required
                        aria-describedby={formErrors.message ? 'message-error' : undefined}
                        aria-invalid={!!formErrors.message}
                      />
                      {formErrors.message && (
                        <p id="message-error" className="text-red-600 mt-1 text-sm">
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                    {formStatus === 'error' && (
                      <p className="text-red-600 font-semibold" role="alert">
                        Please fill all required fields correctly.
                      </p>
                    )}
                    {formStatus === 'sending' && (
                      <p className="text-yellow-600 font-semibold" role="status">
                        Sending...
                      </p>
                    )}
                    <div className="flex justify-end gap-3">
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              )}

              {modalView === 'thankYou' && (
                <>
                  <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                    Thank You!
                  </h3>
                  <p>Your message has been sent successfully.</p>
                  <div className="text-right mt-4">
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
