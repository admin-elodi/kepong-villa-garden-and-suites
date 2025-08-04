import { useState, useEffect, useRef } from 'react';
import amaka from '@/assets/images/amaka.webp';
import chilling from '@/assets/images/chilling.webp';
import shawarma from '@/assets/images/foodies/shawarma.webp';
import stars from '@/assets/videos/stars.webm';
import preEventVideo from '@/assets/videos/club.mp4';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('info');
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
    message: "Proud sponsor bringing you refreshing vibes with every sip at Amaka’s 30th!",
    url: "https://coolbrew.example.com",
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
    'transform transition-transform duration-300 rounded-full flex items-center justify-center w-12 h-12 shadow-lg';

  const socialBtnStyles = {
    x: 'bg-[#1DA1F2] text-white hover:bg-[#0d8ddb]',
    instagram:
      'bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:brightness-110',
    facebook: 'bg-[#1877F2] text-white hover:bg-[#155fbe]',
    tiktok: 'bg-black border-2 border-white text-white hover:bg-pink-600',
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 font-semibold rounded-md bg-yellow-400 text-black hover:bg-yellow-300 transition"
            >
              Visit Sponsor
            </a>
          </div>
          <div className="text-center mt-4">
            <p className="text-[1rem] md:text-[1.5rem] font-semibold text-white">
              Amaka's 30th Birthday Bash!
            </p>
          </div>
        </div>
      </section>

      <section className="py-2 border-8 rounded-xl px-8 bg-white text-black text-center mt-8 max-w-4xl mx-auto">
        <p className="text-lg md:text-2xl font-semibold transition-opacity duration-500">
          {slides[currentSlide % slides.length]}
        </p>
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
        </div>
      </section>

      {/* ✅ Updated Carousel Section to full width */}
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
            <button onClick={prevSlide} disabled={isTransitioningLocal} className="w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50">‹</button>
            <button onClick={nextSlide} disabled={isTransitioningLocal} className="w-10 h-10 rounded-sm border border-white/60 text-white/80 hover:text-white hover:border-opacity-100 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2 bg-black/30 disabled:opacity-50">›</button>
          </div>
        </div>
      </section>

      {/* ✅ Updated Pre-Event Video Section to full width */}
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

      {/* ...rest of the code remains unchanged... */}
    </div>
  );
};

export default Events;
