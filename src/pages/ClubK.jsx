import React, { useState, useRef, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import clubkHero from '@/assets/videos/clubbing.mp4';
import dance2 from '@/assets/images/club/dance2.webp';
import dj from '@/assets/images/club/dj.webp';
import drink1 from '@/assets/images/homepage/drinks.webp';
import vip1 from '@/assets/images/club/vip1.webp';
import dance1 from '@/assets/images/club/dance1.webp';
import ambience1 from '@/assets/images/club/ambience1.webp';
import redLabel from '@/assets/images/club/donj.webp';
import vodka from '@/assets/images/club/henny.webp';

const ClubK = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [selectedDrinks, setSelectedDrinks] = useState({});
  const [showPrices, setShowPrices] = useState(false);
  const modalRef = useRef(null);

  const features = [
    { 
      title: 'Ebube', 
      img: drink1, 
      desc: 'Flair mixes & shot games.', 
      designation: 'Bar Man',
      socials: { ig: '@ricoflair_k', xLink: 'https://x.com/Sunccent1_?t=7LDrva2RghLEEJfOl1vWHg&s=09', whatsapp: 'https://wa.me/2349169436106' }
    },
    { 
      title: 'DJ Tea Master & Co', 
      img: dj, 
      desc: 'Bass drops & live spins.', 
      designation: 'Disc Jockeys',
      socials: { ig: '@djs_kclub', fb: '@djsunleashedk', whatsapp: 'https://wa.me/2349169436106' }
    },
    { 
      title: 'Mia', 
      img: dance2, 
      desc: 'Flash mobs & glow ups.', 
      designation: 'Nightclub Hostess',
      socials: { ig: '@miamoves_k', fb: '@mianightk', whatsapp: 'https://wa.me/2349169436106' }
    },
    { 
      title: 'Lena', 
      img: vip1, 
      desc: 'VIP lounges & secret tales.', 
      designation: 'Nightclub Hostess',
      socials: { ig: '@lenavip_k', fb: '@lenaloungek', whatsapp: 'https://wa.me/2349169436106' }
    },
    { 
      title: 'Zoe', 
      img: dance1, 
      desc: 'Conga lines & confetti blasts.', 
      designation: 'Nightclub Hostess',
      socials: { ig: '@zoeenergy_k', fb: '@zoehypek', whatsapp: 'https://wa.me/2349169436106' }
    },
    { 
      title: 'Gigi', 
      img: ambience1, 
      desc: 'Neon art & light magic.', 
      designation: 'Nightclub Hostess',
      socials: { ig: '@gigiglow_k', fb: '@gigiglowclub', whatsapp: 'https://wa.me/2349169436106' }
    },
  ];

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
        { id: 'jadon', name: 'Jadon', price: 25000, img: redLabel },
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
    setShowPrices(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowBankDetails(false);
    setSelectedDrinks({});
    setShowPrices(false);
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

  const SocialLinks = ({ socials }) => (
    <div className="flex justify-center space-x-4 mt-4">
      {socials.ig && (
        <a
          href={`https://www.instagram.com/${socials.ig.replace(/^@/, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 text-xl transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      )}
      {socials.fb && (
        <a
          href={`https://www.facebook.com/${socials.fb.replace(/^@/, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-xl transition-colors duration-300"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      )}
      {socials.xLink && (
        <a
          href={socials.xLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-xl transition-colors duration-300"
          aria-label="X"
        >
          <FaXTwitter />
        </a>
      )}
      {socials.whatsapp && (
        <a
          href={socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-300 text-xl transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      )}
    </div>
  );

  return (
    <main className="relative min-h-screen font-montserrat text-yellow-100">
      <video
        src={clubkHero}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover brightness-100 contrast-100"
        style={{ zIndex: -1 }}
      >
        Your browser does not support the video tag.
      </video>

      <div className="relative bg-black/50 min-h-screen border-t-4 border-b-4 border-red-600 pt-[90px] sm:pt-[110px]">
        <section className="relative w-full h-[600px] sm:h-[520px] md:h-[640px] lg:h-[720px] xl:h-[800px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-full px-6 text-center max-w-3xl mx-auto gap-6 sm:gap-8">
            <div className="mb-8 animate-fadeInUp">
              <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold tracking-widest leading-tight text-white px-6 py-4 mb-2 rounded-xl">
                Club K Nightclub
              </h1>
              <p className="bg-white/10 border-2 border-red-600 rounded-lg text-lg sm:text-xl md:text-2xl text-white font-bold max-w-md mx-auto leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] px-2 py-2 md:px-4 rounded">
                Open Wednesdays, Fridays & Sundays<br className="block sm:hidden" />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-xl mx-auto px-4 mt-2">
              <button
                onClick={openModal}
                className="bg-red-600 text-white px-4 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-100 hover:text-black hover:scale-105 transition-transform duration-300 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none md:w-[400px]"
                aria-label="Order Premium Drinks"
              >
                Order Premium Drinks
              </button>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center px-4 z-[10000]">
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
                    <p className="text-black font-semibold">Check Payment Details Below</p>
                    
                    {/* Toggle Prices Button */}
                    <div className="mb-4 text-center">
                      <button
                        onClick={() => setShowPrices(!showPrices)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                        aria-label={showPrices ? 'Hide prices' : 'Show prices'}
                        type="button"
                      >
                        {showPrices ? 'Hide Prices' : 'Show Prices'}
                      </button>
                    </div>

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
                                  {showPrices ? (
                                    <p className="text-green-700 font-bold">₦{price.toLocaleString()}</p>
                                  ) : (
                                    <p className="text-gray-400 italic text-sm">₦ ???</p>
                                  )}
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

        <div className="w-full relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="py-8 sm:py-20 space-y-8">
              <h2 className="text-3xl text-white font-bold text-center mb-4 pb-3 px-4 py-2 rounded">Experience Club K</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
                {features.map(({ title, img, desc, designation, socials }, i) => (
                  <div 
                    key={i} 
                    className="group cursor-pointer rounded-xl overflow-hidden border-2 border-red-600 shadow-xl bg-black/60 flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] transition-all duration-500 transform hover:scale-105 hover:bg-black/80 p-6 space-y-4" 
                    style={{ height: '380px', minHeight: '380px' }}
                  >
                    <div className="relative w-full h-48 overflow-hidden rounded-lg">
                      <img src={img} alt={title} className="w-full h-full object-cover group-hover:brightness-125 transition-all duration-500 group-hover:scale-110" loading="lazy" />
                    </div>
                    <div className="flex flex-col flex-grow justify-center space-y-3 px-2">
      
                      <h3 className="text-yellow-300 font-semibold text-xl">{designation}</h3>
                      <span className="text-sm font-bold text-white drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">{title}</span>
                      <p className="text-yellow-100 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 px-2">{desc}</p>
                      <SocialLinks socials={socials} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <style>
          {`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
            .animate-fadeInUp-delayed { animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.2s; opacity: 0; }
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
      </div>
    </main>
  );
};

export default ClubK;