import { useState, useEffect, useRef } from 'react';
import amaka from '@/assets/images/events/amaka.webp';
import chilling from '@/assets/images/events/chilling.webp';
import shawarma from '@/assets/images/foodies/shawarma.webp';
import stars from '@/assets/videos/stars.webm';
import preEventVideo from '@/assets/videos/club.mp4';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('info'); // 'info', 'contact', 'thankYou', 'sponsorMessage', 'sponsorPromo', 'goodWishes'
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isTransitioningLocal, setIsTransitioningLocal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const containerRef = useRef(null);
  const bookingNumber = '2347031576094';
  const whatsappLink = `https://wa.me/${bookingNumber}`;

  const sponsor = {
    name: "CoolBrew Beverages",
    logoUrl: "https://dummyimage.com/150x50/ff4444/fff&text=CoolBrew",
    message: "CoolBrew wishing Amaka a happy birthday at Kepong Villa Garden & Suites",
    url: "https://coolbrew.example.com",
    additionalLinks: [
      { label: "Shop Now", url: "https://shop.coolbrew.example.com" },
      { label: "Our Story", url: "https://coolbrew.example.com/about" },
    ],
  };

  // New: Celebrant contact information
  const celebrant = {
    name: "Amaka",
    facebook: "https://facebook.com/amaka.profile",
    instagram: "https://instagram.com/amaka.profile",
    tiktok: "https://tiktok.com/@amaka.profile",
    whatsapp: `https://wa.me/2349162836505`,
    phone: "+2349162836505",
  };

  const slides = [
    'Celebrate with Amaka',
    'Join the Celebration',
    'Party all the Way',
    'Endorse this Event',
  ];

  const images = [amaka, chilling, shawarma];
  const extendedImages = [...images, ...images];
  const slideWidth = 100;

  const socialBtnBase =
    'transform transition-transform duration-300 rounded-full flex items-center justify-center w-14 h-14 shadow-lg cursor-pointer';

  const socialBtnStyles = {
    facebook: 'bg-[#1877F2] text-white hover:bg-[#155fbe]',
    x: 'bg-[#1DA1F2] text-white hover:bg-[#0d8ddb]',
    instagram:
      'bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:brightness-110',
    tiktok: 'bg-black border-2 border-white text-white hover:bg-pink-600',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20b358]', // Added WhatsApp style
    phone: 'bg-gray-600 text-white hover:bg-gray-700', // Added phone style
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${carouselIndex * slideWidth}%)`;
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

  const handleTransitionEnd = () => {
    setIsTransitioningLocal(false);
    if (carouselIndex >= images.length) {
      setCarouselIndex(carouselIndex - images.length);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(-${
          (carouselIndex - images.length) * slideWidth
        }%)`;
        void containerRef.current.offsetWidth;
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

  const toggleModal = (view = 'info') => {
    setIsModalOpen(!isModalOpen);
    setModalView(view);
    if (isModalOpen) {
      setModalView('info');
      setFormStatus(null);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    return formData.name.trim() && formData.email.trim() && formData.message.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }
    setFormStatus('sending');
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setFormStatus('success');
      setModalView('thankYou');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black pt-40 text-white font-sans relative">
      {/* Branded Caption */}
      <section
        className="relative h-[250px] md:pt-14 bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${amaka})` }}
        aria-label="Kepong Events Page header"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-8 flex flex-col items-center z-10">
          <h1 className="text-3xl py-4 md:px-8 md:text-5xl font-bold text-center text-white mb-2">
            Kepong Events Page
          </h1>
          <div className="w-full max-w-4xl bg-red-600 bg-opacity-90 border-4 border-yellow-400 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg select-none">
            <div className="flex items-center gap-4">
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${sponsor.name} website`}
                className="flex-shrink-0"
              >
                <img
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} logo`}
                  className="h-16 w-auto rounded"
                  loading="lazy"
                />
              </a>
              <div>
                <h2 className="font-extrabold text-white text-xl md:text-2xl">
                  Sponsored Event Highlight
                </h2>
                <p className="text-yellow-300 max-w-md">{sponsor.message}</p>
              </div>
            </div>
            <button
              onClick={() => toggleModal('sponsorPromo')}
              className="inline-block px-4 py-2 font-semibold rounded-md bg-yellow-400 text-black hover:bg-yellow-300 transition"
              aria-label="View Sponsor Promotion"
            >
              Visit Sponsor
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-[1rem] md:text-[1.5rem] font-semibold text-white">
              Amaka's 30th Birthday Bash!
            </p>
          </div>
        </div>
      </section>

      {/* Text Slideshow */}
      <section className="py-2 border-8 rounded-xl px-8 bg-white text-black text-center mt-8 max-w-4xl mx-auto">
        <p className="text-lg md:text-2xl font-semibold transition-opacity duration-500">
          {slides[currentSlide % slides.length]}
        </p>
      </section>

      {/* Event Details */}
      <section className="py-12 bg-black text-center relative overflow-hidden max-w-4xl mx-auto px-4 rounded-lg shadow-lg mt-10">
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
          src={stars}
        />
        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
        <div className="relative z-10">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-2">
              Amaka's 30th Birthday Bash!
            </h2>
            <p className="text-lg md:text-2xl font-bold">You're Cordially Invited</p>
          </div>
          <div className="space-y-4 text-lg max-w-xl mx-auto">
            <p><strong>Date:</strong> August 15, 2025</p>
            <p><strong>Time:</strong> 6:00 PM - Midnight</p>
            <p><strong>Venue:</strong> Kepong Villa Garden & Suites</p>
            <p><strong>Special Attraction:</strong> Acrobat dancers</p>
          </div>

          {/* Social Media Buttons Section */}
          <div className="mt-12 max-w-sm mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4 border-b border-red-600 pb-2">
              Share this Celebration:
            </h3>
            <div className="flex justify-center gap-8">
              {/* Facebook */}
              <div className="flex flex-col items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.facebook}`}
                  aria-label="Share on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    aria-hidden="true"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.407.592 24 1.325 24H12.82V14.709h-3.469v-3.62h3.469V8.172c0-3.438 2.092-5.314 5.152-5.314 1.466 0 2.727.109 3.095.158v3.586l-2.123.001c-1.665 0-1.986.792-1.986 1.954v2.559h3.971l-.518 3.62h-3.453V24h6.763c.732 0 1.324-.593 1.324-1.324V1.324C24 .592 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <span className="text-xs mt-2 text-white select-none">Facebook</span>
              </div>

              {/* X (Twitter) */}
              <div className="flex flex-col items-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.x}`}
                  aria-label="Share on X"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    aria-hidden="true"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.954-2.178-1.55-3.594-1.55-2.722 0-4.928 2.206-4.928 4.928 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.734-.666 1.58-.666 2.476 0 1.708.87 3.217 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.113-.849.173-1.296.173-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.317-3.809 2.103-6.102 2.103-.39 0-.779-.022-1.17-.067 2.188 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.497 14-13.986 0-.21 0-.42-.015-.63.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <span className="text-xs mt-2 text-white select-none">X</span>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.instagram}`}
                  aria-label="Share on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37a4 4 0 0 1-7.87 1.79 4 4 0 0 1 7.87-1.79z"></path>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                  </svg>
                </a>
                <span className="text-xs mt-2 text-white select-none">Instagram</span>
              </div>

              {/* TikTok */}
              <div className="flex flex-col items-center">
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.tiktok}`}
                  aria-label="Share on TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 448 512"
                    className="w-7 h-7"
                    aria-hidden="true"
                  >
                    <path d="M448,209.91v88a132.23,132.23,0,0,1-132-132V387a132,132,0,1,1-71.44-117.7v51.76A80,80,0,1,0,256,387V134a132.14,132.14,0,0,0,192,75.91Z" />
                  </svg>
                </a>
                <span className="text-xs mt-2 text-white select-none">TikTok</span>
              </div>

              {/* New: Send good wishes button */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => toggleModal('goodWishes')}
                  className={`${socialBtnBase} bg-yellow-400 text-black hover:bg-yellow-300`}
                  aria-label="Send good wishes to Amaka"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    aria-hidden="true"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <span className="text-xs mt-2 text-white select-none">Good Wishes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Event Photos Carousel */}
      <section className="bg-white text-black relative w-full mt-14 rounded-lg shadow-lg overflow-hidden">
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
                loading="lazy"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-4 sm:px-6 lg:px-0 py-3 flex justify-center gap-4 bg-black/90 border-b-2 border-white">
            <button
              onClick={prevSlide}
              disabled={isTransitioningLocal}
              className="w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioningLocal}
              className="w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Pre-Event Video */}
      <section className="bg-black w-full mt-12 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-3xl font-bold py-2 border-b-2 border-white text-center text-red-600 rounded-t-lg">
          Pre-Event Video
        </h2>
        <div className="w-full h-[400px] rounded-b-lg overflow-hidden">
          <video className="w-full h-full object-cover" controls src={preEventVideo} preload="metadata">
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Endorse This Event Button */}
      <section className="text-center mx-auto mt-14 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
        <button
          onClick={() => toggleModal('info')}
          className="px-4 py-2 cursor-pointer border-4 border-yellow-400 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-300 hover:shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
          aria-haspopup="dialog"
          aria-controls="endorse-modal"
          aria-expanded={isModalOpen}
        >
          Advertise with Kepong
        </button>
        <p className="text-white font-semibold text-lg mt-4 px-4">
          For adverts, call{' '}
          <a href="tel:+2347031576094" className="underline text-yellow-300 hover:text-yellow-200 transition">
            0703 157 6094
          </a>{' '}
          or{' '}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-yellow-300 hover:text-yellow-200 transition"
            aria-label="make page booking enquiry through WhatsApp"
          >
            WhatsApp
          </a>
        </p>
      </section>

      {/* Fixed Sponsor’s Message Button */}
      <button
        onClick={() => toggleModal('sponsorMessage')}
        className="fixed bottom-10 right-4 border-2 border-yellow-400 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition shadow-lg z-50"
        aria-haspopup="dialog"
        aria-label="Open sponsor's message modal"
      >
        Sponsor's Message
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          id="endorse-modal"
        >
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative text-black shadow-lg">
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
                    className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={() => toggleModal()}
                    className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            )}

            {modalView === 'contact' && (
              <>
                <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                  Get in Touch
                </h3>
                <p className="mb-4 text-gray-800">
                  Call this number{' '}
                  <a href="tel:+2349162836505" className="underline text-blue-600 hover:text-blue-800">
                    09162836505
                  </a>{' '}
                  or fill the form below
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-1">
                      Your Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-semibold mb-1">
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Example Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-semibold mb-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="+234 800 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-semibold mb-1">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 resize-y"
                      placeholder="Tell us about your advertising needs..."
                    />
                  </div>
                  {formStatus === 'error' && (
                    <p className="text-red-600 font-semibold" role="alert">
                      Please fill in all required fields correctly.
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Inquiry'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalView('info')}
                      className="text-gray-600 hover:underline"
                    >
                      Back
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
                <p className="mb-6">
                  Your inquiry was successfully sent. We will get back to you shortly.
                </p>
                <div className="text-right">
                  <button
                    onClick={() => toggleModal()}
                    className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            )}

            {modalView === 'sponsorMessage' && (
              <>
                <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                  {sponsor.name}'s Message
                </h3>
                <p className="mb-4 text-gray-800">
                  Join {sponsor.name} in celebrating Amaka’s 30th Birthday Bash at Kepong Villa Garden & Suites! Our refreshing beverages are fueling the vibrant energy of this unforgettable event. Sip the joy, feel the vibe, and let’s make this party legendary together!
                </p>
                <div className="text-right">
                  <button
                    onClick={() => toggleModal()}
                    className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            )}

            {modalView === 'sponsorPromo' && (
              <>
                <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                  Discover {sponsor.name}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} logo`}
                    className="h-12 w-auto rounded"
                    loading="lazy"
                  />
                  <p className="text-gray-800">
                    {sponsor.name} brings the ultimate refreshment to Amaka’s 30th Birthday Bash! Our premium beverages, crafted with passion, are perfect for every occasion. From crisp sodas to energizing drinks, elevate your celebration with CoolBrew’s vibrant flavors.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Explore More:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {sponsor.additionalLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => toggleModal()}
                    className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            )}

            {/* New: Good Wishes Modal View */}
            {modalView === 'goodWishes' && (
              <>
                <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                  Send Good Wishes to {celebrant.name}
                </h3>
                <p className="mb-4 text-gray-800">
                  Connect with {celebrant.name} to share your birthday wishes!
                </p>
                <div className="flex justify-center gap-8 mb-6">
                  {/* Facebook */}
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.facebook}`}
                      aria-label={`Visit ${celebrant.name}'s Facebook profile`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-7 h-7"
                        aria-hidden="true"
                      >
                        <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.407.592 24 1.325 24H12.82V14.709h-3.469v-3.62h3.469V8.172c0-3.438 2.092-5.314 5.152-5.314 1.466 0 2.727.109 3.095.158v3.586l-2.123.001c-1.665 0-1.986.792-1.986 1.954v2.559h3.971l-.518 3.62h-3.453V24h6.763c.732 0 1.324-.593 1.324-1.324V1.324C24 .592 23.407 0 22.675 0z" />
                      </svg>
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">Facebook</span>
                  </div>

                  {/* Instagram */}
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.instagram}`}
                      aria-label={`Visit ${celebrant.name}'s Instagram profile`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        className="w-7 h-7"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37a4 4 0 0 1-7.87 1.79 4 4 0 0 1 7.87-1.79z"></path>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">Instagram</span>
                  </div>

                  {/* TikTok */}
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.tiktok}`}
                      aria-label={`Visit ${celebrant.name}'s TikTok profile`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 448 512"
                        className="w-7 h-7"
                        aria-hidden="true"
                      >
                        <path d="M448,209.91v88a132.23,132.23,0,0,1-132-132V387a132,132,0,1,1-71.44-117.7v51.76A80,80,0,1,0,256,387V134a132.14,132.14,0,0,0,192,75.91Z" />
                      </svg>
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">TikTok</span>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.whatsapp}`}
                      aria-label={`Send WhatsApp message to ${celebrant.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-7 h-7"
                        aria-hidden="true"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.559 4.139 1.535 5.89L0 24l6.297-1.558A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm3.224 16.945c-.287.143-1.692.837-1.953.933-.262.096-.453-.096-.558-.347-.431-1.006-1.487-3.304-1.823-3.968-.336-.664-.036-.996.252-1.318.144-.161.287-.322.431-.483.144-.161.192-.287.287-.483.096-.192.048-.358-.024-.502-.072-.144-.646-.716-1.006-1.078-.36-.36-.36-.478-.503-.574-.144-.096-.287-.12-.431-.12s-.287 0-.431.096c-.144.096-1.102.382-1.678 1.294-.575.912-.646 2.013-.215 3.128.431 1.115 1.247 2.134 2.61 3.224 1.94 1.55 3.584 2.038 4.556 2.278.717.18 1.294.024 1.678-.262.382-.287.646-.646.717-.933.072-.287.048-.526-.215-.669l-.717-.383z" />
                      </svg>
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">WhatsApp</span>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-center">
                    <a
                      href={`tel:${celebrant.phone}`}
                      className={`${socialBtnBase} ${socialBtnStyles.phone}`}
                      aria-label={`Call ${celebrant.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-7 h-7"
                        aria-hidden="true"
                      >
                        <path d="M20.487 17.14l-4.065-3.696a1 1 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391z" />
                      </svg>
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">Call</span>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => toggleModal()}
                    className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;