import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import clubkHero from '@/assets/videos/club.mp4';
import dance2 from '@/assets/images/club/dance2.webp';
import dj from '@/assets/images/club/dj.webp';
import drink1 from '@/assets/images/club/drink1.webp';
import vip1 from '@/assets/images/club/vip1.webp';
import dance1 from '@/assets/images/club/dance1.webp';
import ambience1 from '@/assets/images/club/ambience1.webp';
import redLabel from '@/assets/images/club/red.webp';
import vodka from '@/assets/images/club/vodka.webp';
import redWine from '@/assets/images/club/wine.webp';

const ClubK = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  // State to track selected drinks and their quantities
  const [selectedDrinks, setSelectedDrinks] = useState({});

  // Ref for modal content to detect outside clicks
  const modalRef = useRef(null);

  const features = [
    {
      title: 'World-Class DJs',
      img: dj,
      desc: 'Electrifying beats every weekend',
    },
    {
      title: 'Premium Drinks',
      img: drink1,
      desc: 'Expertly crafted cocktails',
    },
    {
      title: 'Exclusive VIP Areas',
      img: vip1,
      desc: 'Luxury private booths',
    },
    {
      title: 'Themed Events',
      img: dance1,
      desc: 'Unforgettable party nights',
    },
    {
      title: 'Vibrant Dance Floor',
      img: dance2,
      desc: 'State-of-the-art visuals',
    },
    {
      title: 'Immersive Ambiance',
      img: ambience1,
      desc: 'Neon lights & energy',
    },
  ];

  // Define drinks available for ordering with prices and images
  const drinksList = [
    {
      id: 'red_label',
      name: 'Red Label',
      price: 25000,
      img: redLabel,
    },
    {
      id: 'vodka',
      name: 'Tsars Vodka',
      price: 18000,
      img: vodka,
    },
    {
      id: 'red_wine',
      name: 'Red Wine',
      price: 15500,
      img: redWine,
    },
  ];

  // Service charge fixed at 5%
  const SERVICE_CHARGE_RATE = 0.05;

  // Contact info & WhatsApp group link
  const phoneNumber = '+2348012345678'; // Replace with actual phone number
  const whatsappNumber = '2348012345678'; // WhatsApp number for payment evidence
  const whatsappGroupLink = 'https://chat.whatsapp.com/YourKepongGroupInviteLink'; // Replace with actual group invite link

  const handleBookVIP = () => {
    navigate('/bookings');
  };

  const openModal = () => {
    setIsModalOpen(true);
    setShowBankDetails(false);
    setSelectedDrinks({});
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowBankDetails(false);
    setSelectedDrinks({});
  };

  // Close modal when clicking outside modal content
  useEffect(() => {
    if (!isModalOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  // Update quantity of a selected drink
  const updateDrinkQuantity = (id, qty) => {
    if (qty < 0) return;
    setSelectedDrinks((prev) => {
      const newSelection = { ...prev };
      if (qty === 0) {
        delete newSelection[id];
      } else {
        newSelection[id] = qty;
      }
      return newSelection;
    });
  };

  // Calculate total price based on selected drinks
  const totalPrice = Object.entries(selectedDrinks).reduce((total, [id, qty]) => {
    const drink = drinksList.find((d) => d.id === id);
    return total + (drink ? drink.price * qty : 0);
  }, 0);

  // Calculate service charge
  const serviceCharge = Math.round(totalPrice * SERVICE_CHARGE_RATE);

  const handlePayNow = () => {
    if (totalPrice === 0) {
      alert('Please select at least one drink before proceeding to pay.');
      return;
    }
    setShowBankDetails(true);
  };

  // WhatsApp message link with prefilled message including total amount (subtotal + service charge)
  const whatsappMessage = encodeURIComponent(
    `Hello Club-K, I have made payment for the Premium Drinks order totaling ₦${(totalPrice + serviceCharge).toLocaleString()}. Please find attached my payment evidence.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="bg-black bg-opacity-90 min-h-screen font-montserrat text-yellow-100 border-t-4 border-b-4 border-yellow-100 pt-[90px] sm:pt-[110px]">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] sm:h-[520px] md:h-[640px] lg:h-[720px] xl:h-[800px] overflow-hidden m-0 p-0">
        <video
          src={clubkHero}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          Your browser does not support the video tag.
        </video>

        {/* Dark translucent blurred overlay for text readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />

        {/* Centered text container */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center max-w-3xl mx-auto gap-6 sm:gap-8">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_4px_10px_rgba(251,191,36,0.9)]"
          >
            Club-K Nightclub
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-yellow-300 max-w-md mx-auto leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]"
          >
            Open Wednesdays & Weekends<br className="block sm:hidden" />
   
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-xl mx-auto px-4 mt-2">
            <button
              onClick={openModal}
              className="bg-black bg-opacity-80 text-yellow-100 px-7 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-100 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-yellow-100 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none w-full"
              aria-label="Order Premium Drinks"
            >
              Order Premium Drinks
            </button>
            <button
              onClick={handleBookVIP}
              className="bg-yellow-100 text-black px-7 py-4 rounded-lg text-lg font-semibold hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-yellow-100 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none w-full"
              aria-label="Reserve Private Area"
            >
              Reserve Private Area
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div
            ref={modalRef}
            className="bg-yellow-100 rounded-xl shadow-2xl max-w-md w-full p-0 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-700 text-2xl font-bold hover:text-red-500 focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Image Section */}
            <img
              src={vodka}
              alt="Premium Drink"
              className="w-full h-40 object-cover rounded-t-xl border border-white"
            />

            {/* Modal Content */}
            <div className="p-6">
              {!showBankDetails ? (
                <>
                  <h2 className="text-xl font-bold mb-4 text-black">Select Your Drinks</h2>
                  <div className="space-y-4 mb-6">
                    {drinksList.map(({ id, name, price, img }) => {
                      const qty = selectedDrinks[id] || 0;
                      return (
                        <div key={id} className="flex items-center gap-4">
                          <img
                            src={img}
                            alt={name}
                            className="w-16 h-16 object-cover rounded-lg border border-yellow-300"
                            loading="lazy"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-black">{name}</h3>
                            <p className="text-green-700 font-bold">₦{price.toLocaleString()}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateDrinkQuantity(id, qty - 1)}
                              className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-3 rounded disabled:opacity-50"
                              disabled={qty === 0}
                              aria-label={`Decrease quantity of ${name}`}
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="0"
                              value={qty}
                              onChange={(e) => {
                                const val = Math.max(0, Number(e.target.value));
                                updateDrinkQuantity(id, val);
                              }}
                              className="w-12 text-center rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black bg-white"
                              aria-label={`Quantity of ${name}`}
                            />
                            <button
                              onClick={() => updateDrinkQuantity(id, qty + 1)}
                              className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-3 rounded"
                              aria-label={`Increase quantity of ${name}`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2 mb-6 border-t border-yellow-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-black">Subtotal:</span>
                      <span className="text-lg font-semibold text-green-700">₦{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-black">Service Charge (5%):</span>
                      <span className="text-lg font-semibold text-green-700">₦{serviceCharge.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-xl border-t border-yellow-300 pt-2">
                      <span>Total:</span>
                      <span className="text-green-800">₦{(totalPrice + serviceCharge).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Marketing pitch & contact info */}
                  <p className="mb-4 text-black text-justify font-medium">
                    Is this your first order? Join our{' '}
                    <a
                      href={whatsappGroupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-yellow-600"
                    >
                      WhatsApp community
                    </a>{' '}
                    to make your future orders very easy and smooth.
                    Feel free to chat us up on WhatsApp or call us at{' '}
                    <a href={`tel:${phoneNumber}`} className="underline hover:text-yellow-600">
                      {phoneNumber}
                    </a>
                    . We are here to assist you!
                  </p>

                  <button
                    onClick={handlePayNow}
                    className={`w-full bg-black text-yellow-100 font-bold py-3 rounded-lg transition-colors ${
                      totalPrice === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-300 hover:text-black'
                    }`}
                    disabled={totalPrice === 0}
                  >
                    Proceed to Payment Instructions
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-4 text-black">Bank Details</h2>
                  <div className="mb-6 space-y-3 text-gray-900">
                    <div>
                      <span className="font-semibold">Bank Name:</span> Wema Bank
                    </div>
                    <div>
                      <span className="font-semibold">Account Name:</span> Kepong Villa Garden & Suites
                    </div>
                    <div>
                      <span className="font-semibold">Account Number:</span> 0125564025
                    </div>
                    <div>
                      <span className="font-semibold">Amount:</span> ₦{(totalPrice + serviceCharge).toLocaleString()}
                    </div>
                  </div>
                  <p className="mb-4 text-gray-800">
                    After completing your payment, please send your payment evidence to our WhatsApp number below.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Send Payment Evidence on WhatsApp
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom animation for text */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fadeInUp-delayed {
            animation: fadeInUp 1s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
          }
        `}
      </style>

      <div className="w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Section */}
          <section className="py-12 sm:py-16">
            <h2
              className="text-3xl text-yellow-100 font-bold text-center mb-12 pb-3"
            >
              Experience Club K
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 sm:gap-x-12 max-w-6xl mx-auto">
              {features.map(({ title, img, desc }, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden border-4 border-yellow-100 shadow-xl bg-black bg-opacity-80 flex flex-col items-center text-center"
                  style={{ height: '340px' }}
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-40 object-cover mb-4"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col flex-grow justify-between w-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-yellow-100 drop-shadow-md">{title}</h3>
                      <p className="text-yellow-200 text-base">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ClubK;
