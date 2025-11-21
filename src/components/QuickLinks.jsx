import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import apartment from '@/assets/images/hotel/apart.webp';
import premiumDrinks from '@/assets/images/homepage/drinks.webp';
import weddingReception from '@/assets/images/events/amaka.webp';
import vodka from '@/assets/images/club/henny.webp';
import kpLogo from '@/assets/images/letterhead.png'; // Kepong logo import
// Service images
import shawarma from '@/assets/images/foodies/shawarma.webp';
import hair from '@/assets/images/homepage/barbing.webp';
import carWash from '@/assets/images/homepage/car.webp';
import nightClub from '@/assets/images/club/clubbers.webp';
import boutique from '@/assets/images/homepage/boutique.webp';
import snooker from '@/assets/images/homepage/snooker.webp';
import shades from '@/assets/images/homepage/laundry.webp';
import gold from '@/assets/images/homepage/gold.webp';

const serviceImages = [
  shawarma,
  hair,
  carWash,
  nightClub,
  snooker,
  shades,
  boutique,
  gold,
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
    const drink = drinksList.flatMap(cat => cat.drinks).find(d => d.id === id);
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
      const drink = drinksList.flatMap(cat => cat.drinks).find(d => d.id === id);
      if (!drink) return null;
      return `- ${drink.name} × ${qty} = ₦${(drink.price * qty).toLocaleString()}`;
    })
    .filter(Boolean)
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
      logo: kpLogo,
    },
    {
      img: apartment,
      alt: 'Apartment',
      title: 'Cozy Rooms',
      desc: 'Standard - Deluxe - Executive',
      link: '/bookings',
      btnLabel: 'Book a Room',
      logo: kpLogo,
    },
    {
      img: weddingReception,
      alt: 'Wedding Event',
      title: 'Host Memorable Events',
      desc: 'Birthdays, Weddings, etc',
      link: '/events',
      btnLabel: 'Visit Event Page',
      adImage: true,
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
      title: 'Laundry',
      phone: '+234 807 270 1671',
      whatsappLink: 'https://wa.me/2348072701671',
      social: '@cleanlaundry.ng',
    },
    {
      title: 'Kuwait Money Boutique',
      phone: '+234 806 557 1666',
      whatsappLink: 'https://wa.me/2348065571666',
      social: '@kw.ng',
    },
    {
      title: 'C & C `N Luxury Collection',
      phone: '+234 703 048 3031',
      whatsappLink: 'https://wa.me/2347030483031',
      social: '@chriswhite0',
      socialLink: 'https://www.tiktok.com/@chriswhite0',
    },
  ];

  const [revealedServices, setRevealedServices] = useState({});

  const toggleReveal = (index) => {
    setRevealedServices(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-200 to-gray-300">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <img src="https://images.pexels.com/photos/4750314/pexels-photo-4750314.jpeg" alt="Minimalist Ash Gray Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gray-800/40" /> {/* subtle overlay for contrast */}
      </div>
      {/* Content */}
      <main className="mt-0 font-montserrat border-b-2 border-t-none border-red-600 text-gray-800 relative py-10">
        <div className="w-full border-b border-red-600">
          <section className="py-2">
            <div className="container max-w-screen-2xl mx-auto text-center">
              {/* Top Cards */}
              <section className="py-16 flex justify-center">
                <div className="py-10 px-2 md:px-10 text-center shadow-xl">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-dancing font-bold mb-6 animate-fade-in-up leading-tight tracking-wider text-red-600"
                  >
                    Book room, events...
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {topCards.map((card, index) => {
                      if (card.adImage) {
                        return (
                          <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            key={index} className="relative bg-sky-300 p-4 rounded-xl shadow-lg flex flex-col min-h-[450px] border-2 border-sky-900 hover:scale-105 transform transition-transform duration-300" aria-label={`${card.title} with featured ad`}
                          >
                            <img src={card.img} alt={card.alt} className="w-full h-56 object-cover rounded-xl mb-6 shadow-md" />
                            <h3 className="text-2xl font-extrabold mb-3 drop-shadow-lg text-red-600">{card.title}</h3>
                            <p className="mb-6 text-black font-semibold drop-shadow-md">{card.desc}</p>
                            <div className="mt-auto rounded-xl overflow-hidden border-2 border-sky-900 shadow-md cursor-pointer">
                              <div className="w-full h-[180px] bg-gradient-to-r from-sky-200 to-sky-500 flex flex-col justify-center items-center text-white">
                                <span className="text-3xl text-black font-extrabold tracking-wider drop-shadow-xl uppercase">Ad Space</span>
                                <div className="text-sm mt-2 text-center text-black px-6 font-medium">
                                  <p>- Prime exposure to nightlife enthusiasts</p>
                                  <p>- Customizable ad designs</p>
                                  <p>- Affordable rates & performance analytics</p>
                                </div>
                              </div>
                            </div>
                            <Link to={{ pathname: card.link }} className="mt-8 inline-block bg-gradient-to-r from-sky-500 to-sky-200 border-2 border-sky-900 text-black font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-colors shadow-lg focus:ring-2 focus:ring-red-600" aria-label={card.btnLabel}>
                              {card.btnLabel}
                            </Link>
                          </motion.div>
                        );
                      }
                      return (
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          key={index} className="bg-white border-2 border-red-600 text-gray-800 p-6 rounded-xl shadow-lg flex flex-col min-h-[400px] transition-transform hover:scale-105 hover:shadow-xl"
                        >
                          <img src={card.img} alt={card.alt} className="w-full h-56 object-cover rounded-xl mb-6" />
                          <h3 className="text-2xl font-bold mb-3 drop-shadow-md text-red-600">{card.title}</h3>
                          <p className="text-gray-700">{card.desc}</p>

                          {card.logo && (
                            <div className="my-6 py-10 flex justify-center border-2 border-red-600 rounded-xl bg-red-600">
                              <img src={card.logo} alt="Kepong Villa Garden & Suites Logo" className=" rounded-lg h-35 w-35 object-contain" loading="lazy" />
                            </div>
                          )}

                          {card.link ? (
                            <Link to={{ pathname: card.link }} className="mt-auto inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-red-700 transition-transform hover:scale-105 duration-300 shadow-lg focus:ring-2 focus:ring-red-600" aria-label={card.btnLabel}>
                              {card.btnLabel}
                            </Link>
                          ) : (
                            <button onClick={openModal} className="mt-auto inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-red-700 transition-transform hover:scale-105 duration-300 shadow-lg focus:ring-2 focus:ring-red-600" aria-label={card.btnLabel}>
                              {card.btnLabel}
                            </button>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* More Services Section */}
              <section className="py-16 flex justify-center border-t-2 border-red-600">
                <div className="py-10 px-2 md:px-10 max-w-7xl w-full text-center shadow-xl border-b-2 border-red-600">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold mb-12 text-red-600 drop-shadow-lg"
                  >
                    More Services...
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 py-6 px-0 md:p-6 rounded-xl gap-4">
                    {moreServices.map((service, index) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index} className="text-red-600 bg-white rounded-xl border-2 border-red-600 p-1 transition-transform hover:scale-105 hover:shadow-xl cursor-pointer" role="button" tabIndex="0"
                        onClick={() => {
                          if(service.title !== 'C & C `N Luxury Collection') {
                            toggleReveal(index);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            if(service.title !== 'C & C `N Luxury Collection') {
                              toggleReveal(index);
                            }
                          }
                        }}
                      >
                        <img
                          src={serviceImages[index % serviceImages.length]}
                          alt={`${service.title} icon`}
                          width="300"
                          height="180"
                          loading="lazy"
                          className="mx-auto mb-6 w-full h-[180px] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                        <h3 className="text-2xl font-bold mb-3 text-red-600">{service.title}</h3>

                        {service.title === 'C & C `N Luxury Collection' ? (
                          <Link
                            to="/luxury-collections"
                            className="mt-auto inline-block bg-orange-400 mb-2 text-white font-bold py-1 px-4 rounded-lg hover:bg-red-700 transition-transform hover:scale-105 duration-300 shadow-lg focus:ring-2 focus:ring-red-600"
                            aria-label="View C & C Products"
                          >
                            View Products
                          </Link>
                        ) : (
                          revealedServices[index] ? (
                            <div className="text-base mt-3 text-gray-700 space-y-2">
                              <p><strong>Phone:</strong> {service.phone}</p>
                              {service.whatsappLink && (
                                <p><strong>WhatsApp:</strong> <a href={service.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">Chat on WhatsApp</a></p>
                              )}
                              {(service.social || service.socialLink) && (
                                <div><strong>Social:</strong> {service.socialLink ? (
                                  <a href={service.socialLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                                    {service.social}
                                  </a>
                                ) : (
                                  service.social
                                )}</div>
                              )}
                            </div>
                          ) : (
                            <p className="text-gray-700 font-semibold">Click to reveal contact info</p>
                          )
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>

        {/* Modal for Premium Drinks Ordering */}
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center px-6 z-[10050] bg-gray-900/70"
          >
            <motion.div 
              ref={modalRef} 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-xl border-4 border-red-600 shadow-xl max-w-lg w-full p-0 relative max-h-[85vh] overflow-y-auto"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-700 text-3xl font-bold hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600" aria-label="Close modal">×</button>
              <img src={vodka} alt="Premium Drink" className="w-full h-48 object-cover rounded-t-xl border border-red-600" loading="lazy" />
              <div className="p-6 sm:p-8">
                {!showBankDetails ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-red-600">Select Your Drinks</h2>
                    <p className="text-gray-800 font-semibold mb-6">Check Payment Details Below Drink List</p>
                    <div className="space-y-8 mb-8">
                      {drinksList.map((category, index) => (
                        <div key={index} className="space-y-6">
                          <h3 className="text-xl font-bold text-red-600 border-b border-red-300 pb-3">{category.category}</h3>
                          {category.drinks.map(({ id, name, price }) => {
                            const qty = selectedDrinks[id] || 0;
                            return (
                              <div key={id} className="flex items-center gap-6">
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                                  <p className="text-green-700 font-bold">₦{price.toLocaleString()}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <button onClick={() => updateDrinkQuantity(id, qty - 1)} className="bg-red-300 hover:bg-red-400 text-white font-bold px-4 rounded disabled:opacity-50" disabled={qty === 0} aria-label={`Decrease quantity of ${name}`}>−</button>
                                  <input type="number" min="0" value={qty} onChange={(e) => {
                                    const val = Math.max(0, Number(e.target.value));
                                    updateDrinkQuantity(id, val);
                                  }} className="w-16 text-center rounded border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 bg-white" aria-label={`Quantity of ${name}`} />
                                  <button onClick={() => updateDrinkQuantity(id, qty + 1)} className="bg-red-300 hover:bg-red-400 text-white font-bold px-4 rounded" aria-label={`Increase quantity of ${name}`}>+</button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 mb-8 border-t border-red-300 pt-5">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-800">Subtotal:</span>
                        <span className="text-xl font-semibold text-green-700">₦{totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-800">Service Charge (5%):</span>
                        <span className="text-xl font-semibold text-green-700">₦{serviceCharge.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center font-bold text-2xl border-t border-red-300 pt-3">
                        <span>Total:</span>
                        <span className="text-green-800">₦{(totalPrice + serviceCharge).toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="mb-6 text-gray-800 text-justify font-medium">
                      Is this your first order? Call us on{' '}
                      <a href="tel:09169436106" className="hover:text-red-600">09169436106</a> or{' '}
                      <a href="tel:07031576094" className="hover:text-red-600">07031576094</a> if you need immediate information. Otherwise click button below after choosing your drinks
                    </p>
                    <button onClick={handlePayNow} className={`w-full bg-red-600 text-white font-bold py-4 rounded-xl transition-colors ${totalPrice === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'} shadow-md`} disabled={totalPrice === 0} aria-label="Proceed to payment instructions">
                      Proceed to Payment Instructions
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-red-600">Bank Details</h2>
                    <div className="mb-8 space-y-4 text-gray-800">
                      <div><span className="font-semibold">Bank Name:</span> Wema Bank</div>
                      <div><span className="font-semibold">Account Name:</span> Kepong Villa Garden & Suites</div>
                      <div><span className="font-semibold">Account Number:</span> 0125564025</div>
                      <div><span className="font-semibold">Amount:</span> ₦{(totalPrice + serviceCharge).toLocaleString()}</div>
                    </div>
                    <p className="mb-6 text-gray-800">
                      After completing your payment, please send your payment evidence privately to our barman using the WhatsApp button below.
                    </p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-md" aria-label="Send payment evidence to barman on WhatsApp">
                      Send Payment Evidence via WhatsApp
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
      <style>{`
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
      `}</style>
    </section>
  );
};

export default QuickLinks;
