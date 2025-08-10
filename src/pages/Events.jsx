import { useState, useEffect, useRef } from 'react';
import amaka from '@/assets/images/events/amaka.webp';
import chilling from '@/assets/images/events/chilling.webp';
import shawarma from '@/assets/images/foodies/shawarma.webp';
import stars from '@/assets/videos/stars.webm';
import preEventVideo from '@/assets/videos/club.mp4';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

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
  const [carouselIndex, setCarouselIndex] = useState(0); // Initialize to 0 for valid starting point
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

  const celebrant = {
    name: "Amaka",
    facebook: "https://facebook.com/amaka.profile",
    instagram: "https://instagram.com/amaka.profile",
    tiktok: "https://tiktok.com/@amaka.profile",
    whatsapp: `https://wa.me/2349162836505`,
    phone: "+2349162836505",
  };

  const images = [amaka, chilling, shawarma];
  const extendedImages = [...images, ...images]; // For infinite loop
  const slideWidth = 100;

  const socialBtnBase =
    'transform transition-transform duration-300 rounded-full flex items-center justify-center w-14 h-14 shadow-lg cursor-pointer';

  const socialBtnStyles = {
    facebook: 'bg-[#1877F2] text-white hover:bg-[#155fbe]',
    instagram:
      'bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:brightness-110',
    tiktok: 'bg-black border-2 border-white text-white hover:bg-pink-600',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20b358]',
    phone: 'bg-gray-600 text-white hover:bg-gray-700',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${carouselIndex * slideWidth}%)`;
      // Ensure seamless transition by resetting transition property after instant jump
      if (carouselIndex >= images.length || carouselIndex < 0) {
        setTimeout(() => {
          containerRef.current.style.transition = 'none';
          setCarouselIndex(carouselIndex % images.length);
          containerRef.current.style.transform = `translateX(-${(carouselIndex % images.length) * slideWidth}%)`;
          void containerRef.current.offsetWidth; // Trigger reflow
          containerRef.current.style.transition = 'transform 0.5s ease';
        }, 500); // Match transition duration
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

  const handleTransitionEnd = () => {
    setIsTransitioningLocal(false);
    if (carouselIndex >= images.length) {
      setCarouselIndex(carouselIndex - images.length);
    } else if (carouselIndex < 0) {
      setCarouselIndex(carouselIndex + images.length);
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
      <section
        style={{ position: 'fixed', zIndex: 9999, top: '160px' }}
        className="w-full max-w-[90%] mx-auto sm:max-w-none bg-red-600 bg-opacity-90 border-2 border-yellow-400 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg select-none"
        aria-label="Sponsored Event Highlight"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
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
          <div className="flex flex-col items-center md:items-start">
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
      </section>

      <section
        className="relative h-[250px] md:pt-50 bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${amaka})` }}
        aria-label="Kepong Events Page header"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-8 flex flex-col items-center z-10">
          <h1 className="text-3xl py-4 md:px-8 md:text-5xl font-bold text-center text-white mb-2 md:-mt-2">
            Kepong Events Page
          </h1>
          <div className="text-center mt-4">
            <p className="text-[1rem] md:text-[1.5rem] font-semibold text-white">
              Amaka's 30th Birthday Bash!
            </p>
          </div>
        </div>
      </section>

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

          <div className="mt-12 max-w-sm mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4 pb-2">
              Share this Celebration:
            </h3>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.facebook}`}
                  aria-label="Share on Facebook"
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <span className="text-xs mt-2 text-white select-none">Facebook</span>
              </div>

              <div className="flex flex-col items-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.instagram}`}
                  aria-label="Share on Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <span className="text-xs mt-2 text-white select-none">Instagram</span>
              </div>

              <div className="flex flex-col items-center">
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.tiktok}`}
                  aria-label="Share on TikTok"
                >
                  <FaTiktok className="text-xl" />
                </a>
                <span className="text-xs mt-2 text-white select-none">TikTok</span>
              </div>
            </div>

            <div className="mt-10 border-t border-white pt-6 max-w-xs mx-auto bg-red-600 bg-opacity-20 rounded-lg p-4 text-center shadow-md">
              <h4 className="text-lg font-bold text-white mb-4">Send Good Wishes</h4>
              <p className="text-white mb-4">
                Send your goodwill messages to Amaka by call or WhatsApp
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href={`tel:${celebrant.phone}`}
                  className={`${socialBtnBase} ${socialBtnStyles.phone} bg-yellow-600 hover:bg-yellow-700`}
                  aria-label={`Call ${celebrant.name}`}
                >
                  <FaPhoneAlt className="text-xl" />
                </a>

                <a
                  href={celebrant.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialBtnBase} ${socialBtnStyles.whatsapp}`}
                  aria-label={`Send WhatsApp message to ${celebrant.name}`}
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black relative w-full mt-14 rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-xl md:text-2xl font-bold text-center py-2 border-2 border-black text-red-600">
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
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-4 sm:px-6 lg:px-0 py-2 flex justify-center gap-4 bg-black/90 border-b-2 border-white">
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

      <section className="bg-black w-full mt-12 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold py-2 border-b-2 border-white text-center text-red-600 rounded-t-lg">
          Pre-Event Video
        </h2>
        <div className="w-full h-[400px] rounded-b-lg overflow-hidden">
          <video className="w-full h-full object-cover" controls src={preEventVideo} preload="metadata">
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

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
            className="underline text-green-500 hover:text-green-600 transition"
            aria-label="make page booking enquiry through WhatsApp"
          >
            WhatsApp
          </a>
        </p>
      </section>

      <button
        onClick={() => toggleModal('sponsorMessage')}
        className="fixed bottom-10 right-4 border-2 border-yellow-400 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition shadow-lg z-50"
        aria-haspopup="dialog"
        aria-label="Open sponsor's message modal"
      >
        Sponsor's Message
      </button>

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
            {modalView === 'goodWishes' && (
              <>
                <h3 id="modal-title" className="text-2xl font-bold text-red-600 mb-4">
                  Send Good Wishes to {celebrant.name}
                </h3>
                <p className="mb-4 text-gray-800">
                  Connect with {celebrant.name} to share your birthday wishes!
                </p>
                <div className="flex justify-center gap-8 mb-6">
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.facebook}`}
                      aria-label={`Visit ${celebrant.name}'s Facebook profile`}
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">Facebook</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.instagram}`}
                      aria-label={`Visit ${celebrant.name}'s Instagram profile`}
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">Instagram</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.tiktok}`}
                      aria-label={`Visit ${celebrant.name}'s TikTok profile`}
                    >
                      <FaTiktok className="text-xl" />
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">TikTok</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <a
                      href={celebrant.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialBtnBase} ${socialBtnStyles.whatsapp}`}
                      aria-label={`Send WhatsApp message to ${celebrant.name}`}
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                    <span className="text-xs mt-2 text-gray-800 select-none">WhatsApp</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <a
                      href={`tel:${celebrant.phone}`}
                      className={`${socialBtnBase} ${socialBtnStyles.phone}`}
                      aria-label={`Call ${celebrant.name}`}
                    >
                      <FaPhoneAlt className="text-xl" />
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