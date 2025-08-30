import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apartment from '@/assets/images/hotel/apartment.webp';
import premiumDrinks from '@/assets/images/homepage/drinks.webp';
import weddingReception from '@/assets/images/homepage/birthday.webp';
import vodka from '@/assets/images/club/henny.webp';

// Import the service images
import shawarma from '@/assets/images/foodies/shawarma.webp';
import hair from '@/assets/images/homepage/barbing.webp';
import carWash from '@/assets/images/homepage/car.webp';
import nightClub from '@/assets/images/club/clubbers.webp';
import meat from '@/assets/images/foodies/meats.webp';
import snooker from '@/assets/images/homepage/snooker.webp';
import shades from '@/assets/images/homepage/laundry.webp';
import salad from '@/assets/images/foodies/palm.webp';

// Background assets
import starsVideo from '@/assets/videos/stars.webm';
import quickBg from '@/assets/images/homepage/drinks.webp';

import '@/css/q-links.css';

const serviceImages = [
  shawarma,
  hair,
  carWash,
  nightClub,
  snooker,
  meat,
  shades,
  salad,
];

const QuickLinks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [selectedDrinks, setSelectedDrinks] = useState({});
  const modalRef = useRef(null);

  const drinksList = [
    {
      category: 'Wines',
      drinks: [
        { id: 'blue_nun', name: 'Blue Nun', price: 40000 },
        { id: 'four_cousins', name: 'Four Cousins', price: 20000 },
        { id: 'dangelus', name: 'Dangelus', price: 20000 },
        { id: 'carlo_rossi', name: 'Carlo Rossi', price: 20000 },
        { id: 'sole_vino', name: 'Sole Vino', price: 20000 },
        { id: 'rich_lady', name: 'Rich Lady', price: 20000 },
        { id: 'baileys', name: 'Baileys', price: 20000 },
        { id: 'moregan', name: 'Moregan', price: 20000 },
      ],
    },
    {
      category: 'Soft Drinks',
      drinks: [
        { id: 'hollandia', name: 'Hollandia', price: 3000 },
        { id: 'chi_exotic', name: 'Chi Exotic', price: 3000 },
        { id: 'coke', name: 'Coke', price: 500 },
        { id: 'water', name: 'Water', price: 500 },
        { id: 'black_bullet', name: 'Black Bullet', price: 3000 },
        { id: 'all_beers', name: 'All Beers', price: 3000 },
        { id: 'all_cigarette', name: 'All Cigarette', price: 2000 },
        { id: 'energy_drink', name: 'Energy Drink', price: 3000 },
        { id: 'tiger_vodka', name: 'Tiger Vodka', price: 3000 },
        { id: 'tiger_cream_berry', name: 'Tiger Cream Berry', price: 3000 },
        { id: 'red_bull', name: 'Red Bull', price: 3000 },
        { id: 'power_horse', name: 'Power Horse', price: 3000 },
      ],
    },
    {
      category: 'Whiskies',
      drinks: [
        { id: 'azul', name: 'Azul', price: 450000 },
        { id: 'don_julio', name: 'Don Julio', price: 500000 },
        { id: 'hennessy_xo', name: 'Hennessy X.O', price: 450000 },
        { id: 'hennessy_vsop', name: 'Hennessy V.S.O.P', price: 160000 },
        { id: 'balantine', name: 'Balantine', price: 40000 },
        { id: 'hennessy_vs', name: 'Hennessy V.S', price: 85000 },
        { id: 'martel_vsop', name: 'Martel V.S.O.P', price: 100000 },
        { id: 'glenfiddich_18', name: 'Glenfiddich 18 Years', price: 200000 },
        { id: 'glenfiddich_21', name: 'Glenfiddich 21 Years', price: 300000 },
        { id: 'black_jameson', name: 'Black Jameson', price: 50000 },
        { id: 'green_jameson', name: 'Green Jameson', price: 40000 },
        { id: 'chinese_herbal', name: 'Chinese Herbal', price: 20000 },
        { id: 'red_label', name: 'Red Label', price: 35000 },
        { id: 'the_nines', name: 'The Nines', price: 20000 },
        { id: 'remy_martins_vsop', name: 'Remy Martins V.S.O.P', price: 150000 },
        { id: 'moet', name: 'Moet', price: 180000 },
        { id: 'khort', name: 'Khort', price: 35000 },
        { id: 'henkel', name: 'Henkel', price: 20000 },
        { id: 'medium_campari', name: 'Medium Campari', price: 35000 },
        { id: 'royal_oak', name: 'Royal Oak', price: 40000 },
        { id: 'jadon', name: 'Jadon', price: 25000 },
        { id: 'singleton', name: 'Singleton', price: 150000 },
        { id: 'belaire', name: 'Belaire', price: 80000 },
      ],
    },
  ];

  const SERVICE_CHARGE_RATE = 0.05;
  const barmanNumber = '2349169436106';

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

  const totalPrice = Object.entries(selectedDrinks).reduce((total, [id, qty]) => {
    const drink = drinksList
      .flatMap((category) => category.drinks)
      .find((d) => d.id === id);
    return total + (drink ? drink.price * qty : 0);
  }, 0);

  const serviceCharge = Math.round(totalPrice * SERVICE_CHARGE_RATE);

  const handlePayNow = () => {
    if (totalPrice === 0) {
      alert('Please select at least one drink before proceeding to pay.');
      return;
    }
    setShowBankDetails(true);
  };

  const orderLines = Object.entries(selectedDrinks)
    .map(([id, qty]) => {
      const drink = drinksList
        .flatMap((category) => category.drinks)
        .find((d) => d.id === id);
      if (!drink) return null;
      return `- ${drink.name} × ${qty} = ₦${(drink.price * qty).toLocaleString()}`;
    })
    .filter((x) => x)
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello, I have made payment for the following drinks at Club K:\n${orderLines}\n\nSubtotal: ₦${totalPrice.toLocaleString()}\nService Charge (5%): ₦${serviceCharge.toLocaleString()}\nTOTAL: ₦${(totalPrice + serviceCharge).toLocaleString()}\n\nPlease find my payment evidence attached.`
  );
  const whatsappLink = `https://wa.me/${barmanNumber}?text=${whatsappMessage}`;

  const topCards = [
    {
      img: premiumDrinks,
      alt: 'Premium Drinks',
      title: 'Order Premium Drinks',
      desc: 'Local & Foreign Drinks',
      btnLabel: 'Order Drinks',
    },
    {
      img: apartment,
      alt: 'Apartment',
      title: 'Cozy Rooms',
      desc: 'Standard - Deluxe - Executive',
      link: '/bookings',
      btnLabel: 'Book a Room',
    },
    {
      img: weddingReception,
      alt: 'Wedding Event',
      title: 'Plan Memorable Events',
      desc: 'Birthdays, Weddings, etc',
      link: '/events',
      btnLabel: 'Book Event Page',
    },
  ];

  const moreServices = [
    {
      title: 'Shawarma Bar',
      phone: '+234 806 078 6102',
      social: '@shawarmabar.ng',
      whatsappLink: 'https://wa.me/2348060786102',
    },
    {
      title: 'Barber Shop',
      phone: '+234 915 177 6589',
      whatsappLink: 'https://wa.me/2349151776589',
      social: '@barbershop.ng',
    },
    {
      title: 'Car Wash',
      phone: '+234 803 757 5854',
      whatsappLink: 'https://wa.me/2348037575854',
      social: '@carwash.ng',
    },
    {
      title: 'Nightclub',
      phone: '+234 916 943 6106',
      whatsappLink: 'https://wa.me/2349169436106',
      social: '@Sunccent1_',
      socialLink: 'https://x.com/Sunccent1_?t=7LDrva2RghLEEJfOl1vWHg&s=09',
    },
    {
      title: 'Snooker Games',
      phone: '+234 916 350 0634',
      whatsappLink: 'https://wa.me/2349163500634',
      social: '@snookerpro',
    },
    {
      title: 'Ezinwanne Kitchen',
      phone: '+234 816 654 0841',
      whatsappLink: 'https://wa.me/2348166540841',
      social: '@meatlover.ng',
    },
    {
      title: 'Laundry',
      phone: '+234 807 270 1671',
      whatsappLink: 'https://wa.me/2348072701671',
      social: '@cleanlaundry.ng',
    },
    {
      title: 'Mama Chioma Enterprises',
      phone: '+234 814 559 8866',
      whatsappLink: 'https://wa.me/2348145598866',
      social: '@nsukkapalmwine',
    },
  ];

  const [revealedServices, setRevealedServices] = useState({});

  const toggleReveal = (index) => {
    setRevealedServices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="relative">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src={quickBg}
          alt="Quick Links Background"
          className="w-full h-full object-cover"
        />
        <video
          src={starsVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0" /> {/* dark overlay for readability */}
      </div>

      {/* Content */}
      <main className="mt-0 font-montserrat border-b-2 border-t-none border-red-600 text-yellow-100 relative">
        <div className="w-full border-b border-red-600">
          <section className="py-12">
            <div className="container max-w-screen-xl mx-auto text-center">
              {/* Top Cards Section */}
              <section className="py-12 flex justify-center">
                <div className="p-8 max-w-6xl w-full text-center shadow-xl">
                  <h2 className="text-xl md:text-xl font-dancing font-bold mb-8 animate-fade-in-up leading-tight tracking-wider text-white">
                    Book room, events, etc...
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topCards.map((card, index) => (
                      <div
                        key={index}
                        className="bg-black text-white p-4 rounded-lg shadow-xl flex flex-col min-h-[360px] transition-transform hover:scale-105 hover:shadow-2xl"
                      >
                        <img
                          src={card.img}
                          alt={card.alt}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 drop-shadow-md">
                          {card.title}
                        </h3>
                        <p>{card.desc}</p>
                        {card.link ? (
                          <Link
                            to={{
                              pathname: card.link,
                            }}
                            className="mt-auto inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-500 transition-transform hover:scale-105 duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500"
                            aria-label={card.btnLabel}
                          >
                            {card.btnLabel}
                          </Link>
                        ) : (
                          <button
                            onClick={openModal}
                            className="mt-auto inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-500 transition-transform hover:scale-105 duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500"
                            aria-label={card.btnLabel}
                          >
                            {card.btnLabel}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* More Services To Enjoy */}
              <section className="py-12 flex justify-center border-t-2 border-red-600">
                <div className="p-8 max-w-6xl w-full text-center shadow-xl border-b-2 border-red-600">
                  <h2 className="text-xl md:text-xl font-bold mb-8 text-white drop-shadow-lg">
                    More Services...
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 p-4 rounded-xl gap-8">
                    {moreServices.map((service, index) => (
                      <div
                        key={index}
                        className="text-red-600 bg-black/80 rounded-lg border-2 border-white p-[5px] transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                        role="button"
                        tabIndex="0"
                        onClick={() => toggleReveal(index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            toggleReveal(index);
                          }
                        }}
                      >
                        <img
                          src={serviceImages[index % serviceImages.length]}
                          alt={`${service.title} icon`}
                          width="300"
                          height="150"
                          loading="lazy"
                          className="mx-auto mb-4 w-[100%] h-[150px] object-cover rounded-t-sm transition-transform duration-300 ease-in-out hover:scale-110"
                          style={{ marginTop: '-1px' }}
                        />
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>

                        {revealedServices[index] ? (
                          <div className="text-sm mt-2 text-white space-y-1">
                            <p>
                              <strong>Phone:</strong> {service.phone}
                            </p>
                            {service.whatsappLink && (
                              <p>
                                <strong>WhatsApp:</strong>{' '}
                                <a
                                  href={service.whatsappLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-green-300 font-bold hover:underline"
                                >
                                  Chat on WhatsApp
                                </a>
                              </p>
                            )}
                            {(service.social || service.socialLink) && (
                              <div>
                                <strong>Social:</strong>{' '}
                                {service.socialLink ? (
                                  <a
                                    href={service.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:underline"
                                  >
                                    {service.social}
                                  </a>
                                ) : (
                                  service.social
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-white font-semibold">
                            Click to reveal contact info
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center px-4 z-[10050]">
            <div
              ref={modalRef}
              className="bg-[#fef3c7] rounded-xl border-4 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] max-w-md w-full p-0 relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-700 text-2xl font-bold hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close modal"
              >
                ×
              </button>
              <img src={vodka} alt="Premium Drink" className="w-full h-40 object-cover rounded-t-xl border border-white" loading="lazy" />
              <div className="p-4 sm:p-6">
                {!showBankDetails ? (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-red-600">Select Your Drinks</h2>
                    <p className="text-black font-semibold">Check Payment Details Below Drink List</p>
                    <div className="space-y-6 mb-6">
                      {drinksList.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="text-lg font-bold text-red-600 border-b border-yellow-300 pb-2">{category.category}</h3>
                          {category.drinks.map(({ id, name, price }) => {
                            const qty = selectedDrinks[id] || 0;
                            return (
                              <div key={id} className="flex items-center gap-4">
                                <div className="flex-1">
                                  <h4 className="text-md font-semibold text-black">{name}</h4>
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
                      ))}
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
                    <p className="mb-4 text-black text-justify font-medium">
                      Is this your first order? Call us on{' '}
                      <a href="tel:09169436106" className="hover:text-yellow-600">09169436106</a> or{' '}
                      <a href="tel:07031576094" className="hover:text-yellow-600">07031576094</a> if you need immediate information. Otherwise click button below after choosing your drinks
                    </p>
                    <button
                      onClick={handlePayNow}
                      className={`w-full bg-black text-yellow-100 font-bold py-3 rounded-lg transition-colors ${totalPrice === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-300 hover:text-black'}`}
                      disabled={totalPrice === 0}
                      aria-label="Proceed to payment instructions"
                    >
                      Proceed to Payment Instructions
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-red-600">Bank Details</h2>
                    <div className="mb-6 space-y-3 text-gray-900">
                      <div><span className="font-semibold">Bank Name:</span> Wema Bank</div>
                      <div><span className="font-semibold">Account Name:</span> Kepong Villa Garden & Suites</div>
                      <div><span className="font-semibold">Account Number:</span> 0125564025</div>
                      <div><span className="font-semibold">Amount:</span> ₦{(totalPrice + serviceCharge).toLocaleString()}</div>
                    </div>
                    <p className="mb-4 text-gray-800">
                      After completing your payment, please send your payment evidence privately to our barman using the WhatsApp button below.
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
                      aria-label="Send payment evidence to barman on WhatsApp"
                    >
                      Send Payment Evidence via WhatsApp
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          .modal-content::-webkit-scrollbar {
            width: 8px;
          }
          .modal-content::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          .modal-content::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          .modal-content::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
    </section>
  );
};

export default QuickLinks;