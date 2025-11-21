import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import amaka from '@/assets/images/events/indep.jpg';
import samplePromoVideo from '@/assets/videos/club.mp4'; // example video path
import samplePromoAudio from '@/assets/audio/testing.mp3'; // example audio path
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
    'transform transition-transform duration-300 rounded-full flex items-center justify-center w-16 h-16 shadow-md cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 hover:scale-105';
  const socialBtnStyles = {
    facebook: 'bg-[#1877F2] text-white hover:bg-[#155fbe]',
    instagram:
      'bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:brightness-110',
    tiktok: 'bg-black border-2 border-white text-white hover:bg-gray-800',
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
      {type === 'facebook' && <FaFacebookF className="text-2xl" />}
      {type === 'instagram' && <FaInstagram className="text-2xl" />}
      {type === 'tiktok' && <FaTiktok className="text-2xl" />}
      {type === 'whatsapp' && <FaWhatsapp className="text-2xl" />}
      {type === 'phone' && <FaPhoneAlt className="text-2xl" />}
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
          if (document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
          }
        } else {
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
  // -- Sponsor & Celebrant Data --
  const sponsor = {
    name: 'sponsor',
    logoUrl: 'https://dummyimage.com/150x50/00aaff/fff&text=CB',
    message:
      "[insert sponsor's name] is proud to sponsor [insert event caption] at Kepong Villa Garden & Suites!",
    additionalLinks: [
      { label: 'Visit [insert sponsor]', url: 'https://sponsor.example.com' },
      {
        label: '[insert sponsor] Promotions',
        url: 'https://sponsor.example.com/promotions',
      },
    ],
    promoText:
      'Celebrate with [insert sponsor]! Enjoy exclusive beverage offers and refreshing moments during Amaka’s 30th Birthday Bash at Kepong Villa Garden & Suites. Taste the cool that brings everyone together!',
    servicesDescription:
      '[insert sponsor name] offers a refreshing presence at this event',
  };

  // Celebrant’s info for promotion (single event)
  const celebrant = {
    name: 'Independence Bash',
    facebook: 'https://facebook.com/amaka.profile',
    instagram: 'https://instagram.com/amaka.profile',
    tiktok: 'https://tiktok.com/@amaka.profile',
    whatsapp: 'https://wa.me/2349162836505',
    phone: '+2349162836505',
    profession: 'Full Time Chef',
  };

  // Wedding couple scenario if needed (not used in this example)
  const couple = {
    isWedding: false,
    personA: {
      name: 'Amaka',
      profession: 'Creative Content Creator',
    },
    personB: {
      name: 'Chinedu',
      profession: 'Entrepreneur & Event Consultant',
    },
  };

  // -- State --
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('info');
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

  // Focus trap & close modal
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

  // Sponsor banner visibility
  const [showSponsorBanner, setShowSponsorBanner] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowSponsorBanner(true);
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

  // Form validation helpers
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

  // Economic Prosperity Promotion Section with profession intro + media
  const EconomicProsperitySection = () => {
    return (
      <section
        className="bg-gradient-to-r from-gray-200 to-gray-300 border-2 border-green-700 text-black p-6 rounded-xl shadow-lg w-full mx-auto my-16 max-w-3xl"
        aria-label={`Promote Celebrant ${celebrant.name}'s Profession`}
      >
        <div className="flex flex-col space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900"
          >
            Featuring...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-semibold"
          >
            MC PH, MC JP <br /> MC Sweet Mouth, MC Gold, & DJ POS
          </motion.p>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            src={amaka}
            alt={`Promotional portrait of ${celebrant.name}`}
            className="rounded-xl shadow-md w-full object-cover border border-gray-400"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Promotional audio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 max-w-md mx-auto"
        >
          <h2 className="text-center text-xl font-semibold text-gray-900 mb-3">
            Voice Note From <span className="uppercase font-bold text-green-700 border-b-4 border-white">MC Bar Beach</span>
          </h2>
          <audio
            controls
            className="w-full rounded-3xl shadow-md border-4 border-green-700"
            aria-label={`${celebrant.name}'s promotional audio`}
          >
            <source src={samplePromoAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </motion.div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 pt-48 text-gray-800 font-sans relative select-none">
      {/* Sponsor Banner */}
      <AnimatePresence>
        {showSponsorBanner && (
          <motion.section
            initial={{ y: -100, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 1 }}
            style={{ position: 'fixed', zIndex: 9999, top: '115px', left: 0, right: 0 }}
            className="max-w-[100%] h-[150px] border-2 border-sky-900 mx-auto rounded-lg bg-gradient-to-r from-sky-200 to-sky-500 border border-gray-400 p-6 flex items-center justify-center shadow-md sm:max-w-none relative sm:top-0"
            aria-label="Advertisement Opportunity"
          >
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h2 className="font-bold text-gray-900 text-3xl md:text-4xl uppercase">
                Banner Ad Space
              </h2>
              <p className="text-gray-700 text-sm mt-2 max-w-md font-medium">
                Advertise Your Brand - Share a word with your customers from here
              </p>
              <button
                aria-label="Dismiss advertisement banner"
                title="Dismiss Advertisement Banner"
                onClick={() => setShowSponsorBanner(false)}
                className="absolute top-2 right-2 font-bold text-gray-800 p-2 rounded hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
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
        className="relative h-[300px] md:pt-24 bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${amaka})` }}
        aria-label="Kepong Events Page header"
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="bg-gray-900/60 w-full py-4 relative flex flex-col items-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-4xl font-bold text-center text-white"
          >
            Kepong Events Page
          </motion.h1>
        </div>
      </section>

      {/* Event Invitation + Social Sharing */}
      <section
        className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-green-700 text-center relative max-w-5xl mx-auto px-6 rounded-xl shadow-lg mt-12 select-text"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
              {celebrant.name}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-xl max-w-xl mx-auto text-gray-700"
          >
            <p>
              <strong>Date:</strong> October 1, 2025
            </p>
            <p>
              <strong>Time:</strong> 6:00 PM - Midnight
            </p>
            <p>
              <strong>Venue:</strong> Kepong Villa Garden & Suites
            </p>
          </motion.div>

          {/* Economic Prosperity Promotion Section */}
          <EconomicProsperitySection />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 max-w-sm mx-auto"
          >
            <h3 className="text-gray-900 text-2xl font-semibold mb-6">
              Share this Celebration:
            </h3>
            <div className="flex justify-center gap-10">
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
          </motion.div>
        </div>
      </section>

      {/* Advertise Call to Action */}
      <section className="text-center mx-auto mt-20 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 max-w-xs">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          onClick={() => setIsModalOpen(true) || setModalView('info')}
          className="px-8 py-3 mb-4 cursor-pointer font-bold border border-gray-400 bg-gray-700 text-white text-xl rounded-lg hover:bg-gray-800 hover:shadow-xl transition-transform duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
          aria-haspopup="dialog"
          aria-controls="advertise-modal"
          aria-expanded={isModalOpen}
          type="button"
        >
          Advertise!
        </motion.button>
      </section>

      {/* Sponsor’s Message Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsModalOpen(true) || setModalView('sponsorMessage')}
        className="fixed bottom-12 right-2 border-2 border-gray-400 px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 cursor-pointer transition shadow-lg z-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
        aria-haspopup="dialog"
        aria-label="Open sponsor's message modal"
        type="button"
      >
        Sponsor's Message
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/70 flex items-center justify-center z-50000 p-6 overflow-auto"
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
              className="bg-white rounded-xl max-w-lg w-full p-8 relative text-gray-800 shadow-xl focus:outline-none"
            >
              {modalView === 'info' && (
                <>
                  <h3
                    id="modal-title"
                    className="text-3xl font-bold text-gray-900 mb-6"
                  >
                    Advertise with Kepong
                  </h3>
                  <p className="mb-6 text-gray-700">
                    Reach thousands of visitors monthly who love good food, great
                    entertainment, and memorable events at Kepong Villa Garden & Suites.
                  </p>
                  <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
                    <li>
                      <strong>30,000+</strong> monthly website visits
                    </li>
                    <li>
                      Highly engaged local audience from Enugu and South-East Nigeria
                    </li>
                    <li>Event page sponsorships tie your brand to real celebrations</li>
                    <li>Native and banner ads integrated organically site-wide</li>
                  </ul>
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setModalView('contact')}
                      className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
                      type="button"
                    >
                      Contact Us
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}

              {modalView === 'goodWishes' && (
                <>
                  <h3
                    id="modal-title"
                    className="text-3xl font-bold text-gray-900 mb-6"
                  >
                    Send Good Wishes to {celebrant.name}
                  </h3>
                  <p className="mb-6 text-gray-700">
                    Connect with {celebrant.name} to share your birthday wishes!
                  </p>
                  <div className="flex justify-center gap-10 mb-8 flex-wrap">
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
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}

              {modalView === 'sponsorMessage' && (
                <>
                  <h3
                    id="modal-title"
                    className="text-3xl font-bold text-gray-900 mb-6"
                  >
                    Message from {sponsor.name}
                  </h3>
                  <p className="mb-6 text-gray-700">{sponsor.promoText}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {sponsor.additionalLinks.map(({ label, url }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      type="button"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}

              {modalView === 'contact' && (
                <>
                  <h3
                    id="modal-title"
                    className="text-3xl font-bold text-gray-900 mb-6"
                  >
                    Contact Us About Advertising
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6 text-gray-800" noValidate>
                    <div>
                      <label htmlFor="name" className="block font-semibold mb-2">
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 ${
                          formErrors.name ? 'border-red-600' : 'border-gray-300'
                        }`}
                        required
                        autoComplete="name"
                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                        aria-invalid={!!formErrors.name}
                      />
                      {formErrors.name && (
                        <p id="name-error" className="text-red-600 mt-2 text-sm">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="block font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-semibold mb-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 ${
                          formErrors.email ? 'border-red-600' : 'border-gray-300'
                        }`}
                        required
                        autoComplete="email"
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        aria-invalid={!!formErrors.email}
                      />
                      {formErrors.email && (
                        <p id="email-error" className="text-red-600 mt-2 text-sm">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-semibold mb-2">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-gray-600 ${
                          formErrors.message ? 'border-red-600' : 'border-gray-300'
                        }`}
                        rows={5}
                        required
                        aria-describedby={formErrors.message ? 'message-error' : undefined}
                        aria-invalid={!!formErrors.message}
                      />
                      {formErrors.message && (
                        <p id="message-error" className="text-red-600 mt-2 text-sm">
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
                      <p className="text-gray-600 font-semibold" role="status">
                        Sending...
                      </p>
                    )}
                    <div className="flex justify-end gap-4">
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              )}

              {modalView === 'thankYou' && (
                <>
                  <h3
                    id="modal-title"
                    className="text-3xl font-bold text-gray-900 mb-6"
                  >
                    Thank You!
                  </h3>
                  <p className="text-gray-700">Your message has been sent successfully.</p>
                  <div className="text-right mt-6">
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
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